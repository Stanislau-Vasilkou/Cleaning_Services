import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = of(localStorage.hasOwnProperty('token'));

  constructor() { }

}
