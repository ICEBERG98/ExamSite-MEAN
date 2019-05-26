import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Question } from '../Questions/question.model';
import { TestServiceService } from '../services/test-service/test-service.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Questions : Question[] = [];
  constructor(private testServ: TestServiceService, private acroute: ActivatedRoute) { }
  test_name : string;

  @ViewChild('statement') statement: ElementRef;
  @ViewChild('option1') option1: ElementRef;
  @ViewChild('option2') option2: ElementRef;
  @ViewChild('option3') option3: ElementRef;
  @ViewChild('option4') option4: ElementRef;
  @ViewChild('correct') correct: ElementRef;

  onDelete(index){
    console.log(index);
    this.testServ.deleteQuesFromTest(this.test_name, this.Questions[index].statement);
    this.Questions.splice(index, 1);
  }

  onCreateQuestion(){
    var q: Question = {
      statement: this.statement.nativeElement.value,
      Options: [this.option1.nativeElement.value, this.option2.nativeElement.value, this.option3.nativeElement.value, this.option4.nativeElement.value],
      Correct: this.correct.nativeElement.value 
    };
    this.Questions.push(q);
    this.testServ.addQuestion(this.test_name, q);
    console.log(q);
  }

  ngOnInit() {
    this.test_name = this.acroute.snapshot.paramMap.get("name");
    return this.testServ.getTestTeacher(this.test_name).subscribe((res) => {
      this.Questions = res as Question[];
      console.log(this.Questions);
    });
  }

}
