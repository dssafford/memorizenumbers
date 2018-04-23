import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';

import {TimerService} from '../service/timer.service';
import {ResultEntry} from '../model/ResultEntry';
import {AppRoutingModule} from '../app-routing.module';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, NgForm, Validators} from '@angular/forms';

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


export class TimerComponent implements OnInit, AfterViewInit, OnDestroy {
  chosenNumber = new FormControl('', [
    Validators.required ]);
  ticks = 0;
  timeDelay: number = 1000;
  randomNumber = 0;
  timer = Observable.timer(2000, 1000);
  counter = 0;
  subscription1: any;
  subscription2: any;
  newDate: string;
  d = new Date();

  // numberList: Array<AnswerList> = new Array<AnswerList>();
  myChosenNumber: number = 0;
  model: any = {};
  isCounting: any;
  questions: any[] = [];

  @ViewChild('crapInput') vc: ElementRef;
  @ViewChild('someInput') someInput: ElementRef;



  ngAfterViewInit() {
    console.log('in afterviewinit');
    this.vc.nativeElement.valueOf().focus();

    // this.someInput.nativeElement.value = 'Anchovies! 🍕🍕';
  }

  constructor(private timerService: TimerService, private router: Router) {
  }

  ngOnInit() {
    // console.log('Im in the timer component .ngOnInit() method')
    this.newDate = this.timerService.dbTimestampFormatDate(this.d);
    this.resetCounter();
    this.isCounting = true;

  }

  // gotoAnswer() {
  //   [this.questions] = this.questions;
  //   this.router.navigate(['answer']);
  // }
  resetCounter() {
    this.ticks = 0;
    this.randomNumber = 0;
    this.timer = Observable.timer(2000, 1000);
    this.counter = 0;
  }

  selectNumberPressed() {
    this.resetCounter();

    this.isCounting = true;
    this.myChosenNumber = this.model.runNumber;
    this.subscription1 = this.timer.subscribe(t => this.ticks = t);
    this.subscription2 = this.timer.subscribe(x => {
      this.getRandomInt(0, 9);
    });

  }

  // cancelPressed() {
  //
  //   this.router.navigateByUrl('home');
  // }


  onSubmit(form: NgForm) {
    console.log(form.value);
    // console.log('value of chosenNumber = ' + form.controls['doug'].value);

    this.resetCounter();

    this.isCounting = true;
    this.myChosenNumber = form.controls['chosenNumber'].value;

    // this.question = new Array(this.chosenNumber);
    // debugger

    this.subscription1 = this.timer.subscribe(t => this.ticks = t);
    this.subscription2 = this.timer.subscribe(x => {
      this.getRandomInt(0, 9);
    });
  }

  getRandomInt(min, max) {

    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // this.numberList[this.counter] = new AnswerList(this.counter, this.randomNumber, this.entry_in_progress.Date_Added);
    this.questions[this.counter] = this.randomNumber;
    // debugger
    console.log('get random = ' + this.questions[this.counter] + ' - this.counter = ' + this.counter);



    if (this.counter === this.myChosenNumber - 1) {
      // debugger
      setTimeout(() => {
          this.stop();
        },
        this.timeDelay);
      ;


    }
    this.counter = this.counter + 1;
  }

  stop() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.isCounting = false;

    console.log("questions in timer component length = " + this.questions.length);
    this.timerService.showQuestions(this.questions);
  }



  ngOnDestroy() {
    console.log('this.chosennubmer = ' + this.myChosenNumber);
    if (this.myChosenNumber = 0) {
      this.stop();
    }

  }
}
