import { Component, Input } from '@angular/core';
import { Test } from '../Tests/test.model';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent {
@Input() test: Test;
}
