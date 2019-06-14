import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageService} from "./services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
  constructor(private storage: StorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( this.storage.getValue('token') !== undefined ) {
      const request = req.clone({
        setHeaders: {
          'Content-Type' : 'application/json',
          // 'Accept' : 'application/json',
          'Authorization' : `Bearer ${this.storage.getValue('token')}`
        }
      });
      return next.handle(request);
    }
  }

}
