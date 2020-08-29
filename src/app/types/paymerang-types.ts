export class PaymerangPayment {
    payee: Payee;
    payment: Payment;
    remittance: Remittance[];
}

export class Payee {
    name: string;
    fax: string;
    phone: string;
    address: Address;
    Attention: string;
    SubmissionDate: Date;
}

export class Address {
    address1: string;
    address2: string;
    city: string;
    stateOrProvince: string;
    county: string;
    postalCode: string;
}

export class Payment {
    pan: string;
    cvv: string;
    exp: Date;
}

export class Remittance {
    payorName: string;
    payorId: string;
    invoiceNo: string;
    description: string;
    amount: number;
}