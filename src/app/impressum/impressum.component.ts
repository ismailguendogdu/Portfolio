import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }
}
