export default class PopupInfo {
  static container = document.querySelector('body');

  constructor() {
    this._popup = null;
  }

  _getTemplate = () => {
    const template = `<section class="popup">
    <div class="popup__container">
      <h4 class="popup__info-article">Info</h4>
      <span class="popup__info-price">$0</span>
      <p class="popup__info-text">some text</p>
      <button class="button-cart">add to cart</button>
      <button alt="close" class="popup__button-close"></button>
    </div>
  </section>`;

    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstChild;
  }

  _close = () => {
    this._popup.remove();
  }

  render() {
    // const { name = 'Product name', price = '200', info = 'lorem' } = product;
    this._popup = this._getTemplate();
    // this._popup.querySelector('.info_article').textContent = name;
    // this._popup.querySelector('.info_text').textContent = info;
    // this._popup.querySelector('.info-price').textContent = `$${price}`;

    // const buttonClosePopup = document.querySelector('.popup__button-close');
    // buttonClosePopup.addEventListener('click', this._close);

    PopupInfo.container.append(this._popup);
  }
}