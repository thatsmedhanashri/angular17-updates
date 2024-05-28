## @Input() decorator

@Input({
    required:true
  }) 
  data1 = ''

We can set required true if the input value is necessary to work component properly, by default it is false. By setting it true it will give the error at compile time instead of run time.

## @Output() decorator

@Output("data2")
  data_ = new EventEmitter<person>()
this.data_.emit({name:"Dhanashri", employeeId:123})

<app-child1 [data1]="child1Data" (data2)="getData($event)"/>      // Components are self closing tags

We can use different variable name in child component, but need to mention the name we are using in Parent component's template in the Output decorator as param.

## for loop

<div>
    @for (item of arrayNames; track item.id; let index = $index; let count = $count;
    let first = $first; let last = $last; let even = $even; let odd = $odd){
        <h2 [class.even]="even" [class.odd]="odd">Index: {{index}}</h2>
        <h2>Count: {{count}}</h2>
        <h2 style="color: blue;">First: {{first}}</h2>
        <h2 style="color: brown;">Last: {{last}}</h2>
        <app-child1 [loopData]="item?.name"  />
    }
    @empty {
        <h1>Data not found!</h1>
    }
</div>
Changed it to JS loop like syntax and track expression is mandatory which is unique for each item in the array.
$index - index, $count - total items in the array, $first - first item in the array, $last - last item in the array, $even - elements at even index, $odd - elements at odd index
track - it is implemented to resolve performance issues, because without it angular coudn't able to differentiate in previous list and latest list so it loads all items each time when list changes. But if list which contains so many items was giving performance issue because it was loading whole list again. But now with track function it differentiate between existing list and latest list and loads only newly added or changed data.
We can write our own tracking function as well. If we don't have anything to identify each item uniquely we can use $index.

## Command to migrate from old flow control syntax to new one
npx ng generate @angular/core:control-flow

## @if, @else if, @else

<div style="background-color: aqua;">
    @if(employeeId == 1) {
        <h1>Employee's id is 1</h1>
    }
    @else if(employeeId == 2){
        <h1>Employee's id is 2</h1>
    }
    @else {
        <h1>Employee's id is other than 1 and 2</h1>
    }
</div> 
else if is supported in angular 17 using @ele if, but it is not supported in previous versions


## ngClass

<div [ngClass]="border ? 'borderClass' : 'backColor'">
    <h1>Hello Angular Users!</h1>
</div>

Second option - template
<div [ngClass]="applyClass()">
    <h1>Hello Angular Users!</h1>
</div>
Second option - typescript
applyClass(){
    if(this.border && this.padding && this.background)
      return ['borderClass', 'paddingClass', 'backColor']
    else if(this.padding && this.background)
      return ['paddingClass', 'backColor']
    else  
      return 'backColor'
  }

## ngStyle

<div [ngStyle]="{'background-color':'#808080', 'padding':'50px'}">
    <h1>Checking ngStyle..</h1>
</div>

Second option - template
<div [ngStyle]="applyStyles()">
    <h1>Checking ngStyle..</h1>
</div>
Second option - typescript
applyStyles(){
    return {
      'border':'solid 5px #808080',
      'background-color':'red',
      'color':'#fff'
    }
  }

## Difference between ngClass and ngStyle
The NgClass and NgStyle directives are used to apply style to the HTML element conditionally. The NgClass allows you to apply whole class based on condition whereas NgStyle gives you more flexibility to set individual properties.

## @switch, @case, @default

<div>
    @switch(courseId) {
        @case(1) {
            <h1>COURSE 1</h1>
        }
        @case(2) {
            <h1>COURSE 2</h1>
        }
        @default {
            <h1>DEFAULT CASE</h1>
        }
    }
</div>

## Built-in pipes
date, number, lowercase, uppercase, titlecase, percent, currency, slice, json, keyvalue

<p>Date: {{date | date: 'dd/mm/yyyy'}}</p>
<p>{{title | uppercase}}</p>
<p>{{title | lowercase}}</p>
<p>{{title | titlecase}}</p>
<p>Selected Number: {{myNum | number: '4.2-5'}}</p>
<p>Check percent: {{myNum | percent}}</p>
<p>Check currency: {{myNum | currency:'INR'}}</p>
<p>Student Info: {{obj | json}}</p>
<div>
    <h2>Checking slice pipe</h2>
    @for(student of arr | slice:0-1; track $index){
        <p>Name: {{student.name}}</p>
    }
    <h2>Checking keyalue pipe</h2>
    @for(student of arr | keyvalue; track $index){
        <p>Key: {{student.key}} </p>
    }
</div>