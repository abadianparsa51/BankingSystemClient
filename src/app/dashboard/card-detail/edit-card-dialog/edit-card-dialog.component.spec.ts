import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardDialogComponent } from './edit-card-dialog.component';

describe('EditCardDialogComponent', () => {
  let component: EditCardDialogComponent;
  let fixture: ComponentFixture<EditCardDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCardDialogComponent]
    });
    fixture = TestBed.createComponent(EditCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
