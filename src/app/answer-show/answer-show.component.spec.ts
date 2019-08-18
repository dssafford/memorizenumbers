import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerShowComponent } from './answer-show.component';
import {MatTableModule} from '@angular/material';
import {AnswerShowService} from '../service/answer-show.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FocusDirective} from '../focus.directive';

describe('AnswerShowWordComponent', () => {
  let component: AnswerShowComponent;
  let fixture: ComponentFixture<AnswerShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerShowComponent, FocusDirective ],
      imports: [MatTableModule, RouterTestingModule],
      providers: [AnswerShowService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
