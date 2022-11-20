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






// function check(a, x) {

// };

// check([1, 2, 3], 2);//true
// check([1, 2, 3], 4);//false

// let arr = [1, 2, 3, 4, 5];

// function check(arr, x) {
//   arr.some(function (elem) {
//     if (elem == x) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   });
// }

// console.log(check(arr, 1));

