import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../Questions/question.model';
import { Test } from '../Tests/test.model';
import { OutputType } from '@angular/core/src/view';
@Component({
  selector: 'app-teacher-component',
  templateUrl: './teacher-component.component.html',
  styleUrls: ['./teacher-component.component.css']
})
export class TeacherComponentComponent {
  test: Question[] = [];
  test2: Question[] = [];
  @Output() testCreated = new EventEmitter<Test>();
  /*
  * This function adds a question to the current local test whenever a new question is created by the teacher
  */
  onQuestionCreated(Qn: Question) {
    this.test.push(Qn);
  }
  /*
  * This function Emits a new test to its parent Component whenever teacher creates a new test
  * Consider Uploading the test to the Database right here in this function.
  */
  onCreateTest() {
    this.test2 = this.test;
    const t: Test = {
      Questions: this.test2
    };
    this.testCreated.emit(t);
  }
}
