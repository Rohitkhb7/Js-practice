/* 
  ====================================================
  LESSON 10: Inheritance & Subclasses
  ====================================================

  Inheritance lets one class extend another so you can reuse shared
  behavior and customize only what changes. Use `extends` to create a
  subclass, and call `super()` inside the subclass constructor to initialize
  the parent class.

  A subclass can override parent methods and add new methods of its own.

  EXAMPLES:
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }

  describe() {
    return `${this.name} is an animal.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks.`;
  }

  getBreed() {
    return `${this.name} is a ${this.breed}.`;
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  speak() {
    return `${this.name} meows.`;
  }

  getColor() {
    return `${this.name} has ${this.color} fur.`;
  }
}

const dog = new Dog('Rex', 'Labrador');
const cat = new Cat('Luna', 'gray');

console.log(dog.describe());
console.log(dog.speak());
console.log(dog.getBreed());

console.log(cat.describe());
console.log(cat.speak());
console.log(cat.getColor());

/* 
  ----------------------------------------------------
  PRACTICE CHALLENGE
  ----------------------------------------------------
  1. Declare a class named `Vehicle` with a constructor that accepts:
       - make
       - model
       - year
  2. Add a method named `getDetails()` that returns a string like:
       "YEAR MAKE MODEL"
  3. Declare a subclass named `Car` that extends `Vehicle` and adds:
       - `doors`
       - `isElectric`
  4. Override `getDetails()` in `Car` to include door count and electric
     status, for example:
       "YEAR MAKE MODEL - 4 doors - Electric"
  5. Create a new `Car` instance and log the result of `getDetails()`.
  6. Add a method named `isVintage()` in `Vehicle` that returns `true`
     when the year is earlier than 1990.
  7. Call `isVintage()` on your car and log the result.
  8. Bonus: add another subclass such as `Motorcycle` or `Truck` and
     create an instance of it.

  Write your code below the TODO section. When you're ready, run:

    node lesson_10_inheritance.js

  Paste the output here or tell me it's done and I will review it.
*/

// TODO: Write your code below this line

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  isVintage() {
    return this.year < 1990;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors, isElectric) {
    super(make, model, year);
    this.doors = doors;
    this.isElectric = isElectric;
  }

  getDetails() {
    const electricLabel = this.isElectric ? 'Electric' : 'Gas';
    return `${super.getDetails()} - ${this.doors} doors - ${electricLabel}`;
  }
}

const myCar = new Car('Toyota', 'Supra', 1995, 2, false);
console.log(myCar.getDetails());
console.log('Is vintage?', myCar.isVintage());

class Motorcycle extends Vehicle {
  constructor(make, model, year, hasSidecar) {
    super(make, model, year);
    this.hasSidecar = hasSidecar;
  }

  getDetails() {
    const sidecarLabel = this.hasSidecar ? 'with sidecar' : 'no sidecar';
    return `${super.getDetails()} - ${sidecarLabel}`;
  }
}

const myBike = new Motorcycle('Harley-Davidson', 'Sportster', 1985, true);
console.log(myBike.getDetails());
console.log('Is vintage?', myBike.isVintage());
