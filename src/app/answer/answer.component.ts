import {AfterViewInit, Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ResultEntry} from '../model/ResultEntry';
import {TimerService} from '../service/timer.service';
import {Router} from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Quiz} from '../model/quiz';
import {Answer} from '../model/Answer';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, AfterViewInit {
  questions: any[] = [];
  answers: any = [];
  newAnswers: Answer[] = [];
  resultEntry: ResultEntry;
  d = new Date();
  results: ResultEntry[];
  show: boolean = false;
  showButton: boolean = false;
  currentQuiz: Quiz;
  currentAnswer: Answer;
  mystr: string;

  dataSource: ResultsDataSource;

  displayedColumns = ['id', 'question', 'answer', 'correct'];

  // @Input() questions: ResultEntry[];

  constructor(private timerService: TimerService, private router: Router,
              private http: HttpClient) {
  }

  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  someMethod() {
    this.myFocusTriggeringEventEmitter.emit(true);

  }

  ngOnInit() {
    if(this.answers.length == 0) {
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



    // Process results and enter to db
    // this.processResults();


  }

  return() {
    this.router.navigateByUrl('home');
  }

  quizAgain() {
    this.router.navigateByUrl('quiz');
  }
  // Quiz quiz = new Quiz(12, 85, "dude comments here");
  //
  // Answer myAnswer1 = new Answer();
  // myAnswer1.setQuestion(1);
  // myAnswer1.setAnswer(1);
  // myAnswer1.setCorrect(true);
  // myAnswer1.setComments("comments in answer here");
  // myAnswer1.setQuiz(quiz);
  //
  // Answer myAnswer2 = new Answer();
  // myAnswer2.setQuestion(1);
  // myAnswer2.setAnswer(1);
  // myAnswer2.setCorrect(true);
  // myAnswer2.setComments("comments in answer here");
  // myAnswer2.setQuiz(quiz);
  //
  // quiz.getAnswers().add(myAnswer1);
  // quiz.getAnswers().add(myAnswer2);
  //
  // quizRepository.save(quiz);
   createResults() {

    let numCorrect: number = 0;
    let numIncorrect: number = 0;
    let finalNumber: string = '';

    // set up quiz
     this.currentQuiz = new Quiz();
     this.currentQuiz.comments = "dude";
     this.currentQuiz.numberOfQuestions = this.questions.length;


     this.currentQuiz.answers = new Array<Answer>();

    // Create Answers Array
    this.newAnswers = new Array < Answer >();
    for( let i =0; i< this.questions.length; i++) {
      finalNumber = finalNumber + this.questions[i];
     }

    for (let i = 0; i < this.questions.length; i++) {

      this.currentAnswer  = new Answer();
      this.currentAnswer.id = i;
      this.currentAnswer.question = this.questions[i];
      this.currentAnswer.answer = this.answers[i];
      if (this.currentAnswer.question == this.currentAnswer.answer) {
        this.currentAnswer.correct = true;
        numCorrect++;
      } else {
        this.currentAnswer.correct = false;
        numIncorrect++;
      }

      this.currentAnswer.date_added = this.timerService.dbTimestampFormatDate(this.d);
      // debugger
      this.currentAnswer.comments = 'chosen ' + finalNumber;

      this.newAnswers[i] = this.currentAnswer;

      this.currentQuiz.answers.push(this.currentAnswer);
     }

     // get the quiz info
     this.currentQuiz.score = 22; //this.getScore(numCorrect, numIncorrect);




     this.mystr = JSON.stringify(this.currentQuiz);
     console.log(this.mystr);

     this.http
       .post('http://localhost:8004' + '/api/Quiz', this.currentQuiz)
       .toPromise()
       .then(response => response as Quiz);


     this.show = true;
     // this.router.navigateByUrl('showResult');
     // debugger
     this.dataSource = new ResultsDataSource(this.newAnswers);

   }
  // todo wow what here
  // todo-me dude

//  todo fix this below to add questions then #answers


  getScore(numCorrect: number, numIncorrect: number): number {

    return 87;
  }

  // processResults() {
  //   var i;
  //   console.log('final results ========================== = ');
  //
  //   // add currentQuiz info to database
  //   this.timerService.createNewQuizEntry(this.currentQuiz);
  //
  //   // process then add Answers to database
  //   for (i = 0; i < this.questions.length; i++) {
  //     console.log('Question: ' + this.newAnswers[i].question + ' - Answer; ' + this.newAnswers[i].answer +
  //       ' - Result= ' + this.newAnswers[i].correct);
  //
  //     this.timerService.createNewAnswerEntry(this.newAnswers[i]);
  //
  //   }
  //   this.show = true;
  //   // this.router.navigateByUrl('showResult');
  //   // debugger
  //   this.dataSource = new ResultsDataSource(this.newAnswers);
  // }

}

export class ResultsDataSource extends DataSource<any> {
  constructor(private answerResults: ResultEntry[]) {
    super();
  }
  connect(): Observable<ResultEntry[]> {
    return Observable.of(this.answerResults);
  }
  disconnect() {}

}
