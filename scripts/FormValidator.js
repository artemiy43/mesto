export class FormValidator {
  constructor(data, form) {
    this._form = form;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector)); // список инпутов формы
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);  // кнопка формы
  }

  enableValidation() {                            // основной метод класса
    this._setEventListeners();
  }

  _setEventListeners() {                                                                 // метод создания обработчиков на инпуты формы
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _toggleButtonState() {                                                                  //метод изменения состояния кнопки
    if(this._hasInvalidInput()) {                                                        // вызов метода для проверки присутствия хотя бы одного невалидного инпута
      this._buttonElement.classList.add(this._inactiveButtonClass);                      // то добавляем кнопки нужный класс
      this._buttonElement.disabled = true;                                                // и делаем её недоступной
    }
    else{                                                                           // а если все input валидны
      this._buttonElement.classList.remove(this._inactiveButtonClass);                   // удаляем у кнопки нужный класс
      this._buttonElement.disabled = false;                                               // и делаем её доступной
    }
  }

  _hasInvalidInput() {                                                                    //метод для проверки присутствия хотя бы одного невалидного инпута
    return this._inputList.some((inputElement) => {                                       // проходимся по списку всех input
      return !inputElement.validity.valid;
  })}

  _checkInputValidity(inputElement) {                                                           // метод проверки валидности инпута
    if (!inputElement.validity.valid) {                                                        // если инпут невалиден
      this._showInputError(inputElement, inputElement.validationMessage);                       // запускаем функцию показа ошибки
    } else {                                                                                   // если валиден
      this._hideInputError(inputElement);                                                     // запускаем метод скрытия ошибки
    }
  }

  _showInputError(inputElement, errorMessage) {                                       // метод показа ошибки
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);  //находим нужный span
    inputElement.classList.add(this._inputErrorClass);                                  //добавляем инпуту нужный класс
    errorElement.textContent = errorMessage;                                      //в span записываем текст ошибки
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {                                                       // метод скрытия ошибки
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);        // находим нужный span
    inputElement.classList.remove(this._inputErrorClass);                                  //удаляем инпуту нужный класс
    errorElement.classList.remove(this._errorClass);                                       //span`у удаляем нужный класс
    errorElement.textContent = '';
  }
}
