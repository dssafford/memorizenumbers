import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BehaviorSubject, Observable, of as observableOf,  merge} from 'rxjs';
import {switchMap, map, startWith, catchError} from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';
import {HomeLocation} from '../model/home_location';

import {HOUSE_GROUND_FLOOR_DATA} from '../data/houseGroundFloor';
import {BODY_LOCATION_DATA} from '../data/bodyNumbers';

@Component({
  selector: 'app-location-house',
  templateUrl: './location-house.component.html',
  styleUrls: ['./location-house.component.css']
})
export class LocationHouseComponent implements AfterViewInit {
  displayedColumns = ['number', 'name'];

  private loadingSubject = new BehaviorSubject<boolean>(false);

  // public loading$ = this.loadingSubject.asObservable();
  public loading = false;

  dataSource = new MatTableDataSource<HomeLocation>();

  constructor() {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
      this.loading = false
    }, 500);


  }

  ngOnInit() {

    this.loading = true;
    setTimeout(() => {
      this.dataSource.data = HOUSE_GROUND_FLOOR_DATA;
      this.loading = false;
    }, 1000);
  }
}


