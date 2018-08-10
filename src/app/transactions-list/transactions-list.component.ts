import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Transactions } from './transactions.model';
import { TransactionsListService } from './transactions-list.service';

import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component'

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
  		this.getTransactions('sujith@gmail.com');
  	}
  	getTransactions(email: string): void {
  		this.txnService.getTransactions(email)
  			.pipe(
  				debounceTime(1000)
  			)
  			.subscribe((transactionsList: Transactions[]) => {
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
	viewTransaction(transaction: Transactions): void {
	    const dialogRef = this.dialog.open(ViewTransactionComponent, {
	      width: '60%',
	      data: transaction
	    });

	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');
	    });
	}
    editTransaction(transaction: Transactions): void {
        const dialogRef = this.dialog.open(CreateTransactionComponent, {
          width: '60%',
          data: transaction
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
    }

}
