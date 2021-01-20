/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/create-survey.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/create-survey.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".create-survey-form {\\n\\twidth: 80%;\\n\\tmargin: auto;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n\\n.survey-title-container {\\n\\tbackground-color: #fff;\\n\\tpadding: 20px 30px;\\n\\tdisplay: flex;\\n\\tborder-radius: 8px;\\n\\tborder-bottom: 3px solid #9157cc;\\n\\tmargin-bottom: 10px;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n}\\n\\n.create-survey-title {\\n\\tflex: 1;\\n\\tmargin: 0;\\n\\tmargin-right: 15px;\\n\\tborder: none;\\n\\toutline: none;\\n\\tborder-bottom: 2px solid #aaa;\\n\\tline-height: 135%;\\n\\tfont-size: 30px;\\n}\\n\\n.create-survey-title:focus, .create-survey-title:hover {\\n\\tborder-bottom: 2px solid #9157cc;\\n}\\n\\n.survey-select {\\n\\twidth: 100px;\\n\\tborder-radius: 5px;\\n\\tbackground-color: #fff;\\n\\tborder: 1px solid #aaa;\\n\\tfont-size: 14px;\\n\\tpadding: 10px 4px;\\n}\\n\\n/*question card*/\\n.survey-question {\\n\\tbackground-color: #fff;\\n\\tpadding: 20px 30px;\\n\\tborder-radius: 8px;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n\\tborder-left: 3px solid #9157cc; \\n\\tmargin-bottom: 10px;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n\\n.survey-question .question, .answers div, .add-answer-container {\\n\\tdisplay: flex;\\n\\tmargin-bottom: 10px;\\n\\talign-items: center;\\n}\\n\\n.question-text {\\n\\tflex: 1;\\n\\tfont-size: 20px;\\n\\tmargin-right: 15px;\\n\\tborder: none;\\n\\toutline: none;\\n\\tborder-bottom: 1px solid #aaa;\\n\\tline-height: 135%;\\n}\\n\\n.question-text:focus, .question-text:hover {\\n\\tborder-bottom: 1px solid #9157cc;\\n}\\n\\n.question-type-select {\\n\\twidth: 150px;\\n\\tborder-radius: 5px;\\n\\tbackground-color: #fff;\\n\\tborder: 1px solid #aaa;\\n\\tfont-size: 14px;\\n\\tpadding: 10px 4px;\\n}\\n\\n.question-answer, .add-option {\\n\\tborder: none;\\n\\toutline: none;\\n\\tborder-bottom: 1px solid #aaa;\\n\\tflex: 1;\\n\\tfont-size: 16px;\\n\\tpadding: 7px 0;\\n\\tmargin: 0 10px;\\n}\\n\\n.add-option {\\n\\tcolor: #aaa;\\n\\tcursor: pointer;\\n}\\n\\n.add-question-answer {\\n\\tflex: 0;\\n}\\n\\n.question-answer:hover, .question-answer:focus {\\n\\tborder-bottom: 1px solid #9157cc;\\n}\\n\\n.del-answer {\\n\\tmargin-right: 10px;\\n\\tcolor: #aaa;\\n}\\n\\n.del-answer:hover {\\n\\tcolor: #333;\\n\\tcursor: pointer;\\n}\\n\\n.div-delete-question {\\n\\tdisplay: flex;\\n\\tjustify-content: flex-end;\\n}\\n\\n.div-delete-question a {\\n\\tcolor: #777;\\n\\tmargin-right: 5px;\\n\\tfont-size: 20px;\\n\\tflex: 0;\\n\\tdisplay: flex;\\n\\theight: 30px;\\n\\twidth: 30px;\\n\\tpadding: 8px;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n}\\n\\n.div-delete-question a:hover {\\n\\tbackground-color: #eee;\\n\\tborder-radius: 50%;\\n\\tcursor: pointer;\\n}\\n\\n.survey-buttons {\\n\\talign-self: flex-end;\\n\\tmargin-top: 20px;\\n\\tmargin-bottom: 100px;\\n}\\n\\n.survey-buttons a {\\n\\tpadding: 10px 30px;\\n\\tbackground-color: #9157cc;\\n\\tborder-radius: 8px;\\n\\tcolor: #fff;\\n\\tfont-weight: 700;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n\\tcursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/create-survey.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/login-styles.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/login-styles.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".nav-bar__title:hover {\\n\\tcursor: pointer;\\n}\\n\\n.login-form {\\n\\tbackground-color: #fff;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\twidth: 40%;\\n\\tmargin: 0 auto;\\n\\tmargin-top: 200px;\\n\\tpadding: 20px 35px;\\n\\tborder-radius: 10px;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n}\\n\\n.login__title {\\n\\tfont-family: \\\"Lobster\\\", sans-serif;\\n\\ttext-align: center; \\n\\tfont-size: 50px;\\n\\tmargin: 30px 0;\\n}\\n\\n.login__div {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tmargin-bottom: 10px;\\n}\\n\\n.login__input {\\n\\tflex: 1;\\n\\tpadding: 10px;\\n\\theight: 39px;\\n\\tfont-size: 16px;\\n\\tborder: none;\\n\\toutline: none;\\n\\tborder-bottom: 1px solid #aaa;\\n\\tmargin-bottom: 10px;\\n}\\n\\n.login__input:focus {\\n\\tborder-bottom: 1px solid #9764c7;\\n}\\n\\n.login__label {\\n\\tpadding: 10px;\\n\\tbackground-color: #eee;\\n\\tcolor: #777; \\n\\tmargin-bottom: 10px;\\n\\twidth: 34px;\\n\\theight: 39px;\\n}\\n\\n.login__btn, .login__register-btn {\\n\\toutline: none;\\n\\tborder: none;\\n\\tpadding: 10px 20px;\\n\\tmargin-top: 10px;\\n\\tfont-size: 16px;\\n\\tcolor: #fff;\\n\\tbackground-color: #9764c7;\\n\\tborder-radius: 8px;\\n\\tfont-weight: 700;\\n\\ttransition: all .2s;\\n}\\n\\n.login__register-btn {\\n\\tbackground-color: #eeeeee;\\n\\tcolor: #444;\\n}\\n\\n.login__btn:hover, .login__register-btn:hover {\\n\\tcursor:pointer;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/login-styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".nav-bar {\\n\\tbackground-color: #9764c7;\\n\\tcolor: #fff;\\n\\tposition: fixed;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\twidth: 100%;\\n\\tpadding: 10px 30px;\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n\\tbox-shadow: 0px 3px 9px rgba(0,0,0,0.3);\\n}\\n\\n.nav-bar__title {\\n\\tfont-family: 'Lobster', sans-serif;\\n\\tfont-size: 26px;\\n}\\n\\n.nav-bar__logged-message {\\n\\tfont-weight: 700;\\n}\\n\\n.nav-bar__logout-btn {\\n\\tcolor: #ddd;\\n\\tborder-radius: 15px;\\n\\tborder: 2px solid #ddd;\\n\\tpadding: 4px 10px;\\n\\ttransition: all .15s;\\n\\tfont-weight: 700;\\n}\\n\\n.nav-bar__logout-btn:hover {\\n\\tcursor: pointer;\\n\\tcolor: #9764c7;\\n\\tborder-color: #fff;\\n\\tbackground-color: #fff;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/navbar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/resolve-survey.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/resolve-survey.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#survey-title {\\n\\tfont-size: 26px;\\n\\tfont-weight: 700;\\n\\tcolor: #333;\\n}\\n\\n.user-data {\\n\\tdisplay: flex;\\n\\talign-items: flex-start;\\n\\tflex-direction: column;\\n\\tjustify-content: left;\\n}\\n\\n.input-user-data {\\n\\tpadding: 10px 20px;\\n\\tborder: none;\\n\\toutline: none;\\n\\tborder-bottom: 1px solid #aaa;\\n\\tmargin-bottom: 10px;\\n\\tfont-size: 16px;\\n\\twidth: 60%;\\n}\\n\\n.input-user-data:focus {\\n\\tborder-bottom: 1px solid #9157cc;\\n}\\n\\n.s-question {\\n\\tbackground-color: #fff;\\t\\n\\tpadding: 20px 30px;\\n\\tmargin-bottom: 10px;\\n\\tborder-radius: 8px;\\n\\tborder-left: 3px solid #9157cc;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n}\\n\\n.question-title {\\n\\tfont-weight: 700;\\n\\tfont-size: 20px;\\n\\tcolor: #333;\\n\\tmargin-bottom: 15px;\\n}\\n\\n.radio-s-res {\\n\\tmargin-bottom: 15px;\\n\\tmargin-left: 20px;\\n}\\n\\n.text-s-res {\\n\\tborder: none;\\n\\toutline: none;\\n\\tdisplay: block;\\n\\tborder-bottom: 1px solid #aaa;\\n\\tpadding: 10px 20px;\\n\\tfont-size: 16px;\\n\\twidth: 60%;\\n}\\n\\n.text-s-res:focus {\\n\\tborder-bottom: 1px solid #9157cc;\\n}\\n\\n.send-survey-btns {\\n\\tdisplay: flex;\\n\\tjustify-content: flex-end;\\n\\tmargin-bottom: 80px;\\n}\\n\\n.send-survey-btns a {\\n\\tbackground-color: #9157cc;\\n\\tcolor: #fff;\\n\\tpadding: 10px 20px;\\n\\tborder-radius: 8px;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n\\tmargin-left: 10px;\\n\\tfont-weight: 700;\\n\\tcursor: pointer;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/resolve-survey.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* { box-sizing: border-box; }\\n\\nbody {\\n\\tbackground-color: #eee;\\n\\tfont-family: 'Raleway', sans-serif;\\n}\\n\\n.app {\\n\\twidth: 80%;\\n\\tmargin: auto;\\n\\tmargin-top: 100px;\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/survey-client.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/survey-client.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".nav-bar__client-btns {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n\\n.register-btn {\\n\\tmargin-right: 10px;\\n\\tcolor: #eee;\\n\\tborder: 1px solid #eee;\\n\\tpadding: 5px 10px;\\n\\tborder-radius: 8px;\\n\\tfont-weight: 700;\\n}\\n\\n.register-btn:hover {\\n\\tcolor: #fff;\\n\\tborder: 1px solid #fff;\\n\\tcursor: pointer;\\n}\\n\\n.login-btn {\\n\\tborder: 1px solid #eee;\\n\\tcolor: #eee;\\n\\tpadding: 5px 10px;\\n\\tborder-radius: 8px;\\n\\tfont-weight: 700;\\n}\\n\\n.login-btn:hover {\\n\\tcolor: #fff;\\n\\tborder: 1px solid #fff;\\n\\tcursor: pointer;\\n}\\n/*.login-form {*/\\n\\t/*display: flex;*/\\n\\t/*flex-direction: column;*/\\n\\t/*align-items: center;*/\\n/*}*/\\n\\n/*.login-label {*/\\n\\t/*background-color: #eee;*/\\n\\t/*color: #555;*/\\n\\t/*padding: 3px;*/\\n/*}*/\\n\\n/*.login-input {*/\\n\\t/*margin-right: 5px;*/\\n\\t/*padding: 3px;*/\\n/*}*/\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/survey-client.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/surveys-cards.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/surveys-cards.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".survey-cards-container {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(4, 1fr);\\n\\tgrid-column-gap: 10px;\\n\\tgrid-row-gap: 10px;\\n}\\n\\n.survey-card {\\n\\tbackground-color: #fff;\\n\\tcolor: #252525;\\n\\tpadding: 20px;\\n\\tborder-radius: 8px;\\n\\theight: 200px;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n}\\n\\n.add-survey-card {\\n\\talign-items: center;\\n\\tjustify-content: center;\\n}\\n\\n.add-survey-btn {\\n\\tfont-size: 48px;\\n\\tcolor: #ddd;\\n\\ttransition: all .15s;\\n}\\n\\n.add-survey-card:hover, .add-survey-card:hover > .add-survey-btn {\\n\\tcursor: pointer;\\n\\tcolor: #aaa;\\n\\tfont-size: 55px;\\n}\\n\\n.survey-title {\\n\\tfont-size: 26px;\\n\\tmargin-bottom: 10px;\\n}\\n\\t\\n.survey-creator {\\n\\tfont-size: 15px;\\n\\tcolor: #666;\\n\\tmargin-bottom: 5px;\\n}\\n\\n.survey-btns {\\n\\talign-self: flex-end;\\n\\tmargin-top: auto;\\n}\\n\\n.survey-btns a {\\n\\tdisplay: inline-block;\\n\\ttext-align: center;\\n\\tjustify-content: center;\\n\\ttransition: all .15s; \\n}\\n\\n.responses-btn {\\n\\tpadding: 5px 10px;\\n\\tbackground-color: #6960c3;\\n\\tcolor: #fff;\\n\\tborder-radius: 5px;\\n\\tfont-weight: 700;\\n}\\n\\n.responses-btn:hover {\\n\\tcursor: pointer;\\n\\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\\n}\\n\\n.modify-btn {\\n\\tpadding: 5px;\\n\\tcolor: #666;\\n\\twidth: 30px;\\n\\theight: 30px;\\n\\tmargin: 0 10px;\\n}\\n\\n.modify-btn:hover {\\n\\tbackground-color: #eee;\\n\\tborder-radius: 50%;\\n\\tcursor: pointer;\\n}\\n\\n.delete-btn {\\n\\tpadding: 5px;\\n\\tcolor: #666;\\n\\twidth: 30px;\\n\\theight: 30px;\\n}\\n\\n.delete-btn:hover {\\n\\tbackground-color: #eee;\\n\\tborder-radius: 50%;\\n\\tcursor: pointer;\\n\\tcolor: #e01010;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/surveys-cards.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/addAnswerOption.js":
/*!********************************!*\
  !*** ./src/addAnswerOption.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stringToHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringToHTML */ \"./src/stringToHTML.js\");\n\n// add and delete options to multiple choice questions\n\nconst addEventDeleteOptionBtn = (question) => {\n  const deleteBtns = question.querySelectorAll(\".del-answer\");\n\n  // just one option => hide delete button\n  if (deleteBtns.length === 1) return (deleteBtns[0].style.display = \"none\");\n  else deleteBtns[0].style.display = \"inline\";\n\n  deleteBtns.forEach((b) => {\n    b.addEventListener(\"click\", () => {\n      b.parentElement.remove();\n      addEventDeleteOptionBtn(question);\n    });\n  });\n};\n\nconst addAnswerOption = (question) => {\n  const addOptionBtn = question.querySelector(\".add-option\");\n\n  addEventDeleteOptionBtn(question);\n\n  addOptionBtn.addEventListener(\"click\", () => {\n    const questionAnswers = question.querySelector(\".answers\");\n    const newAnswer = Object(_stringToHTML__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\n      <div>\n        <input type=\"radio\" disabled>\n        <input class=\"question-answer\" type=\"text\" placeholder=\"Option\">\n        <a class=\"del-answer\"><i class=\"fas fa-eraser\"></i></a>\n      </div>\n    `);\n    questionAnswers.appendChild(newAnswer);\n    addEventDeleteOptionBtn(question);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addAnswerOption);\n\n\n//# sourceURL=webpack:///./src/addAnswerOption.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/navbar.css */ \"./src/css/navbar.css\");\n/* harmony import */ var _css_surveys_cards_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/surveys-cards.css */ \"./src/css/surveys-cards.css\");\n/* harmony import */ var _css_create_survey_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/create-survey.css */ \"./src/css/create-survey.css\");\n/* harmony import */ var _css_survey_client_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/survey-client.css */ \"./src/css/survey-client.css\");\n/* harmony import */ var _css_resolve_survey_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/resolve-survey.css */ \"./src/css/resolve-survey.css\");\n/* harmony import */ var _css_login_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/login-styles.css */ \"./src/css/login-styles.css\");\n/* harmony import */ var _renderSurveyControlPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderSurveyControlPanel */ \"./src/renderSurveyControlPanel.js\");\n/* harmony import */ var _renderCreateSurvey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderCreateSurvey */ \"./src/renderCreateSurvey.js\");\n/* harmony import */ var _renderClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./renderClient */ \"./src/renderClient.js\");\n/* harmony import */ var _renderLogin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renderLogin */ \"./src/renderLogin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n//const renderLogin = () => {\n//renderClient();\n//};\n\nconst renderApp = () => {\n  Object(_renderSurveyControlPanel__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n};\n\nwindow.onload = () => {\n  //renderApp();\n  Object(_renderClient__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  //renderLogin();\n  //renderCreateSurvey();\n};\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/crudder.js":
/*!************************!*\
  !*** ./src/crudder.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst crudder = (resource) => {\n  const domain = \"http://localhost:3000\";\n  const url = `${domain}/${resource}`;\n\n  const create = (x, token = null) => {\n    return fetch(url, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        authorization: token,\n      },\n      body: JSON.stringify(x),\n    }).then((res) => res.json());\n  };\n\n  const update = (x, token = null) => {\n    return fetch(url, {\n      method: \"PUT\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        authorization: token,\n      },\n      body: JSON.stringify(x),\n    }).then((res) => res.json());\n  };\n\n  //const get = () => fetch(url).then((res) => res.json());\n  const get = (token = null) => {\n    return fetch(url, {\n      method: \"GET\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        authorization: token,\n      },\n    }).then((res) => res.json());\n  };\n\n  const getById = (id) => fetch(`${url}/${id}`).then((res) => res.json());\n\n  const del = (x, token = null) => {\n    fetch(`${url}/${x}`, {\n      method: \"DELETE\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        authorization: token,\n      },\n    }).then(() => console.log(\"the survey has been deleted\"));\n  };\n\n  return { create, update, get, getById, del };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (crudder);\n\n\n//# sourceURL=webpack:///./src/crudder.js?");

/***/ }),

