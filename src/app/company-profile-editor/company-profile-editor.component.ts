import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-company-profile-editor',
  templateUrl: './company-profile-editor.component.html',
  styleUrls: ['./company-profile-editor.component.css']
})
export class CompanyProfileEditorComponent implements OnInit {
  companyEditorForm: FormGroup;
  attributes: string[];

  constructor() { }

  ngOnInit() {
    this.companyEditorForm = new FormGroup({
      logo: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      name: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      description: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      servicesTypes: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      prices: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      oldPassword: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      newPassword: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      passwordConfirmation: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      })
    });
    this.attributes = Object.keys(this.companyEditorForm.controls);
  }
}
