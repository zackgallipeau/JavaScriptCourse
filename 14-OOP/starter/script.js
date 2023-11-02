'use strict';

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   console.log(this.firstName);
  //   console.log(this.birthYear);
}

const zack = new Person('Zack', 2001);
const bartholomew = new Person('Bartholomew', 1989);

// console.log(zack instanceof Person);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

zack.calcAge();

/*
//to check what methods it inherits from its prototype
console.log(zack.__proto__);

console.log(Person.prototype.isPrototypeOf(zack));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapien';
console.log(bartholomew.species);
*/

console.log(zack.__proto__.__proto__.__proto__);

const arr = [1, 1, 1, 1, 5, 6, 7, 23, 5, 3, 53, 5, 345, 34, 5];

console.log(arr.__proto__);
console.log(zack.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);

//constructor function
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

//adding methods
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is now driving ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is now driving ${this.speed}km/h`);
};

//creating objects
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

//testing the prototype methods
bmw.accelerate();
bmw.accelerate();

bmw.brake();

mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.brake();

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);

jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();
