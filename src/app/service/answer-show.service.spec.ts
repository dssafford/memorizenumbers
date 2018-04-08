import { TestBed, inject } from '@angular/core/testing';

import { AnswerShowService } from './answer-show.service';

describe('AnswerShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerShowService]
    });
  });

  it('should be created', inject([AnswerShowService], (service: AnswerShowService) => {
    expect(service).toBeTruthy();
  }));
});
