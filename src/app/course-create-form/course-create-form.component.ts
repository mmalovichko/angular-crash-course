import { Component } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-course-create-form',
  templateUrl: './course-create-form.component.html',
  styleUrls: ['./course-create-form.component.css']
})
export class CourseCreateFormComponent {
  categories = [
    {id: 1, name: 'Programming'},
    {id: 2, name: 'Management'},
    {id: 3, name: 'Business'}
  ];

  submit(form): void {
    console.log(form.value);
  }

  logVar(courseName: NgModel): void {
    console.log(courseName);
  }
}
