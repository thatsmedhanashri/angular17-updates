## Default Change Detection

If you do not specify, Angular will apply the default change detection method which detects changes for entire components whenever changes are made. Default strategy triggers change detection for DOM events, timers, promises, XHR, observables etc.

Angular application is composed of hierarchical tree of components. During the runtime, every component gets the change detection class inside it, Angular traverses the application hierarchy from top to bottom components, if there is change, it updates DOM and renders the corresponding view.

## OnPush Change Detection

OnPush works by comparing the references of component inputs, so if we just update existing variable in parent it will not get detected in child component. But if we assign new reference to it like new array, new object it will detect changes in child component even if child uses OnPush change detection strategy.

OnPush change detection detects changes on any event handler in the component itself.

If we pass input as observable via async pipe then also OnPush change detection detects the changes.
If we are using behaviour service, if we subcribe it in OnInit it will not detect the changes but if we use object in template with async pipe then OnPush change detection detects the changes.

## Performance Enhancement

The OnPush strategy is designed to reduce the number of unnecessary change detection cycles. This is especially important in complex applications, where change detection can become a bottleneck and degrading overall performance of the application.

It is important to use OnPush change detection wisely and to make sure that your components are using immutable data structures.

We can use OnPush change detection strategy in the components which -
Display static data
Only receive data from their parent components [we can pass it as observable and use it with async pipe]
Do not perform any calculations or transformations on their data

## Manual change detection

changeDetectionRef_.markForCheck()

We can manually ask angular for change detection using above method. 
For example, we can use it when we subscribe the behaviour service data but not using async pipe in template then we can call this method when we update data inside subscribe method.
We can call this method in onDoCheck() method as well.

## ngDoCheck

ngDoCheck get called when angular run change detection on the given component. But ususally it get called very often on every browser event. So if we want to call changeDetectionRef_.markForCheck() we should write some custom logic in ngDoCheck so that it will not detect changes always to enhance performance.