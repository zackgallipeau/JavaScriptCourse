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
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greetHey = greetArrow('Hi');
greetHey('Zack');
