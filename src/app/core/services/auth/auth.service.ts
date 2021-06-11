import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from 'src/app/core/models/usuario';
import { LoadingService } from '../utilities/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth,private loadingService:LoadingService) { }


  registro(usuario: Usuario):Promise<firebase.default.auth.UserCredential>{
    this.loadingService.showLoading();
    return this.auth.createUserWithEmailAndPassword(usuario.email,usuario.password)
    .finally(()=>{
      this.loadingService.hideLoaging();
    });;
  }

  login(usuario: Usuario):Promise<firebase.default.auth.UserCredential>{
    this.loadingService.showLoading();
    return this.auth.signInWithEmailAndPassword(usuario.email,usuario.password)
    .finally(()=>{
      this.loadingService.hideLoaging();
    });
  }

}
