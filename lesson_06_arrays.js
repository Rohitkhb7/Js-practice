/* 
  ====================================================
  LESSON 6: Arrays & Iteration
  ====================================================

  Arrays let you store ordered lists of values in a single variable.
  Each item in an array is called an element, and elements are accessed by
  their index. JavaScript array indexes start at 0.

  Common array operations:
  - `[]` to create an array
  - `[index]` to read or write an element
  - `.length` to get the number of elements
  - `.push()` to add an element at the end
  - `.pop()` to remove the last element

  You can loop through arrays to process each element one by one.

  EXAMPLES:
*/

const numbers = [10, 20, 30, 40];
console.log('numbers:', numbers);
console.log('first number:', numbers[0]);
console.log('last number:', numbers[numbers.length - 1]);
console.log('array length:', numbers.length);

numbers.push(50);
console.log('after push:', numbers);

const removed = numbers.pop();
console.log('popped value:', removed);
console.log('after pop:', numbers);

console.log('Looping with for:');
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}:`, numbers[i]);
}

console.log('Looping with for...of:');
for (const value of numbers) {
  console.log(value);
}

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare `const fruits = ['apple', 'banana', 'cherry']`.
  2. Log the first fruit and the last fruit using the array index and `length`.
  3. Add `'date'` to the end of the array using `.push()`.
  4. Replace the second item with `'blueberry'`.
  5. Use a `for` loop to log each fruit in the format:
       Fruit 1: apple
       Fruit 2: blueberry
     (use `i + 1` for the position number.)
  6. Bonus: check whether the array includes `'cherry'` and log the result.

  Add your solution below in the TODO section. When you're ready,
  run:

    node lesson_06_arrays.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line

const fruits = ['apple', 'banana', 'cherry'];

console.log('first fruit:', fruits[0]);
console.log('last fruit:', fruits[fruits.length - 1]);

fruits.push('date');
fruits[1] = 'blueberry';

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

const hasCherry = fruits.includes('cherry');
console.log('includes cherry:', hasCherry);
