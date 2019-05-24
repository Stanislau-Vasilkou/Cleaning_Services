import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../services/client.service';
import {ErrorHandlerService} from '../services/error-handler.service';
import {Router} from '@angular/router';

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
  type: string = 'password';

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

  getClient() {
    const client = new Client();
    client.email = this.loginForm.controls.email.value;
    client.password = this.loginForm.controls.password.value;
    return client;
  }

  sendData() {
    this.clientService.login(this.getClient()).subscribe((res: Response) => {
      this.clientService.setToken(res);
      this.router.navigateByUrl('activeOrders');
    });
  }

  setPasswordType(value: string) {
    this.type = value;
  }
}
