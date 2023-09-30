//'use strict';

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
