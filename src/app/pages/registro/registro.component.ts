import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;

  constructor() { }

  ngOnInit() {
    this.usuario = new Usuario();

    this.usuario.email = 'Cristianatehortua1998@gmail.com'
  }

  registerUser(formulario){
    console.log(formulario);

    if(formulario.invalid){
      return ;
    }

    console.log(formulario.controls.email);
    console.log("Formulario valido")
  }


}
