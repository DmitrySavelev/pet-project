export default class PopupImage {
  static container = document.querySelector('body');

  constructor() {
  }
 
  _getTemplate = () => {
    const template = `<section class="popup">
    <figure class="popup__image-container">
      <button aria-label="закрыть изображение" class="popup__button-close"></button>
      <img src="#" class="popup__info-image">
      <figcaption class="popup__caption">Тест</figcaption>
    </figure>
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

  _addEventListeners = () => {
    const buttonClosePopup = this._popup.querySelector('.popup__button-close');
    buttonClosePopup.addEventListener('click', this._close);
    document.addEventListener('keydown', this._closePopupByEsc);

    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
        this._close();
      }
    })

  }

  render(product) {
    const { name = 'Наименование товара', image = 'Изображение продукции', id = 'айдишник' } = product;
    this._popup = this._getTemplate();
    this._popup.querySelector('.popup__caption').textContent = name;
    this._popup.querySelector('.popup__info-image').src = image;

    this._addEventListeners(name, id);

    PopupImage.container.append(this._popup);
  }
}