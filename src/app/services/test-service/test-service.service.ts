import { Injectable } from '@angular/core';
import { Test } from '../../Tests/test.model';
import { QuestionServiceService } from '../question-service/question-service.service';
import { Question } from 'src/app/Questions/question.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  constructor(private questServ: QuestionServiceService, private http: HttpClient) { }
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

  getTestById(id: string) : Test {
    if(id == ""){
      return this.test_tmp;
    }
    this.http.get(this.url + "tests/" + id).subscribe((res)=>{
      this.test_tmp.Questions = res['questions'];
  })
  return this.test_tmp;
  }

  getTestByName(name: string) : Test {
    if(name == ""){
      return this.test_tmp;
    }
    this.http.get(this.url + "testsn/" + name).subscribe((res)=>{
      this.test_tmp.Questions = res[0]['questions'];
   //   console.log(res[0]);
  })
  return this.test_tmp;
  }

  putTest(testname : String) {
    this.updateTest();
    let test_json = {
      "name" : testname,
      "questions" : this.latestTest.Questions
    }
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    }); 
    let options = {
      headers: httpHeaders
    }; 
    this.http.post(this.url + "tests/add", test_json, options).subscribe();
    console.log(JSON.stringify(test_json));
  }
}