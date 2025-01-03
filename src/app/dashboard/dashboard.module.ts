import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard.component';
import { AddCardComponentDialogComponent } from './card-detail/add-card-component-dialog/add-card-component-dialog.component';



@NgModule({
  declarations: [
    CardDetailComponent,
    DashboardComponent,
    AddCardComponentDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DashboardModule { }
