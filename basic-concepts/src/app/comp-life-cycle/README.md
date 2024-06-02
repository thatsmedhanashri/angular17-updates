## Constructor and ngOnInit

First Constructor get called and the ngOnInit.
If we have declared in Input, its values will be undefined in constructor but Input values will be accessible in onInit it won't be undefined.
We should use constructor only for dependency injection not for data initialization. We should use ngOnInit for data initialization

## ngOnDestroy

It get called when component destroyed i.e. when it is removed from template. We should use it to release any resources that component were using like unsubscribing observables. If we use observables with async pipe then we don't need to write logic to unsubscribe observables, async will take care of that.

## ngOnChanges

It get triggered by Angular first time when component constructs before ngOnInit. After that it get triggered when any of the input reference change and not the value.

ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanged -> ', changes)
}

This method has a parameter changes of type SimpleChanges which is built-in type in angular. Which contains -
{
    "currentValue": "Angular",
    "firstChange": true,
	"previousValue": undefined
}

## ngOnContentChecked

It get triggered by Angular when there are changes in the content if we are using Content Projection. When any input changes, we click on button, on every change detection this method get triggered. This method get triggered very often, we should not write backend calls or heavy calculations in this method as it will affect overall performance.

We can use it for last minute minor data modifications after each change detection. But we should not change data which we are using via content projection, as this method get triggered on changes in content so there is a possibility of going into infinite loop.

## ngOnViewChecked

It get triggered by Angular after ngOnContentChecked after checking view for any changes. It also get triggered on avery change detection cycle, we cannot modify data here here like we do in ngOnContentChecked. 

It can be used to perform various DOM operations like adding scrolling, highlighting input which were not highlighted initially.

This method get triggered very often, we should not write backend calls or heavy calculations in this method as it will affect overall performance and slow down user experience.

## ngAfterViewInit

With @ViewChild we can get a refence of child component as well as any DOM element in the component's template. We can't access child element template's DOM in parent component with @ViewChild, but we can access all it's variables or methods available.
Values initializes in ViewChild reference in ngAfterViewInit life cycle hook.
Can be used with @ViewChild() or @ViewChildren() decorator

## ngAfterContentInit

It get triggeed by Angular after content init in Content Projection.
Can be used with @ContentChild() or @ContentChildren() decorator

## ngDoCheck

ngDoCheck get called when angular run change detection on the given component. But ususally it get called very often on every browser event. So if we want to call changeDetectionRef_.markForCheck() we should write some custom logic in ngDoCheck so that it will not detect changes always to enhance performance.

## Sequence

Constructor
ngOnChanges
ngOnInit
ngDoCheck
ngAfterContentInit
ngOnContentChecked
ngAfterViewInit
ngOnViewChecked
ngOnDestroy

Methods called while initializing -
ngOnInit, ngOnContentInit, ngOnViewInit these method get triggered only once in component life cycle in given sequence.

Methods called during change detection -
ngOnChanges, ngDoCheck, ngAfterContentChecked, ngAfterViewChecked