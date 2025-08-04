import { Injectable } from '@angular/core';

import { Book } from '../interfaces/book';
import books from '../../assets/books.json';

@Injectable({
  providedIn: 'root'
})
export class BooksCatalog {
  protected readonly booksOfCatalog: Book[] = books;

  getBooks(): Book[] {
    return this.booksOfCatalog;
  }

  getBook(id: number) {
    return this.booksOfCatalog[id - 1];
  }

  addBook(book: Book) {
    this.booksOfCatalog.push(book);
  }

  search(text: string) {
    const searchText = text.trim().toLowerCase();

    if (!searchText) return;

    return this.booksOfCatalog.filter(book =>
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText)
    );
  }
}
