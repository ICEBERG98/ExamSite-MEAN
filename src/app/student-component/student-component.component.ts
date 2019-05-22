import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Test } from '../Tests/test.model';
import { QuestionServiceService } from '../services/question-service/question-service.service';
import { TestServiceService } from '../services/test-service/test-service.service';
import { StudentQuestionsComponent } from '../Questions/student-questions/student-questions.component';
import { Router } from '@angular/router';

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
  public hide = true;

  constructor(public testServ: TestServiceService, public questServ: QuestionServiceService, private router: Router) {
  }
  
  isStudent(){
    if(localStorage.getItem("user_type") == "student"){
      return 1;
    }
    return 0;
  }

  ngOnInit(){
    if(this.isStudent() == 0){
      this.router.navigateByUrl("/login");
    }
  }

  updateID(){
    this.dynamicdata = this.testid.nativeElement.value;
    this.child.listen(this.dynamicdata);
    this.hide = false;
  }
}
