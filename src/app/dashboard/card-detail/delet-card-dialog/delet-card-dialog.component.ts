import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-delet-card-dialog',
  templateUrl: './delet-card-dialog.component.html',
  styleUrls: ['./delet-card-dialog.component.scss']
})
export class DeletCardDialogComponent {
  constructor(
    private cardService: CardService,
    public dialogRef: MatDialogRef<DeletCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number } // Injected data contains the card ID
  ) { }

  Delete(cardId: number) {
    console.log('Card ID to delete:', cardId); // Debugging line

    if (cardId) {
      this.cardService.DeleteUserCardDetail(cardId).subscribe(
        (response) => {
          console.log('Card deleted successfully', response);
          this.dialogRef.close(true); // Close the dialog with success
        },
        (error) => {
          console.error('Error deleting card', error);
        }
      );
    } else {
      console.error('Card ID is invalid or undefined');
    }
  }

  onCancel(): void {
    this.dialogRef.close(false); // Close the dialog without action
  }
}