/***/ "./src/css/create-survey.css":
/*!***********************************!*\
  !*** ./src/css/create-survey.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_create_survey_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./create-survey.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/create-survey.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_create_survey_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_create_survey_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/create-survey.css?");

/***/ }),

/***/ "./src/css/login-styles.css":
/*!**********************************!*\
  !*** ./src/css/login-styles.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./login-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/login-styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_login_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_login_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/login-styles.css?");

/***/ }),

/***/ "./src/css/navbar.css":
/*!****************************!*\
  !*** ./src/css/navbar.css ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./navbar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/navbar.css?");

/***/ }),

/***/ "./src/css/resolve-survey.css":
/*!************************************!*\
  !*** ./src/css/resolve-survey.css ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_resolve_survey_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./resolve-survey.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/resolve-survey.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_resolve_survey_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_resolve_survey_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/resolve-survey.css?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/css/survey-client.css":
/*!***********************************!*\
  !*** ./src/css/survey-client.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_survey_client_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./survey-client.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/survey-client.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_survey_client_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_survey_client_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/survey-client.css?");

/***/ }),

/***/ "./src/css/surveys-cards.css":
/*!***********************************!*\
  !*** ./src/css/surveys-cards.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_surveys_cards_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./surveys-cards.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/surveys-cards.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_surveys_cards_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_surveys_cards_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/css/surveys-cards.css?");

/***/ }),

