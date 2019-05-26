import { Component, ViewChild, ElementRef  } from '@angular/core';
import { Test } from '../Tests/test.model';
import { QuestionServiceService } from '../services/question-service/question-service.service';
import { TestServiceService } from '../services/test-service/test-service.service';
import { StudentQuestionsComponent } from '../Questions/student-questions/student-questions.component';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent {
  test: Test;
  
  @ViewChild('child') child: StudentQuestionsComponent;
  @ViewChild('testid') testid: ElementRef;
  public score = "";
  dynamicdata : string = "";
  public hide = true;
  public showcomp = true;
  name: string;
  public res = false;
  
  constructor(private http: HttpClient, public testServ: TestServiceService, public questServ: QuestionServiceService, private router: Router) {
  }
  
  isStudent(){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    }); 
    let options = {
      headers: httpHeaders
    };
    return this.http.post("http://localhost:1337/check/", {}, options).subscribe((res) => {
        console.log(res);
        if(res["status"] == "expired" || res["user_type"] != "student"){
          sessionStorage.setItem("token", "0");
          localStorage.setItem("status", "0");
          this.router.navigateByUrl("/login");
        }
    });
  }

  ngOnInit(){
    this.isStudent();
  }

  showScore(){
    console.log(this.child.scorestr);
    this.score = "Your Score is " + this.child.scorestr;
    this.showcomp = false;
    this.res = false;
  }

  reloaddis(){
    window.location.reload();
  }

  hideeve(){
    this.hide = true;
    this.res = false;
  }

  updateID(){
    this.name = this.testid.nativeElement.value;
    this.child.listen(this.name);
    this.hide = false;
    this.res = true;
  }
}
