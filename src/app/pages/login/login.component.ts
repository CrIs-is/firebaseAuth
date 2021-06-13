import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastService } from 'src/app/core/services/utilities/toast.service';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  usuario: Usuario = new Usuario();
  constructor(private authService: AuthService,private alertService: ToastService,public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.minLength(7),Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }

  loginUser(){
    this.authService.login(this.formulario.value).then((userCredential)=>{
      this.alertService.showToast('success','Exito','Inicio de sesión exitoso',4000); 
      this.authService.setUser(userCredential.user);   
      this.router.navigate(['home']);
    }).catch((error)=>{
      this.alertService.showToast('error','Error',error.message,4000)
    });
  }


  registro(){
    this.dialog.open(RegistroComponent,{
      width: '600px',
    });
  }

}
