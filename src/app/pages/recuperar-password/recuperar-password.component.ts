import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss']
})
export class RecuperarPasswordComponent implements OnInit {

  
  formulario:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
    
  }

  createForm(){
    this.formulario = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.minLength(7),Validators.email]),
     });
  }

  
  recuperarPassword(){

  }
}