/***/ "./src/editSurvey.js":
/*!***************************!*\
  !*** ./src/editSurvey.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crudder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudder */ \"./src/crudder.js\");\n\n\nconst editSurvey = (s) => {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (editSurvey);\n\n\n//# sourceURL=webpack:///./src/editSurvey.js?");

/***/ }),

/***/ "./src/renderClient.js":
/*!*****************************!*\
  !*** ./src/renderClient.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stringToHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringToHTML */ \"./src/stringToHTML.js\");\n/* harmony import */ var _crudder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crudder */ \"./src/crudder.js\");\n/* harmony import */ var _renderRespondSurvey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderRespondSurvey */ \"./src/renderRespondSurvey.js\");\n/* harmony import */ var _renderLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderLogin */ \"./src/renderLogin.js\");\n/* harmony import */ var _renderRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderRegister */ \"./src/renderRegister.js\");\n\n\n\n\n\n\nconst Surveys = Object(_crudder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"api/surveys\");\n\nconst createSurveyElement = (survey) => {\n  return Object(_stringToHTML__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\n      <div class=\"survey-card\" id=\"s-${survey._id}\">\n        <div class=\"survey-title\">${survey.title}</div>\n        <div class=\"survey-creator\">Created by ${survey.user_email}</div>\n        <div class=\"survey-questions-quantity\">Questions: ${survey.questions.length}</div>\n        <div class=\"survey-btns\">\n          <a class=\"responses-btn\" id=\"respond-${survey._id}\">Submit response</a>\n        </div>\n    `);\n};\n\nconst renderClient = () => {\n  const appContainer = document.getElementById(\"app-container\");\n  const surveyClientTemplate = document.getElementById(\"surveys-client\");\n  appContainer.innerHTML = surveyClientTemplate.innerHTML;\n\n  // add event login button\n  document.getElementById(\"login-btn\").addEventListener(\"click\", _renderLogin__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n  // add event register button\n  document.getElementById(\"register-btn\").addEventListener(\"click\", _renderRegister__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n  Surveys.get().then((res) => {\n    const surveyElements = res.map(createSurveyElement);\n    const surveysContainer = document.getElementById(\"surveys-container\");\n    // add elements to container\n    surveyElements.forEach((s) => surveysContainer.appendChild(s));\n    // add event handler to button respond survey\n    res.forEach((s) => {\n      const respondSurveyBtn = document.getElementById(`respond-${s._id}`);\n      respondSurveyBtn.addEventListener(\"click\", () => Object(_renderRespondSurvey__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(s));\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderClient);\n\n\n//# sourceURL=webpack:///./src/renderClient.js?");

