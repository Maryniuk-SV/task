import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

	baseUrl: string = 'http://localhost:8081/api/';

	constructor (private http: HttpClient) {}

	getEmployee() {
		return this.http.get(this.baseUrl + 'users');
	}

	changeEmployee(data: any) {
		return this.http.put(this.baseUrl + `user`, {data});
	}

	createUser(data: any) {
		return this.http.put(this.baseUrl + `user`, data);
	}

	addEmployee(employeeName: string) {
		const data = {
			name: employeeName,
			editable: false,
			selected: false
		}
		return this.http.post(this.baseUrl + 'user', data);
	}

	deleteEmployee(item: any) {
		return this.http.delete(this.baseUrl + `user/${item._id}`);
	}
}