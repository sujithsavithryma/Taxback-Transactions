import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { TransactionsListComponent } from './transactions-list.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component'

import { TransactionsListService } from './transactions-list.service';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { ConfirmBoxModule } from '../core';

const routes: Routes = [
	{
		path: '', component: TransactionsListComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ConfirmBoxModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransactionsListComponent, CreateTransactionComponent, ViewTransactionComponent],
  entryComponents: [CreateTransactionComponent, ViewTransactionComponent],
  providers: [TransactionsListService]
})
export class TransactionsListModule { }
