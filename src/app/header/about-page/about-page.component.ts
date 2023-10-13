import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ContactDialogComponent, {
      width: '60vw',
      height: 'auto',
    });
  }
}
