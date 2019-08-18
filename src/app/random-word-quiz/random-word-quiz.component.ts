import {Component, OnInit} from '@angular/core';
import {TimerService} from '../service/timer.service';
import {LORAYNE_LEARNING_DATA} from '../data/lorayneNumbers';
import {BODY_LOCATION_DATA} from '../data/bodyNumbers';

import * as find from 'lodash/find';

import {shuffle} from 'lodash';

import {AddDataService} from '../shared/add-data.service';
import {QuizRandomSingle, QuizSingle, WrongRandomAnswer} from '../model/quiz';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DougMsgDialogComponent} from '../flash-cards/doug-msg.component';
import {SUN_LIST_DATA} from '../data/sunList';
import {RANDOM_WORDS} from '../data/randomWords';
import {RandomWord} from '../model/randomWord';

@Component({
  selector: 'app-random-word-quiz',
  templateUrl: './random-word-quiz.component.html',
  styleUrls: ['./random-word-quiz.component.css']
})

export class RandomWordQuizComponent implements OnInit {
  randomNumber: any;
  answer: string;
  showAnswer = false;
  enteredAnswer: string;
  mystr: string;
  selectedData: string;
  currentQuiz: QuizRandomSingle;
  txtFrom: any;
  txtTo: any;
  ckDefaultTo: any = false;
  displayCorrect: string;
  displayWrong: string;
  numQuestion: any = 0;
  numCorrect: any;
  numWrong: any;
  myScore: any;
  rightAnswer: string;
  showRightAnswer: boolean;
  youEntered: any;

  myWrongs: WrongRandomAnswer[] = [];

  DEFAULT_NUM_QUESTIONS_DESIRED = 4;
  numQuestionsDesired = this.DEFAULT_NUM_QUESTIONS_DESIRED;
  dougDialogRef: MatDialogRef<DougMsgDialogComponent>;
  wrongRandomAnswer: WrongRandomAnswer;
  showQuizWrongs = false;
  newWrongLength: number;
  runFromWrongList = false;
  showReset = true;


  constructor(private dialog: MatDialog, private timerService: TimerService, private addDataService: AddDataService,
              private http: HttpClient) {
    this.txtFrom = 0;
    this.txtTo = 10;

    // console.log('final random word list');
    // console.log(this.createRandomWordList(10));
  }

  createRandomWordList(numberTotal: number): RandomWord[] {
    // set up original list
    const originalRandomArray = new Array<RandomWord>();
    // const ranWord = new RandomWord();

    for (let i = 0; i < numberTotal; i++) {
      const ranWord = new RandomWord();
      // get a new random number
      ranWord.id = i;
      ranWord.word = this.getRandomWord();
      originalRandomArray.push(ranWord);

    }

    // console.log('original array');
    // console.log(originalRandomArray);

    let finalRandomArray = new Array<RandomWord>();
    finalRandomArray = shuffle(originalRandomArray);
    return finalRandomArray;

  }

  getRandomWord(): string {
    this.randomNumber = this.timerService.getRandomNumber(0, 2000);
    // console.log('random word number=' +  this.randomNumber);
    return this.getRandomWordResult(this.randomNumber);
  }

  createRandomWordListPrototype() {
    // set total collection length
    const myNewListTotal = 10;
    const originalRandomArray = new Array<RandomWord>();
    var ranWord = new RandomWord();

    ranWord.id = 1;
    ranWord.word = 'cow';
    originalRandomArray.push(ranWord);

    ranWord = new RandomWord();
    ranWord.id = 2;
    ranWord.word = 'bike';
    originalRandomArray.push(ranWord);

    ranWord = new RandomWord();
    ranWord.id = 3;
    ranWord.word = 'pen';
    originalRandomArray.push(ranWord);

    ranWord = new RandomWord();
    ranWord.id = 4;
    ranWord.word = 'test';
    originalRandomArray.push(ranWord);

    ranWord = new RandomWord();
    ranWord.id = 5;
    ranWord.word = 'book';
    originalRandomArray.push(ranWord);

    ranWord = new RandomWord();
    ranWord.id = 6;
    ranWord.word = 'pencil';
    originalRandomArray.push(ranWord);

    ranWord = new RandomWord();
    ranWord.id = 7;
    ranWord.word = 'sky';
    originalRandomArray.push(ranWord);

    ranWord = new RandomWord();
    ranWord.id = 8;
    ranWord.word = 'sun';
    originalRandomArray.push(ranWord);

    ranWord = new RandomWord();
    ranWord.id = 9;
    ranWord.word = 'dude';
    originalRandomArray.push(ranWord);

    ranWord = new RandomWord();
    ranWord.id = 10;
    ranWord.word = 'crap';
    originalRandomArray.push(ranWord);

    // debugger

    let finalRandomArray = new Array<RandomWord>();
    finalRandomArray = shuffle(originalRandomArray);

    console.log(originalRandomArray);
    console.log(finalRandomArray);

  }

  // openAddFileDialog() {
  //   this.dougDialogRef = this.dialog.open(DougMsgDialogComponent);
  // }


  ngOnInit() {

    this.numCorrect = 0;
    this.numWrong = 0;
    this.newWrongLength = 0;
    this.displayCorrect = 'black';
    this.displayWrong = 'black';
    // console.log('default = ' + this.ckDefaultTo);
  }

