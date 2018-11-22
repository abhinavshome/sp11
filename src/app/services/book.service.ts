import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [{
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

  getBooks() {
    return this.books;
  }

  addBook(book:Book) {
    this.books.push(book);
  }

  constructor() { }
}
