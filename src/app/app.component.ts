import { Component } from '@angular/core';
import { ParticlesConfig } from './interface/particles-config';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-personal-website';
  particlesJS: any;

  navs: Array<any> = [
    {
      label: 'Home',
      path: 'home',
    },
    {
      label: 'About',
      path: 'about',
    },
    {
      label: 'Experience',
      path: 'biodata',
    },
    {
      label: 'Portfolio',
      path: 'portfolio',
    },
    {
      label: 'Contact',
      path: 'contact',
    },
  ];

  public ngOnInit(): void {
    AOS.init({ once: false });
  }
}
