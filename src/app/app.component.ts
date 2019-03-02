import { Component } from '@angular/core';
import { Test } from './Tests/test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN-Project';
  currTest: Test = {
    Questions: []
  };
  onTestCreated(t: Test) {
    this.currTest.Questions = t.Questions;
    console.log(t);
    console.log(this.currTest);
  }
}
