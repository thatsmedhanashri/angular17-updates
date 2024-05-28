import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface person{
  name: string,
  employeeId: number
}

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {

  // @Input({
  //   required:true
  // }) 
  // data1 = ''

  @Output("data2")
  data_ = new EventEmitter<person>()

  @Output()
  courseName = new EventEmitter<string>()

  @Input({
    required: true
  })
  loopData:any

  updateOutput(){
    this.data_.emit({name:"Dhanashri", employeeId:123})
    this.courseName.emit("Angular 17")
  }
}
