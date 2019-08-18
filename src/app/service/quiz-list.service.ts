import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResultEntry} from '../model/ResultEntry';

import {Quiz} from '../model/quiz';
import {SharedService} from './shared.service';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class QuizListService {

  api = 'http://localhost:8004/api/QuizList';

  constructor(private http: HttpClient, private shared: SharedService) {
  }

  getQuizList(): Observable<Quiz[]> {

    console.log(this.http.get(this.shared.dockerAPI + '/api/QuizList').toPromise());

    return (this.http.get<Quiz[]>(this.api));

  }

  getAnswerList(id: string): Observable<ResultEntry[]> {

    const myApi = this.shared.dockerAPI + '/api/getAnswers/' + id;
    return (this.http.get<ResultEntry[]>(myApi));

  }

  getData(): Observable<Quiz[]> {
    // const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get<Quiz[]>('http://localhost:8004/api/QuizList')
      .pipe(map((data: any) => data as Quiz[]));

  }

  findQuizzes(sortOrder = 'asc',
    pageNumber = 1, pageSize = 2):  Observable<ResultEntry[]> {

    // console.log(this.http.get(this.api).toPromise());
    // return this.http.get(this.api);

    return this.http.get(this.api, {
      params: new HttpParams()
        // .set('filter', filter)
        // .set('sortOrder', sortOrder)
        // .set('pageNumber', pageNumber.toString())
        // .set('pageSize', pageSize.toString())
    }).pipe(
      map(res =>  res['payload'])
    );
  }

  // findQuizzes(): Observable<ResultEntry[]> {
  //   return this.http.get(this.api, {
  //     params: new HttpParams()
  //       .set('pageNumber', '0')
  //       .set('pageSize', '10')
  //   }).pipe(
  //     map(res => res['payload'])
  //   );
  // }

  findAllQuizzes(): Observable<Quiz[]> {
    console.log(this.http.get(this.shared.dockerAPI + '/api/QuizList').toPromise());

    return this.http.get(this.shared.dockerAPI + '/api/QuizList', {
      params: new HttpParams()
        .set('pageNumber', '0')
        .set('pageSize', '10')
    }).pipe(
      map(res => res['payload'])
    );

  }



  getResultsList(results: ResultEntry[]) {

    return results;
  }
}
