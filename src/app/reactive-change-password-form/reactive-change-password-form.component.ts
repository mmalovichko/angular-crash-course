import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from '../validators/UsernameValidators';

@Component({
  selector: 'app-reactive-change-password-form',
  templateUrl: './reactive-change-password-form.component.html',
  styleUrls: ['./reactive-change-password-form.component.css']
})
export class ReactiveChangePasswordFormComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, UsernameValidators.oldPasswordDoNotMatch),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, UsernameValidators.passwordsDoNotMatch);

  changePassword() {
    console.log(this.form.value);
  }

  get oldPassword(): AbstractControl {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
