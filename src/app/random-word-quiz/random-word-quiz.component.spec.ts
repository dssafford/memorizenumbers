import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomWordQuizComponent } from './random-word-quiz.component';

describe('RandomWordQuizComponent', () => {
  let component: RandomWordQuizComponent;
  let fixture: ComponentFixture<RandomWordQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomWordQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomWordQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
