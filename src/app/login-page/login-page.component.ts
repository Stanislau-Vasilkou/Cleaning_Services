import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../services/client.service';
import {ErrorHandlerService} from '../services/error-handler.service';

interface User {
  name: string;
  password: string;
}

class User {
  name: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  user: User;


  constructor(private client: ClientService,
              private errorHandler: ErrorHandlerService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(null, {
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
    this.user = new User();
    this.user.name = this.loginForm.controls.login.value;
    this.user.password = this.loginForm.controls.password.value;
    this.client.sendData(this.user).subscribe(() => console.log("was sended"));
  }
}
