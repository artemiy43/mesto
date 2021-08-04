export const popupImage = document.querySelector('.popup_type_image'); //popup image
const popupText = popupImage.querySelector('.popup__text_image'); // Надпись в popup Image
const popupShowImage = popupImage.querySelector('.popup__image'); // картинка в popup Image
import {openPopup} from './index.js';
export class Card {
  constructor(name, link, template_selector) {
    this._name = name;
    this._link = link;
    this._template_selector = template_selector;
  }
  _getTemplate(){
    const newElement = document.querySelector(this._template_selector).content.querySelector('.element').cloneNode(true);
    return newElement;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () =>{
      this._handleLikeClick();
    });

    this._element.querySelector('.element__delete').addEventListener('click', () =>{                                // обработчик для кнопки удаления
      this._handleDeleteClick();
    });

    this._element.querySelector('.element__image').addEventListener('click', () =>{                                    // обработчик при нажатии на картинку карточки
      this._handleImageClick();
    });
  }

  _handleLikeClick() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _handleDeleteClick() {
    this._element.querySelector('.element__delete').closest('.element').remove();
  }

  _handleImageClick() {
    popupText.textContent = this._name;
     popupShowImage.src = this._link;
     popupShowImage.alt = this._name;
     openPopup(popupImage);
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;

    return this._element;
  }
}
