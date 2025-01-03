import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardDetail } from 'src/app/model/cardDetailModel';
import { CardService } from 'src/app/services/card.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddCardComponentDialogComponent } from './add-card-component-dialog/add-card-component-dialog.component';
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
      (data: any) => {
        this.userCardData = data; // Store the data in the property
      },
    );
  }

  AddCard() {
    // alert("AddCard");
    const dialogRef = this.dialog.open(AddCardComponentDialogComponent, {
      height: '100%',
      width: '100%',
      maxWidth: '100vw',
      maxHeight: '68vh',
      position: { bottom: '0rem' },
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  Edit() {
    alert("EditCard");

  }
  Delete() {
    alert("DeleteCard");

  }
  previousPage(): void {
    console.log('previusePage');

    this.location.back();
  }
}
