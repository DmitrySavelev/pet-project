export default class Product {
  static template = document.querySelector('#template_product').content;
  static popup = document.querySelector('.popup');

  constructor(props) {
    this._product = props.product;
    this._container = props.container;
    this._cart = props.cart;
    this._popupInfo = props.popupInfo;
    this._popupImage = props.popupImage;
  }

  _addEventListeners(element) {
    const buttonToCart = element.querySelector('.button-cart');
    const buttonInfo = element.querySelector('.product__button-info');
    const price = element.querySelector('.product__price').textContent;
    const name = element.querySelector('.product__name').textContent;
    const info = this._info;
    const image = this._src;
    const id = this._id;

    buttonToCart.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        this._cart.render(price, name, id);
      }
    });

    buttonInfo.addEventListener('click', () => {
      this._popupInfo.render({ name, price, info, image, id });
    })

    element.addEventListener('click', (e) => {
      if (e.target !== buttonInfo && e.target !== buttonToCart) {
        this._popupImage.render({ name, image, id });
      }
    })
  }

  render(card) {
    const clone = Product.template.cloneNode(true).children[0];
    clone.querySelector('.product__image').src = card.src;
    clone.querySelector('.product__name').textContent = card.name;
    clone.querySelector('.product__price').textContent = `$${card.price}`;
    clone.setAttribute('data-id', card.id);
    // clone.setAttribute('data-id', Number(card.id));
    // console.log(clone);

    this._info = card.info;
    this._src = card.src;
    this._id = card.id;

    this._addEventListeners(clone);

    this._container.append(clone);
  }
}