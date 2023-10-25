import { Component } from '@angular/core';
import { AboutPageInterface } from 'src/app/interface/about-page-interface';
import { ABOUT_PAGE, ABOUT_DESCRIPTION } from './config';
import { AboutDesc } from 'src/app/interface/descriptions/about-desc-interface';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [
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
  ],
})
export class AboutPageComponent {
  about: AboutPageInterface[] = ABOUT_PAGE;
  descriptions: AboutDesc[] = ABOUT_DESCRIPTION;
}
