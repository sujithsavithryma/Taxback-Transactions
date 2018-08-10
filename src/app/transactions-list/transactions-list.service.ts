import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionsListService {

  constructor(public http: HttpClient) { }

  /** @description get all transactions by emaild.
  * @param {string} id email of the user .
  */
  getTransactions(email: string): Observable<any> {
    return this.http.get(`${environment.BASE_URL}${email}`);
  }
}
