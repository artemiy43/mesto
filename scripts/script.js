let editButton = document.querySelector('.edit-button'); //кнопка "редактировать"
let popup = document.querySelector('.popup'); // сам блок popup
let closeButton = popup.querySelector('.popup__close-button'); // кнопка "Закрыть" в блоке popup


let formElement = document.querySelector('.popup__form'); // форма блока popup
let nameInput = formElement.querySelector('.popup__input_type_name'); // первое текстовое поле из формы popup
let jobInput = formElement.querySelector('.popup__input_type_description'); // второе текстовое поле из формы popup

let nameOutput = document.querySelector('.profile__name'); // имя в profile
let jobOutput = document.querySelector('.profile__description'); // описание в profile


function showClick() {                              // функция открытия popup
  popup.classList.add('popup_opened');
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
}

function closeClick() {                            // функция закрытия popup
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {                // функция редактирования имени и информации о себе в profile
  evt.preventDefault();

  nameOutput.textContent = nameInput.value;
  jobOutput.textContent = jobInput.value;

  closeClick();
}

formElement.addEventListener('submit', formSubmitHandler); // обработчик события редактирования profile

editButton.addEventListener('click', showClick);          // обработчик события открытия popup
closeButton.addEventListener('click', closeClick);        // обработчик события закрытия popup
