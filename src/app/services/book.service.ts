import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://localhost:3000/books/';

  getBooks() {
    return this.http.get(this.url);
  }

  getBook(bookId) {
    return this.http.get(this.url + bookId);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }

  editBook(book: Book) {
    return this.http.put(this.url + book.id, book);
  }

  constructor(private http: Http) { 

  }
}
