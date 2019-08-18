
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from 'rxjs';
import {catchError, finalize} from "rxjs/operators";
import {ResultEntry} from '../model/ResultEntry';
import {QuizListService} from './quiz-list.service';

export class QuizListDataSource implements DataSource<ResultEntry> {

  private quizSubject = new BehaviorSubject<ResultEntry[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private quizListService: QuizListService) {

  }

  loadQuizzes(filter:string,
              sortDirection:string,
              pageIndex:number,
              pageSize:number) {

    this.loadingSubject.next(true);

    this.quizListService.findQuizzes(sortDirection,
      pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(lessons => this.quizSubject.next(lessons));

  }

  connect(collectionViewer: CollectionViewer): Observable<ResultEntry[]> {
    console.log('Connecting data source');
    return this.quizSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.quizSubject.complete();
    this.loadingSubject.complete();
  }

}

