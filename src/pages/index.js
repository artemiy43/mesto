import '../pages/index.css';

import { initialCards, elementsListSelector, elementSelector, config, editButton, addButton, formElementAdd, formElementEdit, nameInput, jobInput, nameInputAdd, jobInputAdd  } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {createCard} from '../utils/utils.js';
import UserInfo from '../components/UserInfo.js';


// const nameOutput = document.querySelector('.profile__name'); // имя в profile
// const jobOutput = document.querySelector('.profile__description'); // описание в profile

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
  '.popup_type_add',
  (evt) => {
    evt.preventDefault();

    const card = {
      name: nameInputAdd.value,
      link: jobInputAdd.value
    };
    const newElement = createCard(card, elementSelector);
    cardList.addItem(newElement);
    popupAddd.close();
  }
);

const UserInfoo = new UserInfo({
  name:'.profile__name',
  description: '.profile__description'
});

const popupEditt = new PopupWithForm(
  '.popup_type_edit',
  (evt)=>{
    evt.preventDefault();

    UserInfoo.setUserInfo(nameInput.value, jobInput.value)
    //nameOutput.textContent = nameInput.value;
    //jobOutput.textContent = jobInput.value;

    popupEditt.close();
  }
);

popupAddd.setEventListeners();
popupEditt.setEventListeners();

editButton.addEventListener('click', () => {   // обработчик события открытия popup edit
  popupEditt.open();

  const user = UserInfoo.getUserInfo();

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
