import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeroComponent } from './main-page/hero/hero.component';
import { AboutMeComponent } from './main-page/about-me/about-me.component';
import { SkillsComponent } from './main-page/skills/skills.component';
import { ProjectsComponent } from './main-page/projects/projects.component';
import { ContactMeComponent } from './main-page/contact-me/contact-me.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { PopupComponent } from './main-page/popup/popup.component';
import { ReferencesComponent } from './main-page/references/references.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainPageComponent } from "./main-page/main-page.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgbModule,
    RouterOutlet,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent,
    PopupComponent,
    ReferencesComponent,
    ImpressumComponent,
    MainPageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrollt sanft nach oben
      }
    });
  }
}