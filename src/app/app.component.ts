import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  count: number = 10;

  firstResultEntry = {
    id: 12,
    question:  1,
    answer: 2,
    correct: 1,
    date_added: '2018-01-01',
    comments: 'dude comments'

  };

  constructor(private router: Router, private userService: AuthenticationService) {
  }



  addNewEntryPressed() {}

  logout(){}
}
