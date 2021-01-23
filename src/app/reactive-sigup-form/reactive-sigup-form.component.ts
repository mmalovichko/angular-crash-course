import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from '../validators/UsernameValidators';

@Component({
  selector: 'app-reactive-sigup-form',
  templateUrl: './reactive-sigup-form.component.html',
  styleUrls: ['./reactive-sigup-form.component.css']
})
export class ReactiveSigupFormComponent {

  form = new FormGroup({
    username: new FormControl('', Validators.required, UsernameValidators.startsWithNotMax),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  submit() {
    console.log(this.form.value);
  }
}
