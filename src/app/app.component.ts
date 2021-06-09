import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { LoadingService } from './core/services/utilities/loading.service';
 @Component({
  selector: 'app-root',
  template: `
  <mat-progress-bar style="z-index: 1000;position: fixed;" [ngStyle]="{'display': this.loading ? 'block':'none'}"
    mode="indeterminate"
      id="progress" #progress>
  </mat-progress-bar>
  <ng-snotify></ng-snotify>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , AfterViewInit{

  loading;
  @ViewChild('progress',{static:true}) progresoRef:MatProgressBar;

  constructor(public loadingService: LoadingService){
    
  }

  ngOnInit(): void {
    this.loadingService.spinner.subscribe((data)=>{
      console.log(data);
      this.loading = data
    });
  }

  ngAfterViewInit(){
    this.progresoRef.color = 'primary';
  }
}

