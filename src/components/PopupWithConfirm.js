import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setSubmitCallback(newColback) {
    this._formElement.addEventListener('submit', (evt)=> {
      evt.preventDefault();
      newColback();
    });
  }
}
