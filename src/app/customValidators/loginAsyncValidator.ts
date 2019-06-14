import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ClientService} from '../services/client.service';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})

export class LoginAsyncValidator implements AsyncValidator {

  constructor(private clientService: ClientService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.clientService.getByPhoneOrEmail(control.value).pipe(
      map((result: Array) => {
        if (result.length) {
          return {existLogin: true};
        } else {
          return null;
        }
      })
    );
  }

  check(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.clientService.getByPhoneOrEmail(control.value).pipe(
      map((result: Array<String>) => {
        if (result.length) {
          return { existLogin: true };
        } else {
          return null;
        }
      })
    );
  }
}
