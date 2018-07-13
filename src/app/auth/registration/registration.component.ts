import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from './../../shared/service/users.service';
import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private usersService: UsersService,
		private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name'    : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email'   : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      'admin'   : new FormControl(null, [])
  	});
  }
  onSubmit() {
  	const {email, password, name, admin} = this.form.value;
    const user = new User(email, password, name, admin);
    
    if(!user.admin){user.admin = false}
    this.usersService.createNewUser(user)
  	.subscribe((data) => {
  		this.router.navigate(['/login'], {
  			queryParams: {
  				nowCanLogin: true
  			}
  		});
  	});
  }

}
