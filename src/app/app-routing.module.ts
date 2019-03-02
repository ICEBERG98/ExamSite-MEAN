import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponentComponent } from './student-component/student-component.component';
import { TeacherComponentComponent } from './teacher-component/teacher-component.component';

const routes: Routes = [
  { path: 'student', component: StudentComponentComponent },
  { path: 'teacher', component: TeacherComponentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
 }
