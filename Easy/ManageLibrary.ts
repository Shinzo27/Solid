 // ManageLibrary class

import { Book } from "./Book";
import { Library } from "./Library";

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0-393-04346-8");
const book2 = new Book("The Catcher in the Rye", "J.D. Salinger", "978-0-393-04346-8");
const book3 = new Book("The Lord of the Rings", "J.R.R. Tolkien", "978-0-393-04346-8");
const book4 = new Book("The Hobbit", "J.R.R. Tolkien", "978-0-393-04346-8");
const book5 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "978-0-393-04346-8");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

console.log("Books in library:");
console.log(library.getBooks());
// console.log("Books by title:");
// console.log(library.getBookByTitle("The Great Gatsby"));
// console.log("Books by author:");
// console.log(library.getBookByAuthor("F. Scott Fitzgerald"));
// console.log("Books by ISBN:");
// console.log(library.getBookByISBN("978-0-393-04346-8"));

library.removeBook(book1);

console.log("Books in library:");
console.log(library.getBooks());