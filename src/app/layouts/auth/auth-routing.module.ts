import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuperarPasswordComponent } from 'src/app/pages/recuperar-password/recuperar-password.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
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
        path:'recuperar-password',
        component:RecuperarPasswordComponent
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
