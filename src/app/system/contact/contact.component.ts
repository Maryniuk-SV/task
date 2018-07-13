import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/service/employee.service';
import { Response } from '@angular/http';

interface Items {
	name: string,
	id: number
}

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
	items: any = [];
	employeeName: string = '';

	constructor(private employeeService: EmployeeService) { }

	ngOnInit() {
	}
	loadItems() {
		this.employeeService.getEmployee().subscribe((response: Response) => {
			this.items = response;
		});
	}
	addItem() {
		this.employeeService.addEmployee(this.employeeName)
		.subscribe((item: Items) => {
			this.items.push(item)
		});
		this.employeeName = '';
	}
	deleteItem(item: Items) {
		this.employeeService.deleteEmployee(item)
		.subscribe((data) => {
			this.items = this.items.filter(c => c.id !== item.id)
		});
	}
	editItem(item) {
		item.editable = true;
	}
	onSave(id: number, name: string, item) {
		item.editable = false;
		this.employeeService.changeEmployee(id, name).subscribe();
	}
}
