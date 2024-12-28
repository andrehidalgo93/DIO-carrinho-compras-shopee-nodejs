import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Teclado", 159.00, 1);

const item2 = await createItem("Mouse", 79.99, 4);

const item3 = await createItem("Headphone", 299.00, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.addItem(myWhishList, item2);

await cartService.removeItem(myCart, item2);

await cartService.deleteItem(myCart, item3.name);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);