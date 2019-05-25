import { Component, OnInit, Input, ViewChildren, QueryList  } from '@angular/core';
import { Question } from '../question.model';
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
  @Output() scevent = new EventEmitter<string>();
  @Input() dynamicdata: string = "";
  @ViewChildren("radio") rad: QueryList<any>;
  scorestr:string;
  test_tmp: Test = {
    Questions: []
  };
  constructor(private testServ: TestServiceService, private http: HttpClient) { 
    this.Questions = [];
  }

  ngOnInit() {
  }

  submitTest(){
    var score = 0;
    this.rad.forEach((item, index) => {
      if(this.Questions[index].Options[item.value] == this.Questions[index].Correct){
        score += 1;
      }
    });
    this.scorestr = score.toString();
    this.scevent.next();
  }

  listen(id : string) {
    this.testServ.getTestByName(id).subscribe(res => {
      this.Questions = res as Question[];
    });
    console.log(this.Questions);
    console.log(this.test_tmp);
  }
}
