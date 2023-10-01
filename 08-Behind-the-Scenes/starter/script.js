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


//example of hoisting issues with va

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`ALl products deleted`);
}

console.log(numProducts);

function birthYear(birthYear) {
  // console.log(2023 - birthYear);
  // console.log(this); //returns undefined
}

birthYear(2001);

const calcAgeArrow = birthYear => {
  // console.log(2023 - birthYear);
  // console.log(this); //returns window because arrow functions do not get their own "this" keyword
};

calcAgeArrow(2001);

zack.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = zack.calcAge;

matilda.calcAge();

const f = zack.calcAge;

console.log(f);

f();


const zack = {
  firstName: 'Zack',
  year: 2001,
  calcAge: function () {
    //   console.log(this);
    console.log(2023 - this.year);

    const self = this;
    function isMillenial() {
      console.log(self.year >= 1981 && self.year <= 1996);
    }
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

zack.calcAge();

function addExpr(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(addExpr(2, 5, 6, 7, 6, 3));
*/
