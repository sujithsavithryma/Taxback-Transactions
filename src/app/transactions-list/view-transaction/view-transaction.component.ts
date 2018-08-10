import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TransactionsListService } from '../transactions-list.service';

import { Transactions } from '../transactions.model';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.scss']
})
export class ViewTransactionComponent implements OnInit {

	transaction: Transactions = new Transactions();

 	constructor(
 		public txnService: TransactionsListService,
 		public dialogRef: MatDialogRef<ViewTransactionComponent>,
    	@Inject(MAT_DIALOG_DATA) public data: any) { }

  	ngOnInit() {
  		this.txnService.getTransaction(this.data)
  			.subscribe((transaction) => {
  				this.transaction = transaction;
  			});
  	}

}
