import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from 'src/app/core/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }


  registro(usuario: Usuario){
    return this.auth.createUserWithEmailAndPassword(usuario.email,usuario.password);
  }

  login(usuario: Usuario){
    return this.auth.signInWithEmailAndPassword(usuario.email,usuario.password);
  }

}
