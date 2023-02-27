"use strict";
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = state;
      this.type = type;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(state) {
        if(state < 0) {
            this._state = 0;
        }
        else if (state > 100) {
            this._state = 100;
        }
        else {
            this._state = state;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findAllBooksBy(key, value) {
        let books = this.books.filter(book => book[key] === value);
        return books || null;
    }

    findBookBy(key, value) {
        let book = this.books.find((book) => book[key] === value);
        return book || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        const bookIndex = this.books.indexOf(book);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return book;
        }
        return null;
    }
}

const testLibrary = new Library ("Библиотека имени Ленина");
const book1 = new Magazine (
    "Forbes",
    2015,
    100,
    31
    );

testLibrary.addBook(book1);

testLibrary.addBook(new FantasyBook (
    "author2",
    "fantasyBook",
    1919,
    430,
    30
    )
);
testLibrary.addBook(new NovelBook (
    "author3",
    "novelBook",
    1919,
    300,
    90
    )
);
testLibrary.addBook(new DetectiveBook (
    "author4",
    "detectiveBook",
    2023,
    70,
    50
    )
);
testLibrary.addBook(new DetectiveBook (
    "author5",
    "detectiveBook",
    1919,
    70,
    101
    )
);

console.log(testLibrary.findAllBooksBy("releaseDate", 1919));
console.log("Количество книг до выдачи: " + testLibrary.books.length);
testLibrary.giveBookByName("Forbes");
console.log("Количество книг после выдачи: " + testLibrary.books.length);
book1.state = 21;
console.log(book1.state);
book1.fix();
console.log(book1.state);
testLibrary.addBook(book1);