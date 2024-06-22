import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterOutlet } from '@angular/router';
import { LandingComponent } from './ssr-intro/landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-concepts';
}
