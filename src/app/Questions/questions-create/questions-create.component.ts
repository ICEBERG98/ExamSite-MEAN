import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css'],
})
export class QuestionsCreateComponent {
  statement = '';
  Options = [];
  CorrectOption = '';
  @Output() questionCreated = new EventEmitter<Question>();
  onCreateQuestion() {
    /*
    *
    * This function Emits Out a question to its parent each time a new question is added
    * by the user.
    */
    const q: Question = {
      statement: this.statement,
      Options: this.Options,
      Correct: this.Options[this.CorrectOption]
    };
    this.questionCreated.emit(q);
  }
}
