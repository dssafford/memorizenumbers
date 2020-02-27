import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fourseasonroom20Component } from './fourseasonroom20.component';

describe('Fourseasonroom20Component', () => {
  let component: Fourseasonroom20Component;
  let fixture: ComponentFixture<Fourseasonroom20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fourseasonroom20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fourseasonroom20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
