/* 
  ====================================================
  LESSON 3: Comparison Operators & if/else Conditionals
  ====================================================

  Comparison operators let you compare values and produce a boolean result
  (`true` or `false`). Common comparison operators:
  - `===` strict equality (checks value and type)
  - `!==` strict inequality
  - `==` loose equality (performs type coercion; avoid for beginners)
  - `!=` loose inequality
  - `>` greater than
  - `<` less than
  - `>=` greater than or equal
  - `<=` less than or equal

  Conditionals let your code make decisions. The basic form is `if`:
    if (condition) {
      // run when condition is true
    } else {
      // run when condition is false
    }

  You can chain checks with `else if` for multiple branches. Use parentheses
  around conditions when needed, and prefer `===`/`!==` to avoid unexpected
  type coercion.

  EXAMPLES:
*/

const a = 5;
const b = '5';

// strict vs loose equality
console.log(a === Number(b)); // true (both are number 5)
console.log(a == b); // true (loose equality coerces types)

// comparisons
console.log('5 > 3 ?', 5 > 3);   // true
console.log('2 <= 2 ?', 2 <= 2); // true

// if / else
const temperature = 18;
if (temperature >= 25) {
  console.log('It\'s warm outside');
} else if (temperature >= 15) {
  console.log('The weather is mild');
} else {
  console.log('It\'s cold outside');
}

// boolean flag example
const isLoggedIn = false;
if (isLoggedIn) {
  console.log('Show dashboard');
} else {
  console.log('Show login screen');
}

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare `const score = 72`.
  2. Using `if` / `else if` / `else`, print a letter grade:
     - 90 and above: "Grade: A"
     - 80-89: "Grade: B"
     - 70-79: "Grade: C"
     - below 70: "Grade: F"
  3. Declare `const passing = score >= 70` and then use a strict equality
     check to print either "Passed: true" or "Passed: false" (use `===`).
  4. Bonus: convert `score` to a string and demonstrate that `score === '72'`
     is false while `score == '72'` is true (log both results).

  Add your solution below in the `TODO` area. When you're done, run:

    node lesson_03_conditionals.js

  Paste the output here or tell me it's done and I'll review it.
*/

// TODO: Write your code below this line

// 1
const score = 72;

// 2
if (score>=90){
    console.log('Grade A');
} else if (score>=80){
    console.log('Grade B');
} else if (score>=70){
    console.log('Grade C');
}else{
    console.log('Grade F');
}

//3
const passing = score >=70
if(passing === true){
    console.log('Passed: True');
}else {
    console.log('Passed: false')
}

//4
console.log('"72" == score:', score == '72');
console.log('"72" === score:', score === '72');


