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


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent, MenuItemComponent, DynamicFormComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    ReactiveFormsModule, FormsModule, MaterialModule, AppRoutingModule
  ],
  providers: [AuthenticationService, AlertService, TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
