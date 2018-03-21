import { Component, OnInit } from '@angular/core';
import {QuizListService} from '../service/quiz-list.service';
import {Observable} from 'rxjs/Observable';
import {ResultEntry} from '../model/ResultEntry';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  title = 'Quiz List Directory';

  quizzes: ResultEntry[];

  displayedColumns = ['id', 'question', 'answer', 'correct', 'date_added', 'comments'];


  dataSource = new QuizDataSource(this.quizlistService);


  constructor(private quizlistService: QuizListService) { }

  ngOnInit() {
    console.log('in getQuizList');

    this.quizlistService.getQuizList();
  }

  getQuizzes(): Observable<ResultEntry[]> {

    return this.quizlistService.getQuizList();

  }
}
export class QuizDataSource extends DataSource<any> {
  constructor(private quizListService: QuizListService) {
    super();
  }
  connect(): Observable<ResultEntry[]> {
    return this.quizListService.getQuizList();
  }
  disconnect() {}

}
