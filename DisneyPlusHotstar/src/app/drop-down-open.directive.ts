import { Directive, ElementRef, HostBinding, HostListener, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDropDownOpen]'
})
export class DropDownOpenDirective {

  @HostBinding('class.show') isOpen = false;
  
  @ViewChild('namebutton', { read: ElementRef, static:false }) namebutton: ElementRef;


  constructor(private renderer:Renderer2, private el:ElementRef) { }

    @HostBinding('class:open') isopen : boolean = false;

    @HostListener('mouseover') onMouseOver() {
    

  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.isopen = false;
  }
}
