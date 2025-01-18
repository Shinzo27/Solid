import { Order } from "./Order";

interface IPaymentMethod {
    processPayment(order: Order): void;
}

export class PaymentProcess {
    processor: IPaymentMethod;
    
    constructor(processor: IPaymentMethod){
        this.processor = processor;
    }
    
    processPayment(order: Order){
        this.processor.processPayment(order);
    }
}

export class CreditCardPayment implements IPaymentMethod {
    processPayment(order: Order){
        console.log("Processing payment with credit card...");
    }
}

export class DebitCardPayment implements IPaymentMethod {
    processPayment(order: Order): void {
        console.log("Processing payment with Debit card...");
    }
}

export class UpiPayment implements IPaymentMethod {
    processPayment(order: Order): void {
        console.log("Processing payment with UPI...");
    }
}

