import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHousegitComponent } from './location-housegit.component';

describe('LocationHousegitComponent', () => {
  let component: LocationHousegitComponent;
  let fixture: ComponentFixture<LocationHousegitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHousegitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationHousegitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
