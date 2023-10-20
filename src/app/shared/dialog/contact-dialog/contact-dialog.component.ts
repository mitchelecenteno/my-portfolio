import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { SuccessSbComponent } from '../../snackbar/success-sb/success-sb.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss'],
})
export class ContactDialogComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(0),
    ]),
  });
  durationInSeconds = 3.5;
  message = 'message sent successfully';
  action = 'OK';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ContactDialogComponent>,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {}

  public sendEmail() {
    emailjs
      .send(
        'service_uqsrs6n',
        'template_2b03z6w',
        this.contactForm.getRawValue(),
        'dNBQR9CJ2edfZhycz'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS: ', result.text);
          this.openSnackBar();
        },
        (error) => {
          console.log('ERROR: ', error.text);
        }
      );
    this.dialogRef.close();
  }

  openSnackBar() {
    this.snackbar.open(this.message, this.action, {
      duration: this.durationInSeconds * 1000,
    });
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
