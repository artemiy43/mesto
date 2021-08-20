import Popup from './Popup.js';
export default class PopupWithForm extends Popup{
  constructor(popupSelector, colback) {
    super(popupSelector);
    this._colback = colback;
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', this._colback.bind(this));
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  _getInputValues() {
    this._formValues = {};
    this._formFields = this._popup.querySelectorAll('.popup__input');
    this._formFields.forEach( input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
}
