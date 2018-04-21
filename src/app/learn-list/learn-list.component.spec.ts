import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnListComponent } from './learn-list.component';
import {
  MatFormFieldModule, MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LearningComponent} from '../learning/learning.component';
import {LorayneListComponent} from '../lorayne-list/lorayne-list.component';
import {QuizListComponent} from '../quiz-list/quiz-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LearnListComponent', () => {
  let component: LearnListComponent;
  let fixture: ComponentFixture<LearnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnListComponent, LearningComponent,
      LorayneListComponent, QuizListComponent],
      imports: [MatProgressSpinnerModule, MatFormFieldModule,
      MatTableModule, MatPaginatorModule, MatSortModule,
      HttpClientModule, MatTabsModule, MatInputModule, BrowserAnimationsModule],
      providers: [HttpClient],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
