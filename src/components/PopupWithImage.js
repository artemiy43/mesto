import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  _fullOpenImg({name, link}) {
    const popupText = this._popup.querySelector('.popup__text_image'); // Надпись в popup Image
    const popupShowImage = this._popup.querySelector('.popup__image'); // картинка в popup Image

    popupShowImage.src = link;
    popupShowImage.alt = name;
    popupText.textContent = name;
  }

  open({name, link}) {
    this._fullOpenImg({name, link});
    super.open();
  }
}
