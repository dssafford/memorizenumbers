import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ResultEntry} from '../model/ResultEntry';

@Injectable()
export class QuizListService {

  api = 'http://localhost:8004/api/QuizList';

  constructor(private http: HttpClient) {
  }

  getQuizList(): Observable<ResultEntry[]> {
    console.log('list below');

// debugger
    console.log(this.http.get('http://localhost:8004/api/QuizList').toPromise());

    return (this.http.get<ResultEntry[]>(this.api));

  }

  getResultsList(results: ResultEntry[]) {

    return results;
  }
}
