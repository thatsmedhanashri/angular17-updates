import { Component } from '@angular/core';
import { Service1Service } from '../../custom-services/service1.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [Service1Service]
})
export class ChildComponent {

  constructor(private service1_: Service1Service){}
}
