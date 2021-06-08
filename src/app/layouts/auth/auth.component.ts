import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
  <div class="main">
 
    <router-outlet></router-outlet>

  </div>
  `,
  styles: [
    `.main{
      background: url("./assets/images/fondo_login.jpg") no-repeat  fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      min-height:100%;
      /* position:absolute; */
      overflow:hidden
    }`
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
