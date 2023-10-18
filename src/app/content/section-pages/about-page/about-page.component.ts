import { Component } from '@angular/core';
import { AboutPageInterface } from 'src/app/interface/about-page-interface';
import { ABOUT_PAGE } from './config';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  about: AboutPageInterface[] = ABOUT_PAGE;
}
