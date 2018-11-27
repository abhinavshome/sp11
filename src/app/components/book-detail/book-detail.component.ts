import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    let bookId = this.route.snapshot.paramMap.get('id');
    this.bookService
      .getBook(bookId)
      .subscribe( res => this.book = res.json());
  }

}
