import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBodyComponent } from './location-body.component';

describe('LocationBodyComponent', () => {
  let component: LocationBodyComponent;
  let fixture: ComponentFixture<LocationBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
