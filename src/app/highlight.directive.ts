import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private elem:ElementRef) { }

  @HostListener('click')onclick(){
    this.textColor('Blue')
  }
  
 
  @HostListener("dblclick") onDoubleClick(){
    this.textColor('Red') 
  }
   
 
  private textColor(action:string){
    this.elem.nativeElement.style.color = action;
    
  }
}
