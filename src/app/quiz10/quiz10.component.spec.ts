import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz10Component } from './quiz10.component';

describe('Quiz10Component', () => {
  let component: Quiz10Component;
  let fixture: ComponentFixture<Quiz10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
