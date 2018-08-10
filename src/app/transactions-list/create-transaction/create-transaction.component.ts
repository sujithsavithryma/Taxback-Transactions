import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { TransactionsListService } from '../transactions-list.service';
import { TransactionsAddModel } from '../transactions.model';


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

	transactionAddForm: FormGroup;

  	constructor(
  		public fb: FormBuilder,
  		public snackBar: MatSnackBar,
  		public transactionsService: TransactionsListService,
    	public dialogRef: MatDialogRef<CreateTransactionComponent>) {
  		this.transactionAddForm = this.fb.group({
      		user: ['', Validators.required],
      		amount: ['', Validators.required],
      		currency: ['', Validators.required],
      		txn_date: ['', Validators.required]
    	});
  	}

  	ngOnInit() {
  	}
  	/** @description call create method of transactions service
	 *
	*/
  	createTransaction(): void {
  		if (this.transactionAddForm.valid) {
  			const transactionRequest = new TransactionsAddModel();
	  		transactionRequest.setTransaction(this.transactionAddForm.value);
	  		transactionRequest.setTransactionDate(this.transactionAddForm.value.txn_date);
  			this.transactionsService.createTransaction(transactionRequest)
  				.subscribe((succes) => {
  					if (succes.id) {
  						this.snackBar.open('Transaction added', 'Close', {
						  duration: 3000
						});
						this.dialogRef.close(succes.id);
  					}
  				}, (error) => {
  					console.log(error);
  				});

  		}
  	}
  	/** @description close dialogue box
	 *
	*/
  	cancel(): void {
  		this.dialogRef.close(false);
  	}

}
