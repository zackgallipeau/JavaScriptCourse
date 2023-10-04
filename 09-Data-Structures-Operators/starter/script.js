'use strict';
////////////////////////

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


/////////////////////////////////////////
/*
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

//looping over keys
for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

const properties = Object.keys(restaurant.openingHours);

for (const day of properties) {
  console.log(day);
}

console.log(`We are open ${properties.length} days of the week`);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

//looping over object values
for (const hours of Object.values(restaurant.openingHours)) {
  openStr += `${Object.values(restaurant.openingHours)} `;
}
console.log(Object.values(restaurant.openingHours));

console.log(openStr);

const entries = Object.entries(restaurant.openingHours);

//key and values
for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/
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
