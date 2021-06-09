import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path:'auth',
    loadChildren:() => import('./layouts/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'user',
    loadChildren:() => import('./layouts/user/user.module').then(m => m.UserModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'auth'
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    useHash: true
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
