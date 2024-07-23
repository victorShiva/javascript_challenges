// Create an object represting a book with properties like Title ,auther and year and log the object in console.

let book1 = {
    title: "The Secret",
    author: "Rhonda Byrne",
    year: 2006
}
// console.log(book1);

// console.log(`Title is ${book1.title} and author ${book1.author}`);




// Add a method to the book object that returns a strings with the books title and author , and log the result of calling this method.

book1 = {
    title: "The Secret",
    author: "Rhonda Byrne",
    year: 2006
}
book1.getInfo = function () {
    console.log(`Book title is '${this.title}' and author is '${this.author}'`);
}

// book1.getInfo();





// # addd a method to the book object that takes a parameter (year) and update the book's year property and then log the update object.

book1 = {
    title: "The Secret",
    author: "Rhonda Byrne",
    year: 2006
}
book1.updateYear = function (newYear) {
    this.year = newYear;
    console.log(this);
}

// book1.updateYear(2000);
// console.log(book1);




//# create a nested object representing a library with properties like name and books (an array of book object ), and log the library object to the console.

let library = {
    name: "Central Library",
    books: [
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
        { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
    ]
};

// console.log(library);


// # Access the log the name of the library and the titles of all the books in library.

// console.log(library.name);
// for (let book of library.books) {
//     console.log(book.title);
// }



// #  use a for...in loop to iterate over the properties of book object and log the each propety and its value.
book1 = {
    title: "The Secret",
    author: "Rhonda Byrne",
    year: 2006
}

// for (let [prop, val] of Object.entries(book1)) {
//     console.log(`key : ${prop} - value : ${val}`);
// }

library = {
    name: "Central Library",
    books: [
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
        { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
    ]
};
// for (let i = 0; i < library.books.length; i++) {
//     let book = library.books[i];
//     for (let prop in book) {
//         console.log(`property : ${prop} , value : ${book[prop]}`);
//     }
// }



// Use Object.keys and Object.values methods to log all the keys and values of the book object.

book1 = {
    title: "The Secret",
    author: "Rhonda Byrne",
    year: 2006
}

// Object.keys(book1).forEach(key => console.log(key));
Object.values(book1).forEach(value => console.log(value));
