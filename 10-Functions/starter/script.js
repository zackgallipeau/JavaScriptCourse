'use strict';
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  numPassengers = numPassengers || 1;
  price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  //
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

const flightNumber = 'LH234';
const jonas = {
  fullName: 'Jonas Schmedtmann',
  passport: 2391283490,
};

const checkIn = function (flightNum, passenger) {
  passenger.name = 'Mr. ' + passenger.fullName;

  if (passenger.passport === 2391283490) {
    alert('Checked in');
  } else {
    alert('Wrong passport, buddy');
  }
};
// checkIn(flightNumber, jonas);
// console.log(flightNumber);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flightNumber, jonas);


const oneWord = function (str) {
  return console.log(str.replace(/ /g, '').toLowerCase());
};

oneWord('Hello there. General Kenobi!');

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer(`Javascript is fricken literally the best`, oneWord);

const highFive = function () {
  console.log('High five dude!');
};

document.body.addEventListener(`click`, highFive);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greetHey = greetArrow('Hi');
greetHey('Zack');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};

lufthansa.book(189, 'Zack');
console.log(lufthansa.bookings);

const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

book.call(eurowings, 242, 'Para Sailin');

const pliajsdf = [209, 'Tom Tomlinson'];

book.apply(eurowings, pliajsdf); //same as book.call(eurowings, ...pliajsdf);

const bookEW = book.bind(eurowings);

bookEW(324, 'Steve McStevie');

console.log(eurowings.bookings);

const bookLX = book.bind(swiss);

bookLX(209, 'Ronald leRonald');

//with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(`${this.airline} now has ${this.planes} planes`);
};

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addSalesTax = addTax.bind(null, 0.05);

console.log(addSalesTax(200));


const poll = {
  question: 'What is your favorite programming language?',
  options: ['1: Javascript', '2: Python', '3: Rust', '4: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const currentAnswer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')} \nInput your answer`
      )
    );
    if (currentAnswer < 1 || currentAnswer > 4) {
      alert(
        `You fool. You absolute moron. There were four options to choose from and you picked an option number that doesn't exist`
      );
    } else {
      this.answers[currentAnswer - 1] += 1;
    }
    return this.displayResults();
  },
  displayResults(type = 'arra') {
    if (type === 'array') {
      console.log(this.answers);
    } else {
      console.log(
        `Poll results are ${this.answers[0]} votes for ${this.options[0].slice(
          3
        )}, ${this.answers[1]} votes for ${this.options[1].slice(3)}, ${
          this.answers[2]
        } votes for ${this.options[2].slice(3)}, and ${
          this.answers[3]
        } votes for ${this.options[3].slice(3)}`
      );
    }
  },
};

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));


(function () {
  console.log('this will only run once');
})();

(() => console.log('this will only run once'))();
*/
const secureBooking = function () {};
