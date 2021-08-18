import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Modal } from 'src/app/models/modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public itemImageUrl:string='';
  constructor(public dialogRef: MatDialogRef<ModalComponent>,@Inject(MAT_DIALOG_DATA) public data: Modal) { }

  ngOnInit() {
    this.itemImageUrl=`./assets/icons/${this.data.icon}.svg`;
  }

  closeModal() {
    this.dialogRef.close();
  }

}
