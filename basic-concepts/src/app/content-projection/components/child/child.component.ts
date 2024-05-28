import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterViewInit, AfterContentInit{

  @Input() student_ : any = ''

  // @ContentChild('student') 
  // studentInfo: any

  @ContentChildren('student') 
  studentInfo: QueryList<any> | undefined

  constructor(){}
  
  ngAfterContentInit(): void {
    console.log("Student Information -> ", this.studentInfo)
  }

  ngAfterViewInit(): void {
    
  }

}
