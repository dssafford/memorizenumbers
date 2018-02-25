import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';


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

  constructor() {
  }


  ngOnInit() {
    this.subscription1 = this.timer.subscribe(t => this.ticks = t);
    this.subscription2 = this.timer.subscribe(x => {
      this.getRandomInt(1, 10);
    });
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

  ngOnDestroy() {
    this.stop();
  }
}
