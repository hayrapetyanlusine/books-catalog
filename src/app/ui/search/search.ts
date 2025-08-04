import { Component, DestroyRef, inject, output, signal } from '@angular/core';
import { MatFormField, MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { BooksCatalog } from '../../services/books-catalog';

@Component({
  selector: 'app-search',
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatFormField,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  private readonly booksCatalog = inject(BooksCatalog);
  private readonly destroyRef = inject(DestroyRef);

  public searchText = signal('');
  public searchChange = output<string>();

  search$ = toObservable(this.searchText)
    .pipe(
      debounceTime(700),
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe((value) => {
      // this.booksCatalog.search(value);
      this.searchChange.emit(value);
    });
}
