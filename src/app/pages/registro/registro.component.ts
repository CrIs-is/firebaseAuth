import { Usuario } from '../../core/models/usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: Usuario;

  constructor(private authService: AuthService,private alertService: ToastService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  registerUser(){
    this.authService.registro(this.usuario).then((res)=>{
      console.log(res);
      this.alertService.showToast('success','Exito','El usuario se ha registrado con exito',4000)
    }).catch((error)=>{
      console.log(error);
      this.alertService.showToast('error','Error',error.message,4000)
    })
  }

}