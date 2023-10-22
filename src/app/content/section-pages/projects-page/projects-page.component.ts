import { Component } from '@angular/core';
import { PROJECT_PAGE, PROJ_DESCRIPTION } from './config';
import { projectPageInterface } from 'src/app/interface/project-page-interface';
import { ProjectDesc } from 'src/app/interface/descriptions/project-desc-interface';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  projects: projectPageInterface[] = PROJECT_PAGE;
  descriptions: ProjectDesc[] = PROJ_DESCRIPTION;
}
