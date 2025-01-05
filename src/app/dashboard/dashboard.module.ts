import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard.component';
import { AddCardComponentDialogComponent } from './card-detail/add-card-component-dialog/add-card-component-dialog.component';
import { EditCardDialogComponent } from './card-detail/edit-card-dialog/edit-card-dialog.component';
import { DeletCardDialogComponent } from './card-detail/delet-card-dialog/delet-card-dialog.component';



@NgModule({
  declarations: [
    CardDetailComponent,
    DashboardComponent,
    AddCardComponentDialogComponent,
    EditCardDialogComponent,
    DeletCardDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DashboardModule { }
