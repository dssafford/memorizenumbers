import {Component, OnInit} from '@angular/core';
import {TimerService} from '../service/timer.service';
import {LORAYNE_LEARNING_DATA} from '../data/lorayneNumbers';
import {BODY_LOCATION_DATA} from '../data/bodyNumbers';

import * as find from 'lodash/find';

import {AddDataService} from '../shared/add-data.service';
import {QuizSingle, WrongAnswer} from '../model/quiz';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DougMsgDialogComponent} from './doug-msg.component';
import {SUN_LIST_DATA} from '../data/sunList';
import {HOUSE_GROUND_FLOOR_DATA} from '../data/houseGroundFloor';
import {CARD_DATA} from '../data/cards';
import {HOUSE_BASEMENT1_DATA} from '../data/houseBasement1Numbers';
import {PRESIDENTS_DATA} from '../data/presidents';

// import {catchError} from 'rxjs/internal/operators';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.css']
})

export class FlashCardsComponent implements OnInit {
  randomNumber: any;
  answer: string;
  showAnswer = false;
  enteredAnswer: string;
  mystr: string;
  selectedData: string;
  currentQuiz: QuizSingle;
  txtFrom: any;
  txtTo: any;
  ckDefaultTo: any = false;
  displayCorrect: string;
  displayWrong: string;
  numQuestions: any = 0;
  numCorrect: any;
  numWrong: any;
  myScore: any;
  rightAnswer: string;
  showRightAnswer: boolean;
  youEntered: any;

  myWrongs: WrongAnswer[] = [];

  DEFAULT_NUM_QUESTIONS_DESIRED = 50;
  numQuestionsDesired = this.DEFAULT_NUM_QUESTIONS_DESIRED;
  dougDialogRef: MatDialogRef<DougMsgDialogComponent>;
  wrongAnswer: WrongAnswer;
  showQuizWrongs = false;
  newWrongLength: number;
  runFromList = false;
  showReset = true;


  constructor(private dialog: MatDialog, private timerService: TimerService, private addDataService: AddDataService,
              private http: HttpClient) {
    this.txtFrom = 0;
    this.txtTo = 10;

  }


  // openAddFileDialog() {
  //   this.dougDialogRef = this.dialog.open(DougMsgDialogComponent);
  // }


  ngOnInit() {

    // this.getNewQuestion();
    this.numCorrect = 0;
    this.numWrong = 0;
    this.newWrongLength = 0;
    this.displayCorrect = 'black';
    this.displayWrong = 'black';
    console.log('default = ' + this.ckDefaultTo);
  }

  onSubmit() {
    this.ckDefaultTo = true;

    if (!this.runFromList) {
      if (this.numQuestions <= this.numQuestionsDesired - 1) {
        // console.log('selection value = ' + this.selectedData);
        // debugger
        this.checkAnswer();
        this.resetForm();

        // console.log('numQuestions = ' + this.numQuestions);
        // console.log('numQuestionsDesired = ' + this.numQuestionsDesired);

        this.getNewQuestionAndAnswer();
        this.numQuestions = this.numQuestions + 1;
      } else {
        this.dougDialogRef = this.dialog.open(DougMsgDialogComponent);
      }
    } else {
      // debugger
      console.log('in Submit - list - numQuestion=' + this.numQuestions);

      if (this.numQuestions <= this.numQuestionsDesired - 1) {
        // console.log('selection value = ' + this.selectedData);
        // debugger

        this.checkAnswer();
        this.resetForm();

        this.numQuestions = this.numQuestions + 1;
        if (this.numQuestions <= this.numQuestionsDesired - 1) {
          // get new question here from list
          this.randomNumber = this.myWrongs[this.numQuestions].question;
          this.answer = this.getAnswer(this.randomNumber);
        }


      } else {
        this.dougDialogRef = this.dialog.open(DougMsgDialogComponent);
      }
    }

  }

  quizWrongs() {
    console.log('in quiz wrongs');
    // debugger
    this.randomNumber = this.myWrongs[0].question;
    this.answer = this.getAnswer(this.randomNumber);

    this.runFromList = true;
    this.numQuestionsDesired = this.myWrongs.length;
    this.showQuizWrongs = true;
    this.showQuizWrongs = false;
    this.newWrongLength = 0;

    this.numCorrect = 0;
    this.numWrong = 0;
    this.numQuestions = 0;
    this.myScore = 0;

  }



