import { TestBed } from '@angular/core/testing';

import { BooksCatalog } from './books-catalog';

describe('BooksCatalog', () => {
  let service: BooksCatalog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksCatalog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
