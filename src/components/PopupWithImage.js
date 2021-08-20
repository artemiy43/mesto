import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(ImgDescription, ImgSrc, popupSelector) {
    super(popupSelector);
    this._ImgSrc = ImgSrc;
    this._ImgDescription = ImgDescription;
    this._fullImage = this._popup.querySelector('.popup__text_image');
  }

  _fullOpenImg() {
    const popupText = this._popup.querySelector('.popup__text_image'); // Надпись в popup Image
    const popupShowImage = this._popup.querySelector('.popup__image'); // картинка в popup Image

    popupShowImage.src = this._ImgSrc;
    popupShowImage.alt = this._ImgDescription;
    popupText.textContent = this._ImgDescription;
  }

  open() {
    this._fullOpenImg();
    super.open();
  }
}