/***/ }),

/***/ "./src/renderCreateSurvey.js":
/*!***********************************!*\
  !*** ./src/renderCreateSurvey.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderQuestionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderQuestionType */ \"./src/renderQuestionType.js\");\n/* harmony import */ var _renderSurveyControlPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSurveyControlPanel */ \"./src/renderSurveyControlPanel.js\");\n/* harmony import */ var _sendSurveyToDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendSurveyToDB */ \"./src/sendSurveyToDB.js\");\n/* harmony import */ var _stringToHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stringToHTML */ \"./src/stringToHTML.js\");\n\n\n\n\n\n// add events to each question\nconst renderQuestions = () => {\n  const surveyQuestions = document.querySelectorAll(\".survey-question\");\n\n  surveyQuestions.forEach((q) => {\n    const questionType = q.querySelector(\".question-type\");\n    questionType.addEventListener(\"change\", () => {\n      Object(_renderQuestionType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(questionType.value, q);\n    });\n\n    // add event to delete question\n    const questionDeleteBtn = q.querySelector(\".delete-question\");\n    questionDeleteBtn.addEventListener(\"click\", () => q.remove());\n  });\n};\n\n// add events 'add question', 'send survey' & 'cancel'\nconst addEventsSurveyBtns = () => {\n  // add question button\n  const addQuestionBtn = document.getElementById(\"add-question-btn\");\n\n  addQuestionBtn.addEventListener(\"click\", () => {\n    const questionsContainer = document.getElementById(\"questions-container\");\n    const questionTemplate = document.getElementById(\"survey-question-template\");\n    // innerHTML is string, convert to element preventing rebuild the entire DOM\n    const newQuestionNode = Object(_stringToHTML__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(questionTemplate.innerHTML);\n    questionsContainer.appendChild(newQuestionNode);\n    renderQuestions(); // call every time a question is added\n  });\n\n  // send survey button\n  const sendSurveyBtn = document.getElementById(\"send-survey\");\n  sendSurveyBtn.addEventListener(\"click\", _sendSurveyToDB__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  // cancel button\n  const cancelBtn = document.getElementById(\"cancel-survey\");\n  cancelBtn.addEventListener(\"click\", _renderSurveyControlPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\nconst renderCreateSurvey = () => {\n  document.getElementById(\"app-container\").innerHTML = document.getElementById(\"create-survey\").innerHTML;\n  addEventsSurveyBtns();\n  renderQuestions();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderCreateSurvey);\n\n\n//# sourceURL=webpack:///./src/renderCreateSurvey.js?");

