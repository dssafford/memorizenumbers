import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LorayneListComponent } from './lorayne-list.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableDataSource,
  MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LORAYNE_LEARNING_DATA} from '../data/lorayneNumbers';

describe('LorayneListComponent', () => {
  let component: LorayneListComponent;
  let fixture: ComponentFixture<LorayneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LorayneListComponent ],
      imports: [MatProgressSpinnerModule, MatTableModule,
      MatPaginatorModule, MatFormFieldModule, MatInputModule,
      BrowserAnimationsModule],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LorayneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 100 numbers in lorayne list', function () {
   const data = LORAYNE_LEARNING_DATA;

    expect(data.length).toEqual(101);
  });
});
