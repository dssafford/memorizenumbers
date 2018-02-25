import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import {EntryItem} from '../model/entry-item';
import {AnswerList} from '../model/answer-list';


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
  entry_in_progress: EntryItem;
  d = new Date();

  numberList: Array<AnswerList> = new Array<AnswerList>();

  constructor() {}

  ngOnInit()  {
    this.onAction1();
    this.newDate = this.dbTimestampFormatDate(this.d);

  }

  resetCounter() {
    this.ticks = 0;
    this.randomNumber = 0;
    this.timer = Observable.timer(2000, 1000);
    this.counter = 0;
  }

  onAction1() {
    this.resetCounter();
    this.subscription1 = this.timer.subscribe(t => this.ticks = t);
    this.subscription2 = this.timer.subscribe(x => {
      this.getRandomInt(0, 9);
    });
    this.entry_in_progress = EntryItem.createBlank();
    this.entry_in_progress.Date_Added = this.dbTimestampFormatDate(this.d);

    // debugger
    this.entry_in_progress.Is_Active = 'active';
  }

  getRandomInt(min, max) {
    this.counter = this.counter + 1;
    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.numberList[this.counter] = new AnswerList(this.counter, this.randomNumber, this.entry_in_progress.Date_Added);
    this.entry_in_progress.Comments = this.entry_in_progress.Comments + ' the dude abides = ';
    if (this.counter === 10) {
      this.stop();
    }
  }

  stop() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  dbTimestampFormatDate(date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth();

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds;

    const strTime = hours + ':' + minutes + ':' + seconds;
    console.log('hey adding this -' + date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate() + '  ' + strTime);
    // debugger
    return (year + '-' + (month + 1) + '-' + day + '  ' + strTime).toString();
  }
  ngOnDestroy() {
    this.stop();
  }
}
