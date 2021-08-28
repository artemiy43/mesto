!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r){var i=e.name,u=e.link;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=i,this._link=u,this._templateSelector=o,this._handleCardClick=n,this._flag=r}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleLikeClick()})),this._flag&&this._delete.addEventListener("click",(function(){e._handleDeleteClick()})),this._image.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_handleLikeClick",value:function(){this._like.classList.toggle("element__like_active")}},{key:"_handleDeleteClick",value:function(){this._delete.closest(".element").remove()}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._like=this._element.querySelector(".element__like"),this._delete=this._element.querySelector(".element__delete"),this._title=this._element.querySelector(".element__title"),this._flag||this._delete.classList.add("element__delete_inactive"),this._title.textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._setEventListeners(),this._element}}])&&e(n.prototype,o),t}(),n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},o=(document.querySelector(".elements"),"#element-template"),r=document.querySelector(".edit-button"),i=document.querySelector(".add-button"),u=document.querySelector(".popup_type_edit"),a=document.querySelector(".popup_type_add"),c=u.querySelector(".popup__form"),s=u.querySelector(".popup__input_type_name"),l=u.querySelector(".popup__input_type_description"),f=a.querySelector(".popup__form");function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&p(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(t,n){var o=t.data,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=o,this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&_(t.prototype,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup_opened")&&n.close()})),m(this,"_handleEscClose",(function(e){27===e.keyCode&&n.close()})),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;document.addEventListener("click",this._handleOverlayClose),this._closeButton.addEventListener("click",(function(){e.close()}))}}])&&d(t.prototype,n),e}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(r){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._colback=t,n._formElement=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._colback(e._getInputValues())})),g(S(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){g(S(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._formFields=this._popup.querySelectorAll(".popup__input"),this._formFields.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}}])&&k(t.prototype,n),u}(v);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(o);if(r){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"_fullOpenImg",value:function(e){var t=e.name,n=e.link,o=this._popup.querySelector(".popup__text_image"),r=this._popup.querySelector(".popup__image");r.src=n,r.alt=t,o.textContent=t}},{key:"open",value:function(e){var t=e.name,n=e.link;this._fullOpenImg({name:t,link:n}),j(q(u.prototype),"open",this).call(this)}}])&&L(t.prototype,n),u}(v);function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var R=function(){function e(t){var n=t.name,o=t.description;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userDescription=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._user={userName:this._userName.textContent,userDescription:this._userDescription.textContent},this._user}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userDescription.textContent=t}}])&&B(t.prototype,n),e}();function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var V=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards",{method:"GET",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return Promise.resolve(e)}))}},{key:"addNewCard",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/cards",{method:"POST",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.status:Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("https://nomoreparties.co/v1/cohort-27/users/me",{method:"GET",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return Promise.resolve(e)}))}},{key:"setUserInfo",value:function(e,t){return fetch("https://mesto.nomoreparties.co/v1/cohort-27/users/me",{method:"PATCH",headers:{authorization:"667a2ab0-f08f-4bf2-a0b7-ab2d1cf10d2c","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.status:Promise.reject("Ошибка: ".concat(e.status))}))}}])&&x(t.prototype,n),e}());V.getUserInfo().then((function(e){U.setUserInfo(e.name,e.about);var n=e._id;V.getInitialCards().then((function(e){var r=new y({data:e,renderer:function(e){var i,u,a,c,s=(i=e,u=e.owner._id===n,a=i.name,c=i.link,new t({name:a,link:c},(function(){N.open({name:a,link:c})}),o,u).createCard());r.addItem(s),console.log(e.owner._id)}},".elements");r.renderItems(),console.log(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));var D=new C(".popup_type_add",(function(e){V.addNewCard(e.name,e.link).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),D.close()})),N=new T(".popup_type_image"),U=new R({name:".profile__name",description:".profile__description"}),z=new C(".popup_type_edit",(function(e){U.setUserInfo(e.name,e.description),V.setUserInfo(e.name,e.description).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),z.close()}));D.setEventListeners(),z.setEventListeners(),N.setEventListeners(),r.addEventListener("click",(function(){z.open(),V.getUserInfo().then((function(e){s.value=e.name,l.value=e.about})).catch((function(e){console.log(e)})),A.resetValidation()})),i.addEventListener("click",(function(){D.open(),F.resetValidation()}));var A=new h(n,c);A.enableValidation();var F=new h(n,f);F.enableValidation()}();