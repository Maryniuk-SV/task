import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
	constructor (private http: HttpClient) {}

	getEmployee() {
		return this.http.get('http://localhost:3000/items')
	}

	changeEmployee(id: number, name: string) {
		return this.http.put(`http://localhost:3000/items/${id}`, {name})
	}
	addEmployee(employeeName: string) {
		const data = {
			name: employeeName,
			editable: false
		}
		return this.http.post('http://localhost:3000/items', data)
	}

	deleteEmployee(item: any) {
		return this.http.delete(`http://localhost:3000/items/${item.id}`)
	}
}