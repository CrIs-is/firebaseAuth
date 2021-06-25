import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-auth',
  template: `
    <div 
      fxLayout="row" 
      fxLayout.lt-sm="row" 
      fxLayout.lt-xs="row" 
      fxLayout.lt-md="row" 
     
      fxLayoutAlign="start">
    <ng-container>
      <div class="forms"
        fxFlex="40%"
        fxFlex.md="50%"
        fxFlex.sm="100%"
        fxFlex.xs="100%"
      >
      <router-outlet></router-outlet>
      
    </div>
      <div style="text-align: center;padding-top: 100x;"
        fxFlex="60%"
        fxFlex.md="50%"
        fxFlex.sm="0%"
        fxFlex.xs="0%"
      >
        <img class="animate__animated animate__fadeInLeft"  [src]="urlImagen" alt="imagen">

    </div>
      
    </ng-container>
    </div>

    
    <app-footer></app-footer>
 
  `,
  styles: [
    ` 
    .forms{
      padding-top:70px
    }
    img{
      width:80%;
      height:100%
    }

  `
  ]
})

export class AuthComponent implements OnInit{


  urlImagen = '';
  constructor(private route: Router) {
   if( route.url == '/login'){
      this.urlImagen = './assets/images/login_fondo.svg' ;
    } else{
      this.urlImagen = './assets/images/recuperar-contrasena.svg';
    }
  }


  ngOnInit(): void {
    this.route.events.pipe(
      filter((res:any)=>{
        return res instanceof NavigationStart;
      })
    ).subscribe((res:NavigationStart )=>{
      if(res.url == '/login'){
        this.urlImagen = './assets/images/login_fondo.svg';
      }else{
        this.urlImagen = './assets/images/recuperar-contrasena.svg';
      }
    })
  }

 
}
