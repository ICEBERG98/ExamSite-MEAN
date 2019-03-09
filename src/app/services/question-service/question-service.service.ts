import { Injectable } from '@angular/core';
import { Question } from '../../Questions/question.model';
@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  Questions: Question[] = [];
  putQuestion(q: Question) {
    this.Questions.push(q);
  }
  getLatestQuestion() {
    return this.Questions[this.Questions.length - 1];
  }
  getAllQuestions() {
    return this.Questions;
  }
  constructor() { }
}
