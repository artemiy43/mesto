import '../pages/index.css';

import Card from '../components/Сard.js';
import { initialCards, elementsListSelector, elementSelector, config, editButton, addButton, formElementAdd, formElementEdit, nameInput, jobInput, popupAddSelector, popupEditSelector, nameOutputSelector, jobOutputSelector, popupImageSelector  } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

function createCard ({ name, link}) {                   // функция создания карточки
  const newCard = new Card(                             // создаём объект класса Card
    { name, link},
    () => {
      popupImage.open({ name, link});
    },
    elementSelector
  );
  return newCard.createCard();                          // возвращает готовую карточку
}

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card);
    }
  },
  elementsListSelector
);

cardList.renderItems();

const popupAdd = new PopupWithForm(                                    // попап Add
  popupAddSelector,
  (element) => {

    const card = {
      name: element.name,
      link: element.description
    };
    const newElement = createCard(card, elementSelector);
    cardList.addItem(newElement);
    popupAdd.close();
  }
);

export const popupImage = new PopupWithImage(popupImageSelector)         // попап Image

const infoEdit = new UserInfo({                                          // объект для обработки информации пользователя
  name: nameOutputSelector,
  description: jobOutputSelector
});

const popupEdit = new PopupWithForm(                                    // попап Edit
  popupEditSelector,
  (element)=>{
    infoEdit.setUserInfo(element.name, element.description);

    popupEdit.close();
  }
);

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupImage.setEventListeners();

editButton.addEventListener('click', () => {   // обработчик события открытия popup edit
  popupEdit.open();

  const user = infoEdit.getUserInfo();

  nameInput.value = user.userName;
  jobInput.value = user.userDescription;

  validatorPopupEdit.resetValidation();            // очищаем форму popup Edit
});

addButton.addEventListener('click', function() {     // обработчик события открытия popup add
  popupAdd.open();
  validatorPopupAdd.resetValidation();               // очищаем форму popup Add
});


const validatorPopupEdit = new FormValidator(config, formElementEdit);     // создаём валидатор для формы popup Edit
validatorPopupEdit.enableValidation();                                     // запускаем валидацию формы popup Edit
const validatorPopupAdd = new FormValidator(config, formElementAdd);       // создаём валидатор для формы popup Add
validatorPopupAdd.enableValidation();                                      // запускаем валидацию формы popup Add
