export default class Product {
  static template = document.querySelector('#template_card').content;

  constructor(props) {
    this._product = props.product;
    this._container = props.container;
    this._cart = props.cart;
  }

  _addEventListeners(element) {
    const button = element.querySelector('.button__cart');
    const price = element.querySelector('.price').textContent;
    const name = element.querySelector('.card__name').textContent;

    button.addEventListener('click', () => {
      this._cart.render(price, name);
    });
  }
 
  render(card) {
    const clone = Product.template.cloneNode(true).children[0];
    clone.querySelector('.image').src = card.src;
    clone.querySelector('.card__name').textContent = card.name;
    clone.querySelector('.price').textContent = `$${card.price}`;
    this._addEventListeners(clone);

    this._container.append(clone);
  }

}