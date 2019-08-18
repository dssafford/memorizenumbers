import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnswerComponent } from './answer.component';
import {MatTableModule} from '@angular/material';
import {MaterialModule} from '../modules/material.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TimerService} from '../service/timer.service';
import {AnswerShowService} from '../service/answer-show.service';
import {FocusDirective} from '../focus.directive';


describe('AnswerWordComponent', () => {
  let component: AnswerComponent;
  let fixture: ComponentFixture<AnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerComponent, FocusDirective ],
      imports: [MaterialModule, HttpClientModule, RouterTestingModule],
      providers: [TimerService, AnswerShowService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
