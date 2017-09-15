import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'app';
  constructor(private dialog: MdDialog) {

  }
  openPopUp() {
    let dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: 'Hello World!'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      console.log(result);
      // this.title = result;
    });
  }
}

