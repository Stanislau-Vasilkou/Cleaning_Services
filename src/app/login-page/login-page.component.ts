import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../services/client.service';
import {ErrorHandlerService} from '../services/error-handler.service';
import {HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {stringify} from "querystring";

interface Client {
  email: string;
  password: string;
}

class Client {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  client: Client;
  storage = window.localStorage;
  type = 'password';

  constructor(private clientService: ClientService,
              private errorHandler: ErrorHandlerService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
        asyncValidators: [],
        updateOn: 'blur',
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)],
        asyncValidators: [],
        updateOn: 'blur'
      })
    });
  }

  catchError(control: string) {
    return this.errorHandler.getErrMsg(control, this.loginForm);
  }

  isValid(control) {
    return this.errorHandler.isControlInvalid(control, this.loginForm);
  }

  sendData() {
    this.client = new Client();
    this.client.email = this.loginForm.controls.email.value;
    this.client.password = this.loginForm.controls.password.value;
    this.clientService.login(this.client).subscribe((res: HttpRequest<object>) => {
      this.storage.setItem('token', res['token']);
      this.router.navigateByUrl('activeOrders');
    });
  }

  setPasswordType(value: string) {
    this.type = value;
  }
}
