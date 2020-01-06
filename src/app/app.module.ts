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

import { LearningComponent } from './learning/learning.component';
import { CssComponent } from './css/css.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { AnswerShowComponent } from './answer-show/answer-show.component';
import {AnswerShowService} from './service/answer-show.service';
import {AlertComponent} from './alert/alert.component';
import {BaconDirective} from './service/bacon-directive';
import {SharedService} from './service/shared.service';
import {MatCheckboxModule, MatDialogModule, MatInputModule, MatRadioModule} from '@angular/material';
import { LocationTabComponent } from './location-tab/location-tab.component';
import { LocationBodyComponent } from './location-body/location-body.component';
import { LocationCarComponent } from './location-car/location-car.component';
import { LocationCardsComponent } from './location-cards/location-cards.component';
import { LocationHouseComponent } from './location-house/location-house.component';
import { LocationRW20ListComponent } from './location-rwhite20list/location-rw20list.component';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import {DougMsgDialogComponent} from './flash-cards/doug-msg.component';
import {LocationSunListComponent} from './location-sunList/location-sunList.component';
import { RandomWordQuizComponent } from './random-word-quiz/random-word-quiz.component';
import {WordTimerComponent} from './word-timer/word-timer.component';
import {AnswerShowWordComponent} from './answer-show-word/answer-show-word.component';
import {AnswerWordComponent} from './answer-word/answer-word.component';
import { RunTestComponent } from './run-test/run-test.component';
import { LocationPresidentsComponent } from './location-presidents/location-presidents.component';




@NgModule({
  declarations: [
    AppComponent, AlertComponent,
    TimerComponent, MenuItemComponent, DynamicFormComponent, AnswerComponent, FocusDirective,
    BaconDirective, QuizListComponent, HomeComponent, ShowResultComponent,
    FlexStuffComponent, SidenavListComponent, HeaderComponent, QuizComponent,
    SortTableComponent, TablePaginationComponent, LearnListComponent,
    LorayneListComponent,
    LearningComponent, CssComponent, QuizDetailsComponent, AnswerShowComponent, LocationTabComponent, LocationBodyComponent,
    LocationCarComponent, LocationCardsComponent, LocationHouseComponent, FlashCardsComponent, LocationSunListComponent,
    DougMsgDialogComponent, WordTimerComponent, AnswerShowWordComponent, AnswerWordComponent, LocationRW20ListComponent,
    RandomWordQuizComponent,
    RunTestComponent,
    LocationPresidentsComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    ReactiveFormsModule, FormsModule, MaterialModule, AppRoutingModule,
    FlexLayoutModule, MatInputModule, MatRadioModule, MatDialogModule, MatCheckboxModule
  ],
  providers: [AuthenticationService, AlertService, TimerService, QuizListService,
  AnswerShowService, SharedService],
  entryComponents: [DougMsgDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
