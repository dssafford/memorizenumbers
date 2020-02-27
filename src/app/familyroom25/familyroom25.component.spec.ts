import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Familyroom25Component } from './familyroom25.component';

describe('Familyroom25Component', () => {
  let component: Familyroom25Component;
  let fixture: ComponentFixture<Familyroom25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Familyroom25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Familyroom25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
