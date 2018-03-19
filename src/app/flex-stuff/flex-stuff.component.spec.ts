import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexStuffComponent } from './flex-stuff.component';

describe('FlexStuffComponent', () => {
  let component: FlexStuffComponent;
  let fixture: ComponentFixture<FlexStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexStuffComponent ]
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
