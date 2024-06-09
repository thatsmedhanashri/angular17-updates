import { Component, EffectRef, computed, effect, signal } from '@angular/core';
import { count } from 'rxjs';
import { CounterServiceService } from '../../services/counter-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  counter = signal(10)
  counter_readonly = this.counter.asReadonly()

  student = signal(
    {
      id:0,
      name: 'dhanashri'
    }
  )
  students = signal(['abc','xyz','lmn'])

  derivedCounter = computed(() => {
    return this.counter() * 10
  })

  incrementValue(){
    // this.counter.set(this.counter() + 1)
    this.counter.update(val => val + 1)
  }

  updateValues(){
    // We should avoid direct changing signal data
    this.student().name = 'neha'
    this.students().push('bob')

    // We should update like this
    this.student.set(
      {
        id:2,
        name:'teju'
      }
    )

    this.students.update(students => [...students, 'bob'])
  }

  counter_service : any;
  constructor(public service: CounterServiceService){
    this.ref1 = effect(() => {
      const counter_value = this.counter()
      const readonly_cvalue = this.counter_readonly()
      console.log("counter value -> ", counter_value)
      console.log("read only counter value -> ", readonly_cvalue)
    },{
      manualCleanup: true
  })

    effect(() => {
      this.counter_service = service.counter1()
      console.log("signal counter -> ", service.counter1())
    })
  }

  ref1 : EffectRef | undefined
  ref2 : EffectRef | undefined
  
  oncleanup(){
    this.ref1?.destroy()
  }

  
  // Checking signal with service
  updateServiceCounter(){
    this.service.increament()
  }

  derivedServiceCounter = computed(() => {
    const counterrrrrr = this.service.counter1()
    return counterrrrrr * 10
  })

}
