import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {FlashCardsComponent} from '../flash-cards/flash-cards.component';
import {TimerService} from '../service/timer.service';
import {HttpClientModule} from '@angular/common/http';
import {TimerComponent} from '../timer/timer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule,
  MatMenuModule, MatOptionModule, MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,
        FlashCardsComponent,TimerComponent],
      providers: [TimerService],
      imports: [     BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatTableModule, MatSortModule,
        ReactiveFormsModule, MatMenuModule, MatIconModule, FormsModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
        MatCardModule, MatCardModule, MatButtonModule, MatButtonToggleModule, RouterTestingModule,
        MatGridListModule, MatInputModule, MatRadioModule, MatDialogModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
