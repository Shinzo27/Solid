import { Product } from "./Product";

export class Order {
    products: Product[] = [];

    addProduct(product: Product){
        this.products.push(product);
    }

    removeProduct(product: Product){
        this.products = this.products.filter(p => p !== product);
    }

    getProducts(){
        return this.products;
    }

    getTotalPrice(){
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}