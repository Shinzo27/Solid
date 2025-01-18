import { Book } from "./Book";

export class Library {
    private books: Book[];

    constructor(){
        this.books = [];
    }

    addBook(book: Book){
        this.books.push(book);
    }

    getBooks(){
        return this.books;
    }

    removeBook(book: Book){
        this.books = this.books.filter(b => b !== book);
    }

    getBookByTitle(title: string){
        return this.books.find(b => b.title === title);
    }

    getBookByAuthor(author: string){
        return this.books.filter(b => b.author === author);
    }

    getBookByISBN(ISBN: string){
        return this.books.find(b => b.ISBN === ISBN);
    }
}