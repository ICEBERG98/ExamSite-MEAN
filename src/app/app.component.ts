import { Component } from '@angular/core';
import { Question } from './Questions/question.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN-Project';
  storedQuestions: Question[];
  onQuestionCreated(Qn) {
    this.storedQuestions.push(Qn);
  }
}
