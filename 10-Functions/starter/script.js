'use strict';
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
