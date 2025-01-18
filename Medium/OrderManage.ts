import { Order } from "./Order";
import { CreditCardPayment, DebitCardPayment, PaymentProcess, UpiPayment } from "./PaymentProcess";
import { Product } from "./Product";


const product1 = new Product("Product 1", 10, 5);
const product2 = new Product("Product 2", 20);
const product3 = new Product("Product 3", 30);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);

console.log(order.getProducts());
console.log(order.getTotalPrice());

// const paymentProcess = new PaymentProcess(new CreditCardPayment());
// const paymentProcess = new PaymentProcess(new DebitCardPayment());
const paymentProcess = new PaymentProcess(new UpiPayment());
paymentProcess.processPayment(order);