import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export class UsernameValidators {

  static startsWithNotMax(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise((resolve, reject) => {

      setTimeout(() => {
        console.log('response from the server...' + control.value);
        if ((control.value as string).startsWith('max')) {
          return resolve({startsWithNotMax: true, message: 'Username cannot start with max'})
        } else resolve(null)
      }, 2000)

    });
  }

  static oldPasswordDoNotMatch(control: AbstractControl): Promise<ValidationErrors | null> {

    return  new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(control.value);
        if ((control.value as string) === '1234') {
          return resolve(null);
        } else {
          return resolve({passwordDontMatch: true})
        }
      }, 500)
    });
  }

  static passwordsDoNotMatch(formGroup: AbstractControl): ValidationErrors {
    const group = (formGroup as FormGroup);
    if (group.controls.newPassword.value !== group.controls.confirmPassword.value)
      return {passwordsDoNotMatch : true};
    else return null;
  }

}
