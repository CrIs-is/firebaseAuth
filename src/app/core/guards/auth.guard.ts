import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state);
    if(state.url === '/login'){
      if( !this.auth.getToken()){
        return true;
      }else{
        this.router.navigate(['home'])
        return false;
      }
    }
    else{
      if( this.auth.getToken()){
        return true;
      }else{
        this.router.navigate(['login'])
        return false;
      }
    }
    
    
  }
  
}
