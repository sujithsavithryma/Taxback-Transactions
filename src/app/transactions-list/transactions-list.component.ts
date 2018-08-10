import { Component, OnInit } from '@angular/core';
import { TransactionsListService } from './transactions-list.service';
import { debounceTime } from 'rxjs/operators';

import { Transactions } from './transactions.model';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

	transactionsList: Transactions[] = [];
	displayedColumns: string[] = ['id', 'user', 'amount', 'currency', 'txn_date', 'actions'];


  	constructor(public txnService: TransactionsListService) { }

  	ngOnInit() {
  		this.getTransactions('priya@gmail.com');
  	}
  	getTransactions(email: string): void {
  		this.txnService.getTransactions(email)
  			.pipe(
  				debounceTime(1000)
  			)
  			.subscribe((transactionsList: Transactions[]) => {
  				console.log(transactionsList);
  				if (transactionsList) {
  					this.transactionsList = [...transactionsList]
  				}
  			});
  	}

}
