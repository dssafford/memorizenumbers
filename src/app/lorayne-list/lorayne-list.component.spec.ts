import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LorayneListComponent } from './lorayne-list.component';

describe('LorayneListComponent', () => {
  let component: LorayneListComponent;
  let fixture: ComponentFixture<LorayneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LorayneListComponent ]
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
});
