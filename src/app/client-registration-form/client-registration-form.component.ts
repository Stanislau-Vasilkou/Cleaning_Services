import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-client-registration-form',
  templateUrl: './client-registration-form.component.html',
  styleUrls: ['./client-registration-form.component.css']
})

export class ClientRegistrationFormComponent implements OnInit {
  clientRegisterForm: FormGroup;
  attributes: string[];
  client: Client;

  constructor(private clientService: ClientService,
              private errorHandler: ErrorHandlerService,
              private router: Router) { }

  ngOnInit() {
    this.clientRegisterForm = new FormGroup({
      name: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
        asyncValidators: [],
        updateOn: 'blur',
      }),
      phone: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)],
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
    this.client = new Client();
    for (const props in this.client) {
      if (this.clientRegisterForm.controls[props] !== undefined || props !== 'passwordConfirmation') {
        this.client[props] = this.clientRegisterForm.controls[props].value;
      }
    }
  }

  addClient() {
    this.getClient();
    console.log(this.client);
    this.clientService.register(this.client).subscribe(() => console.log('Client was sended'));
    // this.goTo();
  }

  goTo() {
    this.router.navigateByUrl('clientEdit');
  }
}
