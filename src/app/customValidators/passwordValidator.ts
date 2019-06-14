import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (control.value) {
      return control.value.match(/^[a-z0-9_-]{6,18}$/) ? null : { wrongSymbols: true };
    }
  };
}
