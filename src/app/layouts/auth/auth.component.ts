import { Component, OnInit } from '@angular/core';

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
        <img  src="./assets/images/login_fondo.svg" alt="">

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
  `
  ]
})

export class AuthComponent implements OnInit {
   constructor() { }

  ngOnInit(): void {
  }

}
