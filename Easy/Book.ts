//Book class

export class Book {
    title: string;
    author: string;
    ISBN: string;

    constructor(title: string, author: string, ISBN: string){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
}