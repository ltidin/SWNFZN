import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubscriptionDropdown]'
})
//Directive for hiding lists in sidebar like youtube
export class SubscriptionDropdownDirective {
  isToggle = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  showMore() {
    //Creating new caret
    const iconElement = this.renderer.createElement('mat-icon');
    const showMore = this.renderer.createText('arrow_drop_down');
    this.renderer.appendChild(iconElement, showMore);
    this.renderer.addClass(iconElement, 'mat-icon');
    this.renderer.addClass(iconElement, 'material-icons');
    //Deleting  previuos text and caret
    const btn = this.elRef.nativeElement.firstChild;
    const btnText = btn.firstChild;
    const btnCaret = btn.children[0];
    this.renderer.removeChild(btn, btnText);
    this.renderer.removeChild(btn, btnCaret);
    //Inserting new text and caret 
    const showMoreText = this.renderer.createText('Show more');
    this.renderer.appendChild(btn, showMoreText);
    this.renderer.appendChild(btn, iconElement);
  }

  showLess() {
    //Creating new caret
    const iconElement = this.renderer.createElement('mat-icon');
    const showLess = this.renderer.createText('arrow_drop_up');
    this.renderer.appendChild(iconElement, showLess);
    this.renderer.addClass(iconElement, 'mat-icon');
    this.renderer.addClass(iconElement, 'material-icons');
    //Deleting  previuos text and caret
    const btn = this.elRef.nativeElement.firstChild;
    const btnText = btn.firstChild;
    const btnCaret = btn.children[0];
    this.renderer.removeChild(btn, btnText);
    this.renderer.removeChild(btn, btnCaret);
    //Inserting new text and caret 
    const showLessText = this.renderer.createText('Show less');
    this.renderer.appendChild(btn, showLessText);
    this.renderer.appendChild(btn, iconElement);
  }

  @HostListener('click') onClick() {
    const list = this.elRef.nativeElement.previousSibling;

    
    if(!this.isToggle) {
      //Looping throgh all the a tags and adding or removing styling
        this.isToggle = true;
              for (const element of list.children) {
          this.renderer.setStyle(element, 'display', 'block');
        };
        this.showLess();
      } else {
          this.isToggle = false;
          for (const element of list.children) {
            this.renderer.removeStyle(element, 'display');
          };
          this.showMore();
      }
    }
}
