//Importing module
import { addToCart, totalPrice, totalQuantity, cart } from './shoppingCart.js';
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';

addToCart('bread', 10000);
console.log(cart[0]);

import add from './shoppingCart.js';
add('soap');
console.log(cart);