  dido(inputString: string): void {
    // console.log('in dido: ' + inputString);
    this.selectedData = inputString;
    this.displayCorrect = 'black';
    this.displayWrong = 'black';
    this.numCorrect = 0;
    this.numWrong = 0;
    this.myScore = 0;
    this.getNewQuestionAndAnswer();
  }

  resetDougForm() {

    // this.dido('lorayne');
    // this.numQuestionsDesired = this.DEFAULT_NUM_QUESTIONS_DESIRED;
    this.runFromList = false;
    this.showQuizWrongs = false;
    this.showRightAnswer = false;
    this.newWrongLength = 0;
    this.myWrongs = [];
    // this.numCorrect = 0;
    // this.numWrong = 0;
    this.numQuestions = 0;
    // this.myScore = 0;

  }

  getNewQuestionAndAnswer() {
    // console.log(this.selectedData);
    // console.log('from = ' + this.txtFrom);
    // console.log('To = ' + this.txtTo);
    // debugger
    if (this.numQuestions <= this.numQuestionsDesired) {

      if (this.selectedData === 'lorayne') {
        // console.log('in getNewQuestion - lorayne');
        this.randomNumber = this.timerService.getRandomNumber(parseInt(this.txtFrom, 10), parseInt(this.txtTo, 10));
        this.answer = this.getAnswer(this.randomNumber);
      } else if (this.selectedData === 'body') {
        // console.log('in getNewQuestion - body');
        this.randomNumber = this.timerService.getRandomNumber(parseInt(this.txtFrom, 10), parseInt(this.txtTo, 10));
        this.answer = this.getAnswer(this.randomNumber);
      } else if (this.selectedData === 'cards') {
        // console.log('in getNewQuestion - cards');
        this.randomNumber = this.timerService.getRandomNumber(parseInt(this.txtFrom, 10), parseInt(this.txtTo, 10));
        this.answer = this.getAnswer(this.randomNumber);
      } else if (this.selectedData === 'houseGroundFloor') {
        // console.log('in getNewQuestion - house');
        this.randomNumber = this.timerService.getRandomNumber(parseInt(this.txtFrom, 10), parseInt(this.txtTo, 10));
        this.answer = this.getAnswer(this.randomNumber);
      } else if (this.selectedData === 'houseBasement1') {
        // console.log('in getNewQuestion - house');
        this.randomNumber = this.timerService.getRandomNumber(parseInt(this.txtFrom, 10), parseInt(this.txtTo, 10));
        this.answer = this.getAnswer(this.randomNumber);
      } else if (this.selectedData === 'presidents') {
        // console.log('in getNewQuestion - house');
        this.randomNumber = this.timerService.getRandomNumber(parseInt(this.txtFrom, 10), parseInt(this.txtTo, 10));
        this.answer = this.getAnswer(this.randomNumber);
      } else if (this.selectedData === 'sunList') {
        // console.log('in getNewQuestion - house');
        this.randomNumber = this.timerService.getRandomNumber(parseInt(this.txtFrom, 10), parseInt(this.txtTo, 10));
        this.answer = this.getAnswer(this.randomNumber);
      }
    } else {
      this.dougDialogRef = this.dialog.open(DougMsgDialogComponent);
    }
  }

  createResults() {
    // debugger
    // set up quiz_single
    this.currentQuiz = new QuizSingle();
    this.currentQuiz.date_added = new Date();
    this.currentQuiz.question = this.randomNumber;
    this.currentQuiz.answer = this.answer;
    if (this.answer === this.enteredAnswer) {
      this.displayCorrect = 'green';
      this.displayWrong = 'black';
      this.numCorrect = this.numCorrect + 1;
      this.currentQuiz.is_correct = true;
      this.currentQuiz.comments = 'single question - ' + this.selectedData + ' - correct';
      this.showRightAnswer = false;
    } else {

      this.displayWrong = 'red';
      this.displayCorrect = 'black';
      this.numWrong = this.numWrong + 1;
      this.currentQuiz.is_correct = false;
      this.currentQuiz.comments = 'wrong, - ' + this.selectedData + '- you chose: ' + this.enteredAnswer;
      this.showRightAnswer = true;
      this.rightAnswer = this.answer;
      this.youEntered = this.enteredAnswer;
      this.wrongAnswer = new WrongAnswer();
      // debugger;
      this.wrongAnswer.question = this.currentQuiz.question;
      this.wrongAnswer.answer = this.currentQuiz.answer;
      this.newWrongLength = this.newWrongLength + 1;
      this.myWrongs.push(this.wrongAnswer);
      console.log('numQuestions=' + this.numQuestions);
      console.log('numQuestionsDesired =' + this.numQuestionsDesired);
      console.log('newWrongLength =' + this.newWrongLength);
      // debugger
    }

    this.myScore = ((this.numCorrect / (this.numCorrect + this.numWrong)) * 100).toFixed(2);
    this.mystr = JSON.stringify(this.currentQuiz);
    // console.log(this.mystr);

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.http
      .post('http://localhost:8004' + '/api/addSingleQuiz', this.currentQuiz, {headers: headers})
      .toPromise()
      .then(response => response as QuizSingle);

    // console.log('added to database');
  }


