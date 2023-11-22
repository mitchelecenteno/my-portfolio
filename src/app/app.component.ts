import { Component } from '@angular/core';
import { ParticlesConfig } from './interface/particles-config';

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
      label: 'Portfolio',
      path: 'portfolio',
    },
    {
      label: 'Contact',
      path: 'contact',
    },
  ];

  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    this.particlesJS('particles-js', ParticlesConfig, function () {});
  }
}
