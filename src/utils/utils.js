import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { popupImageSelector } from './constants.js';
// function clickOverlay (evt) {                                 // функция клика по оверлэю
//   if (evt.target.classList.contains('popup_opened')) {
//     closePopup(evt.target);
//   }
// }

// function pressEscape (evt) {                                 // функция нажатия клавиши Escape
//   const escapeKeyCode = 27;
//   if (evt.keyCode === escapeKeyCode){
//     const popup = document.querySelector('.popup_opened');
//     closePopup(popup);
//   }
// }

// export function openPopup (elemPopup) {                                   // функция открытия popup
//   elemPopup.classList.add('popup_opened');
//   document.addEventListener('click', clickOverlay);                // добавление обработчика клика по оверлэю
//   document.addEventListener('keydown', pressEscape);               // добавление обработчика нажатия Escape
// }

// function closePopup (elemPopup){                                   // функция закрытия popup
//   elemPopup.classList.remove('popup_opened');
//   document.removeEventListener('click', clickOverlay);              // удаление обработчика клика по оверлэю
//   document.removeEventListener('keydown', pressEscape);            // удаление обработчика нажатия Escape
// }

export function createCard (item, selector) {                   // функция создания карточки
  const newCard = new Card(                              // создаём объект класса Card
    item,
    (imageSrc, imageDescription) => {
      const fullSizeImage = new PopupWithImage(imageSrc, imageDescription, popupImageSelector);
      fullSizeImage.open();
      fullSizeImage.setEventListeners();
    },
    selector
  );
  const card = newCard.createCard();                           // вызываем метод создания карточки
  return card;                                                 // возвращает готовую карточку
}

// function handleCardFormSubmit (evt) {                // функция добавления новой карточки
//   evt.preventDefault();

//   const card = {
//     name: nameInputAdd.value,
//     link: jobInputAdd.value
//   };
//   const newElement = createCard(card, elementSelector);
//   formElementAdd.reset();
//   cardList.addItem(newElement);
//   popupAddd.close();
// }

// function handleProfileFormSubmit (evt) {                // функция редактирования имени и информации о себе в profile
//   evt.preventDefault();

//   nameOutput.textContent = nameInput.value;
//   jobOutput.textContent = jobInput.value;

//   closePopup(popupEdit);
// }

// initialCards.forEach(function(currentItem) {                  // рендерим изначальный массив
//   const card = createCard(currentItem.name, currentItem.link, '#element-template');
//   elementsList.append(card);
// });
