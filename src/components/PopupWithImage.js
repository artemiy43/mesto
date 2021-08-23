import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(imgDescription, imgSrc, popupSelector) {
    super(popupSelector);
    this._imgSrc = imgSrc;
    this._imgDescription = imgDescription;
    this._fullImage = this._popup.querySelector('.popup__text_image');
  }

  _fullOpenImg() {
    const popupText = this._popup.querySelector('.popup__text_image'); // Надпись в popup Image
    const popupShowImage = this._popup.querySelector('.popup__image'); // картинка в popup Image

    popupShowImage.src = this._imgSrc;
    popupShowImage.alt = this._imgDescription;
    popupText.textContent = this._imgDescription;
  }

  open() {
    this._fullOpenImg();
    super.open();
  }
}
