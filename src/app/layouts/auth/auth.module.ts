import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from 'src/app/pages/login/login.component';

import { RegistroComponent } from 'src/app/pages/registro/registro.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistroComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class AuthModule { }
