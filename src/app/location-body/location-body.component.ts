import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-location-body',
  templateUrl: './location-body.component.html',
  styleUrls: ['./location-body.component.css']
})
export class LocationBodyComponent implements OnInit {
  displayedColumns = ['number', 'name'];

  private loadingSubject = new BehaviorSubject<boolean>(false);

  // public loading$ = this.loadingSubject.asObservable();
  public loading = false;

  dataSource = new MatTableDataSource<MYNUMBER>();
  constructor(){}

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
      this.dataSource.data = BODY_LOCATION_DATA;
      this.loading = false;
    }, 1000);
  }
}
export interface MYNUMBER {
  number: number;
  name: string;
}

const BODY_LOCATION_DATA: MYNUMBER[] = [
  {'number': 1, 'name' : 'foot'},
  {'number': 2, 'name': 'shin'},
  {'number': 3, 'name': 'knee'},
  {'number': 4, 'name': 'thigh'},
  {'number': 5, 'name': 'belly button'},
  {'number': 6, 'name': 'chest'},
  {'number': 7, 'name': 'neck'},
  {'number': 8, 'name': 'mouth'},
  {'number': 9, 'name': 'eyes'},
  {'number': 10, 'name': 'top of head'},
]
