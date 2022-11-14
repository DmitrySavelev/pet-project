export default class Cart {
  static template = document.querySelector('#template-cart').content;
  static totalPrice = document.querySelector('.cart__total-price');
  static container = document.querySelector('.container_foods');
  static buttonBuy = document.querySelector('.cart__button-buy');

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
  }

  buttonBuyClickHandler() {
    Cart.buttonBuy.addEventListener('click', () => {
      console.log(`Вы сделали покупку на сумму: ${Cart.totalPrice.textContent}`);
      Cart.container.innerHTML = '';
      this._arr = [];
      Cart.totalPrice.textContent = 0;
      Cart.buttonBuy.disabled = true;
    })
  }

  render(price, name) {
    const clone = Cart.template.cloneNode(true).children[0];
    clone.querySelector('.cart__name').textContent = name;
    clone.querySelector('.cart__price').textContent = price;

    this.getSum(price)
    Cart.buttonBuy.disabled = false;

    Cart.container.append(clone);
  }
}