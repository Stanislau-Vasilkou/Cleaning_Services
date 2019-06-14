import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../services/error-handler.service';
import {finalize} from 'rxjs/operators';
import {LoginAsyncValidator} from "../../customValidators/loginAsyncValidator";
import {passwordValidator} from "../../customValidators/passwordValidator";

@Component({
  selector: 'app-client-registration-form',
  templateUrl: './client-registration-form.component.html',
  styleUrls: ['./client-registration-form.component.css']
})

export class ClientRegistrationFormComponent implements OnInit {
  clientRegisterForm: FormGroup;
  attributes: string[];
  isLoading = false;

  constructor(private clientService: ClientService,
              private errorHandler: ErrorHandlerService,
              private router: Router,
              private asyncValidator: LoginAsyncValidator) {
  }

  ngOnInit() {
    this.clientRegisterForm = new FormGroup({
      name: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.asyncValidator.validate.bind(this.asyncValidator)],
        updateOn: 'blur',
      }),
      phone: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [this.asyncValidator.validate.bind(this.asyncValidator)],
        updateOn: 'blur',
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8), passwordValidator()],
        asyncValidators: [],
        updateOn: 'blur',
      }),
      passwordConfirmation: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)],
        asyncValidators: [],
        updateOn: 'blur',
      }),
    });
    this.attributes = Object.keys(this.clientRegisterForm.controls);
  }

  catchError(control: string) {
    return this.errorHandler.getErrMsg(control, this.clientRegisterForm);
  }

  isValid(control) {
    return this.errorHandler.isControlInvalid(control, this.clientRegisterForm);
  }

  getClient() {
    const client = new Client();
    for (const props in client) {
      if (this.clientRegisterForm.controls[props] !== undefined && props !== 'passwordConfirmation') {
        client[props] = this.clientRegisterForm.controls[props].value;
      }
    }
    console.log(client);
    return client;
  }

  registerClient() {
    this.isLoading = true;
    this.clientService.register(this.getClient())
      .pipe(
        finalize(() => this.isLoading = false))
      .subscribe(() => this.router.navigateByUrl(''));
  }
}
