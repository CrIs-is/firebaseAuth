import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from 'src/app/core/models/usuario';
import { LoadingService } from '../utilities/loading.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //se guardará el estado del usuario
  user: Observable<firebase.default.User | null>;
  
  constructor(private router:Router,public auth: AngularFireAuth,private loadingService:LoadingService,private firestore: AngularFirestore) {
    this.user = this.auth.authState;
    this.usuarioActual.subscribe((res)=>{
      console.log(res);
      if(res == null){
        this.router.navigate(['login']);
      }
    })
  }

  //Servirá para obtener un boolean con el estado de autenticación
  get estaAutenticado():boolean{
    return this.user != null;
  }
  //Servirá para devolver el usuario actual que esta en el atributo user de nuestro servicio
  get usuarioActual():Observable<firebase.default.User>{
    return this.user;
  }

  //Registrar al usuario con email y contraseña
  registro(usuario: Usuario):Promise<firebase.default.auth.UserCredential>{
    this.loadingService.showLoading();
    return this.auth.createUserWithEmailAndPassword(usuario.email,usuario.password)
    .finally(()=>{
      this.loadingService.hideLoaging();
    });
  }

  //Iniciar sesion con email y contraseña
  login(usuario: Usuario):Promise<firebase.default.auth.UserCredential>{
    this.loadingService.showLoading();
    return this.auth.signInWithEmailAndPassword(usuario.email,usuario.password)
    .finally(()=>{
      this.loadingService.hideLoaging();
    });
  }

// Actualizar perfil firebase authentication
  async updateProfile(name?: string,photo?: string):Promise<void> {
    const currentUser = await this.auth.currentUser;
    return currentUser.updateProfile({
      displayName: 
      (name) ? name : currentUser.displayName,
      photoURL: 
      (photo) ? photo : currentUser.photoURL
    });
  }

  //recuperar contraseña
  resetPassword(email: string): Promise<void> {
    this.loadingService.showLoading();
    return this.auth.sendPasswordResetEmail(email).finally(()=>{
      this.loadingService.hideLoaging();
    });;
  }

  //Verificar email
  async verificarEmail(): Promise<void> {
    const currentUser = await this.auth.currentUser;
    return currentUser.sendEmailVerification();
  }

  //Cerrar sesion
  signOut(): Promise<void> {
    this.loadingService.showLoading();
    return this.auth.signOut().finally(()=>{
      this.loadingService.hideLoaging();
    });
  }



}
