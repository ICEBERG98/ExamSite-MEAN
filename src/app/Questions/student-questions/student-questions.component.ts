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

  listen(id : string) {
    this.test_tmp = this.testServ.getTestById(id);
    this.Questions = this.test_tmp["Questions"];
    console.log(this.Questions);
    console.log(this.test_tmp);
  }
}
