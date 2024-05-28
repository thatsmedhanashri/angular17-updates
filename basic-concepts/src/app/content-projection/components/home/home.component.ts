import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  arr = [
    {name:'Dhanashri Patil', id:1, branch:'Electronics'},
    {name:'Tejaswi Bhokare', id:2, branch:'Computer Science'},
    {name:'Rutuja Thomare', id:3, branch:'Telecommunications'},
    {name:'Swati Yesale', id:4, branch:'Information Technology'},
    {name:'Samruddhi Manded', id:5, branch:'Instrumentation'}
  ]
}
