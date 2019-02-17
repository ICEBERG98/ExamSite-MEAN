import { Component, Input } from '@angular/core';
import { Question } from '../question.model';
@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent {
  @Input() Questions: Question[] = [];
}
