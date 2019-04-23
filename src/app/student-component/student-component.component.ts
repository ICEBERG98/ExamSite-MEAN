import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Test } from '../Tests/test.model';
import { QuestionServiceService } from '../services/question-service/question-service.service';
import { TestServiceService } from '../services/test-service/test-service.service';
import { StudentQuestionsComponent } from '../Questions/student-questions/student-questions.component';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent {
  test: Test;

  @ViewChild('child') child: StudentQuestionsComponent;
  @ViewChild('testid') testid: ElementRef;
  dynamicdata : string = "";
  constructor(public testServ: TestServiceService, public questServ: QuestionServiceService) {
  }
  
  updateID(){
    this.dynamicdata = this.testid.nativeElement.value;
    this.child.listen(this.dynamicdata);
  }
}
