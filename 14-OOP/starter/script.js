'use strict';
/*
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


//to check what methods it inherits from its prototype
console.log(zack.__proto__);

console.log(Person.prototype.isPrototypeOf(zack));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapien';
console.log(bartholomew.species);


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

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
console.log(jessica instanceof PersonCl);

PersonCl.prototype.hey = function () {
  console.log('Hey there! 👋');
};

jessica.hey();

class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed -= 5;
    console.log(`The ${this.make} is now driving ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is now driving ${this.speed}km/h`);
  }
}

const ford = new Car2('Ford', 120);

console.log(ford.speed);
ford.accelerate();

ford.speedUS = 70;
console.log(ford.speed);
ford.speedUS = 85;
console.log(ford.speedUS);
console.log(ford.speed);
ford.brake();
ford.brake();
console.log(ford.speedUS);


function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  Person.prototype.calcAge = function () {
    console.log(new Date().getFullYear() - this.birthYear);
  };
}

// // BAD METHOD
// const Student = function (firstName, birthYear, course) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   this.course = course;
// };

// Good method
function Student(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);

const melinda = new Student('Melinda', 2000, 'Psychology');

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

melinda.introduce();

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

// all true - represents the prototype chain
console.log(melinda instanceof Student);
console.log(melinda instanceof Person);
console.log(melinda instanceof Object);

//

//

//inheritance using constructor functions
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is now driving ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is now driving ${this.speed}km/h`);
};

function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  if (chargeTo > this.charge) {
    this.charge = chargeTo;
    console.log(`Battery now at ${this.charge}%`);
  }
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

tesla.brake();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(15);
tesla.chargeBattery(80);
*/

/*
//inheritance using classes
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(
      `${this.fullName} is ${
        new Date().getFullYear() - this.birthYear
      } years old`
    );
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}

const martha = new Student('Martha Jones', 1987, 'Science');

martha.calcAge();
*/
const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

const jay = Object.create(StudentProto);

StudentProto.init = function (firstName, birthYear, grade) {
  PersonProto.init.call(this, firstName, birthYear);
  this.grade = grade;
};

const billiam = Object.create(StudentProto);
billiam.init('Billiam', 1998, '9th');

console.log(billiam.firstName);
console.log(billiam.calcAge());

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }

  deposit(num) {
    this._movements.push(num);
    return this;
  }

  withdraw(num) {
    this.deposit(0 - num);
    return this;
  }

  _approveLoan(val) {
    return val < this._movements.reduce((acc, num) => (acc += num)) * 0.1;
  }

  requestLoan(num) {
    if (this._approveLoan === true) {
      this._movements.push(num);
    } else {
      console.log('Insufficient funds broke boy');
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

console.log(acc1);
console.log(acc1._movements);

acc1.deposit(250);
acc1.withdraw(140);

acc1.requestLoan(300);

acc1.deposit(200);
acc1.requestLoan(5010000000);
console.log(acc1._movements);

class PrivateTest {
  locale = navigator.language;
  #movements = [];
}

const Hello = new PrivateTest();
console.log(Hello);

console.log();

// console.log(Hello.movements);

acc1.deposit(300).deposit(500);
acc1.requestLoan(100);

console.log(acc1._movements);

console.log(100 < acc1._movements.reduce((acc, num) => (acc += num)) * 0.1);
acc1.requestLoan(100);

acc1.requestLoan(10);
console.log(acc1._movements);

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is now going ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is now going ${this.speed} km/h`);
    return this;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
    return this;
  }

  chargeBattery(num) {
    if (num > this.charge) this.charge = num;
  }
}

const rivian = new EV('Rivian', 120, 23);

console.log(rivian.charge);

rivian.chargeBattery(100);
rivian.chargeBattery(5);
console.log(rivian.charge);

rivian.accelerate().accelerate();
rivian.brake().brake().brake().brake().brake();

rivian.accelerate().accelerate().brake().brake().brake().brake().brake();

rivian.brake().brake().brake();
rivian.brake();
