import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { Client } from '../interfaces/client';
import { Router } from "@angular/router";

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
              private router: Router) {
    console.log(this.client);
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
        asyncValidators: [],
        updateOn: 'blur',
      }),
      phone: new FormControl(null, {
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
    this.clientService.addClient(this.client).subscribe(() => console.log('Client was sended'));
    // this.goTo();
  }

  goTo() {
    this.router.navigateByUrl('clientEdit');
  }
}
