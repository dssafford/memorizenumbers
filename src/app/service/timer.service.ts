import {Injectable} from '@angular/core';
import {ResultEntry} from '../model/ResultEntry';
import {HttpClient} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {Router} from '@angular/router';
import {Quiz} from '../model/quiz';

@Injectable()
export class TimerService {

  constructor(private http: HttpClient, private router: Router) {
  }

  randomNumber = 0;
  timer = timer(2000, 1000);
  d = new Date();
  chosenNumber: number;
  model: any = {};
  isCounting: any;
  questions: any[] = [];


  getRandomNumber(min,  max): number {
    // debugger
    return this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  }



  showQuestions(questions: any[]) {
    this.questions = questions;
    console.log('In timerService, length = '  + this.questions.length);
    this.router.navigate(['answer']);
  }

  showRandomWords(questions: any[]) {

    setTimeout(() => {
      this.questions = questions;
      console.log('In timerService, length = '  + this.questions.length);
      this.router.navigate(['answerWord']);
      }, 2000);
  }

  getQuestions(): ResultEntry[] {
    return this.questions;
  }

  createNewQuizEntry(quizEntry: Quiz) {
    console.log('in createNewEntry method');
    let myQuiz: Quiz;
    myQuiz = new Quiz();
    myQuiz.numberOfQuestions = quizEntry.numberOfQuestions;
    myQuiz.score = quizEntry.score;
    myQuiz.date_added = this.d;

    myQuiz.comments = quizEntry.comments;

    this.addNewQuiz(myQuiz);
  }

  addNewQuiz(myQuiz: Quiz) {
    return this.http
      .post('http://localhost:8004/api/Quiz', myQuiz)
      .toPromise()
      .then(response => response as Quiz);
      // .catch(this.handleError);
  }

  dbTimestampFormatDate(date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds;

    const strTime = hours + ':' + minutes + ':' + seconds;
    // console.log('hey adding this -' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '  ' + strTime);
    // debugger
    return (year + '-' + (month + 1) + '-' + day + '  ' + strTime).toString();
  }

  // private handleError(error: any): Promise<any> {
  //   console.error('ERROR OCCURRED TALKING TO SERVER' + error);
  //   return Promise.reject(error.message || error);
  // }


}