  resetForm() {
    this.showAnswer = false;
    this.enteredAnswer = '';

  }

  checkAnswer(): void {
    // debugger
    this.showAnswer = true;
    console.log('entered answer = ' + this.enteredAnswer + ' - correct answer = ' + this.answer);
    if (this.enteredAnswer === this.answer.toString()) {
      console.log('correct');
    } else {
      console.log('wrong');
    }
    this.createResults();
  }

  // runAgain() {
  //   this.randomNumber = this.timerService.getRandomNumber(0, 100);
  //   this.answer = this.getAnswer(this.randomNumber);
  //   this.answer = this.getLorayneResult(this.randomNumber);
  //   this.showAnswer = false;
  //   this.enteredAnswer = '';
  // }

  getAnswer(inputNumber: number) {
    if (this.selectedData === 'lorayne') {
      return this.getLorayneResult(inputNumber);
    } else if (this.selectedData === 'body') {
      return this.getBodyResult(inputNumber);
    } else if (this.selectedData === 'houseGroundFloor') {
      return this.getHouseGroundFloorResult(inputNumber);
    } else if (this.selectedData === 'houseBasement1') {
      return this.getHouseBasement1Result(inputNumber);
    } else if (this.selectedData === 'presidents') {
      return this.getPresidentsResult(inputNumber);
    } else if (this.selectedData === 'cards') {
      return this.getCardResult(inputNumber);
    } else if (this.selectedData === 'sunList') {
      return this.getSunListResult(inputNumber);
    }
  }

  getLorayneResult(inputNumber: number) {
    const q = find(LORAYNE_LEARNING_DATA, {number: Number(inputNumber)});
    if (q !== undefined) {
      // console.log(q); // {name:'Dave',sex:male,age:34}
      return q.name;
    } else {
      return 'ERROR IN GetLorayneResult';
    }
  }

  getBodyResult(inputNumber: number) {
    const q = find(BODY_LOCATION_DATA, {number: Number(inputNumber)});
    if (q !== undefined) {
      // console.log(q); // {name:'Dave',sex:male,age:34}
      return q.name;
    } else {
      return 'ERROR IN GetBodyResult';
    }
  }

  getSunListResult(inputNumber: number) {
    const q = find(SUN_LIST_DATA, {number: Number(inputNumber)});
    if (q !== undefined) {
      console.log(q); // {name:'Dave',sex:male,age:34}
      return q.name;
    } else {
      return 'ERROR IN GetSunListResult';
    }
  }

  getHouseGroundFloorResult(inputNumber: number) {
    const q = find(HOUSE_GROUND_FLOOR_DATA, {number: Number(inputNumber)});
    if (q !== undefined) {
      // console.log(q); // {name:'Dave',sex:male,age:34}
      return q.name;
    } else {
      return 'ERROR IN GetHouseGroundFloorResult';
    }
  }

  getHouseBasement1Result(inputNumber: number) {
    const q = find(HOUSE_BASEMENT1_DATA, {number: Number(inputNumber)});
    if (q !== undefined) {
      // console.log(q); // {name:'Dave',sex:male,age:34}
      return q.name;
    } else {
      return 'ERROR IN GetHouseBasement1Result';
    }
  }

  getPresidentsResult(inputNumber: number) {
    const q = find(PRESIDENTS_DATA, {number: Number(inputNumber)});
    if (q !== undefined) {
      // console.log(q); // {name:'Dave',sex:male,age:34}
      return q.name;
    } else {
      return 'ERROR IN GetPresidentsResult';
    }
  }

  getCardResult(inputNumber: number) {
    const q = find(CARD_DATA, {number: Number(inputNumber)});
    if (q !== undefined) {
      // console.log(q); // {name:'Dave',sex:male,age:34}
      return q.name;
    } else {
      return 'ERROR IN GetCardResult';
    }
  }
}
