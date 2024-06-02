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

  course_name = 'Angular'

  clickMe(){
    console.log("in click me")
    let course = 'NodeJs'
    this.course_name = course
  }
}
