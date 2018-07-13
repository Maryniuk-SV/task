import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Response } from '@angular/http';

import { UsersService } from './../../shared/service/users.service';

import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  message: string;
  
  constructor(
    private usersService: UsersService,
		private router: Router,
  ) { }
  
  ngOnInit() {
    this.form = new FormGroup({
      'email'   : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    });
    
  }
  private showMessage(message: string) {
		this.message = message;
		console.log(message)
	}
  
	onSubmit() {
		const formData = this.form.value;
    
		this.usersService.getUserByEmail(formData.email)
		.subscribe((res: Response) => {
			const user: any = res;
			if (user) {
				if (user.password === formData.password) {
					this.router.navigate(['/system', 'home']);
					window.localStorage.setItem('user', JSON.stringify(user));
					this.message = '';
				} else {
					this.showMessage('Пароль не правильний');
				}
			} else {
				this.showMessage('Такого користувача не існує');
			}
		});
	}
  
}
