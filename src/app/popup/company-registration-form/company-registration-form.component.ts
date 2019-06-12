import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorHandlerService } from '../../services/error-handler.service';

@Component({
  selector: 'app-company-registration-form',
  templateUrl: './company-registration-form.component.html',
  styleUrls: ['./company-registration-form.component.css']
})
export class CompanyRegistrationFormComponent implements OnInit {
  companyRegisterForm: FormGroup;
  attributes: string[];
  constructor(private errorHandler: ErrorHandlerService) { }

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

  catchError(control: string) {
    return this.errorHandler.getErrMsg(control, this.companyRegisterForm);
  }

  isValid(control) {
    return this.errorHandler.isControlInvalid(control, this.companyRegisterForm);
  }

  onFileUploaded(event) {
    console.log(event.target.files[0]);
  }
}
