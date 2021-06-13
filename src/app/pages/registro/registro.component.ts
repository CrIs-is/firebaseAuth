import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastService } from 'src/app/core/services/utilities/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidate } from 'src/app/core/models/formValidate';
  @Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit , AfterViewInit{

   isLinear = true;
  formInfoUsuario: FormGroup;
  formUtenticacion: FormGroup;
  isEditable = false;

  public sexos = [
    {nombre:'Hombre',value:'Hombre'},
    {nombre:'Mujer',value:'Mujer'},
    {nombre:'Otro',value:'Otro'},
  ]

  constructor(private authService: AuthService,private alertService: ToastService,
  private _formBuilder: FormBuilder ) {
     
  }

  ngAfterViewInit(): void {     
  }

  ngOnInit() {
    this.formInfoUsuario = this._formBuilder.group({
      nombre: ['', [Validators.required,Validators.minLength(2)]],
      apellido: ['', [Validators.required,Validators.minLength(2)]],
      sexo: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
    this.formUtenticacion = this._formBuilder.group({
      email: ['',[ Validators.required,Validators.minLength(6),Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required,Validators.minLength(6)]],
    },{validators: [FormValidate.confirmPassword],updateOn:'change'});
  }

  registerUser(){
    let informacionUsuario = { ...this.formInfoUsuario.value,...this.formUtenticacion.value};
    this.authService.registro(informacionUsuario).then((res)=>{
      console.log(res);
      this.alertService.showToast('success','Exito','El usuario se ha registrado con exito',4000)
    }).catch((error)=>{
      console.log(error);
      this.alertService.showToast('error','Error',error.message,4000)
    })
  }

  sendForm(){
    
  }

}