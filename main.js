!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r,i,s,u,c){var a=e.name,l=e.link;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=a,this._link=l,this._templateSelector=i,this._handleCardClick=n,this._handleDeletePopup=o,this._handleLikes=r,this._flag=s,this.isLiked=!1,this._likesCount=u.length,this._likeArray=u,this._id=c}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleLikeClick(),e._handleLikes(e._likes)})),this._flag&&this._delete.addEventListener("click",(function(){e._handleDeletePopup()})),this._image.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"remove",value:function(){this._element.remove(),this._element=null}},{key:"_handleLikeClick",value:function(){this._like.classList.toggle("element__like_active")}},{key:"_handleDeleteClick",value:function(){this._delete.closest(".element").remove()}},{key:"createCard",value:function(){var e=this;return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._like=this._element.querySelector(".element__like"),this._delete=this._element.querySelector(".element__delete"),this._title=this._element.querySelector(".element__title"),this._likes=this._element.querySelector(".element__likes"),this._flag||this._delete.classList.add("element__delete_inactive"),this._likeArray.forEach((function(t){t._id===e._id&&(e._like.classList.add("element__like_active"),e.isLiked=!0)})),this._title.textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._likes.textContent=this._likesCount,this._setEventListeners(),this._element}}])&&e(n.prototype,o),t}(),n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},o=(document.querySelector(".elements"),document.querySelector(".profile__avatar")),r=document.querySelector(".edit-button"),i=document.querySelector(".add-button"),s=document.querySelector(".popup_type_edit"),u=document.querySelector(".popup_type_add"),c=document.querySelector(".popup_type_delete"),a=document.querySelector(".popup_type_avatar"),l=s.querySelector(".popup__form"),f=s.querySelector(".popup__input_type_name"),p=s.querySelector(".popup__input_type_description"),h=u.querySelector(".popup__form"),_=a.querySelector(".popup__form");function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}c.querySelector(".popup__form");var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&d(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var m=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t,n){var o=this;e.forEach((function(e){return o._renderer(e,t,n)}))}},{key:"addItem",value:function(e){this._container.append(e)}}])&&v(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),k(this,"_handleEscClose",(function(e){27===e.keyCode&&n.close()})),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;document.addEventListener("click",this._handleOverlayClose),this._closeButton.addEventListener("click",(function(){e.close()}))}}])&&b(t.prototype,n),e}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(s,e);var t,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(r){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,e))._colback=t,n._formElement=n._popup.querySelector(".popup__form"),n}return t=s,(n=[{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._colback(e._getInputValues())})),S(O(s.prototype),"setEventListeners",this).call(this)}},{key:"setNewSubmitColback",value:function(e){var t=this;this._formElement.removeEventListener("submit",(function(e){e.preventDefault(),t._colback(t._getInputValues())})),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}},{key:"close",value:function(){S(O(s.prototype),"close",this).call(this),this._formElement.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._formFields=this._popup.querySelectorAll(".popup__input"),this._formFields.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}}])&&C(t.prototype,n),s}(g);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function q(e,t,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(s,e);var t,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(o);if(r){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function s(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,e)}return t=s,(n=[{key:"_fullOpenImg",value:function(e){var t=e.name,n=e.link,o=this._popup.querySelector(".popup__text_image"),r=this._popup.querySelector(".popup__image");r.src=n,r.alt=t,o.textContent=t}},{key:"open",value:function(e){var t=e.name,n=e.link;this._fullOpenImg({name:t,link:n}),q(R(s.prototype),"open",this).call(this)}}])&&T(t.prototype,n),s}(g);function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var V=function(){function e(t){var n=t.name,o=t.description,r=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userDescription=document.querySelector(o),this._userAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._user={userName:this._userName.textContent,userDescription:this._userDescription.textContent},this._user}},{key:"setUserInfo",value:function(e,t,n){this._userName.textContent=e,this._userDescription.textContent=t,this._userAvatar.src=n}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&D(t.prototype,n),e}();function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t){e.querySelector(".popup__save-button").textContent=!0===t?"Сохранение...":"Сохранено"}var U=new(function(){function e(t){var n=t.token,o=t.contentType;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._token=n,this._contentType=o}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards",{method:"GET",headers:{authorization:this._token,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return Promise.resolve(e)}))}},{key:"addNewCard",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards",{method:"POST",headers:{authorization:this._token,"Content-Type":this._contentType},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return Promise.resolve(e)}))}},{key:"getUserInfo",value:function(){return fetch("https://nomoreparties.co/v1/cohort-27/users/me",{method:"GET",headers:{authorization:this._token,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return Promise.resolve(e)}))}},{key:"setUserInfo",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/users/me",{method:"PATCH",headers:{authorization:this._token,"Content-Type":this._contentType},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return Promise.resolve(e)}))}},{key:"deleteCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards/"+e,{method:"DELETE",headers:{authorization:this._token,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.status:Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"putLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards/likes/"+e,{method:"PUT",headers:{authorization:this._token,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLikeCard",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards/likes/"+e,{method:"DELETE",headers:{authorization:this._token,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setNewAvatar",value:function(e){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/users/me/avatar",{method:"PATCH",headers:{authorization:this._token,"Content-Type":this._contentType},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return Promise.resolve(e)}))}}])&&A(t.prototype,n),e}())({token:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c",contentType:"application/json"}),z=new m({renderer:function(e,t,n){var o=J(e,e.owner._id===n,n);z.addItem(o)}},".elements");function J(e,n,o){var r=new t(e,(function(){G.open(e)}),(function(){Q.open(),Q.setNewSubmitColback((function(){U.deleteCard(e._id).then((function(e){r.remove()})).catch((function(e){console.log(e)}))}))}),(function(t){!1===r.isLiked?U.putLikeCard(e._id).then((function(n){t.textContent=e.likes.length+1,r.isLiked=!0,console.log(n)})).catch((function(e){console.log(e)})):U.deleteLikeCard(e._id).then((function(n){t.textContent=e.likes.length-1,r.isLiked=!1,console.log(n)})).catch((function(e){console.log(e)}))}),"#element-template",n,e.likes,o);return r.createCard()}U.getUserInfo().then((function(e){H.setUserInfo(e.name,e.about,e.avatar);var t=e._id;U.getInitialCards().then((function(e){console.log(e),z.renderItems(e,!0,t)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));var F=new j(".popup_type_add",(function(e){var t={name:e.name,link:e.description,likes:[]};N(h,!0),U.addNewCard(e.name,e.description).then((function(e){console.log(e);var n=e._id,o=J(t,!0,n);z.addItem(o),F.close()})).catch((function(e){console.log(e)})).finally((function(){N(h,!1)}))})),G=new x(".popup_type_image"),H=new V({name:".profile__name",description:".profile__description",avatar:".profile__avatar"}),M=new j(".popup_type_edit",(function(e){N(l,!0),U.setUserInfo(e.name,e.description).then((function(e){console.log(e),H.setUserInfo(e.name,e.about,e.avatar)})).catch((function(e){console.log(e)})).finally((function(){N(l,!1)})),M.close()})),K=new j(".popup_type_avatar",(function(e){N(_,!0),U.setNewAvatar(e.description).then((function(t){console.log(t),H.setUserAvatar(e.description)})).catch((function(e){console.log(e)})).finally((function(){N(_,!1)})),K.close()})),Q=new j(".popup_type_delete",(function(){Q.close()}));F.setEventListeners(),M.setEventListeners(),G.setEventListeners(),Q.setEventListeners(),K.setEventListeners(),o.addEventListener("click",(function(){K.open(),Y.resetValidation()})),r.addEventListener("click",(function(){M.open(),U.getUserInfo().then((function(e){f.value=e.name,p.value=e.about})).catch((function(e){console.log(e)})),W.resetValidation()})),i.addEventListener("click",(function(){F.open(),X.resetValidation()}));var W=new y(n,l);W.enableValidation();var X=new y(n,h);X.enableValidation();var Y=new y(n,_);Y.enableValidation()}();