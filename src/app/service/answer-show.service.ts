import {Injectable, OnInit} from '@angular/core';
import {Answer} from '../model/Answer';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AnswerShowService implements OnInit {

  constructor() { }

  ngOnInit() {
     // this.myArray = this.createSampleAnswers();
  }
  // this.currentQuiz.answers = new Array<Answer>();
  private messageSource = new BehaviorSubject<string>('shit from service message');


  private arraySource = new BehaviorSubject < Answer[] > (new Array<Answer>());

  currentMessage = this.messageSource.asObservable();
  myArray = this.arraySource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeArray(myAnswers: Answer[]) {
    this.arraySource.next(myAnswers);
  }

  createSampleAnswers(): Answer[] {
    const answerResults: Answer[] = [];

    const myAnswer1: Answer = new Answer();
    myAnswer1.question = 1;
    myAnswer1.answer = 1;
    myAnswer1.correct = true;
    myAnswer1.comments = 'comments in answer here';

    const myAnswer2: Answer = new Answer();
    myAnswer2.question = 2;
    myAnswer2.answer = 2;
    myAnswer2.correct = true;
    myAnswer2.comments = 'comments in answer here';
    // myAnswer2.setQuiz(quiz);

    answerResults.push(myAnswer1);
    answerResults.push(myAnswer2);

    return answerResults;
  }

}


