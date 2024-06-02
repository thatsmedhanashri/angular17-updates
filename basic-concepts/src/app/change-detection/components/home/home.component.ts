import { Attribute, ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Child1Component } from '../child1/child1.component';
import { StudentInfoService } from '../../services/student-info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent, Child1Component, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  fruits = ['Mango', 'Apple', 'Banana']
  studentInfo : any

  constructor(public service: StudentInfoService,
              @Attribute('myAtt') private myAtt: string){
              }

  ngOnInit(): void {
    // If we pass input as observable then also OnPush change detection detects changes
    this.service.user$.subscribe(data => {
      this.studentInfo = data
    })

    console.log("myAtt attribute value -> ", this.myAtt)
  }

  addFruit(data: any){
    this.fruits.push(data)

    // If we change Input reference then it will get detected in OnPush change detection
    // let myfruits = ['Watermelon', 'Muskmelon', 'Blueberry']
    // this.fruits = myfruits

    console.log(this.fruits)
  }
}