/***/ }),

/***/ "./src/renderLogin.js":
/*!****************************!*\
  !*** ./src/renderLogin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crudder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudder */ \"./src/crudder.js\");\n/* harmony import */ var _renderSurveyControlPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSurveyControlPanel */ \"./src/renderSurveyControlPanel.js\");\n/* harmony import */ var _renderRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderRegister */ \"./src/renderRegister.js\");\n/* harmony import */ var _renderClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderClient */ \"./src/renderClient.js\");\n\n\n\n\n\nconst Login = Object(_crudder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"api/auth/login\");\nconst userInfo = Object(_crudder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"api/auth/me\");\n\nconst renderLogin = () => {\n  document.getElementById(\"app-container\").innerHTML = document.getElementById(\"login-template\").innerHTML;\n  document.getElementById(\"logo\").addEventListener(\"click\", _renderClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n  // add event login button\n  const loginBtn = document.getElementById(\"login-submit\");\n  loginBtn.addEventListener(\"click\", () => {\n    const email = document.getElementById(\"login-user-email\").value;\n    const password = document.getElementById(\"login-user-password\").value;\n\n    Login.create({ email, password }).then((res) => {\n      if (!res.token) return alert(res.message);\n\n      localStorage.setItem(\"token\", res.token);\n\n      userInfo.get(res.token).then((user) => {\n        localStorage.setItem(\"user\", JSON.stringify(user));\n      });\n\n      Object(_renderSurveyControlPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n  });\n\n  // add event register button\n  const registerBtn = document.getElementById(\"login-register-btn\");\n  registerBtn.addEventListener(\"click\", _renderRegister__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderLogin);\n\n\n//# sourceURL=webpack:///./src/renderLogin.js?");

