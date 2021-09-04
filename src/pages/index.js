import '../pages/index.css';

import Card from '../components/Сard.js';
import { elementsListSelector, elementSelector, config, editButton, addButton, formElementAdd, formElementEdit, nameInput, jobInput, popupAddSelector, popupEditSelector, popupAvatarSelector, nameOutputSelector, jobOutputSelector, popupImageSelector, popupDeleteSelector, formElementAvatar, userAvatar, userAvatarSelector  } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

function isLoading(form, flag) {                                       //функция для улучшения UX
  const button = form.querySelector('.popup__save-button');            // находим необходимую кнопку на форме
  if (flag===true)                                                     // в зависимости от флага, меняем её текст
    button.textContent = 'Сохранение...';
  else
    button.textContent = 'Сохранено';
}

const api = new Api({                                                //объект класс API
  token: '667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c',                     // токен
  contentType: 'application/json'                                    //тип файлов
});

const cardList = new Section({                                      //Section
  renderer: (item, flag, id) => {
    if (item.owner._id === id)                                      //если id создателя карточки соответствует id пользователя, то в createCard передаём соответствующий флаг
      flag = true;
    else
      flag = false;
    const card = createCard(item, flag, id);
    cardList.addItem(card);
  }
},
elementsListSelector
);

api.getUserInfo()                                                 // вызываем загрузку данных пользователя с сервера
.then((res) => {                                                  // если всё ок
  infoEdit.setUserInfo(res.name, res.about, res.avatar);          // в prodile загружаем нужное имя, описание и аватар
  const id = res._id;                                            //id пользователя
  api.getInitialCards()                                          // вызываем загрузку карточек
  .then(res => {                                                 // если всё ок
    console.log(res);
    const flag = true;                                             // изначальный флаг, который мы передаём в cardList.renderItems
    cardList.renderItems(res, flag, id);                         //в renderItems сразу отдаём массив
  })
  .catch(err => {
    console.log(err);
  });
})
.catch((err)=>{
  console.log(err);
});

