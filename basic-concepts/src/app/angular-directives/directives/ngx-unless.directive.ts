import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgxUnless]',
  standalone: true
})
export class NgxUnlessDirective {

  visible: boolean = false;

  constructor(private templateRef: TemplateRef<any>, private containerRef: ViewContainerRef) {
    console.log("This is a structural directive")
   }

  
  @Input()
  set appNgxUnless(flag: boolean){
    if(!flag && !this.visible){
      this.containerRef.createEmbeddedView(this.templateRef)
      this.visible = true
    }else if(flag && this.visible){
      this.containerRef.clear()
      this.visible = false
    }
  }
}
