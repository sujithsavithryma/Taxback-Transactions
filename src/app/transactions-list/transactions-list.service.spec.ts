import { TestBed, inject } from '@angular/core/testing';

import { TransactionsListService } from './transactions-list.service';

describe('TransactionsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionsListService]
    });
  });

  it('should be created', inject([TransactionsListService], (service: TransactionsListService) => {
    expect(service).toBeTruthy();
  }));
});
