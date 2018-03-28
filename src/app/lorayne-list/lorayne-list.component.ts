import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-lorayne-list',
  templateUrl: './lorayne-list.component.html',
  styleUrls: ['./lorayne-list.component.css']
})
export class LorayneListComponent implements OnInit {
  displayedColumns = ['number', 'name'];

  private loadingSubject = new BehaviorSubject<boolean>(false);

  // public loading$ = this.loadingSubject.asObservable();
  public loading = false;

  dataSource = new MatTableDataSource<MYNUMBER>();
  mynumbers: MYNUMBER[];
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

  rowClicked(row: any): void {
    console.log(row);
  }

  ngOnInit() {

    this.loading = true;
    setTimeout(() => {
      this.dataSource.data = NUMBER_LEARNING_DATA;
      this.loading = false;
    }, 1000);
  }
}

export interface MYNUMBER {
  number: number;
  name: string;
}

const NUMBER_LEARNING_DATA: MYNUMBER[] = [
  {'number': 1, 'name' : 'tie'},
{'number': 2, 'name': 'knee'},
{'number': 3, 'name': 'Ma'},
{'number': 4, 'name': 'rye'},
{'number': 5, 'name': 'wall'},
{'number': 6, 'name': 'jaw'},
{'number': 7, 'name': 'cow'},
{'number': 8, 'name': 'ivy'},
{'number': 9, 'name': 'bee'},
{'number': 10, 'name': 'toes'},
{'number': 11, 'name': 'tot'},
{'number': 12, 'name': 'tin'},
{'number': 13, 'name': 'tomb'},
{'number': 14, 'name': 'tire'},
{'number': 15, 'name': 'towel'},
{'number': 16, 'name': 'dish'},
{'number': 17, 'name': 'tack'},
{'number': 18, 'name': 'dove'},
{'number': 19, 'name': 'tub'},
{'number': 20, 'name': 'nose'},
{'number': 21, 'name': 'net'},
{'number': 22, 'name': 'nun'},
{'number': 23, 'name': 'name'},
{'number': 24, 'name': 'Nero'},
{'number': 25, 'name': 'nail'},
{'number': 26, 'name': 'notch'},
{'number': 27, 'name': 'neck'},
{'number': 28, 'name': 'knife'},
{'number': 29, 'name': 'knob'},
{'number': 30, 'name': 'mouse'},
{'number': 31, 'name': 'mat'},
{'number': 32, 'name': 'moon'},
{'number': 33, 'name': 'mummy'},
{'number': 34, 'name': 'mower'},
{'number': 35, 'name': 'mule'},
{'number': 36, 'name': 'match'},
{'number': 37, 'name': 'mug'},
{'number': 38, 'name': 'movie'},
{'number': 39, 'name': 'mop'},
{'number': 40, 'name': 'rose'},
{'number': 41, 'name': 'rod'},
{'number': 42, 'name': 'rain'},
{'number': 43, 'name': 'ram'},
{'number': 44, 'name': 'rower'},
{'number': 45, 'name': 'roll'},
{'number': 46, 'name': 'roach'},
{'number': 47, 'name': 'rock'},
{'number': 48, 'name': 'roof'},
{'number': 49, 'name': 'rope'},
{'number': 50, 'name': 'lace'},
{'number': 51, 'name': 'lot'},
{'number': 52, 'name': 'lion'},
{'number': 53, 'name': 'lamb'},
{'number': 54, 'name': 'lure'},
{'number': 55, 'name': 'lily'},
{'number': 56, 'name': 'leech'},
{'number': 57, 'name': 'log'},
{'number': 58, 'name': 'lava'},
{'number': 59, 'name': 'lip'},
{'number': 60, 'name': 'cheese'},
{'number': 61, 'name': 'sheet'},
{'number': 62, 'name': 'chain'},
{'number': 63, 'name': 'jam'},
{'number': 64, 'name': 'cherry'},
{'number': 65, 'name': 'jail'},
{'number': 66, 'name': 'choo choo'},
{'number': 67, 'name': 'chalk'},
{'number': 68, 'name': 'chef'},
{'number': 69, 'name': 'ship'},
{'number': 70, 'name': 'case or kiss'},
{'number': 71, 'name': 'cot'},
{'number': 72, 'name': 'coin'},
{'number': 73, 'name': 'comb'},
{'number': 74, 'name': 'car'},
{'number': 75, 'name': 'coal'},
{'number': 76, 'name': 'cage'},
{'number': 77, 'name': 'coke'},
{'number': 78, 'name': 'cave'},
{'number': 79, 'name': 'cob'},
{'number': 80, 'name': 'fuzz (face)'},
{'number': 81, 'name': 'fit'},
{'number': 82, 'name': 'phone'},
{'number': 83, 'name': 'foam'},
{'number': 84, 'name': 'fur (fire)'},
{'number': 85, 'name': 'file or fly'},
{'number': 86, 'name': 'fish'},
{'number': 87, 'name': 'fog'},
{'number': 88, 'name': 'fife'},
{'number': 89, 'name': 'fob'},
{'number': 90, 'name': 'bus'},
{'number': 91, 'name': 'bat'},
{'number': 92, 'name': 'bone'},
{'number': 93, 'name': 'bum'},
{'number': 94, 'name': 'bear'},
{'number': 95, 'name': 'bell'},
{'number': 96, 'name': 'beach'},
{'number': 97, 'name': 'book'},
{'number': 98, 'name': 'puff'},
{'number': 99, 'name': 'pipe'},
{'number': 100, 'name': 'disease'}
]







