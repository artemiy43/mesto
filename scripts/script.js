let editButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');


let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__description');

let nameOutput = document.querySelector('.profile__name');
let jobOutput = document.querySelector('.profile__description');

let likeButton = document.querySelector('.element__like');
nameInput.setAttribute("placeholder", nameOutput.textContent);
jobInput.setAttribute("placeholder", jobOutput.textContent);

function showClick() {
  popup.classList.add('popup_opened');
}

function closeClick() {
  popup.classList.remove('popup_opened');
}

function activeClick() {
  if (likeButton.classList.contains('element__like_active') !== true) {
    likeButton.classList.add('element__like_active');
  }
  else
  {
    likeButton.classList.remove('element__like_active');
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  let nameIValue = nameInput.value;
  let jobIValue = jobInput.value;

  nameOutput.textContent = nameIValue;
  jobOutput.textContent = jobIValue;

  nameInput.value = '';
  jobInput.value = '';

  nameInput.setAttribute("placeholder", nameOutput.textContent);
  jobInput.setAttribute("placeholder", jobOutput.textContent);
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', showClick);
closeButton.addEventListener('click', closeClick);
likeButton.addEventListener('click', activeClick);
