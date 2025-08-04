import { Routes } from '@angular/router';
import { Main } from './layout/main/main';

export const routes: Routes = [
  {
    path: '',
    component: Main
  },
  {
    path: 'book/:id',
    loadComponent: async () => import('./ui/book-detail/book-detail'),
  },
  {
    path: 'add-book',
    loadComponent: async () => import('./ui/add-book/add-book'),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
