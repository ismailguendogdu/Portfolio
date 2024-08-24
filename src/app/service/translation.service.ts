import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  langDe = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
  }

  public getSelectedLanguage(): string {
    if (this.translate.currentLang) {
      return this.translate.currentLang;
    }
    return this.translate.getDefaultLang();
  }
}
