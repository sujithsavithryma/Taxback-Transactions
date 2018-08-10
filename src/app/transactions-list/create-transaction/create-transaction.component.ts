import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

	transactionAddForm: FormGroup;

  	constructor(
  		public fb: FormBuilder,
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

  	createTransaction(): void {

  	}

  	cancel(): void {
  		this.dialogRef.close(false);
  	}

}
