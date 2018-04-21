import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningComponent } from './learning.component';
import {LearnListComponent} from '../learn-list/learn-list.component';
import {LorayneListComponent} from '../lorayne-list/lorayne-list.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {QuizListComponent} from '../quiz-list/quiz-list.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {QuizListService} from '../service/quiz-list.service';
import {SharedService} from '../service/shared.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

describe('LearningComponent', () => {
  let component: LearningComponent;
  let fixture: ComponentFixture<LearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningComponent,
      LearnListComponent, LorayneListComponent, QuizListComponent],
      imports: [MatTabsModule, MatProgressSpinnerModule, MatTableModule,
      MatFormFieldModule, MatPaginatorModule, HttpClientTestingModule,
      BrowserAnimationsModule, MatInputModule, MatSortModule, FormsModule] ,
      providers: [HttpClientModule, QuizListService, SharedService],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
