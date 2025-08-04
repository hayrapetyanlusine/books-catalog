import { Component, inject, signal } from '@angular/core';
import { MatCardActions } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { BooksCatalog } from '../../services/books-catalog';

@Component({
  selector: 'app-book-detail',
  imports: [MatCardActions, MatIcon, MatButton, RouterLink],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss'
})
export default class BookDetail {
  private readonly booksCatalog = inject(BooksCatalog);
  private readonly route = inject(ActivatedRoute);
  private readonly id = +(this.route.snapshot.paramMap.get('id') ?? 0);

  public book = signal(this.booksCatalog.getBook(this.id));
}