/***/ }),

/***/ "./src/renderQuestionType.js":
/*!***********************************!*\
  !*** ./src/renderQuestionType.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addAnswerOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAnswerOption */ \"./src/addAnswerOption.js\");\n\n\nconst renderQuestionType = (type, question) => {\n  const answers = question.querySelector(\".answers-container\");\n\n  if (type === \"radio\") {\n    const element = document.getElementById(\"multiple-choice-template\");\n    answers.innerHTML = element.innerHTML;\n    Object(_addAnswerOption__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(question);\n  } else if (type === \"text\") {\n    const element = document.getElementById(\"text-template\");\n    answers.innerHTML = element.innerHTML;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderQuestionType);\n\n\n//# sourceURL=webpack:///./src/renderQuestionType.js?");

/***/ }),

/***/ "./src/renderRegister.js":
/*!*******************************!*\
  !*** ./src/renderRegister.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crudder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudder */ \"./src/crudder.js\");\n/* harmony import */ var _renderClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderClient */ \"./src/renderClient.js\");\n/* harmony import */ var _renderLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderLogin */ \"./src/renderLogin.js\");\n\n\n\n\nconst Register = Object(_crudder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"api/auth/register\");\n\nlet user = {\n  name: \"\",\n  email: \"\",\n  password: \"\",\n};\n\nconst renderRegister = () => {\n  const appContainer = document.getElementById(\"app-container\");\n  const registerTemplate = document.getElementById(\"register-template\");\n  appContainer.innerHTML = registerTemplate.innerHTML;\n  document.getElementById(\"logo\").addEventListener(\"click\", _renderClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n  const registerBtn = document.getElementById(\"register-btn\");\n  registerBtn.addEventListener(\"click\", () => {\n    const password = document.getElementById(\"register-user-password\").value;\n    const rPassword = document.getElementById(\"register-user-r-password\").value;\n    if (password !== rPassword) return alert(\"the passwords are not he same\");\n\n    user.name = document.getElementById(\"register-user-name\").value;\n    user.email = document.getElementById(\"register-user-email\").value;\n    user.password = password;\n    if (!user.name || !user.email || !user.password) return alert(\"You should fill the fields\");\n\n    Register.create(user).then((res) => {\n      alert(res.message);\n      Object(_renderLogin__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderRegister);\n\n\n//# sourceURL=webpack:///./src/renderRegister.js?");

/***/ }),

