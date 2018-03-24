import {AfterViewInit, Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ResultEntry} from '../model/ResultEntry';
import {TimerService} from '../service/timer.service';
import {Router} from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, AfterViewInit {
  questions: any[] = [];
  answers: any[] = [];
  resultEntry: ResultEntry;
  d = new Date();
  results: ResultEntry[];
  show: boolean = false;
  showButton: boolean = false;

  dataSource: ResultsDataSource;

  displayedColumns = ['id', 'question', 'answer', 'correct'];

  // @Input() questions: ResultEntry[];

  constructor(private timerService: TimerService, private router: Router) {
  }

  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  someMethod() {
    this.myFocusTriggeringEventEmitter.emit(true);

  }

  ngOnInit() {
    if(this.answers.length == 0) {
      this.showButton = false;
    }
    console.log('Im in the answer component .ngOnInit() method')
    console.log('found questions, length = ' + this.timerService.getQuestions().length);

    this.questions = this.timerService.getQuestions();
    this.someMethod();
  }

  ngAfterViewInit() { // ngOnInit is NOT the right lifecycle event for this.

    this.someMethod();
  }


  onSubmit(post: any): void {
    this.answers = post;
    this.createResults();

    // Show results
    this.showResults();


  }

   createResults(): ResultEntry[] {
    this.results = new Array < ResultEntry >();

    for (let i = 0; i < this.questions.length; i++) {

      this.resultEntry  = new ResultEntry();
      this.resultEntry.id = i;
      this.resultEntry.question = this.questions[i];
      this.resultEntry.answer = this.answers[i];
      if (this.resultEntry.question == this.resultEntry.answer) {
        this.resultEntry.correct = true;
      } else {
        this.resultEntry.correct = false;
      }
      this.resultEntry.date_added = this.timerService.dbTimestampFormatDate(this.d);
      // debugger
      this.resultEntry.comments = 'chosen ' + this.questions.length;
      this.results[i] = this.resultEntry;
     }
     return this.results;

  }

  showResults() {
    var i;
    console.log('final results ========================== = ');
    for (i = 0; i < this.results.length; i++) {
      console.log('Question: ' + this.results[i].question + ' - Answer; ' + this.results[i].answer + ' - Result= ' + this.results[i].correct);


      this.timerService.createNewEntry(this.results[i]);
    }
    this.show = true;
    // this.router.navigateByUrl('showResult');
    // debugger
    this.dataSource = new ResultsDataSource(this.results);
  }

}

export class ResultsDataSource extends DataSource<any> {
  constructor(private answerResults: ResultEntry[]) {
    super();
  }
  connect(): Observable<ResultEntry[]> {
    return Observable.of(this.answerResults);
  }
  disconnect() {}

}
