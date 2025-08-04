import { Component } from '@angular/core';
import { Books } from '../../ui/books/books';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Books, MatButton, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
