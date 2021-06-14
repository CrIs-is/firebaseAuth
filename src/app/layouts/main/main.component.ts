import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
