import { Component } from '@angular/core';
import { PROJECT_PAGE, PROJ_DESCRIPTION } from './config';
import { projectPageInterface } from 'src/app/interface/project-page-interface';
import { ProjectDesc } from 'src/app/interface/descriptions/project-desc-interface';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
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
export class ProjectsPageComponent {
  projects: projectPageInterface[] = PROJECT_PAGE;
  descriptions: ProjectDesc[] = PROJ_DESCRIPTION;
}
