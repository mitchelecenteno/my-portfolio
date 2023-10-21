import { Component } from '@angular/core';
import { FLOAT_SOCMED } from './config';
import { FloatSocMedInterface } from 'src/app/interface/float-socmed-interface';

@Component({
  selector: 'app-floating-socmed-icons',
  templateUrl: './floating-socmed-icons.component.html',
  styleUrls: ['./floating-socmed-icons.component.scss'],
})
export class FloatingSocmedIconsComponent {
  socmeds: FloatSocMedInterface[] = FLOAT_SOCMED;
}
