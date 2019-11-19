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



import {TimerService} from '../service/timer.service';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  chosenNumber = new FormControl('', [
    Validators.required ]);
  ticks = 0;
  timeDelay: number = 1000;
  randomNumber = 0;
  timer = timer(2000, 1000);
  counter = 0;
  subscription1: any;
  subscription2: any;
  newDate: string;
  d = new Date();
  myChosenNumber: number = 0;
  model: any = {};
  isCounting: any;
  questions: any[] = [];
  hey = 4;

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
    this.ticks = 0;
    this.randomNumber = 0;
    this.timer = timer(2000, this.timeDelay);
    this.counter = 0;
  }

  // selectNumberPressed() {
  //   this.resetCounter();
  //   this.isCounting = true;
  //   this.timeDelay = 1000;
  //   this.myChosenNumber = this.model.runNumber;
  //   this.subscription1 = this.timer.subscribe(t => this.ticks = t);
  //   this.subscription2 = this.timer.subscribe(x => {
  //     this.getRandomInt(0, 9);
  //   });
  //
  // }

  onSubmit(form: NgForm) {
    this.resetCounter();
    this.isCounting = true;
    this.myChosenNumber = form.controls['chosenNumber'].value;
    this.subscription1 = this.timer.subscribe(t => this.ticks = t);
    this.subscription2 = this.timer.subscribe(x => {
      this.getRandomInt(0, 9);
    });
  }

  getRandomInt(min, max) {
    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.questions[this.counter] = this.randomNumber;
    // debugger
    let doug: string = Date.now().toLocaleString();

    this.newDate = this.timerService.dbTimestampFormatDate(this.d);

    console.log('get random = ' + this.questions[this.counter] + ' - this.counter = ' + this.counter +
      ' - ' + this.timerService.dbTimestampFormatDate(new Date()));

    if (this.counter === this.myChosenNumber-2) {
      // console.log('timeDelay = ' + this.timeDelay);

      setTimeout(() => {
          this.stop();
        },
        this.timeDelay);
    }
    this.counter = this.counter + 1;
    console.log('counter=' + this.counter);
  }

  stop() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.isCounting = false;
    this.timerService.showQuestions(this.questions);
  }
  ngOnDestroy() {
    // console.log('this.chosennubmer = ' + this.myChosenNumber);
    if (this.myChosenNumber = 0) {
      this.stop();
    }
  }
}
