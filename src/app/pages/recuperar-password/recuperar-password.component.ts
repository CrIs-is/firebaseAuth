import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastService } from 'src/app/core/services/utilities/toast.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss']
})
export class RecuperarPasswordComponent implements OnInit {

  
  formulario:FormGroup;
  constructor(private auth: AuthService,private alertService: ToastService,private route: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formulario = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.minLength(7),Validators.email]),
     });
  }

  recuperarPassword(){
    const email = this.formulario.controls.email.value;
    this.auth.resetPassword(email).then((res)=>{      
      this.alertService.showToast('success','Envio exitoso','Revisa tu correo y pulsa en el enlace para recuperar tu contraseña',4000);
      this.route.navigate(['/login'])
    },error =>{
      this.alertService.showToast('error',error.code,error.message,4000)
    });
  }
}
