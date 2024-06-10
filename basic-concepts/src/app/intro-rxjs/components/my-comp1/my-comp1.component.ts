import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { fromEvent, interval, noop, timer } from 'rxjs';

@Component({
  selector: 'app-my-comp1',
  standalone: true,
  imports: [],
  templateUrl: './my-comp1.component.html',
  styleUrl: './my-comp1.component.scss'
})
export class MyComp1Component implements OnInit{

  counter : number = 0;

  ngOnInit(): void {
    // document.addEventListener('click', evt => {
    //   console.log(evt)
    //   setTimeout(() => {
    //     console.log("finished...")
    //     setInterval(() => {
    //       console.log('Counter -> ', this.counter)
    //       this.counter++;
    //     }, 1000)
    //   }, 3000)
    // })

    // const interval$ = interval(1000)
    // interval$.subscribe(data => {
    //   console.log("interval$ -> ", data)
    // })

    // const timer$ = timer(3000, 1000)
    // timer$.subscribe(data => { console.log("timer$ -> ", data)} )

    // const fromevt$ = fromEvent(document, 'click')
    // fromevt$.subscribe(data => {
    //   console.log("fromevt$ -> ", data)
    // })

    // Unsubscribing the observable
    const interval$ = interval(1000)
    // let interval_sub = interval$.subscribe(data => {
    //   console.log("interval$ -> ", data)
    // })
    // setTimeout(() => {
    //   interval_sub.unsubscribe()
    // }, 5000)

    // error and finished callback of observable
    interval$.subscribe(
      (data) => {
        console.log("Data -> ", data)
      },
      // noop,
      (error) => {
        console.log(error)
      },
      () => {
        console.log("Finished...")
      }
    )
  }

}
