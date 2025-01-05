import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetail } from 'src/app/model/cardDetailModel';
import { CardService } from 'src/app/services/card.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddCardComponentDialogComponent } from './add-card-component-dialog/add-card-component-dialog.component';
import { DeletCardDialogComponent } from './delet-card-dialog/delet-card-dialog.component';


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  userCardData: CardDetail[] = [];

  constructor(
    private cardService: CardService,
    private router: Router,
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUserEmail();
  }

  getUserEmail(): void {
    this.cardService.GetUserCardDetail().subscribe(
      (data: CardDetail[]) => {
        this.userCardData = data;
        console.log('User card data:', this.userCardData); // Ensure `id` is populated correctly
      },
      (error) => {
        console.error('Error fetching user card details:', error);
      }
    );
  }

  AddCard() {
    const dialogRef = this.dialog.open(AddCardComponentDialogComponent, {
      height: '100%',
      width: '100%',
      maxWidth: '100vw',
      maxHeight: '68vh',
      position: { bottom: '0rem' },
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserEmail(); // Reload card details
      }
    });
  }

  Edit(id: number) {
    const dialogRef = this.dialog.open(AddCardComponentDialogComponent, {
      data: { id }, // Pass the current card data
      height: '100%',
      width: '100%',
      maxWidth: '100vw',
      maxHeight: '68vh',
      position: { bottom: '0rem' },
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUserEmail(); // Reload card details after update
      }
    });
  }

  Delete(id: number) {
    console.log('Card ID:', id); // Debugging line to check the card ID before opening dialog

    const dialogRef = this.dialog.open(DeletCardDialogComponent, {
      data: { id: id }, // Pass the card ID to the dialog
      height: '100%',
      width: '100%',
      maxWidth: '100vw',
      maxHeight: '68vh',
      position: { bottom: '0rem' },
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Card deletion confirmed');
        this.getUserEmail(); // Reload card details after deletion
      } else {
        console.log('Card deletion cancelled');
      }
    });
  }


  previousPage(): void {
    this.location.back();
  }
}
