import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  public counter1 = signal(0)
  readonly readCounter1 = this.counter1.asReadonly()

  increament(){
    this.counter1.update(val => val + 1)
    // console.log("in increment method -> ", this.re)
  }

  // constructor() { }
}
