import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../interfaces/client';

@Component({
  selector: 'app-client-profile-editor',
  templateUrl: './client-profile-editor.component.html',
  styleUrls: ['./client-profile-editor.component.css']
})
export class ClientProfileEditorComponent implements OnInit {
  clientEditorForm: FormGroup;
  attributes: string[];
  id: string;
  client: Client;

  constructor(private clientService: ClientService) {
    this.id = '5cc0413ef5257b2440742e22';
  }

  ngOnInit() {
    this.getClient();
    this.clientEditorForm = new FormGroup({
      photo: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      login: new FormControl(null, {
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
  getClient() {
    this.clientService.getUserInfo(this.id).subscribe( (client: Client) => {
      this.client = client;
      this.setValues();
    });
  }

  setValues() {
    for (const props in this.client) {
      if (this.clientEditorForm.controls[props] !== undefined) {
        this.clientEditorForm.controls[props].setValue(this.client[props]);
      }
    }
  }
}
