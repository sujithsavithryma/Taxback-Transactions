import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FlexLayoutModule } from "@angular/flex-layout";

import { TransactionsListComponent } from './transactions-list.component';


const routes: Routes = [
	{
		path: '', component: TransactionsListComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransactionsListComponent]
})
export class TransactionsListModule { }
