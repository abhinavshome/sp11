import { Book } from './../../models/book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() onBookAdd = new EventEmitter();
  newBook: Book = {
    title: null,
    author: null,
    price: null,
    rating: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSaveBtnClick() {
    this.onBookAdd.emit(this.newBook);
    this.newBook = {
      title: null,
      author: null,
      price: null,
      rating: null
    };
  }

}
