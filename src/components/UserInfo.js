export default class UserInfo {
  constructor({name, description}) {
    this._userName = document.querySelector(name);
    this._userDescription = document.querySelector(description);
  }

  getUserInfo() {
    this._User = {
      userName: this._userName.textContent,
      userDescription: this._userDescription.textContent
    }
    return this._User;
  }

  setUserInfo(newUserName, newUserDescription) {
    this._userName.textContent = newUserName;
    this._userDescription.textContent = newUserDescription;
  }
}
