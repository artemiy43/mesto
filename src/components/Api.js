export default class Api {                                //класс API для работы с сервером
  constructor({token, contentType}) {
    this._token = token;                                  // токен
    this._contentType = contentType;                      //контент тайп
  }

  getInitialCards() {                                                        //метод для получения карточек
  return fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards', {
    method: 'GET',
    headers: {
      authorization: this._token,
      'Content-Type': this._contentType
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((data) => {
    //console.log(data);
    return Promise.resolve(data);
  });
  }

  addNewCard(name, link) {                                               // метод для добавления новой карточки
    return fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards', {
    method: 'POST',
    headers: {
      authorization: this._token,
      'Content-Type': this._contentType
    },
    body: JSON.stringify({
      name: name,
      link: link
    })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(data => {
      return Promise.resolve(data);
    })
  }

  getUserInfo() {                                                          //метод для получения информации о пользователе
    return fetch('https://nomoreparties.co/v1/cohort-27/users/me', {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': this._contentType
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      return Promise.resolve(data);
    });
  }


  setUserInfo(name, description) {                                           //метод для установки новой информации о пользователе
    return fetch('https://mesto.nomoreparties.co/v1/cohort-27/users/me', {
    method: 'PATCH',
    headers: {
      authorization: this._token,
      'Content-Type': this._contentType
    },
    body: JSON.stringify({
      name: name,
      about: description
    })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(data => {
      return Promise.resolve(data);
    });
  }

  deleteCard(id) {                                                              //метод для удаления карточки
    return fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards/'+id, {
    method: 'DELETE',
    headers: {
      authorization: this._token,
      'Content-Type': this._contentType
    }
    })
    .then((res) => {
      if (res.ok) {
        return res.status;
      }
    return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  putLikeCard(id) {                                                             // метод для постановки лайка карточки
    return fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards/likes/'+id, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': this._contentType
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  deleteLikeCard(id) {                                                          // метод для удаления лайка карточки
    return fetch('https://mesto.nomoreparties.co/v1/cohort-27/cards/likes/'+id, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': this._contentType
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  setNewAvatar(avatar) {                                                          // метод для изменения аватара пользователя
    return fetch('https://mesto.nomoreparties.co/v1/cohort-27/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: this._token,
      'Content-Type': this._contentType
    },
    body: JSON.stringify({
      avatar: avatar
    })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(data => {
      return Promise.resolve(data);
    });
  }
}
