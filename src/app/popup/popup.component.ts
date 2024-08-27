import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Project } from '../types/project';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  @Input()
  project: Project | null = null;

  @Input()
  index: number = 0;

  @Output() onNext = new EventEmitter<any>();

  public next(): void {
    this.onNext.emit(this.index);
}

}
