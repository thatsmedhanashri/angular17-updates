## @ViewChild

@ViewChild(ChildComponent)
  myChild : ChildComponent | undefined

// Another way
@ViewChild('child1')
  myChild : ChildComponent | undefined
<app-child #child1></app-child>

 // Getting native DOM element
@ViewChild('element1')
  spanElement: ElementRef | undefined
 
With @ViewChild we can get a refence of child component as well as any DOM element in the component's template. We can't access child element template's DOM in parent component with @ViewChild, but we can access all it's variables or methods available.
Values initializes in ViewChild reference in ngAfterViewInit life cycle hook.

## @ViewChildren
@ViewChildren('name')
  studentNames: QueryList<any> | undefined
<p #name>DHANASHRI</p>
<P #name>TEJASWI</P>
<P #name>RUTUJA</P>

## Difference between @ViewChild and @ViewChildren
“ViewChild” helps to reference view objects in the component to which it is connected. “ViewChild” references one object while “ViewChildren” references collection.
ViewChild provides first element of matching id while ViewChildren provides array of all elements with matching id. View Children also provides available methods like getting first element, last element, length i.e. total elements, change i.e. observable