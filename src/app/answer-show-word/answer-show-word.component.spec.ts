import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerShowWordComponent } from './answer-show-word.component';
import {MatTableModule} from '@angular/material';
import {AnswerShowService} from '../service/answer-show.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FocusDirective} from '../focus.directive';

describe('AnswerShowWordComponent', () => {
  let component: AnswerShowWordComponent;
  let fixture: ComponentFixture<AnswerShowWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerShowWordComponent, FocusDirective ],
      imports: [MatTableModule, RouterTestingModule],
      providers: [AnswerShowService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerShowWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
