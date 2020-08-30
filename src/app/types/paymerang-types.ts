export class PaymerangPayment {
    Payee: Payee;
    Payment: Payment;
    Remittance: Remittance[];
    TotalRemittanceAmount: number;
}

export class Payee {
    Name: string;
    Fax: string;
    Phone: string;
    Address: Address;
    Attention: string;
    SubmissionDate: Date;
}

export class Address {
    Address1: string;
    Address2: string;
    City: string;
    StateOrProvince: string;
    County: string;
    PostalCode: string;
}

export class Payment {
    PAN: string;
    CVV: string;
    Exp: string;
}

export class Remittance {
    PayorName: string;
    PayorId: string;
    InvoiceNo: string;
    Description: string;
    Amount: string;
}