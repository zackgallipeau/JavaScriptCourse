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
