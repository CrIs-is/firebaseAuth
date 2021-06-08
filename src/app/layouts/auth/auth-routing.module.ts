import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegistroComponent } from 'src/app/pages/registro/registro.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path:'',
    component:AuthComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'registro',
        component:RegistroComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
      }
    ]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  }
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
