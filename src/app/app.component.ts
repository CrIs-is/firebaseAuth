import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { LoadingService } from './core/services/utilities/loading.service';
 @Component({
  selector: 'app-root',
  template: `
  <mat-progress-bar style="position: fixed;" [ngStyle]="{'display': this.loading ? 'block':'none'}"
    mode="indeterminate"
    #progress>
  </mat-progress-bar>
  <ng-snotify></ng-snotify>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('progress',{static:true}) progresoRef:MatProgressBar;

  loading = false;

  constructor(public loadingService: LoadingService){
    this.loadingService._spinner.subscribe((data)=>{
      this.loading = data
    });
  }
}

