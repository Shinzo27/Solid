export class Product {
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;

    constructor(name: string, price: number, quantity: number = 1){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.totalPrice = this.price * this.quantity;
    }
}