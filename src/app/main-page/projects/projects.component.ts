import { Component, inject } from '@angular/core';
import { Project } from '../../types/project';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from "../popup/popup.component";
import { TranslationService } from '../../service/translation.service';

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
      description: new Map<string, string>([
        ["en", "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."],
        ["de", "Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu"]
    ]),
       technologies:[
        {imageUrl:'./assets/img/iconOCSS.png',title:'CSS'},
        {imageUrl:'./assets/img/iconOHTML.png',title:'Html'},
        {imageUrl:'./assets/img/iconOFirebase.png',title:'Firebase'},
        {imageUrl:'./assets/img/iconOJavascript.png',title:'Javascript'}
       ],
       githubUrl:'https://github.com/ismailguendogdu/Join',
        liveUrl:'https://github.com/ismailguendogdu/Join'
      },
    {id:'02',
      imageUrl:'./assets/img/elPopup.png',
      title:'El Pollo Loco',
      description:new Map<string, string>([
        ["en", "Jump,run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen."],
        ["de", "Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen."]
    ]),
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
  translationService = inject(TranslationService);
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
