'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2023-02-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-07-08T14:11:59.604Z',
    '2023-08-27T17:01:17.194Z',
    '2023-10-23T23:36:17.929Z',
    '2023-10-27T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-06-10T14:43:26.374Z',
    '2023-08-25T18:49:59.371Z',
    '2023-09-27T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

function formatCur(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

function formatMovementDate(date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / 1000 / 60 / 60 / 24);

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return Intl.DateTimeFormat(locale).format(date);
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const movDate = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(movDate, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
        
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => (acc += mov));
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

function startLogoutTimer() {
  let timeout = 300;

  function tick() {
    const min = timeout / 60;
    const sec = timeout % 60;

    if (timeout === 0) {
      labelWelcome.textContent = 'Log in to get started';
      currentAccount = '';
      containerApp.style.opacity = 0;
      clearTimeout(countdown);
    }
    labelTimer.textContent = `${Math.trunc(min)}:${sec
      .toString()
      .padStart(2, 0)}`;
    timeout--;
  }
  tick();
  const countdown = setInterval(tick, 1000);
  return countdown;
}

///////////////////////////////////////
// Event handlers
let currentAccount, countdown;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

    // Start the logout timer
    if (countdown) clearInterval(countdown);
    countdown = startLogoutTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }

  //reset timer
  clearInterval(countdown);
  countdown = startLogoutTimer();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);

      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';

  //reset timer
  clearInterval(countdown);
  countdown = startLogoutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//force login

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// LECTURES
/*
console.log(0.1 + 0.2 === 0.3);

console.log(Number.parseInt('30', 10));
console.log(Number.parseFloat('2.5'));
console.log(Number.isFinite(29));
console.log(Number.isFinite('hello'));
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 1203, 20893));
console.log(Math.min(5, 18, 1203, 20893));

console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 10 + 1));

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));

//rounding numbers

//removes decimal
console.log(Math.trunc(23.3));

//rounds to nearest int
console.log(Math.round(23.5));

//rounds up
console.log(Math.ceil(23.6));

//rounds down
console.log(Math.floor(23.9));

//rounds down to -24
console.log(Math.floor(-23.3));

//removes the decimal, making it -23.3
console.log(Math.trunc(-23.3));

//rounds to a specified number of decimals but returns a string without the +
console.log(+(2.7837883).toFixed(3));

//modulus
console.log(5 % 2);
console.log(8 % 2);

const isEven = n => n % 2 === 0;

console.log(isEven(2));
console.log(isEven(3));

labelBalance.addEventListener(`click`, function () {
  [...document.querySelectorAll(`.movements__row`)].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});



const solarSystemDiameter = 287_460_000_000;

console.log(solarSystemDiameter);

//bigInt

console.log(10000n + 10000n);

console.log(20n == 20);
console.log(20n === 20);

console.log(typeof 20n);
console.log(12n / 3n);

//create a date
const now = new Date();
console.log(now);
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 12, 15, 23, 5));

console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates

const future = new Date(2037, 10, 12, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());


const today = new Date(2023, 9, 28, 11, 47);
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

console.log(calcDaysPassed(future, today));


const num = 38892834.23;

const options = {
  style: 'currency',
  // unit: 'mile-per-hour',
  currency: 'EUR',
};

// console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

const ingredients = ['pepperoni', ' sausage', ' bacon', ' ham'];
const pizzaTimer = console.log('Your pizza has been ordered.');
setTimeout(
  () => console.log(`Here is your pizza with ${ingredients}! 🍕`),
  3000,
  ingredients
);
setTimeout(() => console.log('Your pizza is on the way'), 1000);

if (ingredients.includes('pepperoni')) clearTimeout(pizzaTimer);


//setTimeout

setInterval(() => {
  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, 0)}:${now
    .getMinutes()
    .toString()
    .padStart(2, 0)}:${now.getSeconds().toString().padStart(2, 0)}`;
  console.log(time);
}, 1000);
*/
