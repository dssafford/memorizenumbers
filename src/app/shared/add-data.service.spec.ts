import { TestBed, inject } from '@angular/core/testing';

import { AddDataService } from './add-data.service';
import {HttpClientModule} from '@angular/common/http';

describe('AddDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AddDataService]
    });
  });

  it('should be created', inject([AddDataService], (service: AddDataService) => {
    expect(service).toBeTruthy();
  }));
});
