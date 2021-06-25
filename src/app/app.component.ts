import { Component, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoadingService } from './core/services/utilities/loading.service';
 @Component({
  selector: 'app-root',
  template: `
  <mat-progress-bar style="position: fixed;" [ngStyle]="{'display': this.loading ? 'block':'none'}"
    mode="indeterminate"
    #progress>
  </mat-progress-bar>
  <ng-snotify></ng-snotify>
    <router-outlet ></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  
  @ViewChild('progress',{static:true}) progresoRef:MatProgressBar;

  loading = false;

  constructor(public loadingService: LoadingService,private router: Router){

    this.loadingService._spinner.subscribe((data)=>{
      this.loading = data
    });

    this.router.events.pipe(
    ).subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loadingService.showLoading();
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          setTimeout(()=>{
            this.loadingService.hideLoaging();
          },500)
          break;
        }
        default: {
          break;
        }
      }
    });
  }
 
}

