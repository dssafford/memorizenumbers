import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TimerComponent} from './timer/timer.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {AlertService} from './service/alert.service';
import {AuthenticationService} from './service/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {HeaderComponent} from './navigation/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TimerComponent, MenuItemComponent, SidenavListComponent,
        HeaderComponent
      ],
      imports: [MatIconModule, MatInputModule, MatIconModule, MatFormFieldModule, MatGridListModule, MatOptionModule,
        MatSelectModule, MatCardModule, MatMenuModule, MatToolbarModule, FormsModule, ReactiveFormsModule,
        RouterTestingModule, HttpClientModule, MatSidenavModule, MatListModule,
      BrowserAnimationsModule],
      providers: [AlertService, AuthenticationService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
