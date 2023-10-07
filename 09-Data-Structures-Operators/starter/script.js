'use strict';
////////////////////////
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const goals = game.scored.entries();
//console.log(goals);
const goalNumber = Object.keys(game.scored);

for (const [goal, player] of goals) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

//2
let avg = 0;
for (const odds of Object.values(game.odds)) {
  avg += odds;
}
console.log(avg / Object.values(game.odds).length);

for (const [team, odds] of Object.entries(game.odds)) {
  const teamString = team === `x` ? 'draw:' : `${game[team]} victory:`;
  console.log(`Odds of ${teamString} ${odds} `);
}

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

*/
/////////////////////////////////
////////
/////////////////
////////
///////////////////////////

/*
//step 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//step 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//step 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//step 4
const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];

//step 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//step 6
function printGoals(...players) {
  const didScore = { ...game.scored };
  console.log(
    `A total of ${players.length} goals were scored by ${[...game.scored]}`
  );
}

printGoals(...game.scored);

//step 7
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

*/
/////////////////////////////////////////

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// //looping over keys
// for (const day of Object.keys(restaurant.openingHours)) {
//   console.log(day);
// }

// const properties = Object.keys(restaurant.openingHours);

// for (const day of properties) {
//   console.log(day);
// }

// console.log(`We are open ${properties.length} days of the week`);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += ` ${day},`;
// }
// console.log(openStr);

// //looping over object values
// for (const hours of Object.values(restaurant.openingHours)) {
//   openStr += `${Object.values(restaurant.openingHours)} `;
// }
// console.log(Object.values(restaurant.openingHours));

// console.log(openStr);

// const entries = Object.entries(restaurant.openingHours);

// //key and values
// for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

/////////////////////////////////////////////

/*
//optional chaining
console.log(restaurant?.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}

//optional chaining a method
console.log(restaurant.orderRisotto?.(0, 1) ?? `Unavailable.`);

//optional chaining an array
const users = [{ name: `Zack`, email: `zack@a.com` }, 42, 20];

console.log(users[0]?.name ?? 'User array empty');

console.log(users[1]?.name ?? 'User array empty');
*/
// console.log(restaurant.openingHours);

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

