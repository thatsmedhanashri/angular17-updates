import { Component, OnInit } from '@angular/core';
import { courses } from '../../constants/courses-data';
import { interval, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-comp1',
  standalone: true,
  imports: [],
  templateUrl: './my-comp1.component.html',
  styleUrl: './my-comp1.component.scss'
})
export class MyComp1Component implements OnInit{

  courses_data = courses;

  data$ = interval(1000)

  constructor(private http: HttpClient){}

  ngOnInit(): void {

    // this.http.get('http://dummyjson.com/users').subscribe(data => {
    //   console.log('users data -> ', data)
    // })

    // let userlist$:any = createHttpObservable()
    // userlist$ = this.http.get('http://dummyjson.com/users').pipe(
    //   map(res => Object.values(res["users"]))
    // )
    // users$.subscribe(data => {
    //   console.log("Users data -> ", data)
    // })
  }

}
function createHttpObservable() {
  throw new Error('Function not implemented.');
}

