import { Component, OnInit } from '@angular/core';
 @Component({
  selector: 'app-root',
  template: `
  <ng-snotify></ng-snotify>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
  }
  
}

