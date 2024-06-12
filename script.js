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


