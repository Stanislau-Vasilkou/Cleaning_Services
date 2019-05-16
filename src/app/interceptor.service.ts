import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( localStorage.getItem('token') !== undefined ) {
      const request = req.clone({
        setHeaders: {
          'Content-Type' : 'application/json',
          // 'Accept' : 'application/json',
          'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
        }
      });
      return next.handle(request);
    }
  }
  constructor() { }
}
