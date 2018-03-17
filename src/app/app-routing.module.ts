import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {TimerComponent} from './timer/timer.component';
import {AnswerComponent} from './answer/answer.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {HomeComponent} from './home/home.component';
// import {EntrySummaryListComponent} from './entry-summary-list/entry-summary-list.component';
// import {FirstComponent} from './first/first.component';
// import {EntryListComponent} from './entry-list/entry-list.component';
// import {SecondComponent} from './second/second.component';
// import {ThirdComponent} from './third/third.component';
// import {FourthComponent} from './fourth/fourth.component';
// import {EntryComponent} from './entry/entry.component';
// import {HomeComponent} from './home/home.component';
// import {LoginComponent} from './login/login.component';
// import {RegisterComponent} from './register/register.component';
// import {AuthGuard} from './data/auth.guard';




const appRoutes: Routes = [

  // {path: 'newEntry', component: EntryComponent, canActivate: [AuthGuard]},
  // {path: 'home', component: EntryListComponent, canActivate: [AuthGuard]},
  // {path: 'summaryList', component: EntrySummaryListComponent, canActivate: [AuthGuard]},
  // {path: 'errInput', component: FirstComponent, canActivate: [AuthGuard]},
  // {path: 'what-up-web', component: SecondComponent},
  // {path: 'my-ally-cli', component: ThirdComponent},
  // {path: 'become-angular-tailer', component: FourthComponng ent},
  // {path: '', component: EntryListComponent},
  { path: 'quizzes', component: QuizListComponent },
  { path: 'answer', component:  AnswerComponent },

  { path: 'quiz' , component: TimerComponent },

  { path: 'home', component: HomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
