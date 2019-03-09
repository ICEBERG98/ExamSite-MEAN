import { Component, Input } from '@angular/core';
import { Question } from '../question.model';
import { QuestionServiceService } from '../../services/question-service/question-service.service';
import { TestServiceService } from 'src/app/services/test-service/test-service.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent {
  /*
  * This function is used to acquire the List of Questions, Please make this retrieve the question list
  * From the Database so as to implement persistence.
  */
  Questions: Question[] = [];
  constructor(private questServ: QuestionServiceService, private testServ: TestServiceService) {
    this.Questions = testServ.getTest().Questions;
    /*console.log(testServ.getTest().Questions);*/
  }
}
