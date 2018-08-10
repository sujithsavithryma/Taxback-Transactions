import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
* App basic routes
*/
const routes: Routes = [
	{
		path: 'transactions', loadChildren: './transactions-list/transactions-list.module#TransactionsListModule'
	},
	{
		path: '**', redirectTo: '/transactions', pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
