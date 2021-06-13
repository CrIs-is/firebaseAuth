import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from 'src/app/core/models/usuario';
import { LoadingService } from '../utilities/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string | null;
  user: firebase.default.User | null;
  

  constructor(public auth: AngularFireAuth,private loadingService:LoadingService) {
    this.token = this.getToken();
    this.user = this.getUser();
  }


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

  setUser(user: firebase.default.User){
    this.user = user;
    localStorage.setItem('user',JSON.stringify(this.user));
    this.setToken();
  }

  async setToken(){
    this.token = await this.user.getIdToken();
    localStorage.setItem('token',this.token);
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(): string{
    return localStorage.getItem('token');
  }



}
