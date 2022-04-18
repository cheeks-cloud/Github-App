import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private elem:ElementRef) { }

  // @HostListener('click')onclick(){
  //   this.backgroundColor('Blue')
  // }
  // @HostListener('dblclick')ondblclick(){
  //   this.backgroundColor('rgb(0,0,0,0)')
  // }
   
 
  // private backgroundColor(action:string){
  //   this.elem.nativeElement.style.backgroundColor = action;
    
  // }
}
