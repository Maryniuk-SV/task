import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.less']
})
export class DeleteComponent implements OnInit {

  currentItem: any = this.data;

  constructor(
    private apiService: ApiService,
    private matDialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  isDeleted(del: boolean) {
    const getDeleteItems = [];

    this.currentItem.name.forEach(element => {
      if(element.selected === true) {
        getDeleteItems.push(element)
      }
    });

    if(del){
      getDeleteItems.forEach(res => {
        this.apiService.deleteEmployee(res).subscribe();
      });
      this.matDialogRef.close();
    }
    this.matDialogRef.close();
  }
}
