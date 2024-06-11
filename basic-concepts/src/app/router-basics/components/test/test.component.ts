import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  constructor(private router: Router){}

  routecomp1(){
    this.router.navigate(['test/mod1'])
  }
  routecomp3(){
    this.router.navigate(['test/mod3'])
  }
}
