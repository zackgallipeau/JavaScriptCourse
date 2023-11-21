//Being exported
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity, cart };

export default function (item) {
  cart.push(item);
}
