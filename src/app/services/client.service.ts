import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../interfaces/client';

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
    return this.http.post('http://localhost:3000/clients', user, httpOptions);
  }

  addClient(client: Client) {
    return this.http.post('http://localhost:3000/clients', client, httpOptions);
  }

  getUserInfo(login: string) {
    console.log(login);
    return this.http.get(`http://localhost:3000/clients/${login}`);
  }
}
