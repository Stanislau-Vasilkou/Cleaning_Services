import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  attributes: string[];
  constructor() { }

  ngOnInit() {
    this.bookingForm = new FormGroup({
      address: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
    }),
      cleaningType: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      smallRooms: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      bigRooms: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      bathrooms: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      expectedTime: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
     regularity: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      }),
      confirmationField: new FormControl(null, {
        validators: Validators.required,
        asyncValidators: [],
        updateOn: 'blur'
      })
    });
    this.attributes = Object.keys(this.bookingForm.controls);
  }
}
