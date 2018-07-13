import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/service/api.service';
import { Response } from '@angular/http';

interface Items {
	name: string,
  _id: any,
  __v: number,
	editable: boolean,
	selected: boolean
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  items: any = [];
	employeeName: string = '';
	currentUser: boolean;

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.currentUser = JSON.parse(window.localStorage.getItem('user')).admin;
		this.loadItems();
	}
	loadItems() {
		this.apiService.getEmployee().subscribe((response: Response) => {
      this.items = response;
		});
	}
	addItem() {
		this.apiService.addEmployee(this.employeeName)
		.subscribe((item: Items) => {
			this.items.push(item)
		});
		this.employeeName = '';
	}
	deleteItem(item: Items) {
		this.apiService.deleteEmployee(item)
		.subscribe((data) => {
      this.loadItems();
    });
    this.loadItems();
	}
	editItem(item) {
		item.editable = true;
	}
	onSave(item: Items) {
    item.editable = false;
    const data = {
			id: item._id,
			name: item.name,
			selected: false,
			__v: 0
		}
		this.apiService.changeEmployee(data).subscribe((data) => {
      console.log(data)
    });
	}
}
