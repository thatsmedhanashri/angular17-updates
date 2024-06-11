import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {

  constructor(private router: Router){}

  routecomp2(){
    this.router.navigate(['comp2'])
  }
}
