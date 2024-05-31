import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: true,
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Output()
  event1Value = new EventEmitter()
  
  constructor() { 
    console.log("This is an attribute directive")
    // console.log("Highlighted directive called...")
  }

  // @HostBinding('className')
  // get cssClasses(){
  //   return 'checking-directives'
  // }

  @HostBinding('class.checking-directives')
  get cssClasses(){
    return true
  }

  // @HostBinding('style.border')
  // get xys(){
  //   return 'solid 2px #aabbcc'
  // }

  // @HostBinding('attr.disabled')
  // get dfgh(){
  //   return true
  // }

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

  someinfo(){
    console.log("Some info...")
  }

}
