import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnswerWordComponent } from './answer-word.component';
import {MatTableModule} from '@angular/material';
import {MaterialModule} from '../modules/material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TimerService} from '../service/timer.service';
import {AnswerShowService} from '../service/answer-show.service';
import {FocusDirective} from '../focus.directive';


describe('AnswerWordComponent', () => {
  let component: AnswerWordComponent;
  let fixture: ComponentFixture<AnswerWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerWordComponent, FocusDirective ],
      imports: [MaterialModule, HttpClientModule, RouterTestingModule],
      providers: [TimerService, AnswerShowService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
