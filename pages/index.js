import { cards, productContainer } from "../utils/constants.js";
import Product from "../components/Product.js";
import Cart from "../components/Cart.js";
import PopupInfo from "../components/PopupInfo.js";

const cart = new Cart();




cards.forEach(item => {
  const product = new Product({ product: item, container: productContainer, cart });

  product.render(item);
});

cart.buttonBuyClickHandler();

const popupInfo = new PopupInfo();
console.log(popupInfo.render);

popupInfo.render();
