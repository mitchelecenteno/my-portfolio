import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactDialogComponent } from '../../dialog/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-success-sb',
  templateUrl: './success-sb.component.html',
  styleUrls: ['./success-sb.component.css'],
})
export class SuccessSbComponent {
  constructor(private snackBar: MatSnackBar) {}
}
