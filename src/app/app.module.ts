import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import {MaterialModule} from './modules/material.module';
import {AppRoutingModule} from './app-routing.module';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {AuthenticationService} from './service/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertService} from './service/alert.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {TimerService} from './service/timer.service';
import { AnswerComponent } from './answer/answer.component';
import { FocusDirective } from './focus.directive';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizListService} from './service/quiz-list.service';
import { HomeComponent } from './home/home.component';
import { ShowResultComponent } from './show-result/show-result.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FlexStuffComponent } from './flex-stuff/flex-stuff.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {HeaderComponent} from './navigation/header/header.component';
import { QuizComponent } from './quiz/quiz.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { LearnListComponent } from './learn-list/learn-list.component';
import { LorayneListComponent } from './lorayne-list/lorayne-list.component';
import { BindingExamplesComponent } from './binding-examples/binding-examples.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LearningComponent } from './learning/learning.component';
import { CssComponent } from './css/css.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent, MenuItemComponent, DynamicFormComponent, AnswerComponent, FocusDirective, QuizListComponent, HomeComponent, ShowResultComponent,
    FlexStuffComponent, SidenavListComponent, HeaderComponent, QuizComponent, SortTableComponent, TablePaginationComponent, LearnListComponent,
    LorayneListComponent, BindingExamplesComponent, ParentComponent, ChildComponent, LearningComponent, CssComponent, QuizDetailsComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    ReactiveFormsModule, FormsModule, MaterialModule, AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [AuthenticationService, AlertService, TimerService, QuizListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
