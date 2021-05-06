const editButton = document.querySelector('.edit-button'); //кнопка "редактировать"
const addButton = document.querySelector('.add-button'); // кнопка "добавить"
const popupEdit = document.querySelector('.popup_type_edit'); // popup edit
const popupAdd = document.querySelector('.popup_type_add'); // popup add
const popupImage = document.querySelector('.popup_type_image'); //popup image
const closeButtonEdit = popupEdit.querySelector('.popup__close-button'); // кнопка "Закрыть" в блоке popup edit
const closeButtonAdd = popupAdd.querySelector('.popup__close-button'); // кнопка "Закрыть" в блоке popup add
const closeButtonImage = popupImage.querySelector('.popup__close-button'); // кнопка "Закрыть" в блоке popup image

const formElementEdit = popupEdit.querySelector('.popup__form'); // форма блока popup edit
const nameInput = popupEdit.querySelector('.popup__input_type_name'); // первое текстовое поле из формы popup edit
const jobInput = popupEdit.querySelector('.popup__input_type_description'); // второе текстовое поле из формы popup edit

const formElementAdd = popupAdd.querySelector('.popup__form'); // форма блока popup add
const nameInputAdd = popupAdd.querySelector('.popup__input_type_name'); // первое текстовое поле из формы popup add
const jobInputAdd = popupAdd.querySelector('.popup__input_type_description'); // второе текстовое поле из формы popup add

const popupText = popupImage.querySelector('.popup__text_image'); // Надпись в popup Image
const popupShowImage = popupImage.querySelector('.popup__image'); // картинка в popup Image

const nameOutput = document.querySelector('.profile__name'); // имя в profile
const jobOutput = document.querySelector('.profile__description'); // описание в profile

const elementsList = document.querySelector('.elements'); // контейнер элементов
const templateElement = document.querySelector('#element-template'); // темплейт-элемент

const initialCards = [                                                                     // изначальный массив карточек
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

function getCard(currentItem) {                                                          // функция создания карточки
  const newElement = templateElement.content.querySelector('.element').cloneNode(true);  //клонируем темплейт

  const elementImage = newElement.querySelector('.element__image');                          // находим в темплейт картинку
  const elementTitle = newElement.querySelector('.element__title');                        // находим в темплейт надпись

  const likeButton = newElement.querySelector('.element__like');                           // находим в темплейт кнопку лайка
  likeButton.addEventListener('click', function(){likeButton.classList.toggle('element__like_active')}); // обработчик для лайка

  const deleteButton = newElement.querySelector('.element__delete');                // кнопка удаления карточки
  deleteButton.addEventListener('click', function(){                                // обработчик для кнопки удаления
    deleteButton.closest('.element').remove();
  });

  elementImage.addEventListener('click', function(){                                    // обработчик при нажатии на картинку карточки
    popupText.textContent = currentItem.name;
    popupShowImage.src = currentItem.link;
    toggleModal(popupImage);
  })

  elementTitle.textContent = currentItem.name;
  elementImage.src = currentItem.link;
  elementImage.alt = currentItem.name;

  return newElement;
}


initialCards.forEach(function(currentItem) {     // рендерим изначальный массив
  const newCard = getCard(currentItem);
  elementsList.append(newCard);
});

function toggleModal(elemPopup) {              // функция закрытия/открытия попапа
  elemPopup.classList.toggle('popup_opened');
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
}

function handleProfileFormSubmit (evt) {                // функция редактирования имени и информации о себе в profile
  evt.preventDefault();

  nameOutput.textContent = nameInput.value;
  jobOutput.textContent = jobInput.value;

  toggleModal(popupEdit);
}

function handleCardFormSubmit (evt) {                // функция редактирования имени и информации о себе в profile
  evt.preventDefault();

  const card = {
    name: nameInputAdd.value,
    link: jobInputAdd.value
  };
  const newElement = getCard(card);
  formElementAdd.reset();
  elementsList.prepend(newElement);
  toggleModal(popupAdd);
}

formElementEdit.addEventListener('submit', handleProfileFormSubmit); // обработчик события редактирования profile

formElementAdd.addEventListener('submit', handleCardFormSubmit); // обработчик события редактирования profile

editButton.addEventListener('click', function(){toggleModal(popupEdit)});          // обработчик события открытия popup edit
addButton.addEventListener('click', function(){toggleModal(popupAdd)});           // обработчик события открытия popup add
closeButtonEdit.addEventListener('click', function(){toggleModal(popupEdit)});        // обработчик события закрытия popup edit
closeButtonAdd.addEventListener('click', function(){toggleModal(popupAdd)});           // обработчик события закрытия popup add
closeButtonImage.addEventListener('click', function(){toggleModal(popupImage)});         // обработчик события закрытия popup image
