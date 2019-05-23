import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTestsCompComponent } from './teacher-tests-comp.component';

describe('TeacherTestsCompComponent', () => {
  let component: TeacherTestsCompComponent;
  let fixture: ComponentFixture<TeacherTestsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTestsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTestsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
