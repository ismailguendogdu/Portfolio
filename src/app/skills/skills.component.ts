import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Image } from './../types/image';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
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

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const icons = this.el.nativeElement.querySelectorAll('.icon');
    icons.forEach((icon: Element) => observer.observe(icon));
  }
}