//old way
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//new way
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
/*
const rest1 = {
  name: `Capri`,
  numGuests: 20,
  owner: `Mallory`,
};

const rest2 = {
  name: `La Piazza`,
  owner: `Giovanni Rossi`,
};

rest2.numberGuests = rest1.numGuests || 10;

console.log(rest2.numberGuests);

rest1.owner = rest1.owner && 'ANONYMOUS';
console.log(rest1.owner);
///////////////////////////////////////////
/////////////////////////////////////////
///////////////////////////////////////////
*/
////////////////////////////////////
////////////////////////////////////
//////////////////////////////////////
/*
restaurant.orderPizza(
  'pepperoni',
  'onion',
  'sausage',
  'cilantro',
  'parmesan cheese'
);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// is the same as
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

restaurant.numGuests = 0;

//console.log('anchovies' || 'Zack');

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

console.log(guests1);

//restaurant.orderPizza('Anchovies');

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 1?`),
// ];

// restaurant.orderPasta(...ingredients);

// const newRestaurant = {
//   ...restaurant,
//   founder: 'Linguine',
// };

// console.log(newRestaurant);

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);
/*
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

function add(...numbers) {
  console.log(numbers);
  let total = 0;
  for (let i = 0; i < numbers.length; i++) total += numbers[i];
  console.log(total);
}

add(2, 3);
add(3, 7, 65, 34, 3452);
add(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

/*
const arr = [7, 8, 9];

const newArr = [5, 6, ...arr];

console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, `Gnocci`];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const melon = 'melon';

const melonnn = [...melon, 'n', 'n'];

console.log(melonnn);

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({});

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

const { menu = [], starterMenu: starters = [] } = restaurant;

const {
  fri: { open, close },
} = restaurant.openingHours;

console.log(open, close);

//console.log(menu, starters);

//console.log(restaurantName, hours, tags);


let [first, , second] = restaurant.categories;
console.log(first, second);

// let temp = second;
// second = first;
// first = temp;

[first, second] = [second, first];

console.log(first, second);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

const alphabet = ['a', 'b', ['c', 'd']];
const [i, , [j, k, w = 1]] = alphabet;

console.log(i, j, k, w);
*/
/*
const mySet = new Set([`hola`, 12, `hello`, true, true, false, true, false]);

//console.log(mySet);

// //example
// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];

// const staffUnique = new Set(staff);
// console.log(staffUnique);

const map = new Map();

map.set(`I'm`, `The Map!`);
map.set(`I'm`, `The Map, I'm the map!!`);
//console.log(map.get(`I'm`));

map.set(document.querySelector(`h1`), `Heading`);
console.log(map.get(document.querySelector`h1`));

const question = new Map([
  [`Question`, `What is the best programming language in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `Correct!`],
  [false, `Try again. :(`],
]);

console.log(Object.entries(restaurant.openingHours));

//console.log(question);

//convert object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));

//console.log(hoursMap);

console.log(question.get(`Question`));
//for of loop on map
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3; //Number(prompt('Enter the correct answer'));

//the first question.get has a nested question.get with the statement `correct` === 3, which will return either true or false. True is paired to "correct" in the map, and false to "incorrect" so this will check if the right answer was given and return the appropriate response
console.log(question.get(question.get(`correct`) === answer));


const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4
for (const [time, event] of gameEvents) {
  time <= 45;
  const half = time <= 45 ? `FIRST` : `SECOND`;
  console.log(`[${half} HALF] ${time}: ${event}`);
}
*/
/*
const airline = 'TAP Air Portugal';
const plane = `A320`;

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//takes a string with poor capitalization, turns it to lower case, and then capitalizes the first letter
const passenger = `zACk`;
const passengerLower = passenger.toLowerCase();
//console.log(passenger);
//console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
//console.log(passengerCorrect);

const email = 'hello@hello.hello';
const loginEmail = '       Hello@helLO.heLlo \n';

const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim();

const newEmail = loginEmail.toLowerCase().trim();
console.log(newEmail);

console.log(trimmedEmail);

const priceUS = `$288.97`;
const priceGB = priceUS.replace(`$`, `£`);
console.log(priceGB);

const greeting = 'howdy howdy howdy';
const normalGreeting = greeting.replaceAll(`howdy`, `hello`);
console.log(normalGreeting);

console.log(normalGreeting.includes('parkour'));
console.log(normalGreeting.includes('hello'));

console.log(normalGreeting.endsWith('lo'));

console.log(normalGreeting.startsWith(`hell`));

//practice exercise

const checkBaggage = function (items) {
  if (
    items.toLowerCase().includes('knife') ||
    items.toLowerCase().includes('gun')
  ) {
    console.log(`You are NOT allowed on the plane`);
  } else {
    console.log(`Welcome aboard!`);
  }
};

checkBaggage('I have a laptop, some food, and a pocket kniFE');

checkBaggage('I have socks and a camera');

const baggage = 'I have snacks for the ride and a GUN for protection';

//console.log(baggage.split(' '));

const bleh = [
  'hello',
  'my',
  'name',
  'is',
  'Indigo',
  'Montoya',
  'yOu',
  'KILL',
  'mY',
  'faTHeR',
  'prEPaRe',
  'to',
  'die',
];

const helb = bleh.join(` `).toLowerCase();
//console.log(helb);

const capitalizeName = function (name) {
  const names = name.split(` `); //splits the name into an array of individual words
  const namesUpper = []; //empty array to be used later

  for (const abracadabra of names) {
    //namesUpper.push(abracadabra[0].toUpperCase() + abracadabra.slice(1)); //capitalizes the first letter, then joins it with the rest of the word and adds it to the array
    namesUpper.push(
      abracadabra.replace(abracadabra[0], abracadabra[0].toUpperCase())
    );
  }
  console.log(namesUpper.join(` `)); //converts the array into a string and prints
};

capitalizeName(`zachary david gallipeau the fifth`);

const announcement = `Go to gate 23!`;

console.log(announcement.padStart(25, `+`));

const maskCreditCard = function (number) {
  const str = String(number);
  const slice = str.slice(-4);
  console.log(slice.padStart(str.length, '*'));
};

console.log(maskCreditCard(123424398789));

//repeat

const message4 = `Bad weather... All Departures Delayed...`;

//console.log(message4.repeat(50));

const planesInLine = function (num) {
  console.log(`There are ${num} planes in line ${`✈️`.repeat(num)}`);
};

planesInLine(30);

/*
//console.log(plane[0]);

for (let i = 0; i < plane.length; i++) {
  console.log(plane[i]);
}

console.log(airline.slice(2, 6));

console.log(airline.slice(airline.length - 5, airline.length - 2));

//returns the last word in the string
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //the + 1 removes the space that would be included otherwise

//returns the first word in the string
console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(
      'You got the middle seat. LOSERRRRRRRRRRRR EVERYONE POINT AND LAUGH AT THIS LOSERRRRRR'
    );
  } else {
    console.log(`You did not get a middle seat but you're still a loser`);
  }
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);
*/

document.body.append(document.createElement(`textarea`));
document.body.append(document.createElement(`button`));

const finalText = [];

//this eventListener checks for when the button is pressed
document.querySelector(`button`).addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;
  console.log(text);
  //the above section takes the text from the textarea and puts it into a variable called "text"

  //this array takes the text, puts it in lower case, and splits it after each enter key is pressed

  const newArray = text.toLowerCase().split('\n');
  // console.log(newArray);

  //the first for loop goes over the array and splits them into a sub array each time there is an underscore
  for (let i = 0; i < newArray.length; i++) {
    finalText[i] = newArray[i].trim().split(`_`);

    let output = finalText[i][0]; //output will be printed at the end of this loop every time it loops. Each time it will print one line. This initializes it with the value of the first word of the sub-array finalText

    //the second for loop goes over each item in the sub-array finalText. It takes the first letter of each array item, capitalizes it, and then adds the rest of that array item in lower case
    for (let e = 1; e < finalText[i].length; e++) {
      output += finalText[i][e][0].toUpperCase() + finalText[i][e].slice(1);
    }
    //this prints the output, adds spaces until it is 20 characters long, and then adds a checkmark, with one additional checkmark printing each tiem the loop runs
    console.log(output.padEnd(20, ' ') + `✅`.repeat(i + 1));

    /*
    underscore_case
 first_name
Some_Variable
   calculate_AGE
delayed_departure
*/
  }

  //////////////////////////this works
  /*
  const newText = text.toLowerCase().split(`_`);
  console.log(newText);

  let finalText = newText[0];
  console.log(finalText);

  for (let i = 1; i < newText.length; i++) {
    finalText += newText[i][0].toUpperCase() + newText[i].slice(1);
  }
  console.log(finalText);
  return finalText;
  */
  ///////////////////////////////////////
});
