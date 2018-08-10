import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmBoxComponent } from './confirm-box.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [ConfirmBoxComponent],
  exports: [ConfirmBoxComponent],
  entryComponents: [ConfirmBoxComponent]
})
export class ConfirmBoxModule { }
