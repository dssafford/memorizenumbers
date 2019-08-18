import {AfterViewInit, Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ResultEntry} from '../model/ResultEntry';
import {TimerService} from '../service/timer.service';
import {Router} from '@angular/router';

import {Quiz} from '../model/quiz';
import {Answer} from '../model/Answer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AnswerShowService} from '../service/answer-show.service';
import {LORAYNE_LEARNING_DATA} from '../data/lorayneNumbers';

import * as find from 'lodash/find';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit, AfterViewInit {
  questions: any[] = [];
  answers: any = [];
  newAnswers: Answer[] = [];
  // myAnswers: Answer[] = [];
  resultEntry: ResultEntry;
  d = new Date();
  results: ResultEntry[];
  show: boolean = false;
  showButton: boolean = false;
  currentQuiz: Quiz;
  currentAnswer: Answer;
  mystr: string;

  returnAnswer: string;
  message: string;
  myAnswers: Answer[];


  // dataSource: ResultsDataSource;

  displayedColumns = ['id', 'question', 'answer', 'correct'];

  // @Input() questions: ResultEntry[];

  constructor(private timerService: TimerService, private router: Router,
              private http: HttpClient, private answerShow: AnswerShowService) {
  }

  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  someMethod() {
    this.myFocusTriggeringEventEmitter.emit(true);
  }

  ngOnInit() {
    this.answerShow.currentMessage.subscribe(message => this.message = message);
    this.answerShow.myArray.subscribe(data => this.myAnswers = data);


    if(this.answers.length === 0) {
      this.showButton = false;
    }
    // console.log('Im in the answer component .ngOnInit() method')
    // console.log('found questions, length = ' + this.timerService.getQuestions().length);

    this.questions = this.timerService.getQuestions();

    this.someMethod();
  }

  ngAfterViewInit() { // ngOnInit is NOT the right lifecycle event for this.

    this.someMethod();
  }

  onSubmit(post: any): void {
    // get info from form submit
    this.answers = post;

    // Set up Results Quiz and Answer List
    this.createResults();

    this.router.navigateByUrl('showResult');

  }

  return() {
    this.router.navigateByUrl('home');
  }

  quizAgain() {
    this.router.navigateByUrl('quiz');
  }

   createResults() {
// debugger
    let numCorrect: number = 0;
    let numIncorrect: number = 0;
    let finalNumber: string = '';

    // set up quiz
     this.currentQuiz = new Quiz();

     this.currentQuiz.numberOfQuestions = this.questions.length;
     this.currentQuiz.date_added = new Date();
     this.currentQuiz.comments = 'added from answer component';


    // Create Answers Array
    this.newAnswers = new Array < Answer >();
    for( let i = 0; i < this.questions.length; i++) {
      finalNumber = finalNumber + this.questions[i];
     }

     // debugger
     // Get text answer for final number
     this.returnAnswer = this.getTextAnswer(finalNumber);

    // console.log('***** hey, the name is ' + this.returnAnswer);

    for (let i = 0; i < this.questions.length; i++) {

      this.currentAnswer  = new Answer();
      // this.currentAnswer.id = i;
      this.currentAnswer.question = this.questions[i];
      this.currentAnswer.answer = this.answers[i];

      if (this.currentAnswer.question == this.currentAnswer.answer) {
        this.currentAnswer.correct = true;
        numCorrect++;
      } else {
        this.currentAnswer.correct = false;
        numIncorrect++;
      }


      // debugger
      this.currentAnswer.comments = 'chosen ' + finalNumber + '-' + this.returnAnswer;

      this.newAnswers[i] = this.currentAnswer;

      // this.currentQuiz.answers.push(this.currentAnswer);
     }

     // get the quiz info
     this.currentQuiz.score = this.getScore(numCorrect, numIncorrect); //this.getScore(numCorrect, numIncorrect);


     this.currentQuiz.answers = new Array<Answer>();
     for (let j = 0; j < this.questions.length; j++) {
       this.currentQuiz.answers.push(this.newAnswers[j]);
     }

     this.mystr = JSON.stringify(this.currentQuiz);
     // console.log(this.mystr);

     const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
     this.http
       .post('http://localhost:8004' + '/api/Quiz', this.currentQuiz, {headers: headers})
       .toPromise()
       .then(response => response as Quiz);

     this.changeAnswerArray();

   }


  getTextAnswer(finalAnswer: string): string {
    const finalAnswerLength = finalAnswer.length;
    // console.log('length of string ' + finalAnswer + ' - ' + finalAnswerLength);

    if(finalAnswerLength === 1) {
      console.log('## Final - length of string ' + finalAnswer + ' - ' + finalAnswerLength);
    } else if (finalAnswerLength === 2) {
      console.log('## Final - length of string ' + finalAnswer + ' - ' + finalAnswerLength);
    }else if (finalAnswerLength === 3) {
      console.log('## Final - length of string ' + finalAnswer + ' - ' + finalAnswerLength);
    }else if (finalAnswerLength === 4) {
        let firstString =  finalAnswer.substr(0, 2);
        let secondString = finalAnswer.substr(2, 2);
        firstString = this.getLorayneResult(parseInt(firstString));
        secondString = this.getLorayneResult(parseInt(secondString));
        console.log('the two strings are ' + firstString + '-' + secondString);
      return 'the two string are ' + firstString + '-' + secondString;
    }else if (finalAnswerLength === 5) {
      console.log('## Final - length of string ' + finalAnswer + ' - ' + finalAnswerLength);
    }else if (finalAnswerLength === 6) {
      let firstString =  finalAnswer.substr(0, 2);
      let secondString = finalAnswer.substr(2, 2);
      let thirdString = finalAnswer.substr(4, 2);
      firstString = this.getLorayneResult(parseInt(firstString));
      secondString = this.getLorayneResult(parseInt(secondString));
      thirdString = this.getLorayneResult(parseInt(secondString));
      console.log('the two strings are ' + firstString + '-' + secondString + '-' + thirdString);
    }else if (finalAnswerLength === 7) {
      console.log('## Final - length of string ' + finalAnswer + ' - ' + finalAnswerLength);
    }else if (finalAnswerLength === 8) {
      let firstString =  finalAnswer.substr(0, 2);
      let secondString = finalAnswer.substr(2, 2);
      let thirdString = finalAnswer.substr(4, 2);
      let forthString = finalAnswer.substr(6,2);

      firstString = this.getLorayneResult(parseInt(firstString));
      secondString = this.getLorayneResult(parseInt(secondString));
      thirdString = this.getLorayneResult(parseInt(secondString));
      forthString = this.getLorayneResult(parseInt(forthString));
      console.log('the two strings are ' + firstString + '-' + secondString + '-' + thirdString + '-' + forthString);
    }else if (finalAnswerLength === 9) {
      console.log('## Final - length of string ' + finalAnswer + ' - ' + finalAnswerLength);
    } else if (finalAnswerLength === 10) {
      let firstString =  finalAnswer.substr(0, 2);
      let secondString = finalAnswer.substr(2, 2);
      let thirdString = finalAnswer.substr(4, 2);
      let forthString = finalAnswer.substr(6,2);
      let fifthString = finalAnswer.substr(8,2);
      firstString = this.getLorayneResult(parseInt(firstString));
      secondString = this.getLorayneResult(parseInt(secondString));
      thirdString = this.getLorayneResult(parseInt(secondString));
      forthString = this.getLorayneResult(parseInt(forthString));
      fifthString = this.getLorayneResult(parseInt(forthString));
      console.log('the two strings are ' + firstString + '-' + secondString + '-' + thirdString + '-' + forthString + '-' + fifthString);
    }

    return 'ERROR IN ANSWER-GET TEXT ANSWER';
   }

   getLorayneResult(inputNumber: number) {
     let q = find(LORAYNE_LEARNING_DATA, {number: Number(inputNumber)});
     if ( q !== undefined) {
       console.log(q); // {name:'Dave',sex:male,age:34}
       return q.name;
     } else {
       return 'ERROR IN GETLORAYNERESULT';
     }
   }


  // todo wow what here
  // todo-me dude

//  todo fix this below to add questions then #answers


  getScore(numCorrect: number, numIncorrect: number): number {

    return (numCorrect / (numCorrect + numIncorrect)) * 100;
  }

  changeAnswerArray() {
    this.answerShow.changeArray(this.newAnswers);
  }
}
