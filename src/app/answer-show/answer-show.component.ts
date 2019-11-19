import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {ResultEntry} from '../model/ResultEntry';
import {DataSource} from '@angular/cdk/collections';

import {AnswerShowService} from '../service/answer-show.service';
import {Router} from '@angular/router';
import {Answer} from '../model/Answer';
import {Observable, of} from 'rxjs/index';

@Component({
  selector: 'app-answer-show',
  templateUrl: './answer-show.component.html',
  styleUrls: ['./answer-show.component.css']
})
export class AnswerShowComponent implements OnInit, AfterViewInit {
  message: string;

  shitDataSource: AnswerDataSource;
  answerResults: Answer[] = [];
  @ViewChild('crapInput', { static: true }) vc: ElementRef;

  displayedColumns = ['question', 'answer', 'correct', 'comments'];

  constructor(public answerShow: AnswerShowService,
              private router: Router) { }

  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  someMethod() {
    this.myFocusTriggeringEventEmitter.emit(true);
  }

  ngAfterViewInit() {
    console.log('in afterviewinit');
    this.vc.nativeElement.valueOf().focus();

    // this.someInput.nativeElement.value = 'Anchovies! 🍕🍕';
  }
  ngOnInit() {

    this.answerShow.currentMessage.subscribe(message => this.message = message);
    this.answerShow.myArray.subscribe(data => this.answerResults = data);

    console.log('in answer-show this.answerResults = ' + this.answerResults);

    this.shitDataSource = new AnswerDataSource(this.answerResults);

    console.log('in answer-show dataSource = ' + this.shitDataSource);

    this.someMethod();
  }

  return() {
    this.router.navigateByUrl('home');
  }

  onSubmit() {
    this.router.navigateByUrl('quiz');
  }

  newMessage() {
    this.answerShow.changeMessage('Hello from Sibling');
  }

  newArray() {
    this.answerShow.changeArray(this.answerShow.createSampleAnswers());
  }

}

export class AnswerDataSource extends DataSource<any> {
  constructor(public answerResults: Answer[]) {
    super();
  }
  connect(): Observable<ResultEntry[]> {
    return of(this.answerResults);
  }
  disconnect() {}

}
