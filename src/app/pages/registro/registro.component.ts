import { Usuario } from '../../core/models/usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastService } from 'src/app/core/services/utilities/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  isLinear = false;
  public usuario: Usuario;
  firstFormGroup: any;
  secondFormGroup: FormGroup;
  isEditable = false;
  constructor(private authService: AuthService,private alertService: ToastService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
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