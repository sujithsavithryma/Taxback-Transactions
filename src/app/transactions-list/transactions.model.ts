export class Transactions {
	id: number;
	user: string;
	amount: string;
	currency: string;
	txn_date: string;
}

export class TransactionsAddModel {
	user: string;
	amount: string;
	currency: string;
	txn_date: string;

	setTransaction(data: any): void {
		this.user = data.user;
		this.amount = data.amount;
		this.currency = data.currency;
	}
	setTransactionDate(date: Date): void {
		const txn_date = new Date(date);
  		const month = ('0' + (txn_date.getMonth() + 1)).slice(-2);
  		const day = ('0' + txn_date.getDate()).slice(-2);
  		this.txn_date = `${txn_date.getFullYear()}-${month}-${day}`;
	}
}