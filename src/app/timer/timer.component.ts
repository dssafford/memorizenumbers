import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';

import {TimerService} from '../service/timer.service';
import {ResultEntry} from '../model/ResultEntry';

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
  chosenNumber: number;
  model: any = {};
  isCounting: any;
  questions: any[] = [];
  answers: any[] = [];
  results: any[] = [];
  newResultEntry: ResultEntry;

  constructor(private timerService: TimerService) {
  }

  ngOnInit() {
    // this.question = HEROES;

    this.newDate = this.dbTimestampFormatDate(this.d);




    //debugging only
    // this.chosenNumber = 3 ;
    this.isCounting = true;

    // For testing creating a new entry
    let myEntry: ResultEntry;
    debugger
    myEntry = new ResultEntry();
    myEntry.question = 2;
    myEntry.answer = 4;
    myEntry.correct = false;
    myEntry.date_added = this.newDate;
    myEntry.comments = "eat me";

    // this.createNewEntry(myEntry);
    this.timerService.addNewEntry(myEntry);
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


    // this.entry_in_progress = EntryItem.createBlank();
    // this.question[0] = this.dbTimestampFormatDate(this.d);

    // debugger
    // this.entry_in_progress.Is_Active = 'active';
  }

  scoreEntries() {
    var i;
    var result;

    // debugger
    this.results = Array<ResultEntry>();


    for (i = 0; i < this.questions.length; i++) {
      this.newResultEntry = new ResultEntry();
      this.newResultEntry.question = this.questions[i];
      this.newResultEntry.answer = this.answers[i];
      this.newResultEntry.date_added = this.dbTimestampFormatDate(this.d);

      console.log('question =' + this.questions[i] + '- answer =' + this.answers[i]);

      if (this.questions[i] == this.answers[i]) {
        result = true;
        console.log('true');
        this.newResultEntry.correct = true;
      } else {
        result = false;
        console.log('false');
        this.newResultEntry.correct = false;
      }
      this.results.push(this.newResultEntry);
    }

     // debugger

  }
  createNewEntry(resultEntry: ResultEntry) {

    console.log('in createNewEntry method');
    let myEntry: ResultEntry;
    myEntry = new ResultEntry();
    myEntry.question = resultEntry.question;
    myEntry.answer = resultEntry.answer;
    myEntry.correct = resultEntry.correct;
    myEntry.date_added = this.dbTimestampFormatDate(this.d);
    myEntry.comments =  this.chosenNumber +  '- chosen';

    this.timerService.addNewEntry(myEntry);

    // this.entry_in_progress.Date_Added = this.dbTimestampFormatDate(this.d);
    // console.log(this.entry_in_progress);

    // format date for mysql timestamp  YYYY-MM-DD HH:MM:SS

    // this.entryService.addNewEntry(this.entry_in_progress)
    //   .then((entryItem) => {
    //     this.router.navigateByUrl('home');
    //   });
  }
  // cancelPressed() {
  //
  //   this.router.navigateByUrl('home');
  // }
  onSubmit(post: any): void {
    this.answers = post;
    // console.log('answer 0 = ' + post[0]);
    // console.log("answer 1 = " + post[1]);
    // console.log("answer 2 = " + post[2]);
    // // debugger
    // console.log('answers:', this.answers + '- post was ' + post);
    this.scoreEntries();

    // Show results
    this.showResults();
    this.resetCounter();
    this.isCounting = true;
  }

  showResults() {
      var i;
    console.log('final results ========================== = ');
      for (i = 0; i < this.questions.length; i++) {
        console.log('Question: ' + this.results[i].question + ' - Answer; ' + this.results[i].answer + ' - Result= ' + this.results[i].result);
        this.createNewEntry(this.results[i]);
      }
  }

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

  }

  dbTimestampFormatDate(date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds;

    const strTime = hours + ':' + minutes + ':' + seconds;
    console.log('hey adding this -' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '  ' + strTime);
    // debugger
    return (day + '-' + (month + 1) + '-' + year + '  ' + strTime).toString();
  }

  ngOnDestroy() {
    this.stop();
  }
}
