import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import { ApiService } from './../../shared/service/api.service';

import { DialogComponent } from '../../shared/modal/dialog/dialog.component';
import { CreateComponent } from '../../shared/modal/create/create.component';
import { DeleteComponent } from '../../shared/modal/delete/delete.component';

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
  deleted: boolean;

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog
  ) { }
  
  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'email', 'admin', 'password'];
  dataSource = new UserDataSourse(this.apiService);
  arrSelected: any[] = [];
  
  public openModal() {
    this.dialog.open(DialogComponent).afterClosed().subscribe(data => {
      this.refresh();
    });
  }
  
  toggleSelect(event) {
    event.selected = !event.selected;
    this.currentItem = event;
    this.arrSelected.push(event);
  }
  
  public create() {
    if(this.arrSelected.length > 1){
      alert('Виберіть лише один елемент!');
      this.arrSelected = [];
      this.refresh();
      return;
    }
    this.dialog.open(CreateComponent, {data: {name : this.currentItem}}).afterClosed()
    .subscribe(data => {
    })
  }

  refresh() {
    this.apiService.getEmployee().subscribe(data => {
      this.dataSource = new UserDataSourse(this.apiService);
    });
  }

  delete() {
    this.dialog.open(DeleteComponent, {data: {name : this.arrSelected}})
    .afterClosed().subscribe(data => {
      this.refresh();
    });
    this.arrSelected = [];
  }
}

export class UserDataSourse {
  constructor(private apiService: ApiService) {}
  
  connect() {
    return this.apiService.getEmployee();
  }
}