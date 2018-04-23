import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCarComponent } from './location-car.component';

describe('LocationCarComponent', () => {
  let component: LocationCarComponent;
  let fixture: ComponentFixture<LocationCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
