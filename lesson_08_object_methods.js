/* 
  ====================================================
  LESSON 8: Object Methods & Nested Objects
  ====================================================

  Objects can also contain functions. When a function is stored inside an object,
  it is called a method. Methods let an object describe its own behavior.

  Objects can also hold other objects. These nested objects help organize
  related details inside a larger structure.

  EXAMPLES:
*/

const movie = {
  title: 'The Coding Adventure',
  director: 'Mia',
  year: 2025,
  rating: 4.7,
  genres: ['adventure', 'education', 'fun'],
  details: {
    duration: 120,
    language: 'English',
  },
  getSummary() {
    return `${this.title} (${this.year}) is directed by ${this.director} and lasts ${this.details.duration} minutes.`;
  },
};

console.log('movie title:', movie.title);
console.log('movie duration:', movie.details.duration);
console.log('summary:', movie.getSummary());

console.log('genre list:');
for (const genre of movie.genres) {
  console.log('-', genre);
}

console.log('movie keys:', Object.keys(movie));
console.log('movie values:', Object.values(movie));
console.log('movie entries:');
for (const [key, value] of Object.entries(movie)) {
  console.log(`${key}:`, value);
}

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare a constant object named `library` with these properties:
       - title: 'JavaScript in Practice'
       - author: 'Sam'
       - categories: ['programming', 'javascript', 'reference']
       - rating: 4.3
       - details: {
           publisher: 'Code School',
           year: 2026
         }
  2. Log the book title and publisher using the object and nested object.
  3. Add a method named `getInfo` to `library` that returns a string like:
       "JavaScript in Practice by Sam (2026)"
  4. Call `library.getInfo()` and log the result.
  5. Update `rating` to 4.5.
  6. Use `Object.keys(library)` to log the property names.
  7. Use `for...in` to log each property name and its value.

  Write your code below the TODO section. When you're ready, run:

    node lesson_08_object_methods.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line

// 1.
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
