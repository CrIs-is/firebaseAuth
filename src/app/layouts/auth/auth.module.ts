import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from 'src/app/pages/login/login.component';

import { RegistroComponent } from 'src/app/pages/registro/registro.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
