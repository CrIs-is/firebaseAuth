import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize } from "rxjs/operators";


@Injectable()
export class ServicesInterceptor implements HttpInterceptor {

  constructor() {
    console.log("holacon")

  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log("adsdsa")
    console.log(request)
    return next.handle(request).pipe(
      finalize(()=>{
        console.log("hola")
      })
    );
  }
}
