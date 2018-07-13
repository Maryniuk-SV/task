import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

	pageNames: string[] = [
		'home',
		'about',
		'contact',
		'users'
	];

	form: FormGroup;

	page:number = 0;
	name:string = '';
	// pageFind:boolean = false;

	constructor(private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
  		'name': new FormControl(null, [Validators.required, Validators.minLength(3), this.checkForm.bind(this)])
  	});
	}

	checkForm(control: FormControl) {
		for(let i = this.pageNames.length - 1; i >= 0; i-- ) {
			if(control.value === this.pageNames[i]) {
				return null;
			}
		}
		return {
			'pageError': true
		};
	}

	movePrev() {
		this.page--;
		if(this.page < 0) {
			this.page = 3
		}
		this.router.navigate(['/system/' + this.pageNames[this.page]]);
	}
	moveNext() {
		this.page++;
		if(this.page > 3) {
			this.page = 0
		}
		this.router.navigate(['/system/' + this.pageNames[this.page]]);
	}
	openPage() {
		this.router.navigate(['/system/' + this.name]);

		for(let i = this.pageNames.length - 1; i >= 0; i--) {
			if(this.name === this.pageNames[i]){
				this.page = i;
			}
		}
	}

	// onChange() {
	// 		for(let i = this.pageNames.length - 1; i >= 0; i--) {
	// 			if (this.pageNames[i] == this.name){
	// 				return this.pageFind = false;
	// 			}
	// 		}
	// 		return this.pageFind = true;
	// }
}
