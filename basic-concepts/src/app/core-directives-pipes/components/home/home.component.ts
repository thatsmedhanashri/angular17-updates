import { Component } from '@angular/core';

export interface person{
  name: string,
  employeeId: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  child1Data = 'Child1'
  personData: person = {
    name: '',
    employeeId: -1
  }
  course_name : string = ''

  getData(data: any){
    this.personData = data
    console.log("person data -> ", this.personData)
  }
  getCourseName(data:any){
    this.course_name = data
  }

  //Checking for loop in template
  arrayNames : any = [
    {name:"Dhanashri", id:1}, 
    {name:"Harry", id:2}, 
    {name:"Reena", id:3}, 
    {name:"Peter", id:4}
  ]

  //Checking if, else if and else in template
  employeeId = 2
  isIdOne(){
    return this.employeeId == 1
  }

  //Checking ngClass
  border = false
  padding = false
  background = true
  applyClass(){
    if(this.border && this.padding && this.background)
      return ['borderClass', 'paddingClass', 'backColor']
    else if(this.padding && this.background)
      return ['paddingClass', 'backColor']
    else  
      return 'backColor'
  }

  //Checking ngStyle
  applyStyles(){
    return {
      'border':'solid 5px #808080',
      'background-color':'red',
      'color':'#fff'
    }
  }

  //Checking @switch
  courseId = 0
}
