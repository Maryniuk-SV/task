import { Component, OnInit } from '@angular/core';
// import { Router } from "@angular/router";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.less']
})
export class SystemComponent implements OnInit {

  currentUser: any;
  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(window.localStorage.getItem('user')).admin;
  }

}