/***/ "./src/renderRespondSurvey.js":
/*!************************************!*\
  !*** ./src/renderRespondSurvey.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stringToHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringToHTML */ \"./src/stringToHTML.js\");\n/* harmony import */ var _renderClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderClient */ \"./src/renderClient.js\");\n/* harmony import */ var _sendAnswerToDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendAnswerToDB */ \"./src/sendAnswerToDB.js\");\n\n\n\n\nconst addEventsSubmitResponse = (survey) => {\n  const submitBtn = document.getElementById(\"submit-response\");\n  submitBtn.addEventListener(\"click\", () => Object(_sendAnswerToDB__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(survey));\n  const cancelBtn = document.getElementById(\"cancel-response\");\n  cancelBtn.addEventListener(\"click\", () => Object(_renderClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\n\nconst addQuestion = (q) => {\n  if (q.question_type === \"radio\") {\n    const answers = q.answers.map(\n      (a) => `\n      <input class=\"radio-s-res\" type=\"radio\" value=\"${a}\" name=\"${q.code}\">\n      <label for=\"${a}\">${a}</label></br>`\n    );\n    return Object(_stringToHTML__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\n      <div class=\"s-question\">\n        <div class=\"question-title\">${q.question}</div>\n        ${answers.join(\"\")}\n      </div>\n    `);\n  } else if (q.question_type === \"text\") {\n    return Object(_stringToHTML__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\n      <div class=\"s-question\">\n        <div class=\"question-title\">${q.question}</div>\n        <input class=\"text-s-res\" type=\"text\" placeholder=\"Your answer\">\n      </div>\n    `);\n  }\n};\n\nconst renderRespondSurvey = (survey) => {\n  const appContainer = document.getElementById(\"app-container\");\n  const respondSurveyTemplate = document.getElementById(\"respond-survey\");\n  appContainer.innerHTML = respondSurveyTemplate.innerHTML;\n\n  // set survey title\n  document.getElementById(\"survey-title\").innerText = survey.title;\n\n  // add questions\n  const surveyContainer = document.getElementById(\"survey-container\");\n  survey.questions.forEach((q) => {\n    surveyContainer.appendChild(addQuestion(q));\n  });\n\n  // add events 'submit' & 'cancel' buttons\n  addEventsSubmitResponse(survey);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderRespondSurvey);\n\n\n//# sourceURL=webpack:///./src/renderRespondSurvey.js?");

/***/ }),

/***/ "./src/renderSurveyControlPanel.js":
/*!*****************************************!*\
  !*** ./src/renderSurveyControlPanel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderSurveys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderSurveys */ \"./src/renderSurveys.js\");\n/* harmony import */ var _renderCreateSurvey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCreateSurvey */ \"./src/renderCreateSurvey.js\");\n/* harmony import */ var _renderClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderClient */ \"./src/renderClient.js\");\n\n\n\n\nconst renderSurveyControlPanel = () => {\n  const appContainer = document.getElementById(\"app-container\");\n  const surveysControlPanelTemplate = document.getElementById(\"survey-control-panel\");\n  appContainer.innerHTML = surveysControlPanelTemplate.innerHTML;\n\n  // set nav bar logged user message\n  const user = JSON.parse(localStorage.getItem(\"user\"));\n  const loggedMessage = `You're logged as ${user.name}`;\n  document.getElementById(\"nav-bar-logged-message\").innerText = loggedMessage;\n\n  // set event navbar logout button\n  const logoutBtn = document.getElementById(\"nav-bar-logout-btn\");\n  logoutBtn.addEventListener(\"click\", () => {\n    localStorage.removeItem(\"token\");\n    Object(_renderClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n\n  Object(_renderSurveys__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const addSurveyBtn = document.getElementById(\"add-survey-btn\");\n  addSurveyBtn.addEventListener(\"click\", _renderCreateSurvey__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderSurveyControlPanel);\n\n\n//# sourceURL=webpack:///./src/renderSurveyControlPanel.js?");

/***/ }),

/***/ "./src/renderSurveys.js":
/*!******************************!*\
  !*** ./src/renderSurveys.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crudder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudder.js */ \"./src/crudder.js\");\n/* harmony import */ var _stringToHTML_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringToHTML.js */ \"./src/stringToHTML.js\");\n/* harmony import */ var _showSurveyResponses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showSurveyResponses */ \"./src/showSurveyResponses.js\");\n/* harmony import */ var _editSurvey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editSurvey */ \"./src/editSurvey.js\");\n\n\n\n\n\nconst Surveys = Object(_crudder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"api/surveys\");\n\nconst createSurveyElement = (survey) => {\n  return Object(_stringToHTML_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`\n      <div class=\"survey-card\" id=\"s-${survey._id}\">\n        <div class=\"survey-title\">${survey.title}</div>\n        <div class=\"survey-creator\">Created by ${survey.user_email}</div>\n        <div class=\"survey-questions-quantity\">Questions: ${survey.questions.length}</div>\n        <div class=\"survey-btns\">\n          <a class=\"responses-btn\" id=\"res-${survey._id}\">Responses</a>\n          <a class=\"modify-btn\" id=\"edit-${survey._id}\"><i class=\"fas fa-pencil-alt\"></i></a>\n          <a class=\"delete-btn\" id=\"del-${survey._id}\"><i class=\"far fa-trash-alt\"></i></a>\n        </div>\n    `);\n};\n\nconst addEventHandlers = (survey) => {\n  const responsesBtn = document.getElementById(`res-${survey._id}`);\n  responsesBtn.addEventListener(\"click\", () => Object(_showSurveyResponses__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(survey));\n\n  if (!survey.public) return; // return if not from the owner\n  const editBtn = document.getElementById(`edit-${survey._id}`);\n  editBtn.addEventListener(\"click\", _editSurvey__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n  const delBtn = document.getElementById(`del-${survey._id}`);\n  delBtn.addEventListener(\"click\", () => {\n    Surveys.del(survey._id);\n    document.getElementById(`s-${survey._id}`).remove();\n  });\n};\n\nconst renderSurveys = () => {\n  Surveys.get().then((res) => {\n    const surveyElements = res.map(createSurveyElement);\n    const surveysContainer = document.getElementById(\"surveys-container\");\n    // add elements to container\n    surveyElements.forEach((s) => surveysContainer.appendChild(s));\n    // add event handlers to buttons\n    res.forEach((s) => addEventHandlers(s));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderSurveys);\n\n\n//# sourceURL=webpack:///./src/renderSurveys.js?");

