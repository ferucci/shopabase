/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_catalog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/catalog.js */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_output_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/output.js */ \"./src/modules/output.js\");\n/* harmony import */ var _modules_searchGoods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/searchGoods.js */ \"./src/modules/searchGoods.js\");\n\n\n\n\n\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_output_js__WEBPACK_IMPORTED_MODULE_2__.second)()\n;(0,_modules_searchGoods_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_catalog_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://shop/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\n  const cartBtn = document.getElementById('cart')\n  const cartModal = document.querySelector('.cart')\n  const cartCloseBtn = cartModal.querySelector('.cart-close')\n\n  const openCart = () => {\n    cartModal.style.display = 'flex'\n  }\n\n  const closeCart = () => {\n    cartModal.style.display = 'none'\n  }\n\n  const closeOnBackdrop = (event) => {\n    if (event.target === cartModal) {\n      closeCart()\n    }\n  }\n\n  const closeOnEscape = (event) => {\n    if (event.key === 'Escape') {\n      closeCart()\n    }\n  }\n\n  cartBtn.addEventListener('click', openCart)\n  cartCloseBtn.addEventListener('click', closeCart)\n\n  cartModal.addEventListener('click', closeOnBackdrop)\n\n  document.addEventListener('keydown', closeOnEscape)\n\n  return () => {\n    cartBtn.removeEventListener('click', openCart)\n    cartCloseBtn.removeEventListener('click', closeCart)\n    cartModal.removeEventListener('click', closeOnBackdrop)\n    document.removeEventListener('keydown', closeOnEscape)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://shop/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n\n\n\n\nconst catalog = () => {\n  const bntCatalog = document.querySelector('.catalog-button > button')\n  const catalogModal = document.querySelector('.catalog')\n  const catalogModalItems = catalogModal.querySelectorAll('li')\n\n  console.log(catalogModalItems)\n\n  let isOpen = false;\n  bntCatalog.addEventListener('click', () => {\n\n    isOpen = !isOpen\n\n    if (isOpen) catalogModal.style.display = 'block'\n    else catalogModal.style.display = ''\n\n  })\n\n  catalogModalItems.forEach(item => {\n    item.addEventListener('click', () => {\n      const text = item.textContent\n\n      ;(0,_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\n        ;(0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_filters_js__WEBPACK_IMPORTED_MODULE_0__.categoryFilter)(data, text))\n      })\n    })\n\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://shop/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   priceFilter: () => (/* binding */ priceFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value, priceParams = null) => {\n  let filteredGoods = goods.filter((good) => {\n    return good.title.toLowerCase().includes(value.toLowerCase())\n  });\n\n  if (priceParams) {\n    filteredGoods = priceFilter(filteredGoods, priceParams);\n  }\n\n  return filteredGoods.sort((a, b) => a.price - b.price);\n}\n\nconst categoryFilter = (goods, value) => {\n  let filteredGoods = goods.filter((good) => {\n    return good.category === value\n  })\n\n  return filteredGoods.sort((a, b) => a.price - b.price);\n}\n\nconst priceFilter = (goods, priceParams) => {\n  const { min, max } = priceParams;\n\n  return goods.filter((good) => {\n    const price = good.price;\n    return (!min || price >= min) &&\n      (!max || price <= max);\n  });\n}\n\n//# sourceURL=webpack://shop/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\n  return fetch(`https://test-glo-6c318-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)\n    .then((res) => res.json())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://shop/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/output.js":
/*!*******************************!*\
  !*** ./src/modules/output.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   second: () => (/* binding */ second)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n\n\n\nconst second = () => {\n  (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n    (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\n  })\n}\n\n//# sourceURL=webpack://shop/./src/modules/output.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\n  const goodsWrapper = document.querySelector('.goods')\n\n  goodsWrapper.innerHTML = ''\n\n  goods.forEach(good => {\n    goodsWrapper.insertAdjacentHTML('beforeend', `\n      \t\t\t\t<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n                  ${good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-image: url('${good.img}')\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${good.price}' ₽</div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${good.title}'</h5>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n      `)\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://shop/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/searchGoods.js":
/*!************************************!*\
  !*** ./src/modules/searchGoods.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n\n\n\n\n\nconst searchGoods = () => {\n  const searchInput = document.querySelector('.search-wrapper_input')\n\n  searchInput.addEventListener('input', (event) => {\n    const value = event.target.value\n\n    ;(0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n      ;(0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\n    })\n  })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchGoods);\n\n//# sourceURL=webpack://shop/./src/modules/searchGoods.js?\n}");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;