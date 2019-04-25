import { Component, OnInit, Input, ViewChildren, QueryList  } from '@angular/core';
import { Question } from '../question.model';
import { TestServiceService } from '../../services/test-service/test-service.service';
import { Test } from '../../Tests/test.model';

@Component({
  selector: 'app-student-questions',
  templateUrl: './student-questions.component.html',
  styleUrls: ['./student-questions.component.css']
})
export class StudentQuestionsComponent implements OnInit {
  Questions: Question[] = [];
  @Input() dynamicdata: string = "";
  @ViewChildren("radio") rad: QueryList<any>
  test_tmp: Test = {
    Questions: []
  };
  constructor(private testServ: TestServiceService) { 
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
    alert("Your Score is " + score);
  }

  listen(id : string) {
    this.testServ.getTestByName(id).subscribe(res =>{
      this.Questions = res[0]["questions"];
    });
    console.log(this.Questions);
    console.log(this.test_tmp);
  }
}
