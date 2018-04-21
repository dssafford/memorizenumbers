import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexStuffComponent } from './flex-stuff.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('FlexStuffComponent', () => {
  let component: FlexStuffComponent;
  let fixture: ComponentFixture<FlexStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexStuffComponent ],
      imports: [MatFormFieldModule, FormsModule, BrowserModule,
      MatInputModule, BrowserAnimationsModule],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
