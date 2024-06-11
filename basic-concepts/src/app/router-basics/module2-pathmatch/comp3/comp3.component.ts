import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp3',
  standalone: true,
  imports: [],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.scss'
})
export class Comp3Component {

  constructor(private router: Router){}

  routecomp4(){
    this.router.navigate(['comp4'])
  }
}
