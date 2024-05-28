import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  name = 'Dhanashri'
  employeeId = 123

  getStudentInfo(){
    let obj = {
      name: this.name,
      id: this.employeeId
    }
    return obj
  }
}
