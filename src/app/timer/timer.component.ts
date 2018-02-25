import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import {EntryItem} from '../model/entry-item';


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

  entry_in_progress: EntryItem;
  d = new Date();

  constructor() {
  }


  ngOnInit() {
    this.subscription1 = this.timer.subscribe(t => this.ticks = t);
    this.subscription2 = this.timer.subscribe(x => {
      this.getRandomInt(1, 10);
    });
    this.entry_in_progress = EntryItem.createBlank();
    this.entry_in_progress.Date_Added = this.displayFormatDate(this.d);
    this.entry_in_progress.Is_Active = 'active';
  }

  getRandomInt(min, max) {
    this.counter = this.counter + 1;
    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (this.counter === 10) {
      this.stop();
    }
  }

  stop() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  displayFormatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate() + '  ' + strTime;
  }

  ngOnDestroy() {
    this.stop();
  }
}
