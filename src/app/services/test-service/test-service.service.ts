import { Injectable } from '@angular/core';
import { Test } from '../../Tests/test.model';
import { QuestionServiceService } from '../question-service/question-service.service';
import { Question } from 'src/app/Questions/question.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  constructor(private questServ: QuestionServiceService, private http: HttpClient, private router: Router) { }
  latestTest: Test = {
    Questions: []
  };
  test_tmp: Test = {
    Questions: []
  };
  questions : [];
  url : string = "http://localhost:1337/"
  updateTest() {
    this.latestTest.Questions = this.questServ.getAllQuestions();
  }
  getTest(): Test {
    this.updateTest();
    return this.latestTest ;
  }

  getTestById(id: string) {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    }); 
    let options = {
      headers: httpHeaders
    };
    return this.http.get(this.url + "tests/" + id, options);
  }

  getTestByName(name: string){
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    }); 
    let options = {
      headers: httpHeaders
    };
    return this.http.get(this.url + "testsn/" + name, options);
  }

  putTest(testname : String) {
    this.updateTest();
    let test_json = {
      "name" : testname,
      "questions" : this.latestTest.Questions
    }
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    }); 
    let options = {
      headers: httpHeaders
    };
    this.http.post(this.url + "tests/add", test_json, options).subscribe((res) => {
      if(res["status"] == "Session Expired"){
        sessionStorage.setItem("token", "0");
        localStorage.setItem("status", "0");
        this.router.navigateByUrl("/login");
      }
    });
    console.log(JSON.stringify(test_json));
  }
}