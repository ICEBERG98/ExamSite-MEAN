import { Component, Input } from '@angular/core';
import { Question } from '../question.model';
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
  @Input() Questions: Question[] = [];
}
