import { Component, OnInit, Input, ViewChildren, QueryList  } from '@angular/core';
import { Question } from './ques.model';
import { Res } from './ressub.model';
import { TestServiceService } from '../../services/test-service/test-service.service';
import { Test } from '../../Tests/test.model';
import { Output, EventEmitter } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student-questions',
  templateUrl: './student-questions.component.html',
  styleUrls: ['./student-questions.component.css']
})
export class StudentQuestionsComponent implements OnInit {
  Questions: Question[] = [];
  Results : Res[] = [];
  @Output() scevent = new EventEmitter<string>();
  @Input() dynamicdata: string = "";
  @ViewChildren("radio") rad: QueryList<any>;
  scorestr : string;
  test_name : string;
  test_tmp: Test = {
    Questions: []
  };
  constructor(private testServ: TestServiceService, private http: HttpClient) { 
    this.Questions = [];
  }

  ngOnInit() {
  }

  submitTest(){
    this.rad.forEach((item, index) => {
      this.Results.push({"statement" : this.Questions[index].statement, "option" : item.value as string });
    });

    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'token' : sessionStorage.getItem("token")
    }); 
    let options = {
      headers: httpHeaders
    };
    // console.log( {"name" : this.test_name, "ques" : this.Results});
    return this.http.post("http://localhost:1337/submit", {"name" : this.test_name, "ques" : this.Results}, options).subscribe(res => {
      this.scorestr = res["marks"];
      this.scevent.next();
    });
  }

  listen(id : string) {
    this.test_name = id;
    this.testServ.getTestByName(id).subscribe(res => {
      this.Questions = res as Question[];
    });
    console.log(this.Questions);
    console.log(this.test_tmp);
  }
}
