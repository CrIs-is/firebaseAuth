import { Injectable } from '@angular/core';
import { SnotifyPosition, SnotifyService, SnotifyType } from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private service: SnotifyService) { }

  showToast(tipo: SnotifyType,titulo:string, message?:string,duracion?: number):void{
    this.service.clear();
    this.service.create(
      {
        title:titulo,
        body:message,
        config:{
          type:tipo,
          position:SnotifyPosition.rightTop,
          timeout: duracion,
          titleMaxLength:200,
          bodyMaxLength:200,

        },

    })
  }
}
