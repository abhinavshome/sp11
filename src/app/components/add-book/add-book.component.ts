import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  newBook: Book = {
    title: null,
    author: null,
    price: null,
    rating: null
  };

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  addBook() {
    this.bookService
      .addBook(this.newBook)
      .subscribe(
        () => this.router.navigate(['/home'])
      );
  }

}
