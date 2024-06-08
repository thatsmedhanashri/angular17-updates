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

  prefetchcontent = false
  showcontent = false

  prefetchContent(){
    this.prefetchcontent = true
  }
  showContent(){
   this.showcontent = true
  } 
}
