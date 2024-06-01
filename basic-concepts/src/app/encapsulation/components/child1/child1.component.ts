import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Child1Component {

}
