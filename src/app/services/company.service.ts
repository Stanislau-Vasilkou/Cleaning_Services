import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../models/company';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  path = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  register(company: Company) {
    return this.http.post(`${this.path}signup`, company);
  }

  login(company: Company) {
    return this.http.post(`${this.path}login`, company);
  }

  getByName(name: string) {
    return this.http.get(`${this.path}companies/${name}`);
  }

}
