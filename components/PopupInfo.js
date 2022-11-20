export default class PopupInfo {
  static container = document.querySelector('body');

  constructor(props) {
    this._cart = props.cart;
    this._popup = null;
  }

  _getTemplate = () => {
    const template = `<section class="popup">
    <div class="popup__info-container">
      <img src="./images/Bugatti.jpg" class="popup__info-image">
      <div class="popup__content">
        <h4 class="popup__info-article">Info</h4>
        <span class="popup__info-price">$0</span>
        <p class="popup__info-text">Some text</p>
        <button class="button-cart">add to cart</button>
        <button alt="close" class="popup__button-close"></button>
      </div>
    </div>
  </section>`;
    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstChild;
  }

  _close = () => {
    this._popup.remove();
  }

  _closePopupByEsc = (evt) => {
    if (evt.key === "Escape") {
      this._close();
    }
  };

  _addEventListeners = (price, name, id) => {
    const buttonClosePopup = this._popup.querySelector('.popup__button-close');
    buttonClosePopup.addEventListener('click', this._close);
    document.addEventListener('keydown', this._closePopupByEsc);

    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
        this._close();
      }
    })

    const buttonToCart = this._popup.querySelector('.button-cart');

    buttonToCart.addEventListener('click', () => {
      this._cart.render(price, name, id);
    });
  }

  render(product) {
    const { name = 'Наименование товара', price = 'Цена не определена', info = 'Информация о товаре', image = 'Изображение продукции', id='айдишник'} = product;
    this._popup = this._getTemplate();
    this._popup.querySelector('.popup__info-article').textContent = name;
    this._popup.querySelector('.popup__info-text').textContent = info;
    this._popup.querySelector('.popup__info-price').textContent = price;
    this._popup.querySelector('.popup__info-image').src = image;

    this._addEventListeners(price, name, id);

    PopupInfo.container.append(this._popup);
  }
}