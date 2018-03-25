import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ResultEntry} from '../model/ResultEntry';

@Component({
  selector: 'app-binding-examples',
  templateUrl: './binding-examples.component.html',
  styleUrls: ['./binding-examples.component.css']
})

export class BindingExamplesComponent implements OnInit {

  @Input()
  resultEntry;

  dude = 'shit';
  name = 'wow Doug';

  @Input()
  parentCount: number;

  @Input() PData: number;

  @Output() childEvent = new EventEmitter();

  constructor() { }

  onChange(value) {
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }

  wasWatched(): string {
    return 'eat shit douglas';
  }

  onDelete() {
    console.log('delete');
  }

}
