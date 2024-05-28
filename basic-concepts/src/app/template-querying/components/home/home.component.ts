import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, Renderer2} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit{

  @ViewChild(ChildComponent)
  myChild : ChildComponent | undefined

  // Another way
  // @ViewChild('child1')
  // myChild : ChildComponent | undefined

  // Getting native DOM element
  @ViewChild('element1')
  spanElement: ElementRef | undefined

  constructor(private renderer: Renderer2){
    console.log("contructor --- My child is -> ", this.myChild?.getStudentInfo())
  }
  ngOnInit(): void {
    console.log("ngOnInit --- My child is -> ", this.myChild?.getStudentInfo())
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit --- My child is -> ", this.myChild?.getStudentInfo())
  }

  getChildInfo(){
    console.log("My child is -> ", this.myChild?.getStudentInfo())
    console.log("Child name - ", this.myChild?.name)
    console.log("Span text -> ", this.spanElement?.nativeElement.innerText)
  }

  // Checking @ViewChildren
  @ViewChildren('name')
  studentNames: QueryList<any> | undefined

  // @ViewChild('name')
  // studentNames: QueryList<any> | undefined
  
  getViewChildrenInfo(){
    console.log("studentNames -> ", this.studentNames)
    console.log("Total students -> ", this.studentNames?.length)
    this.renderer.setStyle(this.studentNames?.first.nativeElement, 'color', 'green')
    this.renderer.setStyle(this.studentNames?.last.nativeElement, 'color', 'blue')
  }
}