/***/ }),

/***/ "./src/sendAnswerToDB.js":
/*!*******************************!*\
  !*** ./src/sendAnswerToDB.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crudder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudder */ \"./src/crudder.js\");\n/* harmony import */ var _renderClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderClient */ \"./src/renderClient.js\");\n\n\nconst Answers = Object(_crudder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"api/answers\");\n\nlet answer = {\n  user_email: \"\",\n  user_name: \"\",\n  survey_code: 0,\n  answers: [],\n};\n\nconst submitSurveyResponse = (survey) => {\n  answer.user_email = document.getElementById(\"user-email\").value;\n  answer.user_name = document.getElementById(\"user-name\").value;\n  answer.survey_code = survey.code;\n\n  if (!answer.user_email || !answer.user_name) return alert(\"You should provide your information\");\n\n  const questions = document.querySelectorAll(\".s-question\");\n  questions.forEach((q, index) => {\n    const inputs = q.getElementsByTagName(\"input\");\n\n    if (inputs.length === 1)\n      answer.answers.push({\n        code: index,\n        answer: inputs[0].value,\n      });\n    else\n      for (let i of inputs) {\n        if (i.checked)\n          return answer.answers.push({\n            code: index,\n            answer: i.value,\n          });\n      }\n  });\n  Answers.create(answer).then(console.log);\n  Object(_renderClient__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (submitSurveyResponse);\n\n\n//# sourceURL=webpack:///./src/sendAnswerToDB.js?");

/***/ }),

/***/ "./src/sendSurveyToDB.js":
/*!*******************************!*\
  !*** ./src/sendSurveyToDB.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crudder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudder */ \"./src/crudder.js\");\n/* harmony import */ var _renderSurveyControlPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSurveyControlPanel */ \"./src/renderSurveyControlPanel.js\");\n\n\n\nconst sendSurveyToDB = () => {\n  const user = JSON.parse(localStorage.getItem(\"user\"));\n  let survey = {\n    title: \"\",\n    public: true,\n    user_email: user.email,\n    code: Math.floor(Math.random() * 1000),\n    questions: [],\n  };\n\n  survey.title = document.querySelector(\".create-survey-title\").value || \"Survey title\";\n  // survey public or not\n  survey.public = document.getElementById(\"public-survey\").value == \"true\";\n\n  let questionCode = 0;\n  const questions = document.querySelectorAll(\".survey-question\");\n  questions.forEach((q) => {\n    const question = {\n      question: \"\",\n      answers: [],\n      code: questionCode,\n      question_type: \"\",\n    };\n\n    question.question = q.querySelector(\".question-text\").value;\n    question.question_type = q.querySelector(\".question-type\").value;\n\n    questionCode++;\n\n    if (question.question_type === \"radio\") {\n      const answers = q.querySelectorAll(\".question-answer\");\n      answers.forEach((a) => {\n        question.answers.push(a.value);\n      });\n    }\n    survey.questions.push(question);\n  });\n  // send survey to DB\n  const Survey = Object(_crudder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"api/surveys\");\n  Survey.create(survey).then(console.log);\n\n  // return to survey control panel\n  Object(_renderSurveyControlPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendSurveyToDB);\n\n\n//# sourceURL=webpack:///./src/sendSurveyToDB.js?");

/***/ }),

/***/ "./src/showSurveyResponses.js":
/*!************************************!*\
  !*** ./src/showSurveyResponses.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crudder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudder */ \"./src/crudder.js\");\n\n\nconst showSurveyResponses = (s) => {\n  alert(\"show survey responses\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showSurveyResponses);\n\n\n//# sourceURL=webpack:///./src/showSurveyResponses.js?");

/***/ }),

/***/ "./src/stringToHTML.js":
/*!*****************************!*\
  !*** ./src/stringToHTML.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst stringToHTML = (s) => {\n  const parser = new DOMParser();\n  const doc = parser.parseFromString(s, \"text/html\");\n  return doc.body.firstChild;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stringToHTML);\n\n\n//# sourceURL=webpack:///./src/stringToHTML.js?");

/***/ })

/******/ });