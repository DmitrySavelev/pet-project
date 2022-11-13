export default class Cart {
  static template = document.querySelector('#cart-template').content;
  static totalPrice = document.querySelector('.total-price');
  static container = document.querySelector('.container_foods');

  constructor() {
    this._arr = [];
  }

  getSum(price) {
    const priceByNumber = Number(price.slice(1));
    this._arr.push(priceByNumber);
    let sum = this._arr.reduce(function (sum, elem) {//сократить
      return sum + elem;
    }, 0);
    Cart.totalPrice.textContent = `$${sum}`;
    return price;
  }

  renderCart(price, name) {
    const clone = Cart.template.cloneNode(true).children[0];
    clone.querySelector('.cart__name').textContent = name;
    clone.querySelector('.cart__price').textContent = price;

    this.getSum(price)

    Cart.container.append(clone);
  }
}