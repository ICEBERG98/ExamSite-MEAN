import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../Questions/question.model';
import { Test } from '../Tests/test.model';
import { TestServiceService } from '../services/test-service/test-service.service';
import { OutputType } from '@angular/core/src/view';
import { QuestionServiceService } from '../services/question-service/question-service.service';
import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-teacher-component',
  templateUrl: './teacher-component.component.html',
  styleUrls: ['./teacher-component.component.css']
})
export class TeacherComponentComponent {
  constructor(private testServ: TestServiceService, private http: HttpClient, private questServ: QuestionServiceService, private router: Router) {}
  test: Question[] = [];
  test2: Question[] = [];
  finalTest: Test;
  @ViewChild('nameInput') nameInput: ElementRef;
  /*
  * This function adds a question to the current local test whenever a new question is created by the teacher
  */
  onQuestionCreated(Qn: Question) {
    this.questServ.putQuestion(Qn);
  }
  /*
  * This function is a wrapper to the putTest functionality provided by the TestService service
  */
  uploadTest(testname : String) {
  this.testServ.putTest(testname);
  }
  /*
  * This function sends the new test to the test service whenever teacher creates a new test
  * Consider Uploading the test to the Database right here in this function.
  */
  onCreateTest() {
    this.test2 = this.test;
    const t: Test = {
      Questions: this.test2
    };
    let testname = this.nameInput.nativeElement.value;
    this.uploadTest(testname);
  }

  isTeacher(){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    }); 
    let options = {
      headers: httpHeaders
    };
    return this.http.post("http://localhost:1337/check/teacher", {}, options).subscribe((res) => {
        console.log(res);
        if(res["status"] == "expired"){
          sessionStorage.setItem("token", "0");
          localStorage.setItem("status", "0");
          this.router.navigateByUrl("/login");
        }
    });
  }

  ngOnInit(){
   this.isTeacher();
  }
}
