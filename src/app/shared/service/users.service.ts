import { Injectable } from "@angular/core";
// import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
// import { Observable } from "rxjs/Observable";

import { User } from './../models/user.model';

@Injectable() 
export class UsersService {
	// baseUrl: string = 'http://localhost:3000/';
	
	// constructor(public http: HttpClient) {
	// }

	// getUserByEmail(email: string) {
	// 	return this.http.get(this.baseUrl + `users?email=${email}`)
	// }

	// createNewUser(user: User) {
	// 	return this.http.post(this.baseUrl + 'users', user);
	// }


	baseUrl: string = 'http://localhost:8081/api/';
	
	constructor(public http: HttpClient) {
	}

	getUserByEmail(email: string) {
		return this.http.get(this.baseUrl + `user-email/${email}`)
	}

	createNewUser(user: User) {
		return this.http.post(this.baseUrl + 'user', user);
	}
}