import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-profile-editor',
  templateUrl: './client-profile-editor.component.html',
  styleUrls: ['./client-profile-editor.component.css']
})
export class ClientProfileEditorComponent implements OnInit {
  clientEditorForm: FormGroup;
  attributes: string[];

  constructor() { }

  ngOnInit() {
    this.clientEditorForm = new FormGroup({
      photo: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      name: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      email: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      phone: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      address: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      notifySetup: new FormControl(null, {
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
      }),
    });
    this.attributes = Object.keys(this.clientEditorForm.controls);
  }
}
