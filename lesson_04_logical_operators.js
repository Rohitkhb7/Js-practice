/* 
  ====================================================
  LESSON 4: Logical Operators (&&, ||, !)
  ====================================================

  Logical operators are used with boolean values to build more complex
  conditions.
  - `&&` (AND): true only when both sides are true.
  - `||` (OR): true when at least one side is true.
  - `!` (NOT): flips true to false and false to true.

  Because JavaScript treats some values as "truthy" or "falsy," logical operators
  can also be used with non-boolean values. For beginners, focus on boolean logic
  and use `&&` / `||` inside `if` statements.

  EXAMPLES:
*/

const isSunny = true;
const hasUmbrella = false;

console.log('Sunny AND umbrella:', isSunny && hasUmbrella); // false
console.log('Sunny OR umbrella:', isSunny || hasUmbrella);  // true
console.log('NOT sunny:', !isSunny);                       // false

const age = 20;
const hasID = true;

if (age >= 18 && hasID) {
  console.log('Allowed to enter');
} else {
  console.log('Not allowed to enter');
}

const likesPizza = false;
const likesBurger = true;

if (likesPizza || likesBurger) {
  console.log('Will eat something tasty');
} else {
  console.log('No tasty options');
}

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare `const hasKey = true` and `const doorIsLocked = false`.
  2. Use `&&` to log whether the door can be opened when the key exists and the
     door is not locked.
  3. Declare `const hasCoffee = false` and `const hasTea = true`.
  4. Use `||` to log whether there is a drink option available.
  5. Declare `const isTired = true` and `const isWeekend = false`.
  6. Use `!` and `&&` together to log: "Need rest" only when the person is tired
     and it is not the weekend.

  Write your solution below in the TODO section. When you're ready, run:

    node lesson_04_logical_operators.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line

// 1
const hasKey = true;
const doorIsLocked = false;

// 2
console.log(hasKey && !doorIsLocked);

// 3
const hasCoffee = false 
const hasTea = true

// 4
console.log(hasCoffee || hasTea);

// 5
const isTired = true;
const isWeekend = false;
// 6
if (isTired && !isWeekend) {
    console.log('Need Rest');
}