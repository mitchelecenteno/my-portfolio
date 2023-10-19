import { Component } from '@angular/core';
import { PROJECT_PAGE } from './config';
import { projectPageInterface } from 'src/app/interface/project-page-interface';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  projects: projectPageInterface[] = PROJECT_PAGE;
}
