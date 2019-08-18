import {Component, EventEmitter, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {TimerService} from '../service/timer.service';
import {Observable, of} from 'rxjs';
import {ResultEntry} from '../model/ResultEntry';
import {QuizListService} from '../service/quiz-list.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {
  questions: any[] = [];
  answers: any[] = [];
  resultEntry: ResultEntry;
  d = new Date();
  results: ResultEntry[];
  show: boolean = false;
  showButton: boolean = false;

  dataSource: AnswerDataSource;

  displayedColumns = ['id', 'question', 'answer', 'correct'];

  // @Input() questions: ResultEntry[];

  constructor(private quizService: QuizListService, private router: Router) {
  }

  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  someMethod() {
    this.myFocusTriggeringEventEmitter.emit(true);

  }

  ngOnInit() {

  }

  // showResults() {
  //   this.results = this.quizService.findAnswers(11);
  //   this.dataSource = new AnswerDataSource(this.results);
  // }

}

export class AnswerDataSource extends DataSource<any> {
  constructor(private answerResults: ResultEntry[]) {
    super();
  }
  connect(): Observable<ResultEntry[]> {
    return of(this.answerResults);
  }
  disconnect() {}

}
