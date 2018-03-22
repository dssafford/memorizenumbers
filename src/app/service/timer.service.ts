import {Injectable} from '@angular/core';
import {ResultEntry} from '../model/ResultEntry';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppRoutingModule} from '../app-routing.module';
import {Router} from '@angular/router';

@Injectable()
export class TimerService {

  constructor(private http: HttpClient, private router: Router) {
  }

  ticks = 0;
  randomNumber = 0;
  timer = Observable.timer(2000, 1000);
  counter = 0;
  subscription1: any;
  subscription2: any;
  newDate: string;
  d = new Date();
  list_setup_count: number;

  // numberList: Array<AnswerList> = new Array<AnswerList>();
  chosenNumber: number;
  model: any = {};
  isCounting: any;
  questions: any[] = [];
  answers: any[] = [];
  results: any[] = [];
  newResultEntry: ResultEntry;

  showQuestions(questions: any[]) {
    this.questions = questions;
    console.log('In timerService, length = '  + this.questions.length);
    this.router.navigate(['answer']);
  }

  getQuestions(): ResultEntry[] {

    return this.questions;

  }

  createNewEntry(resultEntry: ResultEntry) {

    console.log('in createNewEntry method');
    let myEntry: ResultEntry;
    myEntry = new ResultEntry();
    myEntry.question = resultEntry.question;
    myEntry.answer = resultEntry.answer;
    myEntry.correct = resultEntry.correct;
    myEntry.date_added = this.dbTimestampFormatDate(this.d);
    myEntry.comments = resultEntry.comments;

    this.addNewEntry(myEntry);

    // this.entry_in_progress.Date_Added = this.dbTimestampFormatDate(this.d);
    // console.log(this.entry_in_progress);

    // format date for mysql timestamp  YYYY-MM-DD HH:MM:SS

    // this.entryService.addNewEntry(this.entry_in_progress)
    //   .then((entryItem) => {
    //     this.router.navigateByUrl('home');
    //   });
  }


  addNewEntry(resultEntry: ResultEntry) {
    return this.http
      .post('http://localhost:8004' + '/api/Quiz', resultEntry)
      .toPromise()
      .then(response => response as ResultEntry)
      .catch(this.handleError);
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
    console.log('hey adding this -' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '  ' + strTime);
    // debugger
    return (day + '-' + (month + 1) + '-' + year + '  ' + strTime).toString();
  }


  private handleError(error: any): Promise<any> {
    console.error('ERROR OCCURRED TALKING TO SERVER' + error);
    return Promise.reject(error.message || error);
  }


}
