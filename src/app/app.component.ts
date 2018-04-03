import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './service/authentication.service';
import {Answer} from './model/Answer';
import {Quiz} from './model/quiz';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  count = 10;

  firstResultEntry = {
    id: 12,
    question:  1,
    answer: 2,
    correct: 1,
    date_added: '2018-01-01',
    comments: 'dude comments'

  };


  constructor(private router: Router, private userService: AuthenticationService, http: HttpClient) {
  }

  ngOnInit() {
    //Quiz
    // id: number;
    // score: number;
    // number_of_questions: number;
    // date_added: string;
    // comments: string;

    //answer
    // id: number;
    // question: number;
    // answer: number;
    // correct: boolean;
    // date_added: string;
    // comments: string;

  //   const quiz: Quiz = new Quiz(2, 85, 'dude comments here');
  //
  //
  //   const myAnswer1: Answer = new Answer();
  //   myAnswer1.question = 1;
  //   myAnswer1.answer = 1;
  //   myAnswer1.correct = 1;
  //   myAnswer1.comments = 'comments in answer here';
  //
  //   myAnswer1.setQuiz(quiz);
  //
  //  const myAnswer2: Answer = new Answer();
  //   myAnswer2.setQuestion(1);
  //   myAnswer2.setAnswer(1);
  //   myAnswer2.setCorrect(true);
  //   myAnswer2.setComments('comments in answer here');
  //   myAnswer2.setQuiz(quiz);
  //
  //   quiz.getAnswers().add(myAnswer1);
  //   quiz.getAnswers().add(myAnswer2);
  //
  //   this.http
  //     .post('http://localhost:8004' + '/api/Quiz', myQuiz)
  //     .toPromise()
  //     .then(response => response as Quiz);
  }




  addNewEntryPressed() {}

  logout() {}
}
