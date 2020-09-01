import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PaymentService } from '../../services/payment-service';
import { PaymentInfoDialogComponent } from '../payment-info/payment-info-dialog/payment-info-dialog.component';
import { PaymerangPayment } from '../../types/paymerang-types';

@Component({
  selector: 'app-paymerang-payment-overview',
  templateUrl: './paymerang-payment-overview.component.html',
  styleUrls: ['./paymerang-payment-overview.component.css']
})

export class PaymerangPaymentOverviewComponent implements OnInit {
  dataSource = new MatTableDataSource<PaymerangPayment>([]);
  displayedColumns: string[] = ['name', 'submissionDate', 'totalRemittanceAmount', 'numberOfPayors'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private paymentService: PaymentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = this.paymentService.getPaymentData();
    this.dataSource.paginator = this.paginator;
  }

  openPaymentModal(payment: PaymerangPayment): void {
    var dialogConfig = new MatDialogConfig();
    console.log(payment);
    const dialogRef = this.dialog.open(PaymentInfoDialogComponent, {
      height: '500px',
      width: '1000px',
      data: payment
    });
  }
}
