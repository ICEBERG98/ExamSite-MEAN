import { Injectable } from '@angular/core';
import { Test } from '../../Tests/test.model';
import { QuestionServiceService } from '../question-service/question-service.service';
import { Question } from 'src/app/Questions/question.model';
@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  constructor(private questServ: QuestionServiceService) { }
  latestTest: Test = {
    Questions: []
  };
  updateTest() {
    this.latestTest.Questions = this.questServ.getAllQuestions();
  }
  getTest(): Test {
    this.updateTest();
    return this.latestTest ;
  }
  putTest() {
    this.updateTest();
  }
}
