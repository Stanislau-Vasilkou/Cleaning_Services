import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-company-registration-form',
  templateUrl: './company-registration-form.component.html',
  styleUrls: ['./company-registration-form.component.css']
})
export class CompanyRegistrationFormComponent implements OnInit {
  companyRegisterForm: FormGroup;
  attributes: string[];
  constructor() { }

  ngOnInit() {
    this.companyRegisterForm = new FormGroup({
      logo: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      name: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      description: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
     address: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      servicesTypes: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur',
      }),
      prices: new FormControl(null, {
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
      })
    });
    this.attributes = Object.keys(this.companyRegisterForm.controls);
  }

}
