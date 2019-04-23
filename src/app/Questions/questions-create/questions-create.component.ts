import { Component,ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Question } from '../question.model';
import { QuestionServiceService } from 'src/app/services/question-service/question-service.service';
@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css'],
})
export class QuestionsCreateComponent {
  constructor(private questServ: QuestionServiceService ) {}
 // statement = '';
 // Options = [];
 CorrectOption = '';
 @ViewChild('statement') statement: ElementRef;
 @ViewChild('option1') option1: ElementRef;
 @ViewChild('option2') option2: ElementRef;
 @ViewChild('option3') option3: ElementRef;
 @ViewChild('option4') option4: ElementRef;
 @ViewChild('correct') correct: ElementRef;
  onCreateQuestion() {
    /*
    *
    * This function Emits Out a question to its parent each time a new question is added
    * by the user.
    */
   
    var q: Question = {
      statement: this.statement.nativeElement.value,
      Options: [this.option1.nativeElement.value, this.option2.nativeElement.value, this.option3.nativeElement.value, this.option4.nativeElement.value],
      Correct: this.correct.nativeElement.value 
    };
    this.questServ.putQuestion(q);
  }
}
