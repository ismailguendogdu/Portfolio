import { Component } from '@angular/core';
import { Project } from '../types/project';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Array<Project> = [
    {imageUrl:'./assets/img/joinPopup.png',title:'Join',technologies:'Angular | TypeScript | HTML | CSS | Firebase'},
    {imageUrl:'./assets/img/elPopup.png',title:'El Pollo Loco',technologies:'HTML | CSS | JavaScript'}
  ];
}