function createCard (item, flag, id) {                   // функция создания карточки
  const newCard = new Card(                             // создаём объект класса Card
    item,                                               //передаём объект
    () => {                                             // функция клика по карточке
      popupImage.open(item);                            //открывается popupImage с нужной картинкой
    },
    () => {                                             //функция при нажатии на кнопку удаления карточки
      popupDelete.open();                               //открывается popupDelete
      popupDelete.setNewSubmitColback(()=> {            //меняем колбэк формы отправки popupDelete
        api.deleteCard(item._id)                        //запрос на удаление карточки
        .then(res =>{
          newCard.remove();
        })
        .catch(err => {
          console.log(err);
        });
      });
    },
    (likes) => {                                         // функция при нажатии на лайк карточки
      if (newCard.isLiked===false)                       // если карточка ещё не была лайкнута пользователем
      {
        api.putLikeCard(item._id)                        // запрос на поставку лайка карточке
        .then(res => {                                   // если всё ок
          likes.textContent = item.likes.length + 1;     // прибавляем число лайков в вёрстке
          newCard.isLiked=true;                          // ставим значение, что карточка лайкнута пользователем
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      }
      else                                               // если карточка уже была лайкнута, и мы нажали на кнопку лайка
      {
        api.deleteLikeCard(item._id)                     // запрос на удаление лайка с карточки
        .then(res => {                                   // если всё ок
          likes.textContent = item.likes.length - 1;     // уменьшаем количество лайков в вёрстке
          newCard.isLiked=false;                         // ставим значение, что карточка теперь не лайкнута
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      }
    },
    elementSelector,                                     //template селектор
    flag,                                                //флаг для правильного отображения карточек
    item.likes,                                          // массив лайков карточки
    id                                                   // id пользователя
  );
  return newCard.createCard();                          // возвращает готовую карточку
}

const popupAdd = new PopupWithForm(                                    // попап Add
  popupAddSelector,                                          // попап селектор
  (element) => {                                        //функция сабмита формы попапа
    const card = {                                      // создаём объект с свойствами карточки
      name: element.name,                              //название
      link: element.description,                       //ссылка
      likes: []                                        // пустой массив лайков, тк карточка только только будет создана
    };
    isLoading(formElementAdd, true);                   //функция показа загрузки
    api.addNewCard(element.name, element.description)  // запрос на добавление новой карточки
    .then(res => {                                     // если всё ок
      console.log(res);
      const id = res._id;                              //id пользователя
      const newElement = createCard(card, true, id);   // создаём новую карточку
      cardList.addItem(newElement);                    // добавляем в DOM
      popupAdd.close();                                // закрываем попап
    })
    .catch(err => {
      console.log(err);
    })
    .finally(()=> {
      isLoading(formElementAdd, false);               // убираем показ загрузки
    });
  }
);

export const popupImage = new PopupWithImage(popupImageSelector)         // попап Image

const infoEdit = new UserInfo({                                          // объект для обработки информации пользователя
  name: nameOutputSelector,                                              // имя
  description: jobOutputSelector,                                        //описание
  avatar: userAvatarSelector                                             //аватар
});

const popupEdit = new PopupWithForm(                                    // попап Edit
  popupEditSelector,                                                    // попап селектор
  (element)=>{                                                          // функция сабмита формы
    isLoading(formElementEdit, true);                                   // показ загрузки данных
    api.setUserInfo(element.name, element.description)                  //запрос на изменение информации о пользователе
    .then(res => {                                                      // если всё ок
      console.log(res);
      infoEdit.setUserInfo(res.name, res.about, res.avatar);          //меняем информацию в вёрстке
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() =>{
      isLoading(formElementEdit, false);                                //заканчиваем показ загрузки данных
    });
    popupEdit.close();                                                  //закрываем попап
  }
);

const popupAvatar = new PopupWithForm(                                //попап обновления аватара пользователя
  popupAvatarSelector,                                                // попап селектор
  (element) => {                                                      // функция сабмита формы
    isLoading(formElementAvatar, true);                               //загрузка данных
    api.setNewAvatar(element.description)                             //запрос на изменение аватара
    .then(res => {                                                    // если всё ок
      console.log(res);
      infoEdit.setUserAvatar(element.description);                    // меняем аватар в вёрстке
    })
    .catch(err => {
      console.log(err);
    })
    .finally(()=> {
      isLoading(formElementAvatar, false);                            //убираем загрузку данных
    });
    popupAvatar.close();                                              // закрытие попапа
  }
);

const popupDelete = new PopupWithForm(             //попап удаления карточки
  popupDeleteSelector,                             // попап селектор
  () => {                                          // функция сабмита формы, основную функцию сабмита формы удаления мы ставим в функции createCard при создании карточки
    popupDelete.close();
  }
);

popupAdd.setEventListeners();             // вешаем слушатели на попапы
popupEdit.setEventListeners();
popupImage.setEventListeners();
popupDelete.setEventListeners();
popupAvatar.setEventListeners();

userAvatar.addEventListener('click', () => {         // при нажатии на аватар
  popupAvatar.open();                                // открываем попап изменения аватара
  validatorPopupAvatar.resetValidation();             // очищаем форму popup avatar
});

editButton.addEventListener('click', () => {   // обработчик события открытия popup edit
  popupEdit.open();                            // открываем попап редактирования

  api.getUserInfo()                            // запрос на получение информации о пользователе, это нужно чтобы вставить данные в input'ы при открытии попапа
  .then((res) => {
    nameInput.value = res.name;
    jobInput.value = res.about;
  })
  .catch((err)=>{
    console.log(err);
  });
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
const validatorPopupAvatar = new FormValidator(config, formElementAvatar);       // создаём валидатор для формы popup Add
validatorPopupAvatar.enableValidation();                                      // запускаем валидацию формы popup Add
