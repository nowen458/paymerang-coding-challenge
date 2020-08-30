import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaymerangPayment } from '../../../types/paymerang-types';

@Component({
  selector: 'payment-info-dialog',
  templateUrl: './payment-info-dialog.component.html',
  styleUrls: ['./payment-info-dialog.component.css']
})
export class PaymentInfoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PaymentInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private payment: PaymerangPayment) { }

  ngOnInit(): void {
  }

}
