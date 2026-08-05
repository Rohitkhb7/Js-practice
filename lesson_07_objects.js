/* 
  ====================================================
  LESSON 7: Objects & Property Access
  ====================================================

  Objects store related data as key/value pairs. Each key is called a property
  name, and each value can be any JavaScript value: a string, number, boolean,
  array, function, or even another object.

  Use `{}` to create an object. Access values with dot notation or bracket
  notation.

  EXAMPLES:
*/

const person = {
  firstName: 'Ava',
  lastName: 'Lee',
  age: 28,
  isStudent: false,
  favoriteFoods: ['pizza', 'sushi', 'salad'],
};

console.log('person object:', person);
console.log('first name:', person.firstName);
console.log('last name:', person['lastName']);
console.log('age:', person.age);
console.log('favorite food #1:', person.favoriteFoods[0]);

// Add a new property
person.city = 'New York';
console.log('city:', person.city);

// Update an existing property
person.age = 29;
console.log('updated age:', person.age);

// Check a property before reading it
if (person.email) {
  console.log('email:', person.email);
} else {
  console.log('email is not set yet');
}

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare a constant object named `book` with these properties:
       - title: 'JavaScript Basics'
       - author: 'Sam'
       - pages: 250
       - isPublished: true
       - tags: ['programming', 'js', 'beginner']
  2. Log the book title and author using dot notation.
  3. Log the third tag using bracket notation.
  4. Add a new property named `publisher` and set it to 'Code School'.
  5. Change `pages` to 275.
  6. Create a function named `describeBook` that accepts a book object and
     returns a string like:
       "JavaScript Basics by Sam has 275 pages."
  7. Call `describeBook(book)` and log the result.

  Write your code below the TODO section. When you're ready, run:

    node lesson_07_objects.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line

// 1.
const book = {
    title : 'JavaScript Basics',
    author : 'Sam',
    pages : 250,
    isPublished : true,
    tags : ['programming', 'js', 'beginner'],
};
// 2.
console.log('Book title:', book.title);
console.log('Book author:', book.author);

// 3.
console.log('Third tag:', book.tags[2]);

// 4.
book.publisher = 'Code School';

// 5.
book.pages = 275;

// 6.
const describeBook =(bookObj) => {
    return `${bookObj.title} by ${bookObj.author} has ${bookObj.pages} pages.`
};
// 7.
console.log(describeBook(book));
