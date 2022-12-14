import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  openNav() {
    // @ts-ignore
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    // @ts-ignore
    document.getElementById("mySidenav").style.width = "0";
  }



}
