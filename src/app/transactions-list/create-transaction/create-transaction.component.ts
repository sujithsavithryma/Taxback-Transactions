import { Component, OnInit, Inject } from '@angular/core';
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
  		public txnService: TransactionsListService,
    	public dialogRef: MatDialogRef<CreateTransactionComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
  		this.transactionAddForm = this.fb.group({
      		user: ['', Validators.required],
      		amount: ['', Validators.required],
      		currency: ['', Validators.required],
      		txn_date: ['', Validators.required]
    	});
  	}

  	ngOnInit() {
        if (this.data) {
            this.transactionAddForm.patchValue({
                user: this.data.user,
                amount: this.data.amount,
                currency: this.data.currency,
                txn_date: this.data.txn_date
            });
        }
  	}
  	/** @description call create/update method of transactions service
	 *
	*/
  	createTransaction(): void {
  		if (this.transactionAddForm.valid) {
  			const transactionRequest = new TransactionsAddModel();
	  		transactionRequest.setTransaction(this.transactionAddForm.value);
	  		transactionRequest.setTransactionDate(this.transactionAddForm.value.txn_date);
            if (!this.data) {
      			this.txnService.createTransaction(transactionRequest)
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
            } else {
                this.txnService.updateTransaction(this.data.id, transactionRequest)
                    .subscribe((success) => {
                        console.log(success);
                        if (success) {
                            this.snackBar.open('Transaction Updated', 'Close', {
                              duration: 3000
                            });
                            this.dialogRef.close(success);
                        }
                    });
            }

  		}
  	}
  	/** @description close dialogue box
	 *
	*/
  	cancel(): void {
  		this.dialogRef.close(false);
  	}

}
