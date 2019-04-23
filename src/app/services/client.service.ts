import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private http: HttpClient) { }

  sendData(user: {}) {
    return this.http.post('http://localhost:3000/client', user, httpOptions);
  }
}
