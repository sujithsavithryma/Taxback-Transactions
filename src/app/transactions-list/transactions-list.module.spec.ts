import { TransactionsListModule } from './transactions-list.module';

describe('TransactionsListModule', () => {
  let transactionsListModule: TransactionsListModule;

  beforeEach(() => {
    transactionsListModule = new TransactionsListModule();
  });

  it('should create an instance', () => {
    expect(transactionsListModule).toBeTruthy();
  });
});
