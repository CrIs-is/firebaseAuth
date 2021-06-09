import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  spinner = new BehaviorSubject(false);
  constructor() { }

  hideLoaging(){
    this.spinner.next(false);
  }

  showLoading(){
    this.spinner.next(true);
  }

}
