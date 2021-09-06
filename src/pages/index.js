import '../pages/index.css';

import Card from '../components/Сard.js';
import { elementsListSelector, elementSelector, config, editButton, addButton, formElementAdd, formElementEdit, nameInput, jobInput, popupAddSelector, popupEditSelector, popupAvatarSelector, nameOutputSelector, jobOutputSelector, popupImageSelector, popupDeleteSelector, formElementAvatar, userAvatar, userAvatarSelector  } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { isLoading } from '../utils/utils.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

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
  userInfo.setUserInfo(res.name, res.about, res.avatar);          // в prodile загружаем нужное имя, описание и аватар
  const id = res._id;                                            //id пользователя
  api.getInitialCards()                                          // вызываем загрузку карточек
  .then(res => {                                                 // если всё ок
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
      popupDeleteCard.open();                               //открывается popupDelete
      popupDeleteCard.setSubmitCallback(()=> {            //меняем колбэк формы отправки popupDelete
        api.deleteCard(item._id)                        //запрос на удаление карточки
        .then(res =>{
          newCard.remove();
          popupDeleteCard.close();
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
          likes.textContent = item.likes.length;     // уменьшаем количество лайков в вёрстке
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

const popupAddCard = new PopupWithForm(                                    // попап Add
  popupAddSelector,                                          // попап селектор
  (element) => {                                        //функция сабмита формы попапа
    const card = {                                      // создаём объект с свойствами карточки
      name: element.name,                              //название
      link: element.description,                       //ссылка
      likes: [],                                        // пустой массив лайков, тк карточка только только будет создана
    };
    isLoading(formElementAdd, true);                   //функция показа загрузки
    api.addNewCard(element.name, element.description)  // запрос на добавление новой карточки
    .then(res => {                                     // если всё ок
      console.log(res);                            //id пользователя
      card._id = res._id;
      const ownerId = res.owner._id;
      const newElement = createCard(card, true, ownerId);   // создаём новую карточку
      cardList.addItemFirst(newElement);                    // добавляем в DOM первым элементом
      popupAddCard.close();                                // закрываем попап
    })
    .catch(err => {
      console.log(err);
    })
    .finally(()=> {
      isLoading(formElementAdd, false);               // убираем показ загрузки
    });
  }
);

const popupImage = new PopupWithImage(popupImageSelector)         // попап Image

const userInfo = new UserInfo({                                          // объект для обработки информации пользователя
  name: nameOutputSelector,                                              // имя
  description: jobOutputSelector,                                        //описание
  avatar: userAvatarSelector                                             //аватар
});

const popupEditProfile = new PopupWithForm(                                    // попап Edit
  popupEditSelector,                                                    // попап селектор
  (element)=>{                                                          // функция сабмита формы
    isLoading(formElementEdit, true);                                   // показ загрузки данных
    api.setUserInfo(element.name, element.description)                  //запрос на изменение информации о пользователе
    .then(res => {                                                      // если всё ок
      console.log(res);
      userInfo.setUserInfo(res.name, res.about, res.avatar);          //меняем информацию в вёрстке
      popupEditProfile.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() =>{
      isLoading(formElementEdit, false);                                //заканчиваем показ загрузки данных
    });
  }
);

const popupAvatar = new PopupWithForm(                                //попап обновления аватара пользователя
  popupAvatarSelector,                                                // попап селектор
  (element) => {                                                      // функция сабмита формы
    isLoading(formElementAvatar, true);                               //загрузка данных
    api.setNewAvatar(element.description)                             //запрос на изменение аватара
    .then(res => {                                                    // если всё ок
      console.log(res);
      userInfo.setUserAvatar(element.description);                    // меняем аватар в вёрстке
      popupAvatar.close();                                              // закрытие попапа
    })
    .catch(err => {
      console.log(err);
    })
    .finally(()=> {
      isLoading(formElementAvatar, false);                            //убираем загрузку данных
    });
  }
);

const popupDeleteCard = new PopupWithConfirm(             //попап удаления карточки
  popupDeleteSelector,                             // попап селектор
);

popupAddCard.setEventListeners();             // вешаем слушатели на попапы
popupEditProfile.setEventListeners();
popupImage.setEventListeners();
popupDeleteCard.setEventListeners();
popupAvatar.setEventListeners();

userAvatar.addEventListener('click', () => {         // при нажатии на аватар
  popupAvatar.open();                                // открываем попап изменения аватара
  validatorPopupAvatar.resetValidation();             // очищаем форму popup avatar
});

editButton.addEventListener('click', () => {   // обработчик события открытия popup edit
  popupEditProfile.open();                            // открываем попап редактирования

  const user = userInfo.getUserInfo();
  nameInput.value = user.userName;
  jobInput.value = user.userDescription;
  validatorPopupEdit.resetValidation();            // очищаем форму popup Edit
});

addButton.addEventListener('click', function() {     // обработчик события открытия popup add
  popupAddCard.open();
  validatorPopupAdd.resetValidation();               // очищаем форму popup Add
});


const validatorPopupEdit = new FormValidator(config, formElementEdit);     // создаём валидатор для формы popup Edit
validatorPopupEdit.enableValidation();                                     // запускаем валидацию формы popup Edit
const validatorPopupAdd = new FormValidator(config, formElementAdd);       // создаём валидатор для формы popup Add
validatorPopupAdd.enableValidation();                                      // запускаем валидацию формы popup Add
const validatorPopupAvatar = new FormValidator(config, formElementAvatar);       // создаём валидатор для формы popup Add
validatorPopupAvatar.enableValidation();                                      // запускаем валидацию формы popup Add
