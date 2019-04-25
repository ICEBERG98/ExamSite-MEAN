import { Component } from '@angular/core';
import { Test } from './Tests/test.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MCQ Platform';
  constructor(private router : Router){
    this.router.navigateByUrl("/login");
  }
}
