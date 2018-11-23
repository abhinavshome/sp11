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
    if (book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
  }

  addBook(book: Book) {
    this.bookService.addBook(book);
  }

  constructor(private bookService: BookService, private http: Http) {

  }

  ngOnInit() {
    //this.books = this.bookService.getBooks();

    this.http
      .get('http://localhost:3000/books')
      .subscribe(
        (res) => { this.books = res.json() },
        (err) => { console.log(err)}
      )
  }

}
