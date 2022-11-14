export default class Product {
  static template = document.querySelector('#template_product').content;
  static popup = document.querySelector('.popup');

  constructor(props) {
    this._product = props.product;
    this._container = props.container;
    this._cart = props.cart;
  }

  _addEventListeners(element) {
    const buttonBuy = element.querySelector('.button-cart');
    const buttonInfo = element.querySelector('.product__button-info');
    const price = element.querySelector('.product__price').textContent;
    const name = element.querySelector('.product__name').textContent;

    buttonBuy.addEventListener('click', () => {
      this._cart.render(price, name);
    });

      // buttonInfo.addEventListener('click', () => {
      //   Product.popup.classList.add('popup_opened');
      // })

  }

  render(card) {
    const clone = Product.template.cloneNode(true).children[0];
    clone.querySelector('.product__image').src = card.src;
    clone.querySelector('.product__name').textContent = card.name;
    clone.querySelector('.product__price').textContent = `$${card.price}`;
    this._addEventListeners(clone);

    this._container.append(clone);
  }

}