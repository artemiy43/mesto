export default class Card {
  constructor({name, link}, handleCardClick, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate(){
    const newElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return newElement;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () =>{
      this._handleLikeClick();
    });

    this._delete.addEventListener('click', () =>{                                // обработчик для кнопки удаления
      this._handleDeleteClick();
    });

    this._image.addEventListener('click', () =>{                                    // обработчик при нажатии на картинку карточки
      this._handleCardClick(this._name, this._link);
    });
  }

  _handleLikeClick() {
    this._like.classList.toggle('element__like_active');
  }

  _handleDeleteClick() {
    this._delete.closest('.element').remove();
  }

  createCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.element__image');
    this._like = this._element.querySelector('.element__like');
    this._delete = this._element.querySelector('.element__delete');
    this._title = this._element.querySelector('.element__title');

    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._setEventListeners();
    return this._element;
  }
}
