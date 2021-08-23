import Popup from './Popup.js';
export default class PopupWithForm extends Popup{
  constructor(popupSelector, colback) {
    super(popupSelector);
    this._colback = colback;
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', (evt)=> {
      evt.preventDefault();
      this._colback(this._getInputValues());
    });
    super.setEventListeners();
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
