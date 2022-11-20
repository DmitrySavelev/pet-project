export default class Cart {
  static template = document.querySelector('#template-cart').content;
  static totalPrice = document.querySelector('.cart__total-price');
  static container = document.querySelector('.container_foods');
  static buttonBuy = document.querySelector('.cart__button-buy');

  constructor() {
    this._obj = {};
    this._arr = [];
  }

  _getTotalCost(price) {
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
      this._obj = {};
    })
  }

  _addToObj(name, price, id) {
    if (!this._obj[id]) {
      this._obj[id] = {
        'name': name,
        'price': price,
        'count': 1,
      }
    } else {
      this._obj[id]['count']++;
    }
  }

  render(price, name, id) {
    Cart.container.innerHTML = '';
    Cart.buttonBuy.disabled = false;
    this._addToObj(name, price, id);
    this._getTotalCost(price)

    for (let key in this._obj) {
      const clone = Cart.template.cloneNode(true).children[0];
      clone.querySelector('.cart__name').textContent = `${this._obj[key].name}`;
      clone.querySelector('.cart__price').textContent = `${this._obj[key].price}`;
      clone.querySelector('.cart__count').textContent = `${this._obj[key].count}`;
      Cart.container.append(clone);
    }
    console.log(this._obj);
    console.log(this._obj);
  }
}

