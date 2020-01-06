import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRW20listComponent } from './location-rw20list.component';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LocationRW20Component', () => {
  let component: LocationRW20listComponent;
  let fixture: ComponentFixture<LocationRW20listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationRW20listComponent ],
      imports: [MatProgressSpinnerModule, MatTableModule,
        MatPaginatorModule, MatFormFieldModule, MatInputModule,
        BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationRW20listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
