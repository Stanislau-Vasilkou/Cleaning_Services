import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../services/client.service';
import {ErrorHandlerService} from '../services/error-handler.service';
import {HttpRequest} from "@angular/common/http";

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


  constructor(private clientService: ClientService,
              private errorHandler: ErrorHandlerService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      password: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      })
    });
  }

  catchError(control: string) {
    console.log(this.errorHandler.getErrMsg(control, this.loginForm));
    return this.errorHandler.getErrMsg(control, this.loginForm);
  }

  isValid(control) {
    return this.errorHandler.isControlInvalid(control, this.loginForm);
  }

  sendData() {
    this.client = new Client();
    this.client.email = this.loginForm.controls.email.value;
    this.client.password = this.loginForm.controls.password.value;
    console.log(this.client);
    this.clientService.authClient(this.client).subscribe((res: HttpRequest<object>) => {
      this.storage.setItem('token', res.token);
    });
  }

  getInfo() {
    this.clientService.getSecureInfo().subscribe((res) => console.log(res));
  }
}
