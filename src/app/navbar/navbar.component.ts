import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  logoURL: string;
  isToggle = false;
  isSearchBarToggle = false;
  ngOnInit() {
     this.logoURL = '/assets/images/logo.svg';
  }
  toggleSideMenu() {
    if (this.isToggle) {
      this.renderer.removeClass(this.el.nativeElement.querySelector('#sidebar'), 'active');
      this.isToggle = false;
    } else  {
        this.renderer.addClass(this.el.nativeElement.querySelector('#sidebar'), 'active');
        this.isToggle = true;
      }
  }

}
