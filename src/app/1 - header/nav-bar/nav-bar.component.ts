import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NavNode } from 'src/app/interface/navbar-interface';
import { NAV_BAR } from './config';
import { NAV_DATA } from './nav-data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
// export class NavBarComponent implements OnInit {
//   userNav: NavNode[] = NAV_BAR;

//   constructor(private renderer: Renderer2, private router: Router) {}

//   ngOnInit() {
//     this.loadScript('assets/script.js');
//   }

//   // loading script.js file
//   loadScript(src: string) {
//     const script = this.renderer.createElement('script');
//     script.src = src;
//     script.type = 'text/javascript';
//     this.renderer.appendChild(document.body, script);
//   }

// }

// NAV #2
export class NavBarComponent implements OnInit {
  collapsed = false;
  navData = NAV_DATA;
  constructor() {}
  ngOnInit() {}

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidenav(): void {
    this.collapsed = false;
  }
}
