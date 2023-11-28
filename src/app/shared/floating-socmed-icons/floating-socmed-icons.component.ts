import { Component } from '@angular/core';
import { FLOAT_SOCMED } from './config';
import { FloatSocMedInterface } from 'src/app/interface/float-socmed-interface';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-floating-socmed-icons',
  templateUrl: './floating-socmed-icons.component.html',
  styleUrls: ['./floating-socmed-icons.component.scss'],
  // animations: [
  //   trigger('fadeInTop', [
  //     state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
  //     transition(':enter', [
  //       animate(
  //         '3s ease',
  //         keyframes([
  //           style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
  //           style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
  //         ])
  //       ),
  //     ]),
  //     transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
  //   ]),
  // ],
})
export class FloatingSocmedIconsComponent {
  socmeds: FloatSocMedInterface[] = FLOAT_SOCMED;
}
