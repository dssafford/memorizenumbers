import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHouseComponent } from './location-house.component';

describe('LocationHouseComponent', () => {
  let component: LocationHouseComponent;
  let fixture: ComponentFixture<LocationHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
