import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTabComponent } from './location-tab.component';
import {SharedService} from '../service/shared.service';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {QuizListComponent} from '../quiz-list/quiz-list.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationBodyComponent} from '../location-body/location-body.component';
import {LocationHouseComponent} from '../location-house/location-house.component';
import {LocationCarComponent} from '../location-car/location-car.component';
import {LocationCardsComponent} from '../location-cards/location-cards.component';

describe('LocationTabComponent', () => {
  let component: LocationTabComponent;
  let fixture: ComponentFixture<LocationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTabComponent, LocationBodyComponent, LocationHouseComponent,
      LocationCarComponent, LocationCardsComponent],
      imports: [MatTabsModule, MatProgressSpinnerModule, MatTableModule,
        MatFormFieldModule, MatPaginatorModule, HttpClientTestingModule,
        BrowserAnimationsModule, MatInputModule, MatSortModule, FormsModule] ,
      providers: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
