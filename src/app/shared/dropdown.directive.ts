import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // If isOpen evaluates to true, the class name 'open' is added to the element with this directive.
  @HostBinding('class.open') isOpen = false;


  constructor() { }



  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen
  }

}
