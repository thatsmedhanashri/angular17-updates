import { Directive, EventEmitter, Host, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Service1Service } from '../../services/custom-services/service1.service';

@Directive({
  selector: '[appHighlighted]',
  standalone: true,
  exportAs: 'hl',
  providers: [Service1Service]
})
export class HighlightedDirective {

  @Output()
  event1Value = new EventEmitter()
  
  constructor(@Host() private service1: Service1Service) { 
    console.log("This is an attribute directive")
    // console.log("Highlighted directive called...")
  }

  // @HostBinding('className')
  // get cssClasses(){
  //   return 'checking-directives'
  // }

  // @HostBinding('class.appHighlighted')
  // get cssClasses(){
  //   return true
  // }

  @HostBinding('style.border')
  get xys(){
    return 'solid 5px #aabbcc'
  }

  @HostBinding('style.background-color')
  get xys1(){
    return 'yellow'
  }

  @HostBinding('style.padding')
  get xys2(){
    return '20px'
  }

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
