import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'impressum', component: ImpressumComponent },
];