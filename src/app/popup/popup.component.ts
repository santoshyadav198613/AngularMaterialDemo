import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { User } from './user';
import { PopupService } from '../service/popup/popup.service';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  providers: [PopupService]
})
export class PopupComponent implements OnInit {
  user = new User();
  constructor(private popupService: PopupService,
    public dialogRef: MdDialogRef<PopupComponent>, @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close(this.user);
  }

}
