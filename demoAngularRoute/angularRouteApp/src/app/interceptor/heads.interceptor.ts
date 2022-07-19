import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HeadsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const startTime = (new Date()).getTime();
    return next.handle(request).pipe(
      map(event => {
        const endTime = (new Date()).getTime();
        const difference = endTime - startTime;
        console.log(event+"succeed"+" "+difference);
        return event;
      })

      );
    }
}
