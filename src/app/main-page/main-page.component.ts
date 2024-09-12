import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeroComponent,
    AboutMeComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    ReferencesComponent, 
    ContactMeComponent, 
    FooterComponent,RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
