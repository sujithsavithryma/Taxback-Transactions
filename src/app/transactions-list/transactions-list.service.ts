import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { TransactionsAddModel, Transactions } from './transactions.model';


@Injectable()
export class TransactionsListService {

  constructor(public http: HttpClient) { }

  /** @description get all transactions by emaild.
  * @param {string} id email of the user .
  */
  getTransactions(email: string): Observable<any> {
    return this.http.get(`${environment.BASE_URL}${email}`);
  }
  /** @description get all transactions by emaild.
  * @param {string} id email of the user .
  * @param {transaction} transactions object .
  */
  createTransaction(transaction: TransactionsAddModel): Observable<any> {
  	return this.http.post(`${environment.BASE_URL}${transaction.user}`, transaction);
  }
  /** @description get single transaction by transaction id.
  * @param {string} id transaction is .
  */
  getTransaction(transaction: Transactions): Observable<any> {
  	return this.http.get(`${environment.BASE_URL}${transaction.user}/${transaction.id}`);
  }
}
