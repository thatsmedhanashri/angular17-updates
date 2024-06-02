import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StudentInfoService, studentDataType } from '../../services/student-info.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit, DoCheck{

  student_data : any = {}
  // @Input()
  // student_info : any

  constructor(private ref_: ChangeDetectorRef, public service: StudentInfoService){}
  ngDoCheck(): void {
    console.log("in docheck child1")
    // this.ref_.markForCheck()
  }
  
  ngOnInit(): void {
    // It will not detect in OnPush change detection
    this.service.user$.subscribe(data => {
      this.student_data = data
      // We can mark it manually for change detection, then OnPush change detection detects the changes
      // this.ref_.markForCheck()
      console.log("Student data in child1 component -> ", data)
    })
  }

  @Input()
  fruitsData1: any = []

  // On click events of component itself, the component checks for changes in OnPush change detection
  check1_(){
    console.log("Click Me btn clicked...")
  }
}