  onSubmit() {
    this.ckDefaultTo = true;
    // debugger
    // console.log('in Submit - list - numQuestion=' + this.numQuestion);

    if (!this.runFromWrongList) {
      if (this.numQuestion <= this.numQuestionsDesired - 1) {
        // console.log('selection value = ' + this.selectedData);
        // debugger
        this.checkAnswer(this.numQuestion);
        this.resetForm();

        // console.log('numQuestion = ' + this.numQuestion);
        // console.log('numQuestionsDesired = ' + this.numQuestionsDesired);

        this.getNewQuestionAndAnswer();
        this.numQuestion = this.numQuestion + 1;
      } else {
        this.dougDialogRef = this.dialog.open(DougMsgDialogComponent);
      }
    } else {
      // debugger
      // console.log('in Submit - list - numQuestion=' + this.numQuestion);

      if (this.numQuestion <= this.numQuestionsDesired - 1) {
        // console.log('selection value = ' + this.selectedData);
        // debugger

        this.checkAnswer(this.numQuestion);
        this.resetForm();

        this.numQuestion = this.numQuestion + 1;
        if (this.numQuestion <= this.numQuestionsDesired - 1) {
          // get new question here from list
          this.randomNumber = this.myWrongs[this.numQuestion].question;
          this.answer = this.getAnswer(this.randomNumber);
        }


      } else {
        this.dougDialogRef = this.dialog.open(DougMsgDialogComponent);
      }
    }
  }

  quizWrongs() {
    // console.log('in quiz wrongs');
    // debugger
    this.randomNumber = this.myWrongs[0].question;
    this.answer = this.getAnswer(this.randomNumber);

    this.runFromWrongList = true;
    this.numQuestionsDesired = this.myWrongs.length;
    this.showQuizWrongs = true;
    this.showQuizWrongs = false;
    this.newWrongLength = 0;

    this.numCorrect = 0;
    this.numWrong = 0;
    this.numQuestion = 0;
    this.myScore = 0;

  }

  quizRandom() {

    // console.log('in quiz wrongs =');
    // console.log(this.myWrongs);
    debugger
    this.randomNumber = this.myWrongs[0].question;
    this.answer = this.getAnswer(this.randomNumber);

    this.runFromWrongList = true;
    this.numQuestionsDesired = this.myWrongs.length;
    this.showQuizWrongs = true;
    this.showQuizWrongs = false;
    this.newWrongLength = 0;

    this.numCorrect = 0;
    this.numWrong = 0;
    this.numQuestion = 0;
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

    this.dido('lorayne');
    this.numQuestionsDesired = this.DEFAULT_NUM_QUESTIONS_DESIRED;
    this.runFromWrongList = false;
    this.showQuizWrongs = false;
    this.newWrongLength = 0;
    this.myWrongs = [];
    // this.numCorrect = 0;
    // this.numWrong = 0;
    this.numQuestion = 0;
    // this.myScore = 0;

  }

  getNewQuestionAndAnswer() {
    // console.log(this.selectedData);
    // console.log('from = ' + this.txtFrom);
    // console.log('To = ' + this.txtTo);
    // debugger
    if (this.numQuestion <= this.numQuestionsDesired) {
      // console.log('in getNewQuestion - randomWords');
      // this.randomNumber = this.timerService.getRandomNumber(parseInt(this.txtFrom, 10), parseInt(this.txtTo, 10));

      this.randomNumber = this.timerService.getRandomNumber(0,2000);

      this.answer = this.getAnswer(this.randomNumber);

      // TODO: fix this kludgy test
      this.randomNumber = this.getAnswer(this.randomNumber);
    } else {
      this.dougDialogRef = this.dialog.open(DougMsgDialogComponent);
    }
  }

  createResults(questionID: number) {
    // debugger
    // set up quiz_single
    questionID = questionID + 1;

    this.currentQuiz = new QuizRandomSingle();
    this.currentQuiz.id = questionID;
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
      this.wrongRandomAnswer = new WrongRandomAnswer();
      this.wrongRandomAnswer.question = this.currentQuiz.id.toString();
      this.wrongRandomAnswer.answer = this.currentQuiz.id + '-' + this.currentQuiz.answer;

      this.newWrongLength = this.newWrongLength + 1;
      this.myWrongs.push(this.wrongRandomAnswer);
      debugger
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

  checkAnswer(questionID: number): void {
    // debugger
    this.showAnswer = true;
    // console.log('entered answer = ' + this.enteredAnswer + ' - correct answer = ' + this.answer);
    if (this.enteredAnswer === this.answer.toString()) {
      // console.log('correct');
    } else {
      // console.log('wrong');
    }
    this.createResults(questionID);
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
    } else if (this.selectedData === 'house') {
      return this.getHouseResult(inputNumber);
    } else if (this.selectedData === 'cards') {
      return this.getCardResult(inputNumber);
    } else if (this.selectedData === 'sunList') {
      return this.getSunListResult(inputNumber);
    } else if (this.selectedData === 'randomWords') {
      console.log('in getAnswer for randomWords: number=' + inputNumber + ' - ' + this.getRandomWordResult(inputNumber));
      return this.getRandomWordResult(inputNumber);
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

  getRandomWordResult(inputNumber: number) {
    const q = find(RANDOM_WORDS, {id: Number(inputNumber)});
    if (q !== undefined) {
      console.log(q); // {name:'Dave',sex:male,age:34}
      return q.word;
    } else {
      return 'ERROR IN GetRandomWordsList';
    }
  }

  getHouseResult(inputNumber: number) {
    const q = find(BODY_LOCATION_DATA, {number: Number(inputNumber)});
    if (q !== undefined) {
      // console.log(q); // {name:'Dave',sex:male,age:34}
      return q.name;
    } else {
      return 'ERROR IN GetBodyResult';
    }
  }

  getCardResult(inputNumber: number) {
    const q = find(BODY_LOCATION_DATA, {number: Number(inputNumber)});
    if (q !== undefined) {
      // console.log(q); // {name:'Dave',sex:male,age:34}
      return q.name;
    } else {
      return 'ERROR IN GetBodyResult';
    }
  }
}
