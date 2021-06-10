import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private spinner = new BehaviorSubject(false);

  constructor() { }

  get _spinner(){
    return this.spinner;
  }

  hideLoaging():void{
    this.spinner.next(false);
  }

  showLoading():void{
    this.spinner.next(true);
  }

}
