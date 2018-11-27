import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  rateUp(book: Book) {
    if (book.rating < 5) {
      book.rating++;
      this.bookService
        .editBook(book)
        .subscribe();
    }

  }

  rateDown(book: Book) {
    if (book.rating > 1) {
      book.rating--;
      this.bookService
        .editBook(book)
        .subscribe();
    }
  }

  constructor(private bookService: BookService, private http: Http) {

  }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe(
      res => this.books = res.json(),
      err => console.log(err)
      )
  }

}
