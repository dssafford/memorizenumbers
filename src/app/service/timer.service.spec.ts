import { TestBed, inject } from '@angular/core/testing';

import { TimerService } from './timer.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('TimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [TimerService]
    });
  });

  it('should be created', inject([TimerService], (service: TimerService) => {
    expect(service).toBeTruthy();
  }));
});
