/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/cards/cards.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/cards/cards.js ***!
  \*******************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*eslint linebreak-style: ["error", "windows"]*/

var limit = 30;
var loadMoreBtn = document.querySelector(".main-btn__load-more");
var visibleCards = 5;
var startCards = 5;
if (window.innerWidth < 1920) {
  startCards = 4;
}
if (window.innerWidth < 1570) {
  startCards = 3;
}
if (window.innerWidth < 1220) {
  startCards = 2;
}
function getCardsData() {
  fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=".concat(limit)).then(function (res) {
    if (!res.ok) {
      throw new Error("Error occurred!");
    }
    return res.json();
  }).then(function (data) {
    localStorage.setItem("cards", JSON.stringify(data));
    initCards();
  })["catch"](function (err) {
    console.log(err);
  });
}
getCardsData();
function initCards() {
  var allCards = JSON.parse(localStorage.getItem("cards"));
  var cardsToLoad = allCards.slice(0, startCards);

  // Создаем DOM-элементы для новых карточек и добавляем их в контейнер
  cardsToLoad.forEach(function (cardItem) {
    var card = new Card(cardItem, ".cards__card-template");
    var cardElement = card.generateCard();
    document.querySelector(".cards__list").append(cardElement);
  });
}
function loadMoreCards() {
  var allCards = JSON.parse(localStorage.getItem("cards"));
  var cardsToLoad = allCards.slice(visibleCards, visibleCards + startCards); // Выбираем следующие карточки

  // Создаем DOM-элементы для новых карточек и добавляем их в контейнер
  cardsToLoad.forEach(function (cardItem) {
    var card = new Card(cardItem, ".cards__card-template");
    var cardElement = card.generateCard();
    document.querySelector(".cards__list").append(cardElement);
  });
  visibleCards += startCards; // Увеличиваем счетчик видимых карточек

  // Проверка, показывать ли кнопку "Загрузить еще" или скрывать
  if (visibleCards >= allCards.length) {
    loadMoreBtn.style.display = "none";
  }
}
var Card = /*#__PURE__*/function () {
  function Card(data, cardSelector) {
    _classCallCheck(this, Card);
    this._title = data.title;
    this._body = data.body;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._element.querySelector(".card__image").src = this._image || "../../../img/post-img.png";
      this._element.querySelector(".card__title").textContent = this._title;
      this._element.querySelector(".card__description").textContent = this._body;
      return this._element;
    }
  }]);
  return Card;
}();
function appendCards(data) {
  data.forEach(function (item) {
    var card = new Card(item, ".cards__card-template");
    var cardElement = card.generateCard();
    document.querySelector(".cards__list").append(cardElement);
  });
}
loadMoreBtn.addEventListener("click", loadMoreCards);

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

var menuBtn = document.querySelector(".header__menu-btn");
var menu = document.querySelector(".main-nav");
var contactsBlock = document.querySelector(".header__contacts");
menuBtn.addEventListener("click", function (e) {
  if (menu.classList.contains("main-nav--active")) {
    menu.classList.remove("main-nav--active");
    contactsBlock.classList.remove("header__contacts--active");
    document.body.style.overflow = "auto";
  } else {
    menu.classList.add("main-nav--active");
    contactsBlock.classList.add("header__contacts--active");
    document.body.style.overflow = "hidden";
  }
});

/***/ }),

/***/ "./src/blocks/modules/question-popup/question-popup.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/question-popup/question-popup.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);

var closeBtn = document.querySelector(".modal-content__close");
var overlay = document.querySelector(".overlay");
var modalPopup = document.querySelector(".modal-content");
var ctaBtns = document.querySelectorAll("[data-type=\"question\"]");
var form = document.querySelector(".question-form");
var isModalOpen = false;
ctaBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (!isModalOpen) {
      openPopup();
    }
  });
});
closeBtn.addEventListener("click", function () {
  if (isModalOpen) {
    closePopup();
  }
});
overlay.addEventListener("click", function () {
  if (isModalOpen) {
    closePopup();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (isModalOpen) {
      closePopup();
    }
  }
});
function closePopup() {
  overlay.style.display = "none";
  modalPopup.style.display = "none";
  isModalOpen = false;
}
function openPopup() {
  overlay.style.display = "block";
  modalPopup.style.display = "block";
  isModalOpen = true;
}

// валидация формы
var nameField = modalPopup.querySelector(".question-form__name");
var emailField = modalPopup.querySelector(".question-form__email");
var telField = modalPopup.querySelector(".question-form__tel");
var formFields = modalPopup.querySelectorAll(".question-form__field");
var messsage = modalPopup.querySelector(".modal-content__message");
var checkboxField = modalPopup.querySelector(".question-form__moms-checkbox-item");
var checkboxLabel = modalPopup.querySelector(".question-form__moms-checkbox");
form.onsubmit = function () {
  if (!validator__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(nameField.value)) {
    nameField.classList.remove("field-error");
    messsage.textContent = "";
  } else {
    nameField.classList.add("field-error");
    messsage.textContent = "Введите имя";
    return false;
  }
  if (validator__WEBPACK_IMPORTED_MODULE_0___default().isEmail(emailField.value)) {
    emailField.classList.remove("field-error");
    messsage.textContent = "";
  } else {
    emailField.classList.add("field-error");
    messsage.textContent = "Некорректно введен Email";
    return false;
  }
  if (validator__WEBPACK_IMPORTED_MODULE_0___default().isMobilePhone(telField.value, "ru-RU")) {
    telField.classList.remove("field-error");
    messsage.textContent = "";
  } else {
    telField.classList.add("field-error");
    messsage.textContent = "Некорректный номер телефона";
    return false;
  }
  if (!checkboxField.checked) {
    messsage.textContent = "Вы школьник? Поставьте галочку, если нет.";
    checkboxLabel.classList.add("errorColor");
    return false;
  } else {
    messsage.textContent = "";
    checkboxLabel.classList.remove("errorColor");
  }
  Array.from(formFields).forEach(function (field) {
    if (validator__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(field.value)) {
      field.classList.add("field-error");
      messsage.textContent = "Заполните все поля";
      return false;
    } else {
      field.classList.remove("field-error");
      messsage.textContent = "";
    }
  });
};

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_cards_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/cards/cards */ "./src/blocks/modules/cards/cards.js");
/* harmony import */ var _modules_cards_cards__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_cards_cards__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_question_popup_question_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/question-popup/question-popup */ "./src/blocks/modules/question-popup/question-popup.js");
/*eslint linebreak-style: ["error", "windows"]*/





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/*eslint linebreak-style: ["error", "windows"]*/




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map