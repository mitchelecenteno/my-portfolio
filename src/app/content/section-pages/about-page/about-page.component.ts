import { Component } from '@angular/core';
import { AboutPageInterface } from 'src/app/interface/about-page-interface';
import { ABOUT_PAGE, ABOUT_DESCRIPTION } from './config';
import { AboutDesc } from 'src/app/interface/descriptions/about-desc-interface';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  about: AboutPageInterface[] = ABOUT_PAGE;
  descriptions: AboutDesc[] = ABOUT_DESCRIPTION;
}
