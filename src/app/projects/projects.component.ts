import { Component } from '@angular/core';
import { Project } from '../types/project';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from "../popup/popup.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, PopupComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Array<Project> = [
    {id:'01',
      imageUrl:'./assets/img/joinPopup.png',
      title:'Join',
      technologiesLabel:'Angular | TypeScript | HTML | CSS | Firebase',
       description:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
       technologies:[
        {imageUrl:'./assets/img/iconOCSS.png',title:'CSS'},
        {imageUrl:'./assets/img/iconOHTML.png',title:'Html'},
        {imageUrl:'./assets/img/iconOFirebase.png',title:'Firebase'},
        {imageUrl:'./assets/img/iconOAngular.png',title:'Angular'},
        {imageUrl:'./assets/img/iconOTypeScript.png',title:'Typescript'}
       ],
       githubUrl:'https://github.com/ismailguendogdu/Join',
        liveUrl:'https://github.com/ismailguendogdu/Join'
      },
    {id:'02',
      imageUrl:'./assets/img/elPopup.png',
      title:'El Pollo Loco',
      technologiesLabel:'HTML | CSS | JavaScript',
      description:'Jump,run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies:[
        {imageUrl:'./assets/img/iconOCSS.png',title:'CSS'},
        {imageUrl:'./assets/img/iconOHTML.png',title:'Html'},
        {imageUrl:'./assets/img/iconOJavascript.png',title:'Javascript'}
      ],
      githubUrl:'https://github.com/ismailguendogdu/El-Pollo-Locco',
      liveUrl:'https://github.com/ismailguendogdu/El-Pollo-Locco'
    }
  ];
  selectedProject: Project | null = null;
  selectedIndex = 0;

  constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {
		config.backdrop = 'static';
		config.keyboard = false;
	}

  selectProject(project: Project, index: number){
    this.selectedProject = project;
    this.selectedIndex = index;
  }

	open(content : any) {
		this.modalService.open(content,{ size: 'xl' });
	}

  onNext(index: number){
    if (this.projects.length === (index+1)) {
      this.selectProject(this.projects[0],0);
    }else{
      this.selectProject(this.projects[index+1],index+1);
    }
  }
}
