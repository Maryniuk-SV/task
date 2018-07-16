import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

  currentItem: any = this.data;

  constructor(
    private apiService: ApiService,
    private matDialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit() {
  }

  close() {
    this.data.name.name = this.currentItem.name.name;
    
    const newData = {
			id: this.data.name._id,
			name: this.currentItem.name.name,
			selected: false,
			__v: 0
    }
    this.apiService.createUser(newData).subscribe();
    this.matDialogRef.close();
  }

}
