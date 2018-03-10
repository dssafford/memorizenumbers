import { Injectable } from '@angular/core';
import {ResultEntry} from '../model/ResultEntry';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TimerService {

  constructor(private http: HttpClient) { }

  addNewEntry(resultEntry: ResultEntry) {
    return this.http
      .post('http://localhost:8004' + '/api/Quiz', resultEntry)
      .toPromise()
      .then(response => response as ResultEntry)
      .catch(this.handleError);
  }




  private handleError(error: any): Promise<any> {
    console.error('ERROR OCCURRED TALKING TO SERVER' + error);
    return Promise.reject(error.message || error);
  }


}
