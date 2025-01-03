import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardComponentDialogComponent } from './add-card-component-dialog.component';

describe('AddCardComponentDialogComponent', () => {
  let component: AddCardComponentDialogComponent;
  let fixture: ComponentFixture<AddCardComponentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCardComponentDialogComponent]
    });
    fixture = TestBed.createComponent(AddCardComponentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
