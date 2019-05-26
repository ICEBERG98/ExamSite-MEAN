import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponentComponent } from './student-component/student-component.component';
import { TeacherComponentComponent } from './teacher-component/teacher-component.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TeacherTestsCompComponent } from './teacher-tests-comp/teacher-tests-comp.component';
import { ResultsComponent } from './results/results.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'student', component: StudentComponentComponent },
  { path: 'teacher', component: TeacherComponentComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'mytests', component: TeacherTestsCompComponent},
  { path: 'results/:name', component: ResultsComponent},
  { path: 'edit/:name', component: EditComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash:true})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
 }