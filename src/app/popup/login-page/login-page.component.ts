import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Router } from '@angular/router';
import { passwordValidator } from '../../customValidators/passwordValidator';
import {LoginAsyncValidator} from "../../customValidators/loginAsyncValidator";

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
  type = 'password';

  constructor(private clientService: ClientService,
              private errorHandler: ErrorHandlerService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailOrPhone: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [],
        updateOn: 'blur'
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8), passwordValidator()],
        asyncValidators: []
      })
    });
  }

  catchError(control: string) {
    return this.errorHandler.getErrMsg(control, this.loginForm);
  }

  isValid(control) {
    return this.errorHandler.isControlInvalid(control, this.loginForm);
  }

  getClient() {
    const client = new Client();
    client.email = this.loginForm.controls.emailOrPhone.value;
    client.password = this.loginForm.controls.password.value;
    console.log(client);
    return client;
  }

  sendData() {
    this.clientService.login(this.getClient()).subscribe((res: Response) => {
      this.clientService.setToken(res);
      this.clientService.getUserData(res['id']);
      this.router.navigateByUrl('activeOrders');
    });
  }

  setPasswordType(value: string) {
    this.type = value;
  }
}
