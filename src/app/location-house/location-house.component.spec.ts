import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHouseComponent } from './location-house.component';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

describe('LocationHouseComponent', () => {
  let component: LocationHouseComponent;
  let fixture: ComponentFixture<LocationHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHouseComponent ],
      imports: [MatProgressSpinnerModule, MatTableModule,
        MatPaginatorModule, MatFormFieldModule, MatInputModule,
        BrowserAnimationsModule, HttpClientModule],
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
