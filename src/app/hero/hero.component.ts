import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../service/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  translate = inject(TranslationService);
  toggleUrl = `../../assets/img/${localStorage.getItem('lang')??'en'}.png`;
  
  selectLanguage() {
    const lang = this.translate.getSelectedLanguage();
    const newLang = lang === 'en' ? 'de' :'en';
    this.toggleUrl=`../../assets/img/${newLang}.png`;
    this.translate.switchLanguage(newLang);
  }
    
}
