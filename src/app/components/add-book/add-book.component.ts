import { Book } from './../../models/book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() onBookAdd = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSaveBtnClick(title, author, price, rating) {
    let newBook: Book = {
      title: title.value,
      author: author.value,
      price: +price.value,
      rating: +rating.value
    };

    this.onBookAdd.emit(newBook);

    title.value = null;
    author.value = null;
    price.value = null;
    rating.value = null;
  }

}
