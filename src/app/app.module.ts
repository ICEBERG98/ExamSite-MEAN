import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsListComponent } from './Questions/questions-list/questions-list.component';
import { FormsModule } from '@angular/forms';
import { QuestionsCreateComponent } from './Questions/questions-create/questions-create.component';
import { StudentComponentComponent } from './student-component/student-component.component';
import { TeacherComponentComponent } from './teacher-component/teacher-component.component';
import { TestComponent } from './Tests/test/test.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { StudentQuestionsComponent } from './Questions/student-questions/student-questions.component';
import { TeacherTestsCompComponent } from './teacher-tests-comp/teacher-tests-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    QuestionsCreateComponent,
    StudentComponentComponent,
    TeacherComponentComponent,
    TestComponent,
    LoginComponent,
    HeaderBarComponent,
    RegisterComponent,
    StudentQuestionsComponent,
    TeacherTestsCompComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
