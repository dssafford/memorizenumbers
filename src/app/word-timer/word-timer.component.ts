import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {Observable, timer} from 'rxjs';
import * as find from 'lodash/find';

import {shuffle} from 'lodash';


import {TimerService} from '../service/timer.service';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {RANDOM_WORDS} from '../data/randomWords';

@Component({
  selector: 'app-word-timer',
  templateUrl: './word-timer.component.html',
  styleUrls: ['./word-timer.component.css']
})

export class WordTimerComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  chosenNumber = new FormControl('', [
    Validators.required]);
  timeDelay: number = 1000;
  randomNumber = 0;
  timer = timer(2000, 1000);
  counter = 0;
  subscription2: any;
  newDate: string;
  d = new Date();
  myChosenNumber: number = 4;
  model: any = {};
  isCounting: any;
  randomWords: any[] = [];
  myWord: string;
  showMessage: boolean = false;
  runonce: boolean = true;

  @ViewChild('crapInput', { static: true }) vc: ElementRef;

  // @ViewChild('someInput') someInput: ElementRef;

  ngAfterViewInit() {
    // console.log('in afterviewinit');
    this.vc.nativeElement.valueOf().focus();
    // this.vc.nativeElement.valueOf().floatLabel = 'always';
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  constructor(private timerService: TimerService, private cdRef: ChangeDetectorRef) {

    this.newDate = this.timerService.dbTimestampFormatDate(this.d);
    this.resetCounter();
    this.isCounting = true;
  }

  ngOnInit() {
    // console.log('Im in the timer component .ngOnInit() method')


  }

  resetCounter() {
    this.randomNumber = 0;
    this.timer = timer(2000, this.timeDelay);
    this.counter = 0;
  }


  onSubmit(form: NgForm) {
    // debugger

    if (this.runonce) {
      this.runonce = false;

      this.resetCounter();
      this.isCounting = true;
      this.myChosenNumber = form.controls['chosenNumber'].value;

      this.subscription2 = this.timer.subscribe(x => {
        this.getRandomInt(0, 2000);
      });
    }
    // setTimeout(() => {
    //   console.log('in setTimeout counter= ' + this.counter);
    //   this.counter++;
    //   if (this.counter === this.myChosenNumber - 1) {
    //
    //     this.getRandomInt(0, 2000);
    //   } else {
    //     this.stop();
    //   }
    // }, this.timeDelay);

  }

  // this.subscription1 = this.timer.subscribe(t => this.ticks = t);
  // this.subscription2 = this.timer.subscribe(x => {
  //   this.getRandomInt(0, 2000);
  // });


  getRandomInt(min, max) {
    // debugger
    this.showMessage = true;
    if (this.counter === this.myChosenNumber - 1) {
      setTimeout(() => {
          this.stop();
        },
        this.timeDelay);
    }

    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.myWord = this.getRandomWordResult(this.randomNumber);
    // now get the random word
    this.randomWords[this.counter] = this.myWord;

    // debugger
    let doug: string = Date.now().toLocaleString();

    this.newDate = this.timerService.dbTimestampFormatDate(this.d);

    console.log('get random = ' + this.randomWords[this.counter] + ' - this.counter = ' + this.counter +
      ' - ' + this.timerService.dbTimestampFormatDate(new Date()));

    // console.log('Counter prior to if then = ' + this.counter);


    this.counter = this.counter + 1;
    // console.log('counter=' + this.counter);
  }

  getRandomWordResult(inputNumber: number) {
    const q = find(RANDOM_WORDS, {id: Number(inputNumber)});
    if (q !== undefined) {
      // console.log(q); // {name:'Dave',sex:male,age:34}
      return q.word;
    } else {
      return 'ERROR IN GetRandomWordsList';
    }
  }

  stop() {
    console.log('IN STOP');

    // setTimeout(() => {
        this.subscription2.unsubscribe();
        this.isCounting = false;
        this.showMessage = false;
        this.timerService.showRandomWords(this.randomWords);

      // },
      // this.timeDelay);
  }


  ngOnDestroy() {
    // console.log('this.chosennumber = ' + this.myChosenNumber);
    if (this.myChosenNumber = 0) {
      this.stop();
    }
  }
}
