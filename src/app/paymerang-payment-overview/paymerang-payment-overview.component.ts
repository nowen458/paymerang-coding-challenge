import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment-service';
import { PaymerangPayment } from '../types/paymerang-types';

@Component({
  selector: 'app-paymerang-payment-overview',
  templateUrl: './paymerang-payment-overview.component.html',
  styleUrls: ['./paymerang-payment-overview.component.css']
})

export class PaymerangPaymentOverviewComponent implements OnInit {
  paymentData: Array<PaymerangPayment>;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentData = this.paymentService.getPaymentData();

    console.log(this.paymentData[0].Payee);
  }

}
