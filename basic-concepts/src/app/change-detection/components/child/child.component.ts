import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StudentInfoService } from '../../services/student-info.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent{
  @Input()
  fruitsData: any = []

  constructor(private service: StudentInfoService){}

  setData(){
    this.service.setData()
  }
}
