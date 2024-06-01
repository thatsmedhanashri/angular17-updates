import { Component, ViewEncapsulation } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Child1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent {

}
