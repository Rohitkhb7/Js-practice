/* 
  ====================================================
  LESSON 9: Classes, Constructors & Object Instances
  ====================================================

  JavaScript classes are templates for creating objects. They let you define
  shared properties and behavior in one place, then create multiple object
  instances from the same class.

  A class uses a `constructor` method to initialize new objects. Methods defined
  inside a class become available to every instance.

  EXAMPLES:
*/

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = false;
  }

  getSummary() {
    return `${this.title} by ${this.author} (${this.year})`;
  }

  markAsRead() {
    this.isRead = true;
  }
}

const firstBook = new Book('Learning JavaScript', 'Mira', 2024);
console.log('firstBook summary:', firstBook.getSummary());
console.log('firstBook read status:', firstBook.isRead);

firstBook.markAsRead();
console.log('after marking as read:', firstBook.isRead);

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    return this.books.map((book) => book.getSummary());
  }
}

const library = new Library('Code Library');
library.addBook(firstBook);
library.addBook(new Book('JavaScript Essentials', 'Sam', 2025));

console.log('library name:', library.name);
console.log('library book summaries:');
for (const summary of library.listBooks()) {
  console.log('-', summary);
}

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare a class named `Movie` with a constructor that accepts:
       - title
       - director
       - year
       - rating
  2. Add a method named `getDescription()` that returns a string like:
       "TITLE directed by DIRECTOR (YEAR) has a rating of RATING."
  3. Create a new `Movie` instance for a movie you like.
  4. Log the movie description using `getDescription()`.
  5. Add a method named `isClassic()` that returns `true` when the movie year is
     earlier than 2000, and `false` otherwise.
  6. Call `isClassic()` and log the result.
  7. Bonus: create another class named `MovieCollection` with methods to add a
     movie and list all movie descriptions.

  Write your code below the TODO section. When you're ready, run:

    node lesson_09_classes.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line

// 1.
class Movie {
  constructor(title, director, year, rating) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.rating = rating;
  }

  getDescription() {
    return `${this.title} directed by ${this.director} (${this.year}) has a rating of ${this.rating}.`;
  }

  isClassic() {
    return this.year < 2000;
  }
}

// 3.
const favoriteMovie = new Movie('The Coding Quest', 'Ava Chen', 2023, 4.9);

// 4.
console.log(favoriteMovie.getDescription());

// 6.
console.log('is classic:', favoriteMovie.isClassic());

// 7. Bonus
class MovieCollection {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  listDescriptions() {
    return this.movies.map((movie) => movie.getDescription());
  }
}

const collection = new MovieCollection();
collection.addMovie(favoriteMovie);
collection.addMovie(new Movie('Vintage Adventure', 'Sam Rao', 1995, 4.7));

console.log('movie collection:');
for (const description of collection.listDescriptions()) {
  console.log('-', description);
}
