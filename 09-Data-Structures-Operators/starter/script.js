'use strict';

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
};
/*
restaurant.orderPizza(
  'pepperoni',
  'onion',
  'sausage',
  'cilantro',
  'parmesan cheese'
);*/

restaurant.numGuests = 1111;

console.log('anchovies' || 'Zack');

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

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
