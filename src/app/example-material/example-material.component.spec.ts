import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMaterialComponent } from './example-material.component';

describe('ExampleMaterialComponent', () => {
  let component: ExampleMaterialComponent;
  let fixture: ComponentFixture<ExampleMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
