import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../question.model';
import { Statement } from '@angular/compiler';

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
    const q: Question = {
      statement: this.statement,
      Options: this.Options,
      Correct: this.Options[this.CorrectOption]
    };
    this.questionCreated.emit(q);
  }
}
