import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book;
  @Output() onRateUp = new EventEmitter();
  @Output() onRateDown = new EventEmitter();
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

  onRateUpBtnClick() {
    this.onRateUp.emit();
  }

  onRateDownBtnClick() {
    this.onRateDown.emit();
  }

}
