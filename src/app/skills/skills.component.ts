import { CommonModule } from '@angular/common';
import { Image } from './../types/image';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  images: Array<Image> = [
     {name:'HTML',url:'./assets/img/html.png'},
     {name:'CSS',url:'./assets/img/css.png'},
     {name:'Javascript',url:'./assets/img/javascript.png'},
     {name:'Material Design',url:'./assets/img/materialdesign.png'},
     {name:'TypeScript',url:'./assets/img/typescript.png'},
     {name:'Angular',url:'./assets/img/angular.png'},
     {name:'Firebase',url:'./assets/img/firebase.png'},
     {name:'GIT',url:'./assets/img/git.png'},
     {name:'Rest API',url:'./assets/img/restapi.png'},
     {name:'Scrum',url:'./assets/img/scrum.png'},
     {name:'Growth mindset',url:'./assets/img/growthmindset.png'}
  ];

}
