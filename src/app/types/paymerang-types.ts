export interface PaymerangPayment {
    Payee: Payee;
    Payment: Payment;
    Remittance: Remittance[];
}

export interface Payee {
    Name: string;
    Fax: string;
    Phone: string;
    Address: Address;
    Attention: string;
    SubmissionDate: Date;
}

export interface Address {
    Address1: string;
    Address2: string;
    City: string;
    StateOrProvince: string;
    County: string;
    PostalCode: string;
}

export interface Payment {
    PAN: string;
    CVV: string;
    Exp: Date;
}

export class Remittance {
    payorName: string;
    payorId: string;
    invoiceNo: string;
    description: string;
    amount: number;
}