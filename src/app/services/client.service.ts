import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  path = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  register(client: Client) {
    return this.http.post(`${this.path}signup`, client);
  }

  login(client: Client) {
    return this.http.post(`${this.path}login`, client);
  }

  getByName(name: string) {
    return this.http.get(`${this.path}clients/${name}`);
  }
}
