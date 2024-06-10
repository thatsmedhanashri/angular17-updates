##

setTimeout() => { }
emits only once

setInterval() => { }
emits contineously

document.addEventListener('click', evt => {})
emits on click

const interval$ = interval(1000)
const timer$ = timer(3000, 1000)
const fromevt$ = fromEvent(document, 'click')
Need to subscribe


## Unsubscribing manually

const interval$ = interval(1000)
    let interval_sub = interval$.subscribe(data => {
      console.log("interval$ -> ", data)
    })
    setTimeout(() => {
      interval_sub.unsubscribe()
    }, 5000)


## error and finish callback

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

noop -> No operation (does nothing)
error -> execute when we get error
() -> execute after finishing streaming
data -> execute data of stream, it won't be called once error or finish callback executes

## Difference between promise and observable