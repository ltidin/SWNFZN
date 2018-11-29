import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  logoURL:string;
  isToggle: boolean = false;
  ngOnInit() {
     this.logoURL = '/assets/images/logo.svg';
  }
  toggleSideMenu() {
    this.isToggle = this.isToggle == true ? false : true;
  }
}
