export const initialCards = [                                                                     // изначальный массив карточек
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const config ={                                                                   // объект с селекторами и классами элементов формы
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const elementsList = document.querySelector('.elements'); // контейнер элементов
export const elementsListSelector = '.elements';
export const elementSelector = '#element-template';
// const templateElement = document.querySelector('#element-template'); // темплейт-элемент
export const editButton = document.querySelector('.edit-button'); //кнопка "редактировать"
export const addButton = document.querySelector('.add-button'); // кнопка "добавить"
export const popupEdit = document.querySelector('.popup_type_edit'); // popup edit
export const popupAdd = document.querySelector('.popup_type_add'); // popup add

export const popupEditSelector = '.popup_type_edit'; // popup edit selector
export const popupAddSelector = '.popup_type_add'; // popup add selector
export const popupImageSelector = '.popup_type_image'; //popup image selector

export const formElementEdit = popupEdit.querySelector('.popup__form'); // форма блока popup edit
export const nameInput = popupEdit.querySelector('.popup__input_type_name'); // первое текстовое поле из формы popup edit
export const jobInput = popupEdit.querySelector('.popup__input_type_description'); // второе текстовое поле из формы popup edit

export const formElementAdd = popupAdd.querySelector('.popup__form'); // форма блока popup add
//export const nameInputAdd = popupAdd.querySelector('.popup__input_type_name'); // первое текстовое поле из формы popup add
//export const jobInputAdd = popupAdd.querySelector('.popup__input_type_description'); // второе текстовое поле из формы popup add


export const nameOutputSelector = '.profile__name'; // имя в profile selector
export const jobOutputSelector = '.profile__description'; // описание в profile selector

//export const popupImage = document.querySelector('.popup_type_image'); //popup image
//export const popupText = popupImage.querySelector('.popup__text_image'); // Надпись в popup Image
//export const popupShowImage = popupImage.querySelector('.popup__image'); // картинка в popup Image
