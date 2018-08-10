import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'txn-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {

  	constructor(
	  	public dialogRef: MatDialogRef<ConfirmBoxComponent>,
	    @Inject(MAT_DIALOG_DATA) public data: any) { }

  	ngOnInit() {
  	}
  	/** @description confirm action 
	 * */
  	yes(): void {
  		this.dialogRef.close(true);
  	}
  	/** @description cancel action 
	 * */
  	cancel(): void {
  		this.dialogRef.close(false);
  	}
}
