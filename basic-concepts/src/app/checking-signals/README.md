##

We can use signals with OnPush change detection to improve performance.
With normal variables Angular check whole component tree for changes before and after the variable value changes. It affects the performance and it can be prevented by using signals. With using signals Angular will easily know what is exactly changed in page so it not need to check whole component tree for changes.

## Methods

this.counter.set(this.counter() + 1)
this.counter.update(val => val + 1)

If we update data like below, it will not get detected in OnPush change detection
this.student().name = 'neha'
this.students().push('bob')

We should update like this, it will get detected in OnPush change detection
this.student.set({
        id:2,
        name:'teju'
})
this.students.update(students => [...students, 'bob'])

## Read Only Signal
counter_readonly = this.counter.asReadonly()

## Derived signal
derivedCounter = computed(() => {
    return this.counter() * 10
})

We cannot set or update values of read only and derived signals.

## effect, computed

effect(() => {
      const counter_value = this.counter()
      const readonly_cvalue = this.counter_readonly()
      console.log("counter value -> ", counter_value)
      console.log("read only counter value -> ", readonly_cvalue)
})

In effect and computed function we should not write or update the existing signals, else we will get errors. Computed is used to derive a signal from existing signal, and effect can be used for side effects work like storing signals data into DB or logging.
We can write it by enabling manually via flag 'allowSignalWrites'.

## Manually destroying effect

constructor(){
    this.ref1 = effect(() => {
      const counter_value = this.counter()
      const readonly_cvalue = this.counter_readonly()
      console.log("counter value -> ", counter_value)
      console.log("read only counter value -> ", readonly_cvalue)
    },{
        manualCleanup: true
    })
}

ref1 : EffectRef | undefined
  
oncleanup(){
  this.ref1?.destroy()
}

If we don't do manual cleanup, the effect will destroy when component destroys.

## Using signal with service:

<h1>Derived Counter value from service: {{derivedServiceCounter()}}</h1>
<button (click)="updateServiceCounter()">Update counter via service</button>

updateServiceCounter(){
    this.service.increament()
}
derivedServiceCounter = computed(() => {
  const counterrrrrr = this.service.counter1()
  return counterrrrrr * 10
})
effect(() => {
  this.counter_service = service.counter1()
  console.log("signal counter -> ", service.counter1())
})

export class CounterServiceService {
  public counter1 = signal(0)
  readonly readCounter1 = this.counter1.asReadonly()
  increament(){
    this.counter1.update(val => val + 1)
  }
}

When we use service, we need to use effect or compute to get updated values of signals.


## Input Signal
We can use Input Signal to pass data from parent to child component. Also we can make it required.

