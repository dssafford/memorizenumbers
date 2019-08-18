import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {interval, timer} from 'rxjs';
import {RANDOM_WORDS} from '../data/randomWords';
import * as find from 'lodash/find';
import {FormControl, Validators} from '@angular/forms';
import {TimerService} from '../service/timer.service';

@Component({
  selector: 'app-run-test',
  templateUrl: './run-test.component.html',
  styleUrls: ['./run-test.component.css']
})
export class RunTestComponent implements OnInit {
  name = 'Angular 6';
  statustext = '';
  private refreshInterval$ = interval(1000);

  chosenNumber = 4;
  ticks = 0;
  timeDelay: number = 1000;
  randomNumber = 0;
  timer = timer(2000, 1000);
  counter = 1;
  subscription1: any;
  subscription2: any;
  newDate: string;
  d = new Date();
  myChosenNumber: number = 0;
  model: any = {};
  isCounting: any;
  randomWords: any[] = [];
  myWord: string;

  ngOnInit() {
    this.subscription2 = this.timer.subscribe(x => {
      this.getRandomInt(0, 2000);
    });


  }
  constructor(private timerService: TimerService, private cdRef: ChangeDetectorRef) {

    this.newDate = this.timerService.dbTimestampFormatDate(this.d);
    // this.resetCounter();
    this.isCounting = true;
  }
getRandomInt(min, max) {
    // debugger
    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.myWord = this.getRandomWordResult(this.randomNumber);
    // now get the random word
    this.randomWords[this.counter] = this.myWord;
    this.statustext = this.myWord;

    // debugger
    let doug: string = Date.now().toLocaleString();

    this.newDate = this.timerService.dbTimestampFormatDate(this.d);

    console.log('get random = ' + this.randomWords[this.counter] + ' - this.counter = ' + this.counter +
      ' - ' + this.timerService.dbTimestampFormatDate(new Date()));

    console.log('Counter prior to if then = ' + this.counter);

    if (this.counter === this.chosenNumber - 1) {

      // console.log('timeDelay = ' + this.timeDelay);
      console.log('counter internal zzz=' + this.counter);


      setTimeout(() => {

          this.stop();
        },
        this.timeDelay);
    }
    this.counter = this.counter + 1;
    // console.log('counter=' + this.counter);
  }

  getRandomWordResult(inputNumber: number) {
    const q = find(RANDOM_WORDS, {id: Number(inputNumber)});
    if (q !== undefined) {
      console.log(q); // {name:'Dave',sex:male,age:34}
      return q.word;
    } else {
      return 'ERROR IN GetRandomWordsList';
    }
  }

  stop() {
    // this.refreshInterval$.();
    // this.subscription1.unsubscribe();
    console.log('IN STOP');
    this.subscription2.unsubscribe();
    this.isCounting = false;
    this.timerService.showRandomWords(this.randomWords);
  }
}
