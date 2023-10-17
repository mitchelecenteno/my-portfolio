import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_BAR, NavNode } from 'src/app/interface/navbar-interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  userNav: NavNode[] = NAV_BAR;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {
    this.loadScript('assets/script.js');
  }

  // loading script.js file
  loadScript(src: string) {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    this.renderer.appendChild(document.body, script);
  }
}
