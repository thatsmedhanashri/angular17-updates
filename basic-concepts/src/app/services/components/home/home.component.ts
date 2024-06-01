import { Component, Optional } from '@angular/core';
import { Service1Service } from '../../custom-services/service1.service';
import { ChildComponent } from '../child/child.component';
import { HighlightedDirective } from '../../../angular-directives/directives/highlighted.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent, HighlightedDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [Service1Service]
})
export class HomeComponent {

  constructor(private service1: Service1Service){

  }
}
