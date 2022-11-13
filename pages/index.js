import Product from "../components/Product.js";
import Cart from "../components/Cart.js";
import cards from "../utils/constants.js";

const productContainer = document.querySelector('.cards');

const cart = new Cart();

cards.forEach(item => {
  const product = new Product({ product: item, container: productContainer, cart});
  product.render(item);
});






// cards.forEach(item => {
//   const product = new Product(cart.renderCart, cart.getSum);
//   // cardsContainer.append(card.render(item));
//   product.render(item);
// });


// const obj = {
//   name: 'Dima',
//   age: 29,
// }
// const eee = new Cart();

// console.log(eee.cons());

