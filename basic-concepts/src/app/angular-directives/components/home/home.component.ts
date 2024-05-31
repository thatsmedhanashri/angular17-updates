import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HighlightedDirective } from '../../directives/highlighted.directive';
import { NgxUnlessDirective } from '../../directives/ngx-unless.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HighlightedDirective, NgxUnlessDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{

  @ViewChild('HighlightedDirective')
  hl1: HighlightedDirective | undefined
  
  flag : boolean = false
  
  constructor(){
  }

  ngAfterViewInit(): void {
    console.log("directive info - ", this.hl1)
  }

  updateValue(data: any){
    console.log("Emitted data -> ", data)
  }
}
