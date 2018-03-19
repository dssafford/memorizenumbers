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


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent, MenuItemComponent, DynamicFormComponent, AnswerComponent, FocusDirective, QuizListComponent, HomeComponent, ShowResultComponent,
    FlexStuffComponent
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
