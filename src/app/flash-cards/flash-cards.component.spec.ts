import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardsComponent } from './flash-cards.component';
import {TimerService} from '../service/timer.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {
  MatCardModule, MatDialogModule,
  MatFormFieldControl,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInput, MatInputModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('FlashCardsComponent', () => {
  let component: FlashCardsComponent;
  let fixture: ComponentFixture<FlashCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashCardsComponent ],
      imports: [HttpClientModule, RouterTestingModule, MatRadioModule,
      FormsModule, BrowserAnimationsModule, ReactiveFormsModule, MatCardModule, MatGridListModule,
      MatFormFieldModule, MatIconModule, MatInputModule, MatDialogModule],
      providers: [TimerService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
