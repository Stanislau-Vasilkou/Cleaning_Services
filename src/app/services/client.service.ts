import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  path = 'http://localhost:3000/';
  storage = window.localStorage;
  client: Client;

  constructor(private http: HttpClient) {
    this.client = new Client();
  }

  register(client: Client) {
    return this.http.post(`${this.path}signup`, client);
  }

  logVIAGoogle() {
    return this.http.get(`${this.path}auth/google`);
  }

  login(client: Client) {
    return this.http.post(`${this.path}login`, client);
  }

  getByName(name: string) {
    return this.http.get(`${this.path}clients/${name}`);
  }

  setToken(response: Response) {
    if (response.hasOwnProperty('token')) {
      this.storage.setItem('token', response['token']);
      this.storage.setItem('name', response['name']);
    }
  }

  removeToken() {
    this.storage.removeItem('token');
  }

  getUserData(response: Response) {
    if (response.hasOwnProperty('name')) {
      this.client.name = name;
    }
  }
}
