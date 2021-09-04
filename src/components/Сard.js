export default class Card {
  constructor({name, link}, handleCardClick, handleDeletePopup, handleLikes, templateSelector, flag, likeArray, id) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeletePopup = handleDeletePopup;
    this._handleLikes = handleLikes;
    this._flag = flag;
    this.isLiked = false;
    this._likesCount = likeArray.length;
    this._likeArray = likeArray;
    this._id = id;
  }
  _getTemplate(){
    const newElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return newElement;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () =>{
      this._handleLikeClick();
      this._handleLikes(this._likes);
    });

    if (this._flag) {
      this._delete.addEventListener('click', () =>{                                // обработчик для кнопки удаления
        this._handleDeletePopup();
        //this._handleDeleteClick();
      });
    }

    this._image.addEventListener('click', () =>{                                    // обработчик при нажатии на картинку карточки
      this._handleCardClick();
    });
  }
  remove() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeClick() {
    this._like.classList.toggle('element__like_active');
  }

  _handleDeleteClick() {
    this._delete.closest('.element').remove();
  }

  createCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.element__image');
    this._like = this._element.querySelector('.element__like');
    this._delete = this._element.querySelector('.element__delete');
    this._title = this._element.querySelector('.element__title');
    this._likes = this._element.querySelector('.element__likes');

    if (!this._flag)
    {
      this._delete.classList.add('element__delete_inactive');
    }

    this._likeArray.forEach(elem =>{
      if (elem._id === this._id){
        this._like.classList.add('element__like_active');
        this.isLiked = true;
      }
    });

    // if(this.isLiked===true)
    // {
    //   this._like.classList.add('element__like_active');
    // }

    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._likes.textContent = this._likesCount;
    this._setEventListeners();
    return this._element;
  }
}
