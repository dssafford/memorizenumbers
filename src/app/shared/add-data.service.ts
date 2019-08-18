import { Injectable } from '@angular/core';
import {Quiz} from '../model/quiz';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  constructor(private http: HttpClient) { }


  addQuiz(currentQuiz: Quiz) {

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.http
      .post('http://localhost:8004' + '/api/Quiz', currentQuiz, {headers: headers})
      .toPromise()
      .then(response => response as Quiz);

  }


}
