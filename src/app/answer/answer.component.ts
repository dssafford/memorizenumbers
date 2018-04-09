import {AfterViewInit, Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ResultEntry} from '../model/ResultEntry';
import {TimerService} from '../service/timer.service';
import {Router} from '@angular/router';
import 'rxjs/add/observable/of';
import {Quiz} from '../model/quiz';
import {Answer} from '../model/Answer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AnswerShowService} from '../service/answer-show.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, AfterViewInit {
  questions: any[] = [];
  answers: any = [];
  newAnswers: Answer[] = [];
  // myAnswers: Answer[] = [];
  resultEntry: ResultEntry;
  d = new Date();
  results: ResultEntry[];
  show: boolean = false;
  showButton: boolean = false;
  currentQuiz: Quiz;
  currentAnswer: Answer;
  mystr: string;


  message: string;
  myAnswers: Answer[];


  // dataSource: ResultsDataSource;

  displayedColumns = ['id', 'question', 'answer', 'correct'];

  // @Input() questions: ResultEntry[];

  constructor(private timerService: TimerService, private router: Router,
              private http: HttpClient, private answerShow: AnswerShowService) {
  }

  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  someMethod() {
    this.myFocusTriggeringEventEmitter.emit(true);
  }

  ngOnInit() {
    this.answerShow.currentMessage.subscribe(message => this.message = message);
    this.answerShow.myArray.subscribe(data => this.myAnswers = data);


    if(this.answers.length === 0) {
      this.showButton = false;
    }
    console.log('Im in the answer component .ngOnInit() method')
    console.log('found questions, length = ' + this.timerService.getQuestions().length);

    this.questions = this.timerService.getQuestions();

    this.someMethod();
  }

  ngAfterViewInit() { // ngOnInit is NOT the right lifecycle event for this.

    this.someMethod();
  }

  onSubmit(post: any): void {
    // get info from form submit
    this.answers = post;

    // Set up Results Quiz and Answer List
    this.createResults();

    this.router.navigateByUrl('showResult');

  }

  return() {
    this.router.navigateByUrl('home');
  }

  quizAgain() {
    this.router.navigateByUrl('quiz');
  }

   createResults() {

    let numCorrect: number = 0;
    let numIncorrect: number = 0;
    let finalNumber: string = '';

    // set up quiz
     this.currentQuiz = new Quiz();

     this.currentQuiz.numberOfQuestions = this.questions.length;
     this.currentQuiz.date_added = new Date();
     this.currentQuiz.comments = 'added from answer component';


    // Create Answers Array
    this.newAnswers = new Array < Answer >();
    for( let i = 0; i < this.questions.length; i++) {
      finalNumber = finalNumber + this.questions[i];
     }

    for (let i = 0; i < this.questions.length; i++) {

      this.currentAnswer  = new Answer();
      // this.currentAnswer.id = i;
      this.currentAnswer.question = this.questions[i];
      this.currentAnswer.answer = this.answers[i];

      if (this.currentAnswer.question == this.currentAnswer.answer) {
        this.currentAnswer.correct = true;
        numCorrect++;
      } else {
        this.currentAnswer.correct = false;
        numIncorrect++;
      }


      // debugger
      this.currentAnswer.comments = 'chosen ' + finalNumber;

      this.newAnswers[i] = this.currentAnswer;

      // this.currentQuiz.answers.push(this.currentAnswer);
     }

     // get the quiz info
     this.currentQuiz.score = this.getScore(numCorrect, numIncorrect); //this.getScore(numCorrect, numIncorrect);


     this.currentQuiz.answers = new Array<Answer>();
     for (let j = 0; j < this.questions.length; j++) {
       this.currentQuiz.answers.push(this.newAnswers[j]);
     }


     this.mystr = JSON.stringify(this.currentQuiz);
     console.log(this.mystr);

     const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
     this.http
       .post('http://localhost:8004' + '/api/Quiz', this.currentQuiz, {headers: headers})
       .toPromise()
       .then(response => response as Quiz);

     // this.changeAnswerArray();

     // this.show = true;

     // this.dataSource = new ResultsDataSource(this.newAnswers);

   }
  // todo wow what here
  // todo-me dude

//  todo fix this below to add questions then #answers


  getScore(numCorrect: number, numIncorrect: number): number {

    return (numCorrect / (numCorrect + numIncorrect)) * 100;
  }

  changeAnswerArray() {
    this.answerShow.changeArray(this.newAnswers);
  }
}

// export class ResultsDataSource extends DataSource<any> {
//   constructor(private answerResults: ResultEntry[]) {
//     super();
//   }
//   connect(): Observable<ResultEntry[]> {
//     return Observable.of(this.answerResults);
//   }
//   disconnect() {}
//
// }
