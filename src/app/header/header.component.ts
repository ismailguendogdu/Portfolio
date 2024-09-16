import { Component, HostListener, inject } from '@angular/core';
import { TranslationService } from '../service/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translate = inject(TranslationService);
  toggleUrl = `../../assets/img/${localStorage.getItem('lang') ?? 'en'}.png`;
  isNavbarOpen = false;

  selectLanguage() {
    const lang = this.translate.getSelectedLanguage();
    const newLang = lang === 'en' ? 'de' : 'en';
    this.toggleUrl = `../../assets/img/${newLang}.png`;
    this.translate.switchLanguage(newLang);
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  @HostListener('document:click', ['$event'])
  closeNavbarOnClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    const navbar = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');

    if (navbar && toggler && !navbar.contains(targetElement) && !toggler.contains(targetElement)) {
      this.isNavbarOpen = false;
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse) {
        navbarCollapse.classList.remove('show');
      }
    }
  }
}
