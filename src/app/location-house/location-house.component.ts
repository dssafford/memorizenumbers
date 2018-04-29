import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {switchMap} from 'rxjs/operators/switchMap';
import {map} from 'rxjs/operators/map';
import {debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {Quiz} from '../model/quiz';
import {startWith} from 'rxjs/operators/startWith';
import {catchError} from 'rxjs/operators/catchError';
import {of as observableOf} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {merge} from 'rxjs/observable/merge';
import {HomeLocation} from '../model/home_location';

@Component({
  selector: 'app-location-house',
  templateUrl: './location-house.component.html',
  styleUrls: ['./location-house.component.css']
})
export class LocationHouseComponent implements AfterViewInit {
  // displayedColumns = ['created', 'state', 'number', 'title'];
  displayedColumns = ['locationNumber', 'locationName'];

  // exampleDatabase: ExampleHttpDao | null;
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild('input') input: ElementRef;

  constructor(private http: HttpClient) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.isLoadingResults = true;
    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // fromEvent(this.input.nativeElement, 'keyup ')
    //   .pipe(
    //     debounceTime(150),
    //     distinctUntilChanged(),
    //     tap(() => {
    //       this.paginator.pageIndex = 0;
    //       this.applyFilter(this.input.nativeElement.valueOf());
    //     })
    //   )
    //   .subscribe();



    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.getData();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = 5; //data.results.length;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.dataSource.data = data);
  }

  getData(): Observable<HomeLocation[]> {
    return this.http.get<HomeLocation[]>('http://localhost:8004/api/homeLocationList')
      .map((data: any) => data as HomeLocation[]);

  }
  rowClicked(row: any): void {
    console.log(row);
  }
  // getQuizListData(sort: string, order: string, page: number): Observable<Quiz> {
  //   const href = 'http://localhost:8004/api/QuizList';
  //   // console.log(this.http.get<Quiz>(href).toPromise());
  //   return this.http.get<Quiz>(href);
  // }
  // quizListData(): Observable<Quiz> {
  //   const href = 'http://localhost:8004/api/QuizList';
  //   // console.log(this.http.get<Quiz>(href).toPromise());
  //   return this.http.get<Quiz>(href);
  // }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
