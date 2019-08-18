import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponent } from './quiz.component';
import {QuizListComponent} from '../quiz-list/quiz-list.component';
import {TimerComponent} from '../timer/timer.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TimerService} from '../service/timer.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {QuizListService} from '../service/quiz-list.service';
import {SharedService} from '../service/shared.service';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizComponent, QuizListComponent, TimerComponent ],
      imports: [ MatTabsModule, MatInputModule, MatFormFieldModule,
      MatTableModule, MatPaginatorModule, BrowserModule,
      BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule,
      RouterTestingModule, MatSortModule, MatProgressSpinnerModule ]  ,
      providers: [TimerService, QuizListService, SharedService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
