import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonSelected]'
})
export class ButtonSelectedDirective {

  constructor() { }
  @HostBinding('class.selected') isSelected = false;
  
  @HostListener('click') onSelect() {
    
    this.isSelected = !this.isSelected ;
    console.log(this.isSelected);
    
  }


}

