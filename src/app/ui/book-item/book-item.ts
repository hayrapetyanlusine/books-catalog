import { Component, input } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { RouterLink } from '@angular/router';

import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-book-item',
  imports: [MatCard, MatCardContent, RouterLink, MatCardHeader],
  templateUrl: './book-item.html',
  styleUrl: './book-item.scss'
})
export class BookItem {
  public book = input.required<Book>();
}
