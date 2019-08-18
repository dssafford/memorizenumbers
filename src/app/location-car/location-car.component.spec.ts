import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCarComponent } from './location-car.component';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LocationCarComponent', () => {
  let component: LocationCarComponent;
  let fixture: ComponentFixture<LocationCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationCarComponent ],
      imports: [MatProgressSpinnerModule, MatTableModule,
        MatPaginatorModule, MatFormFieldModule, MatInputModule,
        BrowserAnimationsModule],
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
