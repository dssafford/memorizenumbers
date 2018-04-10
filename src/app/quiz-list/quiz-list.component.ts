import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {QuizListService} from '../service/quiz-list.service';
import {Observable} from 'rxjs/Observable';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime, distinctUntilChanged, startWith, tap, delay, catchError, finalize} from 'rxjs/operators';
import {merge} from 'rxjs/observable/merge';
import {QuizListDataSource} from '../service/quizListDataSource';
import {HttpClient} from '@angular/common/http';
import {Quiz} from '../model/quiz';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {of} from 'rxjs/Observable/of';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit, AfterViewInit {
  api = 'http://localhost:8004/api/QuizList';
  title = 'Quiz List Directory';

  quizzes: Quiz[];

  displayedColumns = ['id', 'number_of_questions', 'score', 'date_added', 'comments'];

  // dataSource: QuizListDataSource;

  dataSource = new MatTableDataSource<Quiz>();
  length: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;





  constructor(private quizlistService: QuizListService,
              private http: HttpClient) {
  }

  ngOnInit() {

    this.quizlistService.getQuizList().subscribe(
      data => {
        this.dataSource.data = data;
      });



console.log(this.quizlistService.getQuizList().toPromise());
console.log('test');
  }

  getQuizzes(): Observable<Quiz[]> {

    return this.quizlistService.getQuizList();

  }

  ngAfterViewInit() {


    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement, 'keyup ')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          // this.loadQuizzesPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      // .pipe(
      //   tap(() => this.loadQuizzesPage())
      // )
      .subscribe();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  rowClicked(row: any): void {
    console.log(row);
  }

  // loadQuizzesPage() {
  //   this.dataSource.loadQuizzes(
  //     // this.input.nativeElement.value,
  //     this.sort.direction,
  //     this.paginator.pageIndex,
  //     this.paginator.pageSize);
  // }
}

// export class QuizDataSource extends DataSource<any> {
//
//   private quizSubject = new BehaviorSubject<Quiz[]>([]);
//
//   private loadingSubject = new BehaviorSubject<boolean>(false);
//
//   public loading$ = this.loadingSubject.asObservable();
//
//   constructor(private quizListService: QuizListService) {
//     super();
//   }
//
//   loadQuizzes(filter: string,
//               sortDirection: string,
//               pageIndex: number,
//               pageSize: number) {
//
//     this.loadingSubject.next(true);
//
//     this.quizListService.findAllQuizzes(filter, sortDirection,
//       pageIndex, pageSize).pipe(
//       catchError(() => of([])),
//       finalize(() => this.loadingSubject.next(false))
//     )
//       .subscribe(quizzes => this.quizSubject.next(quizzes));
//
//   }
//
//     connect(): Observable<Quiz[]> {
//     return this.quizSubject.asObservable();
//   }
//   disconnect() {}
//
// }
