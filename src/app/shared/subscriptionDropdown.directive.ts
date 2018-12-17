import { Directive, ElementRef, Renderer2, HostBinding, HostListener, OnInit } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appSubscriptionDropdown]'
})
export class SubscriptionDropdownDirective {
  isToggle = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  @HostListener('click') onClick() {
    let list = this.el.nativeElement.nextSibling;
    if (!this.isToggle) {
      //Looping through all the a tags and adding or removing styling
      this.isToggle = true; 
      this.renderer.addClass(this.el.nativeElement.firstChild, 'fa-caret-up');
      for (const element of list.children) {
        this.renderer.setStyle(element, 'display', 'block');
      }
    } else {
      this.isToggle = false;
      this.renderer.removeClass(this.el.nativeElement.firstChild, 'fa-caret-up')
      for (const element of list.children) {
        this.renderer.removeStyle(element, 'display');
      }
    }
  }
}
