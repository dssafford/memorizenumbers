import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailsComponent } from './quiz-details.component';
import {MatTableModule} from '@angular/material';
import {QuizListService} from '../service/quiz-list.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {SharedService} from '../service/shared.service';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';

describe('QuizDetailsComponent', () => {
  let component: QuizDetailsComponent;
  let fixture: ComponentFixture<QuizDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizDetailsComponent ],
      imports: [MatTableModule, HttpClientModule, RouterTestingModule] ,
  providers: [QuizListService, SharedService
  ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
