const showInputError = (formElement, inputElement, errorMessage, config) => {  //функция появляния ошибки при валидации
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);  //находим нужный span
  inputElement.classList.add(config.inputErrorClass);                                  //добавляем инпуту нужный класс
  errorElement.textContent = errorMessage;                                      //в span записываем текст ошибки
  errorElement.classList.add(config.errorClass);                                       //span`у добавляем нужный класс
};

const hideInputError = (formElement, inputElement,config) => { // функция скрытия ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);        // находим нужный span
  inputElement.classList.remove(config.inputErrorClass);                                  //удаляем инпуту нужный класс
  errorElement.classList.remove(config.errorClass);                                       //span`у удаляем нужный класс
  errorElement.textContent = '';                                      //очищаем span от текста ошибки
};

const checkInputValidity = (formElement, inputElement,config) => {    // функция проверки валидность инпута
  if (!inputElement.validity.valid) {                                                        // если инпут невалиден
    showInputError(formElement, inputElement, inputElement.validationMessage,config); // запускаем функцию показа ошибки
  } else {                                                                                   // если валиден
    hideInputError(formElement, inputElement,config);                 // запускаем функцию скрытия ошибки
  }
};

const setEventListeners = (formElement, config) => { // функция добавления слушателей на формы
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));                                       //список всех инпутов формы
  const buttonElement = formElement.querySelector(config.submitButtonSelector);                                           // кнопка формы

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {                                                       // проходимся по каждому инпуту
    inputElement.addEventListener('input', function () {                               // добавляем слушатель 'input'
      checkInputValidity(formElement, inputElement, config);           // проверяем валидность инпута
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement, config);                     // меняем кнопку
    });
  });
};

const enableValidation = (config) => { // основная функция валидации
  const formList = Array.from(document.querySelectorAll(config.formSelector));               // находим список всех форм на страничке
  formList.forEach((formElement) => {                                                        // проходим по этому списку
    formElement.addEventListener('submit', function (evt) {                                  // каждой форме
      evt.preventDefault();                                                                  // отменяем стандартное поведение
    });
    setEventListeners(formElement,config);           // добавляем свои слушатели каждой форме через функцию setEventListeners
  });
};

const hasInvalidInput = (inputList) => {                    // функция нахождения невалидных input
  return inputList.some((inputElement) => {                 // проходимся по списку всех input
    return !inputElement.validity.valid;                    // если находится хотя бы один невалидный возвращаем true
  })
};

const toggleButtonState = (inputList, buttonElement, config) => {  //функция изменения состояния кнопки
  if (hasInvalidInput(inputList)) {                                               // если есть невалидный input
    buttonElement.classList.add(config.inactiveButtonClass);                      // то добавляем кнопки нужный класс
    buttonElement.disabled = true;                                                // и делаем её недоступной
  }
  else{                                                                           // а если все input валидны
    buttonElement.classList.remove(config.inactiveButtonClass);                   // удаляем у кнопки нужный класс
    buttonElement.disabled = false;                                               // и делаем её доступной
  }
};

// включение валидации вызовом enableValidation
// все настройки передаются при вызове
const config ={
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

enableValidation(config);
