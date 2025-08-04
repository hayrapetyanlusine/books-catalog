import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BooksCatalog } from '../../services/books-catalog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-book.html',
  styleUrls: ['./add-book.scss']
})
export default class AddBook {
  private readonly fb = inject(FormBuilder);
  private readonly booksCatalog = inject(BooksCatalog);
  private readonly router = inject(Router);

  bookForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    author: ['', [Validators.required, Validators.minLength(2)]],
    year: [new Date().getFullYear(), [
      Validators.required,
      Validators.min(1000),
      Validators.max(new Date().getFullYear())
    ]],
    pages: [1, [Validators.required, Validators.min(1)]],
    language: ['', [Validators.required, Validators.minLength(2)]]
  });

  onSubmit() {
    if (this.bookForm.invalid) return;

    this.booksCatalog.addBook(this.bookForm.value);
    this.router.navigate(['/']);
  }
}
