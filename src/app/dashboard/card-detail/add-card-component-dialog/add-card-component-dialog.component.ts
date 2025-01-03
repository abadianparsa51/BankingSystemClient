import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-add-card-component-dialog',
  templateUrl: './add-card-component-dialog.component.html',
  styleUrls: ['./add-card-component-dialog.component.scss']
})
export class AddCardComponentDialogComponent {
  formData: FormGroup = new FormGroup({
    id: new FormControl(),
    Email: new FormControl('', [Validators.required, Validators.email]),
    CardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    ExpirationDate: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
  });

  constructor(private cardService: CardService) { }

  // تابع ارسال داده به بک‌اند
  addCard() {
    if (this.formData.valid) {
      this.cardService.AddUserCardDetail(this.formData.value).subscribe({
        next: (response) => {
          console.log('Card added successfully:', response);
          alert('Card added successfully!');
        },
        error: (error) => {
          console.error('Error adding card:', error);
          alert('Failed to add card. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields with valid data.');
    }
  }
}
