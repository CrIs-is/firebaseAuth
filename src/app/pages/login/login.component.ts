import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/core/models/usuario';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private authService: AuthService,private alertService: ToastService) { }

  ngOnInit() {
    this.usuario.email = 'cris@gmail.com';
    this.usuario.password = 'cris.com';
  }

  loginUser(){
    this.authService.login(this.usuario).then((res)=>{
      console.log(res);
      this.alertService.showToast('success','Exito','Inicio de sesion exitosa',4000)
    }).catch((error)=>{
      console.log(error);
      this.alertService.showToast('error','Error',error.message,4000)
    })
  }

}
