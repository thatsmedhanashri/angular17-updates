## Directives
 In Angular, directives are markers on a DOM element (such as an attribute, element name, comment, or CSS class) that tells Angular’s HTML compiler ($compile) to attach a specified behavior to that DOM element or transform the DOM element and its children.

 Component Directives: 
 Special directives in Angular are called Components since this type of directive has a template or template URLs. In effect, it is a component directive that shows something in DOM.

 Structural Directives:
 This type of directive is used to make changes in the layout of the DOM. Elements can be added or removed, hence changing the structure of the DOM.
 *ngIf, *ngFor, *ngSwitch

 Attribute Directives:
 This type of angular directive is used to make behavior or element changes in the appearance and behavior of an element.
 ngStyle, ngClass, disabled, required, ngModel

 Different types of Attribute Directive selectors:
 Element/Tag - selector: 'input'
 Attribute - selector: '[type]'
 Attribute value - selector: '[type]'
 Class - selector: '.form-control'
 NOT - selector: 'input:not(.form-control)'
 AND - selector: 'input.form-control'
 OR - selector: 'input.form-control'

 ## Creating custom directive
 ng g directive directives/highlighted

 ## HostBinding
 @HostBinding('className')
  get cssClasses(){
    return 'checking-directives'
  }

@HostBinding('style.border')
  get xys(){
    return 'solid 2px #aabbcc'
  }

@HostBinding('attr.disabled')
  get dfgh(){
    return true
  }

HostBinding is used to apply directive class directly on to a DOM element on which that directive is applied. We can update any DOM property like classes, attributes.

## HostListener and EventEmitter

We can use HostListener method as well to update data on any DOM event like mouseover, mouseleave. We can also emit data from directive to the component in which directive is used. We can get data from the template where we are using directive with declaring Input() variable in directive.

@HostListener('mouseover')
  mouseOver(){
    console.log("in mouseOver")
    // check if we can change classes, styles from here
    this.event1Value?.emit('In mouseOver method...')
  }

  @HostListener('mouseleave')
  mouseLeave(){
    console.log('in mouseLeave')
    // check if we can change classes, styles from here
    this.event1Value?.emit('In mouseLeave method...')
  }

  ## exportAs

  To use method or variables from directive we can export it and use the same.

@Directive({
  selector: '[appHighlighted]',
  standalone: true,
  exportAs: 'hl'
})

<button appHighlighted #highlighter="hl" (event1Value)="updateValue($event)">home works!</button>
<p (click)="highlighter.someinfo()">Checking something...</p>
