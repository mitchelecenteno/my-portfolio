import { Component } from '@angular/core';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('fadeInBottom', [
      state('void', style({ opacity: 0.75, transform: 'translateY(100%)' })),
      transition(':enter', [
        animate(
          '2.5s ease',
          keyframes([
            style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
    trigger('fadeInLeft', [
      state('void', style({ opacity: 0.75, transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate(
          '3s ease',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ])
        ),
      ]),
      transition(':leave', [animate('0.5s', style({ opacity: 0.75 }))]),
    ]),
    trigger('fadeInTop', [
      state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition(':enter', [
        animate(
          '2s ease',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ])
        ),
      ]),
      transition(':leave', [animate('0.5s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomePageComponent {}
