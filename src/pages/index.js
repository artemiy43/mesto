import '../pages/index.css';

import { initialCards, elementsListSelector, elementSelector, config, editButton, addButton, formElementAdd, formElementEdit, nameInput, jobInput, popupAddSelector, popupEditSelector, nameOutputSelector, jobOutputSelector  } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {createCard} from '../utils/utils.js';
import UserInfo from '../components/UserInfo.js';

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = createCard(item, elementSelector);
    cardList.addItem(card);
    },
  },
  elementsListSelector
);

cardList.renderItems();

const popupAddd = new PopupWithForm(
  popupAddSelector,
  (element) => {
    //evt.preventDefault();

    const card = {
      // name: nameInputAdd.value,
      // link: jobInputAdd.value
      name: element.name,
      link: element.description
    };
    const newElement = createCard(card, elementSelector);
    cardList.addItem(newElement);
    popupAddd.close();
  }
);

const infoEdit = new UserInfo({
  name: nameOutputSelector,
  description: jobOutputSelector
});

const popupEditt = new PopupWithForm(
  popupEditSelector,
  (element)=>{
    //evt.preventDefault();

    //infoEdit.setUserInfo(nameInput.value, jobInput.value)
    infoEdit.setUserInfo(element.name, element.description)

    popupEditt.close();
  }
);

popupAddd.setEventListeners();
popupEditt.setEventListeners();

editButton.addEventListener('click', () => {   // обработчик события открытия popup edit
  popupEditt.open();

  const user = infoEdit.getUserInfo();

  nameInput.value = user.userName;
  jobInput.value = user.userDescription;

  validatorPopupEdit.resetValidation();            // очищаем форму popup Edit
});

addButton.addEventListener('click', function() {     // обработчик события открытия popup add
  popupAddd.open();
  validatorPopupAdd.resetValidation();               // очищаем форму popup Add
});


const validatorPopupEdit = new FormValidator(config, formElementEdit);     // создаём валидатор для формы popup Edit
validatorPopupEdit.enableValidation();                                     // запускаем валидацию формы popup Edit
const validatorPopupAdd = new FormValidator(config, formElementAdd);       // создаём валидатор для формы popup Add
validatorPopupAdd.enableValidation();                                      // запускаем валидацию формы popup Add
