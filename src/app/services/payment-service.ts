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

        // normally we would already have this calculated and stored in a db field,
        // but for the purposes of this tutorial, we'll just calculate here
        paymentData.forEach(pd => {
            pd.TotalRemittanceAmount = this.calculateTotalRemittanceAmount(pd.Remittance);
        });
        
        return paymentData;
    }

    private calculateTotalRemittanceAmount(remittanceItems: Remittance[]): number {
        var totalAmount = 0;

        remittanceItems.forEach(r => {
            totalAmount += parseFloat(r.Amount.substring(1).replace(',',''));
        })
        return totalAmount = parseFloat(totalAmount.toFixed(2));
    }
}