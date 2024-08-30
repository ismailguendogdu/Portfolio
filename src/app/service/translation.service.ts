import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  langDe = false;

  constructor(private translate: TranslateService) {
    let lang = localStorage.getItem('lang');
    let currentLang = lang ? lang : 'en'; 
    translate.setDefaultLang(currentLang);
    translate.currentLang = currentLang;
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('lang',language);
  }

  public getSelectedLanguage(): string {
    if (this.translate.currentLang) {
      return this.translate.currentLang;
    }
    return this.translate.getDefaultLang();
  }
}
