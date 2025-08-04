import { Component, computed, inject, signal } from '@angular/core';

import { BooksCatalog } from '../../services/books-catalog';
import { BookItem } from '../book-item/book-item';
import { Search } from '../search/search';

@Component({
  selector: 'app-books',
  imports: [BookItem, Search],
  templateUrl: './books.html',
  styleUrl: './books.scss'
})
export class Books {
  private readonly booksCatalog = inject(BooksCatalog);

  public searchText = signal('');

  public filteredBooks = computed(() => {
    const value = this.searchText().trim();
    return value
      ? this.booksCatalog.search(value)
      : this.booksCatalog.getBooks();
  });

  onSearchChange(value: string) {
    this.searchText.set(value);
  }
}
