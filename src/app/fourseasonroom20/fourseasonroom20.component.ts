import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {FOURSEASONROOM20_LIST_DATA} from '../data/4seasonroom20';

@Component({
  selector: 'app-fourseasonroom20',
  templateUrl: './fourseasonroom20.component.html',
  styleUrls: ['./fourseasonroom20.component.css']
})
export class Fourseasonroom20Component implements OnInit, AfterViewInit {
  displayedColumns = ['number', 'name'];

  private loadingSubject = new BehaviorSubject<boolean>(false);

  // public loading$ = this.loadingSubject.asObservable();
  public loading = false;

  dataSource = new MatTableDataSource<MYNUMBER>();

  constructor() {
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {

    this.loading = true;
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;
    }, 1000);
  }

  applyFilter(filterValue: string) {

    this.loading = true;

    setTimeout(() => {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
      this.loading = false;
    }, 500);


  }

  ngOnInit() {

    this.loading = true;
    setTimeout(() => {
      this.dataSource.data = FOURSEASONROOM20_LIST_DATA;
      this.loading = false;
    }, 1000);
  }
}
export interface MYNUMBER {
  number: number;
  name: string;
}


