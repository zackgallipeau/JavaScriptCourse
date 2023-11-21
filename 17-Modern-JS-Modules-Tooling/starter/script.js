//Importing module
import { addToCart, totalPrice, totalQuantity, cart } from './shoppingCart.js';
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';

addToCart('bread', 10000);
console.log(cart[0]);

import add from './shoppingCart.js';
add('soap');
console.log(cart);

const getLastPost = async function () {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await result.json();
  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

//Not very clean :(
//getLastPost().then(last => console.log(last));

//better method
console.log(await getLastPost());

(function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
});
