import {Component, Input, OnInit} from '@angular/core';
import {ResultEntry} from '../model/ResultEntry';
import {TimerService} from '../service/timer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  questions: any[] = [];
  answers: any[] = [];
  resultEntry: ResultEntry;
  d = new Date();
  results: ResultEntry[];

  // @Input() questions: ResultEntry[];

  constructor(private timerService: TimerService) { }

  ngOnInit() {

    console.log('found questions, length = ' + this.timerService.getQuestions().length);

    this.questions = this.timerService.getQuestions();
  }

  onSubmit(post: any): void {
    this.answers = post;
    // console.log('answer 0 = ' + post[0]);
    // console.log("answer 1 = " + post[1]);
    // console.log("answer 2 = " + post[2]);
    // // debugger
    // console.log('answers:', this.answers + '- post was ' + post);

    this.createResults();

    // Show results
    this.showResults();

    // this.resetCounter();
    // this.isCounting = true;
  }

   createResults(): ResultEntry[] {
    this.results = new Array < ResultEntry >();

    for (let i = 0; i < this.questions.length; i++) {

      this.resultEntry  = new ResultEntry();
      this.resultEntry.question = this.questions[i];
      this.resultEntry.answer = this.answers[i];
      if (this.resultEntry.question == this.resultEntry.answer) {
        this.resultEntry.correct = true;
      } else {
        this.resultEntry.correct = false;
      }
      this.resultEntry.date_added = this.timerService.dbTimestampFormatDate(this.d);
      debugger
      this.resultEntry.comments = 'chosen ' + this.questions.length;
      this.results[i] = this.resultEntry;
     }
     return this.results;

  }

  showResults() {
    var i;
    console.log('final results ========================== = ');
    for (i = 0; i < this.results.length; i++) {
      console.log('Question: ' + this.results[i].question + ' - Answer; ' + this.results[i].answer + ' - Result= ' + this.results[i].correct);
      this.timerService.createNewEntry(this.results[i]);
    }
  }

}
