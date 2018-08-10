import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { Transactions } from './transactions.model';
import { TransactionsListService } from './transactions-list.service';

import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component'
import { ConfirmBoxComponent } from '../core';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

	transactionsList: Transactions[] = [];
	displayedColumns: string[] = ['id', 'user', 'amount', 'currency', 'txn_date', 'actions'];

    user: string = 'sujith@gmail.com';

  	constructor(
  		public txnService: TransactionsListService,
        public snackBar: MatSnackBar,
  		public dialog: MatDialog) { }

  	ngOnInit() {
  		this.getTransactions(this.user);
  	}
    /** @description get all transactions by emaild.
    * @param {string} id email of the user .
    */
  	getTransactions(email: string): void {
        this.user = email;
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
    /** @description open transaction createddialogue box.
    */
  	createTransaction(): void {
	    const dialogRef = this.dialog.open(CreateTransactionComponent, {
	      width: '60%'
	    });

	    dialogRef.afterClosed().subscribe(result => {
	        if (result) {
                this.getTransactions(this.user);
            }
	    });
	}
    /** @description open transaction view dialogue box.
    */
	viewTransaction(transaction: Transactions): void {
	    const dialogRef = this.dialog.open(ViewTransactionComponent, {
	      width: '60%',
	      data: transaction
	    });

	    dialogRef.afterClosed().subscribe(result => {
	      console.log('The dialog was closed');
	    });
	}
    /** @description open transaction create dialogue box with edit option.
    */
    editTransaction(transaction: Transactions): void {
        const dialogRef = this.dialog.open(CreateTransactionComponent, {
          width: '60%',
          data: transaction
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const index = this.transactionsList.findIndex(x => x.id === transaction.id);
                this.transactionsList = [
                ...this.transactionsList.slice(0, index),
                result,
                ...this.transactionsList.slice(index + 1)
              ];
            }
        });
    }
    /** @description open transaction delete confirmation box.
    */
    deleteTransaction(transaction: Transactions): void {
        const dialogRef = this.dialog.open(ConfirmBoxComponent, {
          width: '40%',
          data: transaction
        });

        dialogRef.afterClosed().subscribe(result => {
             if (result) {
                 this.txnService.deleteTransaction(transaction)
                     .subscribe((res) => {
                        if (res) {
                            const index = this.transactionsList.findIndex(x => x.id === transaction.id);
                            this.transactionsList = [
                                ...this.transactionsList.slice(0, index),
                                ...this.transactionsList.slice(index + 1)
                            ];
                            this.snackBar.open('Transaction Deleted', 'Close', { duration: 3000 });
                        }
                     });
             }
        });
    }

}
