import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
   <mat-grid-list cols="9" rowHeight="100vh">
     <mat-grid-tile colspan="3">
      <router-outlet></router-outlet>
     </mat-grid-tile>
     <mat-grid-tile colspan="6">
       <div class="main">
         <img  src="./assets/images/login_fondo.svg" alt="">
       </div>
     </mat-grid-tile>
   </mat-grid-list>
  `,
  styles: [
    `
    .main{
      text-align:center
    }
    img{
      width:90%;
      margin:5px auto;
    }`
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
