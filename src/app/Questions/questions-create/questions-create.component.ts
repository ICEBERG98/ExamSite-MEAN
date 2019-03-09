import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../question.model';
import { QuestionServiceService } from 'src/app/services/question-service/question-service.service';
@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css'],
})
export class QuestionsCreateComponent {
  constructor(private questServ: QuestionServiceService ) {}
  statement = '';
  Options = [];
  CorrectOption = '';
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
    this.questServ.putQuestion(q);
  }
}
