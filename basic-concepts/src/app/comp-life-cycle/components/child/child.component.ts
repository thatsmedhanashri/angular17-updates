import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck{

  constructor(){
    console.log('constructor')
  }
  ngAfterViewChecked(): void {
    console.log('after-view-checked')
  }
  ngAfterContentInit(): void {
    console.log('after-content-init')
  }
  ngAfterViewInit(): void {
    console.log('after-view-init')
  }
  ngDoCheck(): void {
    console.log('do-check')
  }
  ngAfterContentChecked(): void {
    console.log('after-content-checked')
  }

  ngOnInit(): void {
    console.log('oninit')
  }
  ngOnDestroy(): void {
    console.log('ondestroy')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanged -> ', changes)
  }
  
  @Input()
  courseName: string = ''
}
