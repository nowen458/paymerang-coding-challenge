import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PaymentService } from '../../services/payment-service';
import { PaymentInfoDialogComponent } from '../payment-info/payment-info-dialog/payment-info-dialog.component';
import { PaymerangPayment } from '../../types/paymerang-types';

@Component({
  selector: 'app-paymerang-payment-overview',
  templateUrl: './paymerang-payment-overview.component.html',
  styleUrls: ['./paymerang-payment-overview.component.css']
})

export class PaymerangPaymentOverviewComponent implements OnInit {
  paymentData: Array<PaymerangPayment>;

  constructor(private paymentService: PaymentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.paymentData = this.paymentService.getPaymentData();
  }

  openPaymentModal(payment: PaymerangPayment): void {
    var dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(PaymentInfoDialogComponent, {
      height: '500px',
      width: '1000px',
      data: payment
    });
  }
}
