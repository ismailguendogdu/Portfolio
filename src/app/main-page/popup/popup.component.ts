import { Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { Project } from '../../types/project';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../service/translation.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  translationService = inject(TranslationService);

  @Input()
  project: Project | null = null;

  @Input()
  index: number = 0;

  @Input()
  selectedLang: string = '';

  @Output() onNext = new EventEmitter<any>();

  public next(): void {
    this.onNext.emit(this.index);
}

}
