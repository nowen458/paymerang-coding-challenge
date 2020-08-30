import { Injectable } from '@angular/core';
import { PaymerangPayment, Remittance } from "../types/paymerang-types";

@Injectable()
export class PaymentService {
    // normally, the service would reach out to an API endpoint to grab data,
    // but for this example we'll just be using the sample.json provided
    public getPaymentData(): PaymerangPayment[] {
        var paymentData = new Array<PaymerangPayment>();
        try {
            var paymentData = new Array<PaymerangPayment>();
            paymentData = require('../../assets/sample.json');
        } catch (error) {
            console.log(error);
        }
        
        return paymentData;
    }

    public calculateTotalRemittanceAmount(remittanceItems: Remittance[]): number {
        var test = 5;

        return test;
    }
}