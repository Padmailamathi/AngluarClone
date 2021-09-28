import { Directive } from '@angular/core';

@Directive({
  selector: '[appIsDropDownOpen]'
})
export class IsDropDownOpenDirective {

  isDropDownOpen : boolean = false;
  
  constructor() { }

}
