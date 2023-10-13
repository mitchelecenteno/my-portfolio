import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-personal-website';

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
}
