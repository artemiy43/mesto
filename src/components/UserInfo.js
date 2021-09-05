export default class UserInfo {
  constructor({name, description, avatar}) {
    this._userName = document.querySelector(name);
    this._userDescription = document.querySelector(description);
    this._userAvatar = document.querySelector(avatar);
  }

  getUserInfo() {                                          //метод для сбора информации о пользователе
    this._user = {
      userName: this._userName.textContent,
      userDescription: this._userDescription.textContent
    }
    return this._user;
  }

  setUserInfo(newUserName, newUserDescription, newAvatar) {  // метод для установки новой информации о пользователе в вёрстку
    if (newUserName && newUserDescription && newAvatar) {
      this._userName.textContent = newUserName;
      this._userDescription.textContent = newUserDescription;
      this._userAvatar.src = newAvatar;
    }
  }

  setUserAvatar(newAvatar) {                              // метод изменения аватара пользователя
    if (newAvatar)
      this._userAvatar.src = newAvatar;
  }
}
