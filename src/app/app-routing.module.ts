import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  
  {
    path:'',
    canActivate:[AuthGuard],
    loadChildren:() => import('./layouts/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    canActivate:[AuthGuard],
    loadChildren:() => import('./layouts/main/main.module').then(m => m.MainModule)
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
