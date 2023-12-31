import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ContactDialogComponent } from 'src/app/shared/dialog/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  searchValue = '';

  constructor(public dialog: MatDialog) {}
  sendMessage(): void {
    this.dialog.open(ContactDialogComponent, {
      width: '60vw',
      height: 'auto',
    });
  }
}
