import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';



@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition){
      this.ViewContainerRef.createEmbeddedView(this.templatRef);
    } else{
      this.ViewContainerRef.clear();
    }

  }
  constructor(private templatRef: TemplateRef<any> , private ViewContainerRef: ViewContainerRef) { }

}
