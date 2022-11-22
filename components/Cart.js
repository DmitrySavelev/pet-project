export default class Cart {
  static template = document.querySelector('#template-cart').content;
  static totalPrice = document.querySelector('.cart__total-price');
  static container = document.querySelector('.container_foods');
  static buttonBuy = document.querySelector('.cart__button-buy');
  static buttonDelete = document.querySelector('.cart__delete');

  constructor() {
    this._obj = {};// объект с информацией о товарах для заполнения корзины
    this._arr = [];// массив с ценами для расчета общей стоимости покупки
  }

  _getTotalCost() {
    this._arr = [];
    for (let key in this._obj) {
      this._arr.push(this._obj[key]['price'] * this._obj[key]['count']);
    }
    let sum = this._arr.reduce((sum, elem) => sum + elem, 0);

    Cart.totalPrice.textContent = `${sum}`;
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
        'price': price.slice(1),
        'count': 1,
      }
    } else {
      this._plusFunction(id);
    }
  }

  _plusFunction = id => {
    this._obj[id]['count']++;
  }

  _minusFunction = id => {
    if (this._obj[id]['count'] - 1 == 0) {
      deleteFunction(id);
      return true;
    }
    this._obj[id]['count']--;
    render();
  }

  _deleteCartFood(elem, key) {
    delete this._obj[key];
    elem.remove();
    this._getTotalCost();
  }

  _addEventListeners(price, name, id, clone, key) {
    const cartMinus = clone.querySelector('.cart__minus');
    const cartPlus = clone.querySelector('.cart__plus');
    const foodInCartDelete = clone.querySelector('.cart__delete');

    foodInCartDelete.addEventListener('click', () => {
      this._deleteCartFood(clone, key);
    });

    cartPlus.addEventListener('click', () => {
      const cartFood = cartPlus.closest('.cart__food');
      this.render(price, name, cartFood.dataset.id);
    }
    )

    cartMinus.addEventListener('click', () => {
      console.log('work');
      // this._deleteCartFood(clone, key);
    }
    )
  }

  render(price, name, id) {
    Cart.container.innerHTML = '';
    Cart.buttonBuy.disabled = false;
    this._addToObj(name, price, id);

    for (let key in this._obj) {
      const clone = Cart.template.cloneNode(true).children[0];
      clone.querySelector('.cart__name').textContent = this._obj[key].name;
      clone.querySelector('.cart__price').textContent = `$${this._obj[key].price}`;
      clone.querySelector('.cart__count').textContent = this._obj[key].count;
      clone.setAttribute('data-id', key);

      this._addEventListeners(price, name, id, clone, key);
      this._getTotalCost();
      Cart.container.append(clone);

    }
  }
}

