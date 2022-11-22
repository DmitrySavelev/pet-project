import { cards, productContainer } from "../utils/constants.js";
import Product from "../components/Product.js";
import Cart from "../components/Cart.js";
import PopupInfo from "../components/PopupInfo.js";
import PopupImage from "../components/PopupImage.js";

const cart = new Cart();
const popupInfo = new PopupInfo({ cart });
const popupImage = new PopupImage();


cards.forEach(item => {
  const product = new Product({ product: item, container: productContainer, cart, popupInfo, popupImage });
  product.render(item);
});

cart.buttonBuyClickHandler();







