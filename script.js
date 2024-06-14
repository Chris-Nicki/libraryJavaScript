/* 
Problem Statement: You are tasked with creating a JavaScript program that simulates a 
digital library system. The program should allow users to add new books, search for 
books by title or author, and display information about the library's collection.

Task 1: Create a class for the Book object with properties for title, author, and 
pages.

Task 2: Implement a method within the Book object to display book information.



*/

// Creating book Object Prototype
class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    bookInfo = () => {
        console.log(`Title: ${this.title}; Author: ${this.author}; Pages: ${this.pages}.`)
    }
    addBook = () => {
        console.log(`Title: ${this.title}; Author: ${this.author}; Pages: ${this.pages}; added 
                     to library.`);
    }
    checkoutBook = () => {
        console.log(`You have checked out ${this.title}, by ${this.author}.
        I hope you have coffee at home, ${this.title} is ${this.pages} long.`);
    }
}

const python = new Book('Python; Quickstart Guide', 'Robert Oliver', 359);

python.addBook();
python.bookInfo();
python.checkoutBook();


