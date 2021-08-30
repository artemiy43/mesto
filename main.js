!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r,i,u,a){var c=e.name,s=e.link;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=c,this._link=s,this._templateSelector=i,this._handleCardClick=n,this._handleDeletePopup=o,this._handleLikes=r,this._flag=u,this.isLiked=!1,this._likesCount=a}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){!1===e.isLiked?e.isLiked=!0:e.isLiked=!1,e._handleLikeClick(),e._handleLikes(e._likes,e.isLiked)})),this._flag&&this._delete.addEventListener("click",(function(){e._handleDeletePopup()})),this._image.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"remove",value:function(){this._element.remove(),this._element=null}},{key:"_handleLikeClick",value:function(){this._like.classList.toggle("element__like_active")}},{key:"_handleDeleteClick",value:function(){this._delete.closest(".element").remove()}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._like=this._element.querySelector(".element__like"),this._delete=this._element.querySelector(".element__delete"),this._title=this._element.querySelector(".element__title"),this._likes=this._element.querySelector(".element__likes"),this._flag||this._delete.classList.add("element__delete_inactive"),this._title.textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._likes.textContent=this._likesCount,this._setEventListeners(),this._element}}])&&e(n.prototype,o),t}(),n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},o=(document.querySelector(".elements"),"#element-template"),r=document.querySelector(".edit-button"),i=document.querySelector(".add-button"),u=document.querySelector(".popup_type_edit"),a=document.querySelector(".popup_type_add"),c=document.querySelector(".popup_type_delete"),s=u.querySelector(".popup__form"),l=u.querySelector(".popup__input_type_name"),f=u.querySelector(".popup__input_type_description"),p=a.querySelector(".popup__form");function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}c.querySelector(".popup__form");var _=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&h(t.prototype,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t,n){var o=this;e.forEach((function(e){return o._renderer(e,t,n)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&d(t.prototype,n),e}();function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),v(this,"_handleEscClose",(function(e){27===e.keyCode&&n.close()})),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;document.addEventListener("click",this._handleOverlayClose),this._closeButton.addEventListener("click",(function(){e.close()}))}}])&&m(t.prototype,n),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._colback=t,n._formElement=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._colback(e._getInputValues())})),E(w(u.prototype),"setEventListeners",this).call(this)}},{key:"setNewSubmitColback",value:function(e){var t=this;this._formElement.removeEventListener("submit",(function(e){e.preventDefault(),t._colback(t._getInputValues())})),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}},{key:"close",value:function(){E(w(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._formFields=this._popup.querySelectorAll(".popup__input"),this._formFields.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}}])&&g(t.prototype,n),u}(b);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t,n){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(o);if(r){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"_fullOpenImg",value:function(e){var t=e.name,n=e.link,o=this._popup.querySelector(".popup__text_image"),r=this._popup.querySelector(".popup__image");r.src=n,r.alt=t,o.textContent=t}},{key:"open",value:function(e){var t=e.name,n=e.link;this._fullOpenImg({name:t,link:n}),P(T(u.prototype),"open",this).call(this)}}])&&O(t.prototype,n),u}(b);function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var D=function(){function e(t){var n=t.name,o=t.description;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userDescription=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._user={userName:this._userName.textContent,userDescription:this._userDescription.textContent},this._user}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userDescription.textContent=t}}])&&R(t.prototype,n),e}();function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var V=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards",{method:"GET",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return Promise.resolve(e)}))}},{key:"addNewCard",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards",{method:"POST",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.status:Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("https://nomoreparties.co/v1/cohort-27/users/me",{method:"GET",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return Promise.resolve(e)}))}},{key:"setUserInfo",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/users/me",{method:"PATCH",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.status:Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards/"+e,{method:"DELETE",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"}}).then((function(e){return e.ok?e.status:Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"putLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards/likes/"+e,{method:"PUT",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards/likes/"+e,{method:"DELETE",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&x(t.prototype,n),e}()),N=new y({renderer:function(e,t,n){var o=U(e,e.owner._id===n);N.addItem(o)}},".elements");function U(e,n){var r=new t(e,(function(){A.open(e)}),(function(){J.open(),J.setNewSubmitColback((function(){V.deleteCard(e._id).then((function(e){r.remove()})).catch((function(e){console.log(e)}))}))}),(function(e,t){}),o,n,e.likes.length);return r.createCard()}V.getUserInfo().then((function(e){F.setUserInfo(e.name,e.about);var t=e._id;V.getInitialCards().then((function(e){console.log(e),N.renderItems(e,!0,t)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));var z=new L(".popup_type_add",(function(e){var t=U({name:e.name,link:e.description},o);V.addNewCard(e.name,e.description).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),N.addItem(t),z.close()})),A=new B(".popup_type_image"),F=new D({name:".profile__name",description:".profile__description"}),G=new L(".popup_type_edit",(function(e){F.setUserInfo(e.name,e.description),V.setUserInfo(e.name,e.description).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),G.close()})),J=new L(".popup_type_delete",(function(){J.close()}));z.setEventListeners(),G.setEventListeners(),A.setEventListeners(),J.setEventListeners(),r.addEventListener("click",(function(){G.open(),V.getUserInfo().then((function(e){l.value=e.name,f.value=e.about})).catch((function(e){console.log(e)})),H.resetValidation()})),i.addEventListener("click",(function(){z.open(),M.resetValidation()}));var H=new _(n,s);H.enableValidation();var M=new _(n,p);M.enableValidation()}();