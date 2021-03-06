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
    * @param {TransactionsAddModel} transactions object .
    */
    createTransaction(transaction: TransactionsAddModel): Observable<any> {
  	    return this.http.post(`${environment.BASE_URL}${transaction.user}`, transaction);
    }
    /** @description get single transaction by transaction id.
      * @param {string} transaction transaction  .
    */
    getTransaction(transaction: Transactions): Observable<any> {
  	    return this.http.get(`${environment.BASE_URL}${transaction.user}/${transaction.id}`);
    }
    /** @description update single transaction by transaction id.
      * @param {TransactionsAddModel} transactionId.
      * @param {string} transaction.
     */
    updateTransaction(transactionId: number, transaction: TransactionsAddModel): Observable<any> {
        return this.http.post(`${environment.BASE_URL}${transaction.user}/${transactionId}`, transaction);
    }
    /** @description delete a transactions by user id andtransaction is.
    * @param {Transactions} transaction object .
    */
    deleteTransaction(transaction: Transactions): Observable<any> {
        return this.http.delete(`${environment.BASE_URL}${transaction.user}/${transaction.id}`);
    }
}
