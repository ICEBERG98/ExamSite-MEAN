import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css'],
})
export class QuestionsCreateComponent {
  statement = '';
  Option = ['Option1', 'Option2', 'Option3', 'Option4'];
  CorrectOption = '';
  @Output() questionCreated = new EventEmitter<Question>();
  onCreateQuestion() {
    const q: Question = {
      statement: this.statement,
      Options: this.Option,
      Correct: this.Option.indexOf(this.CorrectOption)
    };
    this.questionCreated.emit(q);
  }
}
