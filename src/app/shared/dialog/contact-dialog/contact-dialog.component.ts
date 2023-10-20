import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessSbComponent } from '../../snackbar/success-sb/success-sb.component';

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
  durationInSeconds = 5;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ContactDialogComponent>,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {}

  // onSubmit(){}
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
          this.openSnackBar();
          console.log('SUCCESS: ', result.text);
        },
        (error) => {
          console.log('ERROR: ', error.text);
        }
      );
    this.dialogRef.close();
  }

  openSnackBar() {
    this.snackbar.openFromComponent(SuccessSbComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
