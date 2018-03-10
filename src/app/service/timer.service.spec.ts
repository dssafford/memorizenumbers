import { TestBed, inject } from '@angular/core/testing';

import { TimerService } from './timer.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('TimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TimerService, HttpClient]
    });
  });

  it('should be created', inject([TimerService], (service: TimerService) => {
    expect(service).toBeTruthy();
  }));
});
