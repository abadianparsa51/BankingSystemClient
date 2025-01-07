import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-edit-card-dialog',
  templateUrl: './edit-card-dialog.component.html',
  styleUrls: ['./edit-card-dialog.component.scss']
})
export class EditCardDialogComponent implements OnInit {
  formData!: FormGroup;

  constructor(
    private cardService: CardService,
    public dialogRef: MatDialogRef<EditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; card: any } // Injected data contains the card ID
  ) { }

  ngOnInit(): void {
    console.log('Received data:', this.data);  // Debugging step: Check if data is passed correctly

    if (this.data?.card) {
      // Initialize the form with values from the passed data
      this.formData = new FormGroup({
        CardNumber: new FormControl(this.data.card.CardNumber, [Validators.required]),
        ExpirationDate: new FormControl(this.data.card.ExpirationDate, [Validators.required]),
        Email: new FormControl(this.data.card.Email, [Validators.required, Validators.email])
      });
    } else {
      console.error('Card data is undefined');
    }
    if (this.data?.card) {
      this.formData.patchValue({
        CardNumber: this.data.card.cardNumber,
        ExpirationDate: this.data.card.expirationDate,
        Email: this.data.card.email // Update with the actual email field if necessary
      });
    }
  }


  onSubmit(): void {
    if (this.formData.valid) {
      const updatedCard = this.formData.value;
      this.cardService.EditUserCardDetail(this.data.id, updatedCard).subscribe(
        response => {
          console.log('Card updated successfully:', response);

          // After successful update, patch the form with the latest response data
          // Assuming response contains updated card data
          this.formData.patchValue({
            CardNumber: response.CardNumber,
            ExpirationDate: response.ExpirationDate,
            Email: response.Email
          });
          console.log('Form values after patching with response:', this.formData.value); // Log updated form values

          this.dialogRef.close(true); // Close the dialog with success
        },
        error => {
          console.error('Error updating card:', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close(false); // Close the dialog without action
  }
}
