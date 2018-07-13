import { Component, OnInit } from '@angular/core';
// import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog} from '@angular/material';

import { ApiService } from './../../shared/service/api.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

export interface Items {
  name: string;
  admin: boolean;
  email: string;
  password: string;
  selected: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  
  items__data: Items[] = [];
  selected: boolean = false;
  currentItem: any;
  constructor(
    private apiService: ApiService,
    public dialog: MatDialog
  ) { }
  
  ngOnInit() {
  }
  displayedColumns: string[] = ['name', 'email', 'admin', 'password'];
  dataSource = new UserDataSourse(this.apiService);
  
  public openModal() {
    this.dialog.open(DialogComponent);
    // this.dialog.open(DialogComponent, {data: {name : this.currentItem.name}});
  }
  
  toggleSelect(event) {
    event.selected = !event.selected;
    this.currentItem = event;
  }
  
  delete() {
    console.log(this.currentItem);
    this.apiService.deleteEmployee(this.currentItem)
    .subscribe((data) => {
      this.dataSource = new UserDataSourse(this.apiService);
    });
  }
}

  export class UserDataSourse {
    constructor(private apiService: ApiService) {}

    connect() {
      return this.apiService.getEmployee();
    }
  }