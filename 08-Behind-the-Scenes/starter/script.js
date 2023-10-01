'use strict';
/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var str = 'You are a millenial';
    } else {
      var str = `You are not a millenial`;
    }

    console.log(str);

    function add(a, b) {
      return a + b;
    }
    add(1, 2);
  }
  printAge();

  return age;
}

const firstName = 'Zack';
calcAge(2001);

//demonstrations of hoisting
console.log(me);
console.log(job);
console.log(year);

var me = 'Zack';
let job = 'unemployed';
const year = 2001;

console.log(addDecl(1, 2));
console.log(addExpr(1, 2));
console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/

//example of hoisting issues with va

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`ALl products deleted`);
}

console.log(numProducts);
