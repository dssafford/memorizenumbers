import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPresidentsComponent } from './location-presidents.component';

describe('LocationPresidentsComponent', () => {
  let component: LocationPresidentsComponent;
  let fixture: ComponentFixture<LocationPresidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationPresidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationPresidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
