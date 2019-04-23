import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-registration-form',
  templateUrl: './client-registration-form.component.html',
  styleUrls: ['./client-registration-form.component.css']
})
export class ClientRegistrationFormComponent implements OnInit {
  clientRegisterForm: FormGroup;
  attributes: string[];
  constructor() { }

  ngOnInit() {
    this.clientRegisterForm = new FormGroup({
      login: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      email: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      prone: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      password: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      passwordConfirmation: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
    });
    this.attributes = Object.keys(this.clientRegisterForm.controls);
    console.log(this.attributes);
  }
}
