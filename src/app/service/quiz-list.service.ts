import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ResultEntry} from '../model/ResultEntry';
import {map} from 'rxjs/operators';
import {Quiz} from '../model/quiz';

@Injectable()
export class QuizListService {

  api = 'http://localhost:8004/api/getSome';

  constructor(private http: HttpClient) {
  }

  getQuizList(): Observable<Quiz[]> {
    console.log('list below');

// debugger

    console.log(this.http.get('http://localhost:8004/api/getSome').toPromise());

    return (this.http.get<Quiz[]>(this.api));

  }

  findQuizzes(sortOrder = 'asc',
    pageNumber = 1, pageSize = 2):  Observable<ResultEntry[]> {

    console.log(this.http.get(this.api).toPromise());
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
    console.log(this.http.get(this.api).toPromise());

    return this.http.get(this.api, {
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
