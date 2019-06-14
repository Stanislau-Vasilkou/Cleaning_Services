import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../models/client';
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  path = 'http://localhost:3000/';
  client: Client;
  currentUser: Client;

  constructor(private http: HttpClient,
              private storage: StorageService) {
    this.client = new Client();
    this.currentUser = new Client();
  }

  register(client: Client) {
    return this.http.post(`${this.path}signup`, client);
  }

  login(client: Client) {
    return this.http.post(`${this.path}login`, client);
  }

  getByID(id: string) {
    return this.http.get(`${this.path}clients/${id}`);
  }

  getByPhoneOrEmail(value: string) {
    return this.http.get(`${this.path}clients/get/${value}`);
  }

  setToken(response: Response) {
    if (response.hasOwnProperty('token')) {
      this.storage.setKey('token', response['token']);
      this.storage.setKey('id', response['id']);
    }
  }

  removeToken() {
    this.storage.removeKey('token');
    this.storage.removeKey('id');
  }

  getUserData(id) {
    if (this.storage.getValue('id')) {
      this.getByID(this.storage.getValue('id')).subscribe((user: Client) => {
        for (const userKey in user) {
          if (userKey) {
            this.currentUser[userKey] = user[userKey];
          }
        }
      });
    } else {
      this.getByID(id).subscribe((user: Client) => {
        for (const userKey in user) {
          if (userKey) {
            this.currentUser[userKey] = user[userKey];
          }
        }
      });
    }
  }

}
