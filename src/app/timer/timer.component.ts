import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';

import {TimerService} from '../service/timer.service';
import {ResultEntry} from '../model/ResultEntry';
import {AppRoutingModule} from '../app-routing.module';
import {ActivatedRoute, Router} from '@angular/router';

const HEROES = [
  {id: 1, name: 'Superman'},
  {id: 2, name: 'Batman'},
  {id: 5, name: 'BatGirl'},
  {id: 3, name: 'Robin'},
  {id: 4, name: 'Flash'}
];


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})


export class TimerComponent implements OnInit, OnDestroy {
  ticks = 0;
  randomNumber = 0;
  timer = Observable.timer(2000, 1000);
  counter = 0;
  subscription1: any;
  subscription2: any;
  newDate: string;
  d = new Date();
  list_setup_count: number;

  // numberList: Array<AnswerList> = new Array<AnswerList>();
  chosenNumber: number = 0;
  model: any = {};
  isCounting: any;
  questions: any[] = [];

  results: any[] = [];
  newResultEntry: ResultEntry;

  constructor(private timerService: TimerService, private router: Router) {
  }

  ngOnInit() {
    // this.question = HEROES;
  console.log('Im in the timer component .ngOnInit() method')
    this.newDate = this.timerService.dbTimestampFormatDate(this.d);

    //debugging only
    // this.chosenNumber = 3 ;

    this.resetCounter();
    this.isCounting = true;

    // For testing creating a new entry
    // let myEntry: ResultEntry;
    // // debugger
    // myEntry = new ResultEntry();
    // myEntry.question = 2;
    // myEntry.answer = 4;
    // myEntry.correct = false;
    // myEntry.date_added = this.newDate;
    // myEntry.comments = "eat me";
    //
    // // this.createNewEntry(myEntry);
    // this.timerService.addNewEntry(myEntry);
  }

  gotoAnswer() {
    [this.questions] = this.questions;
    this.router.navigate(['answer']);
  }
  resetCounter() {
    this.ticks = 0;
    this.randomNumber = 0;
    this.timer = Observable.timer(2000, 1000);
    this.counter = 0;
  }

  selectNumberPressed() {
    this.resetCounter();

    this.isCounting = true;
    this.chosenNumber = this.model.runNumber;
    // this.question = new Array(this.chosenNumber);
    // debugger


    this.subscription1 = this.timer.subscribe(t => this.ticks = t);
    this.subscription2 = this.timer.subscribe(x => {
      this.getRandomInt(0, 9);
    });




    // this.timerService.createAmswerList(this.questions);

  }

  // cancelPressed() {
  //
  //   this.router.navigateByUrl('home');
  // }
  // onSubmit(post: any): void {
  //   this.answers = post;
  //   // console.log('answer 0 = ' + post[0]);
  //   // console.log("answer 1 = " + post[1]);
  //   // console.log("answer 2 = " + post[2]);
  //   // // debugger
  //   // console.log('answers:', this.answers + '- post was ' + post);
  //   this.timerService.scoreEntries();
  //
  //   // Show results
  //   this.timerService.showResults();
  //   this.resetCounter();
  //   this.isCounting = true;
  // }



  getRandomInt(min, max) {

    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // this.numberList[this.counter] = new AnswerList(this.counter, this.randomNumber, this.entry_in_progress.Date_Added);
    this.questions[this.counter] = this.randomNumber;
    // debugger
    console.log('get random = ' + this.questions[this.counter] + ' - this.counter = ' + this.counter);



    if (this.counter == this.chosenNumber-1) {
      // debugger
      setTimeout(() => {
          this.stop();
        },
        1000);
      ;


    }
    this.counter = this.counter + 1;
  }

  stop() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.isCounting = false;
    // var i;
    // for (i = 1; i < this.numberList.length; i++) {
    //   console.log('final number = ' + this.numberList[i].Question);
    // }

    // Go to the Answer form
    // this.gotoAnswer();

    console.log("questions in timer component length = " + this.questions.length);
    this.timerService.showQuestions(this.questions);
  }



  ngOnDestroy() {
    console.log('this.chosennubmer = ' + this.chosenNumber);
    if (this.chosenNumber = 0) {
      this.stop();
    }

  }
}
