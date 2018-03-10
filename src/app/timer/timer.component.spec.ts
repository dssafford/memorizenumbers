import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule,
  MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertService} from '../service/alert.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {TimerService} from '../service/timer.service';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ],
      imports: [     BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatTableModule, MatSortModule,
        ReactiveFormsModule, MatMenuModule, MatIconModule, FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
        MatCardModule, MatCardModule, MatButtonModule, MatButtonToggleModule, RouterTestingModule,
        MatGridListModule, MatInputModule],
      providers: [AlertService, AuthenticationService, TimerService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
