import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : Book[] = [{
    title: 'The Alcheimst',
    author: 'Paulo Cohelo',
    price: 20,
    rating: 4
  }, {
    title: 'The monk who sold his ferrari',
    author: 'Robin Sharma',
    price: 30,
    rating: 2
  }, {
    title: 'THE NIGHTINGALE',
    author: 'Kristin Hannah',
    price: 40,
    rating: 1
  }, {
    title: 'Harry Potter',
    author: 'J K Rowling',
    price: 10,
    rating: 3
  }];

  rateUp(book: Book) {
    if(book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if(book.rating > 1)
      book.rating--;
  }

  constructor() { }

  ngOnInit() {
  }

}
