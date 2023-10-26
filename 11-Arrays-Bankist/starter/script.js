'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${12 - i} days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log();

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

const letters = arr.join('');
console.log(letters);

const array = [23, 11, 64];

console.log(array[0]);

console.log(array.at(0));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement < 0) {
    console.log(`You withdrew $${Math.abs(movement)}!`);
  } else {
    console.log(`You deposited $${movement}!`);
  }
}
console.log(`-------------------sssssssssss--------`);
movements.forEach(function (movement, i) {
  if (movement < 0) {
    console.log(`Movement ${i + 1}: You withdrew $${Math.abs(movement)}!`);
  } else {
    console.log(`Movement ${i + 1}: You deposited $${movement}!`);
  }
});

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/

const x = new Array(7);
console.log(x);
x.fill('hi', 2, 4);
console.log(x);

const y = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(y);

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  const arrayCombined = dogsJuliaCorrected.concat(dogsKate);

  arrayCombined.forEach(function (age, i) {
    if (age > 2) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
}

labelBalance.addEventListener(`click`, function () {
  const movementsUI = Array.from(
    document.querySelectorAll(`.movements__value`)
  );
  console.log(
    movementsUI.map(element => Number(element.textContent.replace('€', '')))
  );
});

// checkDogs(dogsJulia, dogsKate);

const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsToUsd = movements.map(mov => mov * euroToUsd);

// console.log(movements);
// console.log(movementsToUsd);

const movementsForLoop = [];
for (let mov of movements) {
  movementsForLoop.push((mov *= 2));
}

//console.log(movementsForLoop);

const movementString = movements.map((mov, i, array) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'depositied' : 'withdrew'
  } ${Math.abs(mov)}`;
});

console.log(movementString);

//using .map()
// accounts.map(function (account) {
//   account.username = account.owner
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   console.log(account.username);
// });

//using forEach
function createUsernames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    console.log(acc.username);
  });
}

createUsernames(accounts);

const deposits = movements.filter(mov => mov > 0);

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//using reduce
const balance = movements.reduce((acc, cur) => {
  return acc + cur;
}, 0);

//using for loops
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance);
console.log(balance2);

function calcPrintBalance(acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
  acc.balance = balance;
}

const highestValue = movements.reduce(
  (acc, mov) => (mov > acc ? (acc = mov) : (acc = acc)),
  movements[0]
);

console.log(highestValue);

const lowestValue = movements.reduce(
  (acc, mov) => (mov < acc ? (acc = mov) : (acc = acc)),
  movements[0]
);

console.log(lowestValue);

const usd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(usd);

function calcDisplaySummary(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(interest => interest > 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interest}€`;
}

const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(arr) {
  const humanAge = arr
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(dogAge => dogAge >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(humanAge);
}
calcAverageHumanAge(test1);

//find method
console.log(movements.find(mov => mov < 0));

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);

let currentAccount;

function updateUI(acc) {
  calcDisplaySummary(acc);
  displayMovements(acc.movements);
  calcPrintBalance(acc);
}

btnLogin.addEventListener(`click`, function (e) {
  //prevents the form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //transferring money
    console.log('Transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  } else {
    console.log('Transfer invalid');
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //deletes the account
    accounts.splice(index, 1);

    //hides UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

const largeDeposit = movements.some(mov => mov > 5000);
console.log(largeDeposit);

console.log(account4.movements.every(mov => mov > 0));

const arr = [[1, 2, 3, [14, 15, 16, 17, [167, 17, 146, 15]]], [4, 5, 6], 7, 8];
console.log(arr.flat(3));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const overallBalance = accountMovements
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());

console.log(movements.sort());

movements.sort((a, b) => a - b);
console.log(movements);

//Sum of all deposits in the entire bank
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

//Number of deposits above 1,000 across entire bank
const numLargeDeposit = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;

console.log(numLargeDeposit);

//Object with all deposits and withdrawals

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

//title case converter
const convertTitleCase = sentence => {
  const capitalizeFirst = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = sentence
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalizeFirst(word)))
    .join(' ');
  return capitalizeFirst(titleCase);
};

console.log(convertTitleCase('The duck walked up to the lemonade stand'));
