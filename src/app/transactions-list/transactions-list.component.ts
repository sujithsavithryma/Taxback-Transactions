import { Component, OnInit } from '@angular/core';
import { TransactionsListService } from './transactions-list.service';
import { debounceTime } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Transactions } from './transactions.model';

import { CreateTransactionComponent } from './create-transaction/create-transaction.component';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

	transactionsList: Transactions[] = [];
	displayedColumns: string[] = ['id', 'user', 'amount', 'currency', 'txn_date', 'actions'];


  	constructor(
  		public txnService: TransactionsListService,
  		public dialog: MatDialog) { }

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
  	createTransaction(): void {
	    const dialogRef = this.dialog.open(CreateTransactionComponent, {
	      width: '60%'
	    });

	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');
	    });
	  }

}
