import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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
          this.openSnackBar();
        },
        (error) => {
          console.log('ERROR: ', error.text);
        }
      );
    this.dialogRef.close();
  }

  constructor(
    private dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  // onSubmit() {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
