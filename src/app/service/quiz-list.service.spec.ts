import { TestBed, inject } from '@angular/core/testing';

import { QuizListService } from './quiz-list.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedService} from './shared.service';

describe('QuizListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[],
      imports: [HttpClientModule],
      providers: [QuizListService, SharedService]
    });
  });

  it('should be created', inject([QuizListService], (service: QuizListService) => {
    expect(service).toBeTruthy();
  }));
});
