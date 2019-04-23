import { Component, OnInit, Input  } from '@angular/core';
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
    for(var i = 0; i < this.Questions.length; i++){
      let a0 = (<HTMLInputElement>document.getElementById('ques' + i as string + '0')).attributes["class"].value as string;
      let a1 = (<HTMLInputElement>document.getElementById('ques' + i as string + '1')).attributes["class"].value as string;
      let a2 = (<HTMLInputElement>document.getElementById('ques' + i as string + '2')).attributes["class"].value as string;
      let a3 = (<HTMLInputElement>document.getElementById('ques' + i as string + '3')).attributes["class"].value as string;

      if(a0.indexOf("checked") > -1){
        if(this.Questions[i].Correct == this.Questions[i].Options[0]){
          score += 1;
        }
      }

      if(a1.indexOf("checked") > -1){
        if(this.Questions[i].Correct == this.Questions[i].Options[1]){
          score += 1;
        }
      }

      if(a2.indexOf("checked") > -1){
        if(this.Questions[i].Correct == this.Questions[i].Options[2]){
          score += 1;
        }
      }

      if(a3.indexOf("checked") > -1){
        if(this.Questions[i].Correct == this.Questions[i].Options[3]){
          score += 1;
        }
      }
    }
    alert("Your Score is " + score)
  }

  listen(id : string) {
    this.test_tmp = this.testServ.getTestByName(id);
  //  this.Questions = this.test_tmp["Questions"];
    this.Questions = this.test_tmp.Questions;
   // console.log(this.test_tmp["Questions"]);
    //console.log(this.test_tmp);
  }
}
