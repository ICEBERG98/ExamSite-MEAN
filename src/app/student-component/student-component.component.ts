import { Component } from '@angular/core';
import { Test } from '../Tests/test.model';
import { QuestionServiceService } from '../services/question-service/question-service.service';
import { TestServiceService } from '../services/test-service/test-service.service';
@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent {
  test: Test;
  constructor(public testServ: TestServiceService, public questServ: QuestionServiceService) {
   /* console.log(this.test);
    this.test = testServ.getTest();
    console.log('--------updated--------');
    console.log(this.test);
    */
  }
  /*
  * Retrives the test from the Service TestService
  */
  retrieveTest() {
    this.test.Questions = this.questServ.getAllQuestions();
    /* this.test = this.testServ.getTest();
    return this.testServ.getTest();*/
    return this.test;
  }

  validator(): boolean {
    if (typeof this.testServ.getTest() === 'undefined') {
      return true;
    } else {
      return false;
    }
  }
}
