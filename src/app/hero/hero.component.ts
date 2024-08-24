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
  toggleUrl = '../../assets/img/en.png';
  translate = inject(TranslationService);
  
  selectLanguage() {
    const lang = this.translate.getSelectedLanguage();
    const newLang = lang == 'en' ? 'de':'en';
    this.toggleUrl=`../../assets/img/${newLang}.png`;
    this.translate.switchLanguage(newLang);
  }
    
}
