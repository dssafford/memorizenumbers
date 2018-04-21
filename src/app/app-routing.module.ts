import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {TimerComponent} from './timer/timer.component';
import {AnswerComponent} from './answer/answer.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {HomeComponent} from './home/home.component';
import {ShowResultComponent} from './show-result/show-result.component';
import {QuizComponent} from './quiz/quiz.component';
import {SortTableComponent} from './sort-table/sort-table.component';
import {TablePaginationComponent} from './table-pagination/table-pagination.component';
import {LearnListComponent} from './learn-list/learn-list.component';
import {LorayneListComponent} from './lorayne-list/lorayne-list.component';
import {LearningComponent} from './learning/learning.component';
import {AnswerShowComponent} from './answer-show/answer-show.component';
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
  // {path: 'become-angular-tailer', component: FourthComponent},
  // {path: '', component: EntryListComponent},

  // { path: 'parent', component: ParentComponent},
  // { path: 'binding', component: BindingExamplesComponent},
  { path: 'lorayne', component: LorayneListComponent},
  { path: 'learn', component: LearningComponent},
  { path: 'paginate', component: TablePaginationComponent},
  { path: 'sortTable', component: SortTableComponent},
  { path: 'showResult', component: AnswerShowComponent},
  { path: 'quizzes', component: QuizListComponent },
  { path: 'answer', component:  AnswerComponent },
  { path: 'quizStuff', component:  QuizComponent },
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
