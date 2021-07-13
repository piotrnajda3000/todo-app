/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --light-background: rgb(252, 252, 252);\n  --dim-background: rgb(242, 242, 242);\n  --dimmest-background: rgb(235, 235, 235);\n  --accent-color: lightskyblue;\n  font-family: Roboto, sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--dimmest-background);\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  max-width: 960px;\n}\n\n/* Hover properties */\n\n.material-icons,\nbutton,\n.list {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.material-icons:hover,\nbutton:hover,\n.list:hover {\n  color: black;\n  cursor: pointer;\n}\n\nbutton:hover,\n.list span:hover {\n  background-color: var(--dimmest-background) !important;\n}\n\n.list {\n  flex-basis: 100% !important;\n}\n\n/* Pop-up message */\n\n.message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n\n.failure {\n  background-color: #ff000080;\n}\n\n.success {\n  background-color: #00ff3780;\n}\n\n/* Message end */\n\n/* Top bar */\n#topDisplay {\n  background-color: var(--dim-background);\n  padding: 1rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 57px;\n}\n\n#name {\n  font-size: 1.1rem;\n}\n\n/* End Top project bar */\n\n#contentWrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: scroll;\n}\n\n#contentWrapper::-webkit-scrollbar {\n  display: none;\n}\n\n#contentWrapper {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\n/* Single todo */\n\n.todo {\n  background-color: var(--light-background);\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-inline: 1rem;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todo:last-of-type {\n  margin-bottom: 1rem;\n}\n\n.title,\n.editInput {\n  max-width: 100%;\n  word-break: break-all;\n}\n\n.title {\n  height: 1.15rem;\n  overflow: hidden;\n}\n\n.not-expanded::after {\n  content: \"...\";\n}\n\n.expanded {\n  height: auto;\n  overflow-y: visible;\n}\n\n.todo .title,\n.dueDate {\n  margin-bottom: 1rem;\n}\n\n.dueDate {\n  align-self: center;\n}\n\n.todoControl {\n  display: flex;\n  justify-content: space-around;\n}\n\n.editInput {\n  margin-bottom: 0.5rem;\n}\n\n.editControlButtons {\n  display: flex;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 0.5rem;\n}\n\n/* End Single Todo */\n\n#newWrapper::before {\n  content: \"\";\n  height: 2rem;\n}\n\n#newWrapper {\n  display: flex;\n  justify-content: center;\n  height: 2rem;\n  background: transparent;\n}\n\n#new {\n  width: 100%;\n  margin-inline: 1rem;\n  border-radius: 0 0 2rem 2rem;\n  background-color: var(--light-background);\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Bottom navigation */\n\n#bottomNav {\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  background-color: var(--dim-background);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  font-size: 1.1rem;\n}\n\nbutton {\n  background: none;\n  border-color: rgba(0, 0, 0, 0.75);\n  border: 0;\n  height: 100%;\n  padding: 1rem;\n}\n\n.editControlButtons button {\n  background-color: var(--dim-background);\n  flex: 1;\n  padding: 0.5rem;\n}\n\n.editControlButtons button:first-of-type {\n  border-right: 1px solid rgba(0, 0, 0, 0.25);\n}\n\n/* End bottom navigation */\n\n/* List display */\n.list {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1rem;\n  padding-inline: 1rem;\n}\n\n.list:last-of-type {\n  margin-bottom: 3rem;\n}\n\n.list span {\n  background-color: var(--dim-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n}\n\ninput {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 0.2rem;\n  height: auto;\n}\n\n/* End list display */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,sCAAsC;EACtC,oCAAoC;EACpC,wCAAwC;EACxC,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2CAA2C;EAC3C,YAAY;EACZ,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA,qBAAqB;;AAErB;;;EAGE,yBAAyB;AAC3B;;AAEA;;;EAGE,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,sDAAsD;AACxD;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,gBAAgB;;AAEhB,YAAY;AACZ;EACE,uCAAuC;EACvC,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,4CAA4C;EAC5C,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA,wBAAwB;;AAExB;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB,EAAE,gBAAgB;EAC1C,qBAAqB,EAAE,YAAY;AACrC;;AAEA,gBAAgB;;AAEhB;EACE,yCAAyC;EACzC,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qCAAqC;EACrC,qBAAqB;AACvB;;AAEA,oBAAoB;;AAEpB;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,4BAA4B;EAC5B,yCAAyC;EACzC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,sBAAsB;;AAEtB;EACE,yCAAyC;EACzC,uCAAuC;EACvC,aAAa;EACb,qCAAqC;EACrC,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,SAAS;EACT,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,uCAAuC;EACvC,OAAO;EACP,eAAe;AACjB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA,0BAA0B;;AAE1B,iBAAiB;AACjB;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;EACvC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,YAAY;AACd;;AAEA,qBAAqB","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --light-background: rgb(252, 252, 252);\n  --dim-background: rgb(242, 242, 242);\n  --dimmest-background: rgb(235, 235, 235);\n  --accent-color: lightskyblue;\n  font-family: Roboto, sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--dimmest-background);\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  max-width: 960px;\n}\n\n/* Hover properties */\n\n.material-icons,\nbutton,\n.list {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.material-icons:hover,\nbutton:hover,\n.list:hover {\n  color: black;\n  cursor: pointer;\n}\n\nbutton:hover,\n.list span:hover {\n  background-color: var(--dimmest-background) !important;\n}\n\n.list {\n  flex-basis: 100% !important;\n}\n\n/* Pop-up message */\n\n.message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n\n.failure {\n  background-color: #ff000080;\n}\n\n.success {\n  background-color: #00ff3780;\n}\n\n/* Message end */\n\n/* Top bar */\n#topDisplay {\n  background-color: var(--dim-background);\n  padding: 1rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 57px;\n}\n\n#name {\n  font-size: 1.1rem;\n}\n\n/* End Top project bar */\n\n#contentWrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: scroll;\n}\n\n#contentWrapper::-webkit-scrollbar {\n  display: none;\n}\n\n#contentWrapper {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\n/* Single todo */\n\n.todo {\n  background-color: var(--light-background);\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-inline: 1rem;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todo:last-of-type {\n  margin-bottom: 1rem;\n}\n\n.title,\n.editInput {\n  max-width: 100%;\n  word-break: break-all;\n}\n\n.title {\n  height: 1.15rem;\n  overflow: hidden;\n}\n\n.not-expanded::after {\n  content: \"...\";\n}\n\n.expanded {\n  height: auto;\n  overflow-y: visible;\n}\n\n.todo .title,\n.dueDate {\n  margin-bottom: 1rem;\n}\n\n.dueDate {\n  align-self: center;\n}\n\n.todoControl {\n  display: flex;\n  justify-content: space-around;\n}\n\n.editInput {\n  margin-bottom: 0.5rem;\n}\n\n.editControlButtons {\n  display: flex;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 0.5rem;\n}\n\n/* End Single Todo */\n\n#newWrapper::before {\n  content: \"\";\n  height: 2rem;\n}\n\n#newWrapper {\n  display: flex;\n  justify-content: center;\n  height: 2rem;\n  background: transparent;\n}\n\n#new {\n  width: 100%;\n  margin-inline: 1rem;\n  border-radius: 0 0 2rem 2rem;\n  background-color: var(--light-background);\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Bottom navigation */\n\n#bottomNav {\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  background-color: var(--dim-background);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  font-size: 1.1rem;\n}\n\nbutton {\n  background: none;\n  border-color: rgba(0, 0, 0, 0.75);\n  border: 0;\n  height: 100%;\n  padding: 1rem;\n}\n\n.editControlButtons button {\n  background-color: var(--dim-background);\n  flex: 1;\n  padding: 0.5rem;\n}\n\n.editControlButtons button:first-of-type {\n  border-right: 1px solid rgba(0, 0, 0, 0.25);\n}\n\n/* End bottom navigation */\n\n/* List display */\n.list {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1rem;\n  padding-inline: 1rem;\n}\n\n.list:last-of-type {\n  margin-bottom: 3rem;\n}\n\n.list span {\n  background-color: var(--dim-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n}\n\ninput {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 0.2rem;\n  height: auto;\n}\n\n/* End list display */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries/pubsub */ "./src/modules/libraries/pubsub.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
// import { storage } from "./list";





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function UI() {
  const init = (() => {
    // Init
    document.body.innerHTML = `
    <div id="topDisplay"></div>
      
    <div id="contentWrapper"></div>
    
    <div id="bottomNav">
        <button data-tab="projects">Projects</button>
        <button data-tab="lists">Lists</button>
        <button data-tab="inbox">Inbox</button>
    </div>
    `;

    /* Cache elements */
    // Wrappers
    const topDisplay = document.querySelector("#topDisplay");
    const contentWrapper = document.querySelector("#contentWrapper");
    const bottomNav = document.querySelector("#bottomNav");
    // Nav buttons
    const projectsButton = document.querySelector(
      'button[data-tab="projects"]'
    );
    const listsButton = document.querySelector('button[data-tab="lists"]');
    const inboxButton = document.querySelector('button[data-tab="inbox"]');

    // Add events listeners and bind events
    inboxButton.addEventListener("click", () =>
      _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Display todos", { name: "Inbox", type: "list" })
    );
    listsButton.addEventListener("click", () =>
      _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Switch tab", "lists")
    );
    projectsButton.addEventListener("click", () =>
      _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Switch tab", "projects")
    );

    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("Switch tab", (name) => display.listOf(name));
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("Display todos", ({ name, type }) =>
      display.todosOf(name, type)
    );
  })();

  const display = {
    // Display list of all projects or lists
    listOf: (type) => {
      const storage = _storage__WEBPACK_IMPORTED_MODULE_3__.storageModule.getStorage();

      reset.dynamicContent();

      let topName;
      if (type == "projects") {
        topName = "Projects";
      } else if (type == "lists") {
        topName = "Lists";
      }

      const span = document.createElement("span");
      span.setAttribute("id", "name");
      span.textContent = topName;
      topDisplay.append(span);

      if (storage.projects.length == 1) {
        contentWrapper.style.cssText = "display: flex; flex-direction: column;";
      } else {
        contentWrapper.style.cssText =
          "display: flex; flex-direction: column; justify-content: space-around;";
      }

      if (type == "projects") {
        const newProject = create.plusButton();
        newProject.addEventListener("click", () => {
          (0,_project__WEBPACK_IMPORTED_MODULE_1__.UserProject)(prompt("Project name?"));
          display.storage("projects");
        });
      } else {
        const div = document.createElement("div");
        div.setAttribute("id", "newWrapper");
        contentWrapper.append(div);
      }

      for (const idx in storage[type]) {
        // Don't display the default project or list.
        if (!storage[type][idx].default) {
          let name = storage[type][idx].name;
          const div = document.createElement("div");
          div.classList.add("list");
          const span = document.createElement("span");
          span.textContent = name;
          div.append(span);
          contentWrapper.append(div);
          div.addEventListener("click", () => {
            if (type == "lists") {
              type = "list";
            } else {
              type = "project";
            }
            _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Display todos", { name, type });
          });
        }
      }
    },
    // Display todos either type a project or a list
    todosOf: (name, type) => {
      const storage = _storage__WEBPACK_IMPORTED_MODULE_3__.storageModule.getStorage();
      console.log(`getStorage:`, storage);

      reset.dynamicContent();

      contentWrapper.style.cssText = "flex: 1";

      if (type == "list") {
        const list = storage.list(name);

        topDisplay.innerHTML = `
                  <span id="name">${list.name}</span>
                  `;

        const newTodo = create.plusButton();
        newTodo.addEventListener("click", () => {
          const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.Todo)({
            title: prompt("Title"),
            dueDate: prompt("Due?"),
          });
          storage.projects[0].addTodo(todo);
          _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Display todos", { name, type });
        });

        for (const projectIdx in list.projects) {
          let projectObj = list.projects[projectIdx];
          let project = projectObj;
          create.todosFrom(project, type);
        }
      } else if (type == "project") {
        const project = storage.project(name);

        const newTodo = create.plusButton();
        newTodo.addEventListener("click", () => {
          const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.Todo)(prompt("Title"), prompt("Due?"));
          project.addTodo(todo);
          _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Display todos", { name, type });
        });

        if (!project.default) {
          topDisplay.innerHTML = `
          <span class="material-icons" data-control="delete">delete</span>
          <span id="name">${project.name}</span>
          <span class="material-icons" data-control="rename">edit</span>
          `;
          bindEvents.projectUI(project);
        } else {
          topDisplay.innerHTML = `
          <span id="name">${project.name}</span>
          `;
        }

        create.todosFrom(project, type);
      }
    },
  };

  const create = {
    plusButton: () => {
      const newTodo = document.createElement("div");
      newTodo.setAttribute("id", "newWrapper");
      newTodo.innerHTML = '<span class="material-icons" id="new">add</span>';
      contentWrapper.append(newTodo);
      return newTodo;
    },
    todosFrom: (project, type) => {
      const todosObject = project.todos;

      for (const todoName in todosObject) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        contentWrapper.append(todoDiv);

        const todo = todosObject[todoName];

        for (const prop in todo) {
          if (todo.hasOwnProperty(prop)) {
            const todoProp = document.createElement("div");
            todoProp.classList.add(prop);
            todoProp.textContent = `${todo[prop]}`;
            todoDiv.append(todoProp);
          }
          if (todo.complete) {
            todoDiv.style.backgroundColor = "#00ff3780";
          } else {
            todoDiv.style.backgroundColor = "var(--light-background)";
          }
        }

        const todoControl = document.createElement("div");
        todoControl.classList.add("todoControl");
        todoControl.innerHTML = `
                        <span class="material-icons" data-control="deleteTodo">delete</span>
                        <span class="material-icons" data-control="expand_more">expand_more</span>
                        <span class="material-icons" data-control="toggleComplete">done</span>
                        <span class="material-icons" data-control="editTodo">edit</span>
                        `;

        todoDiv.append(todoControl);

        bindEvents.singleTodoUI(todo, todoDiv, todoControl, project, type);
      }
    },
  };

  const bindEvents = {
    projectUI: (project) => {
      const deleteProject = document.querySelector(
        'span[data-control="delete"]'
      );
      const renameProject = document.querySelector(
        'span[data-control="rename"]'
      );

      deleteProject.addEventListener("click", () => {
        project.delete();
        display.todosOf("Inbox", "list");
      });

      renameProject.addEventListener("click", () => {
        project.rename(prompt("New project name?"));
        display.todosOf(project.name, "project");
      });
    },
    singleTodoUI: (todo, todoDiv, todoControl, project, type) => {
      const storage = _storage__WEBPACK_IMPORTED_MODULE_3__.storageModule.getStorage();

      const expandMore = todoControl.querySelector(
        'span[data-control="expand_more"]'
      );

      const deleteTodo = todoControl.querySelector(
        'span[data-control="deleteTodo"]'
      );

      const toggleComplete = todoControl.querySelector(
        'span[data-control="toggleComplete"]'
      );

      const editTodo = todoControl.querySelector(
        'span[data-control="editTodo"]'
      );

      editTodo.addEventListener("click", function () {
        let title = todoDiv.querySelector(".title");
        let dueDate = todoDiv.querySelector(".dueDate");

        // Make the textarea expand to text's expanded height
        const titleInput = document.createElement("textarea");
        title.classList.add("expanded");
        let titleStyle = window.getComputedStyle(title);
        let titleHeight = titleStyle.getPropertyValue("height");
        titleHeight = `calc(${titleHeight} + 1rem)`;
        titleInput.style.height = titleHeight;

        titleInput.classList.add("editInput");

        const dueDateInput = document.createElement("input");
        dueDateInput.classList.add("editInput");

        const titleContent = title.textContent;
        const dueDateContent = dueDate.textContent;

        titleInput.value = titleContent;
        dueDateInput.value = dueDateContent;

        title = todoDiv.replaceChild(titleInput, title);
        dueDate = todoDiv.replaceChild(dueDateInput, dueDate);

        const editControlButtons = document.createElement("div");
        editControlButtons.classList.add("editControlButtons");

        const accept = document.createElement("button");
        accept.textContent = "Edit";
        accept.addEventListener(
          "click",
          function () {
            this.title = titleInput.value;
            this.dueDate = dueDateInput.value;
            display.todosOf(project.name, "project");
          }.bind(todo)
        );

        const cancel = document.createElement("button");
        cancel.textContent = "Cancel";
        cancel.addEventListener("click", function () {
          display.todosOf(project.name, "project");
        });

        editControlButtons.append(accept, cancel);

        todoDiv.insertBefore(editControlButtons, todoControl);
      });

      expandMore.addEventListener("click", function () {
        this.parentElement.previousElementSibling.previousElementSibling.classList.toggle(
          "expanded"
        );
      });

      deleteTodo.addEventListener("click", () => {
        console.log(`project:`, project);
        project.removeTodo(todo);

        // Determine whether the current tab is a project or list tab
        if (storage.project(project.name)) {
          type = "project";
        } else {
          type = "list";
        }
        _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Display todos", { name: project.name, type: type });
      });

      toggleComplete.addEventListener(
        "click",
        function () {
          console.log(todo);
          let complete = todo.switchComplete();
          if (complete == true) {
            this.style.backgroundColor = "#00ff3780";
          } else {
            this.style.backgroundColor = "var(--light-background)";
          }
        }.bind(todoDiv)
      );

      // editTodo.addEventListener("click", function () {});
    },
  };

  const reset = {
    dynamicContent: () => {
      topDisplay.innerHTML = ``;
      contentWrapper.innerHTML = ``;
    },
  };

  return {
    display,
  };
})());


/***/ }),

/***/ "./src/modules/libraries/pubsub.js":
/*!*****************************************!*\
  !*** ./src/modules/libraries/pubsub.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//events - a super-basic Javascript (publish subscribe) pattern

let events = {
  events: {},
  // on
  subscribe: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  // off
  // remove: function (eventName, fn) {
  //   if (this.events[eventName]) {
  //     for (var i = 0; i < this.events[eventName].length; i++) {
  //       if (this.events[eventName][i] === fn) {
  //         this.events[eventName].splice(i, 1);
  //         break;
  //       }
  //     }
  //   }
  // },
  remove: function (eventName) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i]) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  // emit
  publish: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn) {
        fn(data);
      });
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

// events.subscribe('log', () => console.log(data)))
/* 
  events = {
      // eventName: [handler] 
      log: [() => console.log(data)] 
  }
  */

// events.publish('log', 'published!')

// runs each handler with given data for a given eventName

// So, when a module publishes an event, it runs handlers (functions) of a module that subscribes to it.


/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries/pubsub */ "./src/modules/libraries/pubsub.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");



const List = (data) => {
  if (!Array.isArray(data.projects)) {
    data.projects = [data.projects];
  }

  const listObj = Object.assign({}, data);

  _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Created an object", {
    object: listObj,
    type: "lists",
  });

  return listObj;
};




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "UserProject": () => (/* binding */ UserProject)
/* harmony export */ });
/* harmony import */ var _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries/pubsub */ "./src/modules/libraries/pubsub.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");



const proto = {
  addTodo(todo) {
    this.todos[todo.title] = todo;
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage");
  },
  removeTodo(todo) {
    delete this.todos[todo.title];
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage");
  },
};

let editMethods = {
  rename(newName) {
    console.log(`storage:`, _storage__WEBPACK_IMPORTED_MODULE_1__.default);
    this.name = newName;
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage");
  },
  delete() {
    let projectIdx = this.projectIdx(this.name);
    this.projects.splice(projectIdx, 1);
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage");
  },
};

const Project = (data) => (extendWith) => {
  let projectObj = Object.assign({}, proto, data, extendWith);

  _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Created an object", {
    object: projectObj,
    type: "projects",
  });

  return projectObj;
};

const UserProject = (data) => Project(data)(editMethods);




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageModule": () => (/* binding */ storageModule)
/* harmony export */ });
/* harmony import */ var _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries/pubsub */ "./src/modules/libraries/pubsub.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "./src/modules/list.js");





const proto = {
  project: function (name) {
    console.log(`this:`, this);
    for (let project of this.projects) {
      if (project.name == name) {
        return project;
      }
    }
  },
  projectIdx: function (name) {
    for (let [idx, project] of Object.entries(this.projects)) {
      if (project.name == name) {
        return idx;
      }
    }
  },
  list: function (name) {
    // console.log(`list:`, this);
    for (let list of this.lists) {
      if (list.name == name) {
        return list;
      }
    }
  },
};

const storageModule = (() => {
  let storage;

  const populate = () => {
    // console.log("[Start storage.init]");

    storage = Object.assign(proto, {
      lists: [],
      projects: [],
    });

    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("Created an object", ({ object, type }) => {
      storage[type].push(object);
    });

    // Populate storage
    const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)({
      name: "Inbox",
      todos: {},
    })({ default: true });

    let userProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.UserProject)({
      name: "Your project",
      todos: {},
    });

    // Create initial lists
    const inbox = (0,_list__WEBPACK_IMPORTED_MODULE_3__.List)({
      name: "Inbox",
      projects: defaultProject,
      default: true,
    });

    const all = (0,_list__WEBPACK_IMPORTED_MODULE_3__.List)({
      name: "All Tasks",
      projects: storage.projects,
    });

    // Create initial todos and add them to initial projects
    let initTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.Todo)({
      title: "Welcome",
      dueDate: "20-05-2000",
    });

    let newNewTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.Todo)({
      title: "Hello",
      dueDate: "01-01-2000",
    });

    // Does it make sense to store todo objects? I think so, because then, we have a reference...
    defaultProject.addTodo(initTodo);
    userProject.addTodo(newNewTodo);

    // console.log(`Storage after populating: `, storage);

    // console.log(
    //   `Local storage after populating:`,
    //   localStorage.getItem("storageLS")
    // );
  };
  const getStorage = () => {
    return storage;
  };

  return {
    getStorage,
    populate,
  };
})();




/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries/pubsub */ "./src/modules/libraries/pubsub.js");


const proto = {
  switchComplete() {
    this.complete = !this.complete;

    if (this.complete) {
      console.log("Completed!");
    } else if (!this.complete) {
      console.log("Not done (yet)!");
    }

    return this.complete;
  },
};

const Todo = (data) => {
  let todoObj = Object.assign(Object.create(proto), {
    title: data.title,
    dueDate: data.dueDate,
  });

  Object.defineProperty(todoObj, "complete", {
    value: data.complete || false,
    enumerable: false,
    writable: true,
  });

  return todoObj;
};




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
/******/ 			id: moduleId,
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");




// localStorage.removeItem("storageLS");
// localStorage.clear();

if (!localStorage.getItem("storageLS")) {
  _modules_storage__WEBPACK_IMPORTED_MODULE_0__.storageModule.populate();
}

_modules_UI__WEBPACK_IMPORTED_MODULE_2__.default.display.todosOf("Inbox", "list");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9saWJyYXJpZXMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9saXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG9FQUFvRSwyQkFBMkIsR0FBRyxXQUFXLDJDQUEyQyx5Q0FBeUMsNkNBQTZDLGlDQUFpQyxvQ0FBb0MsR0FBRyxVQUFVLGlCQUFpQixHQUFHLFVBQVUsZ0RBQWdELGlCQUFpQixtQkFBbUIsa0JBQWtCLDJCQUEyQixxQkFBcUIsR0FBRyxnRUFBZ0UsOEJBQThCLEdBQUcsd0RBQXdELGlCQUFpQixvQkFBb0IsR0FBRyxxQ0FBcUMsMkRBQTJELEdBQUcsV0FBVyxnQ0FBZ0MsR0FBRyxzQ0FBc0Msa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcsY0FBYyxnQ0FBZ0MsR0FBRyxjQUFjLGdDQUFnQyxHQUFHLHFEQUFxRCw0Q0FBNEMsa0JBQWtCLGtCQUFrQixrQ0FBa0Msd0JBQXdCLGlEQUFpRCxpQkFBaUIsR0FBRyxXQUFXLHNCQUFzQixHQUFHLGtEQUFrRCxrQkFBa0IsMkJBQTJCLFlBQVkscUJBQXFCLEdBQUcsd0NBQXdDLGtCQUFrQixHQUFHLHFCQUFxQiw2QkFBNkIsNENBQTRDLGlCQUFpQixnQ0FBZ0MsOENBQThDLGtCQUFrQixxQkFBcUIsd0JBQXdCLHdCQUF3QixrQkFBa0IsMkJBQTJCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHlCQUF5QixvQkFBb0IsMEJBQTBCLEdBQUcsWUFBWSxvQkFBb0IscUJBQXFCLEdBQUcsMEJBQTBCLHFCQUFxQixHQUFHLGVB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QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0VBQXNCO0FBQ3hCOztBQUVBLGdFQUFrQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWxpZ2h0LWJhY2tncm91bmQ6IHJnYigyNTIsIDI1MiwgMjUyKTtcXG4gIC0tZGltLWJhY2tncm91bmQ6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gIC0tZGltbWVzdC1iYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICAtLWFjY2VudC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltbWVzdC1iYWNrZ3JvdW5kKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbn1cXG5cXG4vKiBIb3ZlciBwcm9wZXJ0aWVzICovXFxuXFxuLm1hdGVyaWFsLWljb25zLFxcbmJ1dHRvbixcXG4ubGlzdCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnM6aG92ZXIsXFxuYnV0dG9uOmhvdmVyLFxcbi5saXN0OmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbi5saXN0IHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltbWVzdC1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBmbGV4LWJhc2lzOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFBvcC11cCBtZXNzYWdlICovXFxuXFxuLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mYWlsdXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA4MDtcXG59XFxuXFxuLnN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmYzNzgwO1xcbn1cXG5cXG4vKiBNZXNzYWdlIGVuZCAqL1xcblxcbi8qIFRvcCBiYXIgKi9cXG4jdG9wRGlzcGxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW0tYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgaGVpZ2h0OiA1N3B4O1xcbn1cXG5cXG4jbmFtZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLyogRW5kIFRvcCBwcm9qZWN0IGJhciAqL1xcblxcbiNjb250ZW50V3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jY29udGVudFdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250ZW50V3JhcHBlciB7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuLyogU2luZ2xlIHRvZG8gKi9cXG5cXG4udG9kbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWlubGluZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG86bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50aXRsZSxcXG4uZWRpdElucHV0IHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGhlaWdodDogMS4xNXJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5ub3QtZXhwYW5kZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuLi5cXFwiO1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcXG59XFxuXFxuLnRvZG8gLnRpdGxlLFxcbi5kdWVEYXRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9Db250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmVkaXRJbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5lZGl0Q29udHJvbEJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogRW5kIFNpbmdsZSBUb2RvICovXFxuXFxuI25ld1dyYXBwZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuI25ld1dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNuZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4taW5saW5lOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDJyZW0gMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogQm90dG9tIG5hdmlnYXRpb24gKi9cXG5cXG4jYm90dG9tTmF2IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBib3JkZXI6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZWRpdENvbnRyb2xCdXR0b25zIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW0tYmFja2dyb3VuZCk7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZWRpdENvbnRyb2xCdXR0b25zIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi8qIEVuZCBib3R0b20gbmF2aWdhdGlvbiAqL1xcblxcbi8qIExpc3QgZGlzcGxheSAqL1xcbi5saXN0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG59XFxuXFxuLmxpc3Q6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5saXN0IHNwYW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogRW5kIGxpc3QgZGlzcGxheSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxvQ0FBb0M7RUFDcEMsd0NBQXdDO0VBQ3hDLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQSxxQkFBcUI7O0FBRXJCOzs7RUFHRSx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBLGdCQUFnQjs7QUFFaEIsWUFBWTtBQUNaO0VBQ0UsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHdCQUF3Qjs7QUFFeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0IsRUFBRSxnQkFBZ0I7RUFDMUMscUJBQXFCLEVBQUUsWUFBWTtBQUNyQzs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLHFCQUFxQjtBQUN2Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLHlDQUF5QztFQUN6Qyx1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLE9BQU87RUFDUCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBLDBCQUEwQjs7QUFFMUIsaUJBQWlCO0FBQ2pCO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1iYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNTIsIDI1Mik7XFxuICAtLWRpbS1iYWNrZ3JvdW5kOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAtLWRpbW1lc3QtYmFja2dyb3VuZDogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgLS1hY2NlbnQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbW1lc3QtYmFja2dyb3VuZCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA5NjBweDtcXG59XFxuXFxuLyogSG92ZXIgcHJvcGVydGllcyAqL1xcblxcbi5tYXRlcmlhbC1pY29ucyxcXG5idXR0b24sXFxuLmxpc3Qge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zOmhvdmVyLFxcbmJ1dHRvbjpob3ZlcixcXG4ubGlzdDpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4ubGlzdCBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbW1lc3QtYmFja2dyb3VuZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgZmxleC1iYXNpczogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBQb3AtdXAgbWVzc2FnZSAqL1xcblxcbi5tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZmFpbHVyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwODA7XFxufVxcblxcbi5zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmMzc4MDtcXG59XFxuXFxuLyogTWVzc2FnZSBlbmQgKi9cXG5cXG4vKiBUb3AgYmFyICovXFxuI3RvcERpc3BsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGhlaWdodDogNTdweDtcXG59XFxuXFxuI25hbWUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi8qIEVuZCBUb3AgcHJvamVjdCBiYXIgKi9cXG5cXG4jY29udGVudFdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI2NvbnRlbnRXcmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY29udGVudFdyYXBwZXIge1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxufVxcblxcbi8qIFNpbmdsZSB0b2RvICovXFxuXFxuLnRvZG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1pbmxpbmU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvOmxhc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGl0bGUsXFxuLmVkaXRJbnB1dCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi50aXRsZSB7XFxuICBoZWlnaHQ6IDEuMTVyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubm90LWV4cGFuZGVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLi4uXFxcIjtcXG59XFxuXFxuLmV4cGFuZGVkIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG92ZXJmbG93LXk6IHZpc2libGU7XFxufVxcblxcbi50b2RvIC50aXRsZSxcXG4uZHVlRGF0ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvQ29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5lZGl0SW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZWRpdENvbnRyb2xCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIEVuZCBTaW5nbGUgVG9kbyAqL1xcblxcbiNuZXdXcmFwcGVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNuZXdXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jbmV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWlubGluZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAycmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEJvdHRvbSBuYXZpZ2F0aW9uICovXFxuXFxuI2JvdHRvbU5hdiB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbS1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmVkaXRDb250cm9sQnV0dG9ucyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltLWJhY2tncm91bmQpO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmVkaXRDb250cm9sQnV0dG9ucyBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4vKiBFbmQgYm90dG9tIG5hdmlnYXRpb24gKi9cXG5cXG4vKiBMaXN0IGRpc3BsYXkgKi9cXG4ubGlzdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxufVxcblxcbi5saXN0Omxhc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ubGlzdCBzcGFuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbS1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIEVuZCBsaXN0IGRpc3BsYXkgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIvLyBpbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9saWJyYXJpZXMvcHVic3ViXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBVc2VyUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBzdG9yYWdlTW9kdWxlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gVUkoKSB7XG4gIGNvbnN0IGluaXQgPSAoKCkgPT4ge1xuICAgIC8vIEluaXRcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGlkPVwidG9wRGlzcGxheVwiPjwvZGl2PlxuICAgICAgXG4gICAgPGRpdiBpZD1cImNvbnRlbnRXcmFwcGVyXCI+PC9kaXY+XG4gICAgXG4gICAgPGRpdiBpZD1cImJvdHRvbU5hdlwiPlxuICAgICAgICA8YnV0dG9uIGRhdGEtdGFiPVwicHJvamVjdHNcIj5Qcm9qZWN0czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGRhdGEtdGFiPVwibGlzdHNcIj5MaXN0czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGRhdGEtdGFiPVwiaW5ib3hcIj5JbmJveDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICAvKiBDYWNoZSBlbGVtZW50cyAqL1xuICAgIC8vIFdyYXBwZXJzXG4gICAgY29uc3QgdG9wRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wRGlzcGxheVwiKTtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFdyYXBwZXJcIik7XG4gICAgY29uc3QgYm90dG9tTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3R0b21OYXZcIik7XG4gICAgLy8gTmF2IGJ1dHRvbnNcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYnV0dG9uW2RhdGEtdGFiPVwicHJvamVjdHNcIl0nXG4gICAgKTtcbiAgICBjb25zdCBsaXN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLXRhYj1cImxpc3RzXCJdJyk7XG4gICAgY29uc3QgaW5ib3hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS10YWI9XCJpbmJveFwiXScpO1xuXG4gICAgLy8gQWRkIGV2ZW50cyBsaXN0ZW5lcnMgYW5kIGJpbmQgZXZlbnRzXG4gICAgaW5ib3hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICBldmVudHMucHVibGlzaChcIkRpc3BsYXkgdG9kb3NcIiwgeyBuYW1lOiBcIkluYm94XCIsIHR5cGU6IFwibGlzdFwiIH0pXG4gICAgKTtcbiAgICBsaXN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIGV2ZW50cy5wdWJsaXNoKFwiU3dpdGNoIHRhYlwiLCBcImxpc3RzXCIpXG4gICAgKTtcbiAgICBwcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIGV2ZW50cy5wdWJsaXNoKFwiU3dpdGNoIHRhYlwiLCBcInByb2plY3RzXCIpXG4gICAgKTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoXCJTd2l0Y2ggdGFiXCIsIChuYW1lKSA9PiBkaXNwbGF5Lmxpc3RPZihuYW1lKSk7XG4gICAgZXZlbnRzLnN1YnNjcmliZShcIkRpc3BsYXkgdG9kb3NcIiwgKHsgbmFtZSwgdHlwZSB9KSA9PlxuICAgICAgZGlzcGxheS50b2Rvc09mKG5hbWUsIHR5cGUpXG4gICAgKTtcbiAgfSkoKTtcblxuICBjb25zdCBkaXNwbGF5ID0ge1xuICAgIC8vIERpc3BsYXkgbGlzdCBvZiBhbGwgcHJvamVjdHMgb3IgbGlzdHNcbiAgICBsaXN0T2Y6ICh0eXBlKSA9PiB7XG4gICAgICBjb25zdCBzdG9yYWdlID0gc3RvcmFnZU1vZHVsZS5nZXRTdG9yYWdlKCk7XG5cbiAgICAgIHJlc2V0LmR5bmFtaWNDb250ZW50KCk7XG5cbiAgICAgIGxldCB0b3BOYW1lO1xuICAgICAgaWYgKHR5cGUgPT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgICAgIHRvcE5hbWUgPSBcIlByb2plY3RzXCI7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJsaXN0c1wiKSB7XG4gICAgICAgIHRvcE5hbWUgPSBcIkxpc3RzXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRvcE5hbWU7XG4gICAgICB0b3BEaXNwbGF5LmFwcGVuZChzcGFuKTtcblxuICAgICAgaWYgKHN0b3JhZ2UucHJvamVjdHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgY29udGVudFdyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgIFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09IFwicHJvamVjdHNcIikge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlLnBsdXNCdXR0b24oKTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIFVzZXJQcm9qZWN0KHByb21wdChcIlByb2plY3QgbmFtZT9cIikpO1xuICAgICAgICAgIGRpc3BsYXkuc3RvcmFnZShcInByb2plY3RzXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1dyYXBwZXJcIik7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZChkaXYpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGlkeCBpbiBzdG9yYWdlW3R5cGVdKSB7XG4gICAgICAgIC8vIERvbid0IGRpc3BsYXkgdGhlIGRlZmF1bHQgcHJvamVjdCBvciBsaXN0LlxuICAgICAgICBpZiAoIXN0b3JhZ2VbdHlwZV1baWR4XS5kZWZhdWx0KSB7XG4gICAgICAgICAgbGV0IG5hbWUgPSBzdG9yYWdlW3R5cGVdW2lkeF0ubmFtZTtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgZGl2LmFwcGVuZChzcGFuKTtcbiAgICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoZGl2KTtcbiAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlID09IFwibGlzdHNcIikge1xuICAgICAgICAgICAgICB0eXBlID0gXCJsaXN0XCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0eXBlID0gXCJwcm9qZWN0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudHMucHVibGlzaChcIkRpc3BsYXkgdG9kb3NcIiwgeyBuYW1lLCB0eXBlIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBEaXNwbGF5IHRvZG9zIGVpdGhlciB0eXBlIGEgcHJvamVjdCBvciBhIGxpc3RcbiAgICB0b2Rvc09mOiAobmFtZSwgdHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IHN0b3JhZ2VNb2R1bGUuZ2V0U3RvcmFnZSgpO1xuICAgICAgY29uc29sZS5sb2coYGdldFN0b3JhZ2U6YCwgc3RvcmFnZSk7XG5cbiAgICAgIHJlc2V0LmR5bmFtaWNDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnRXcmFwcGVyLnN0eWxlLmNzc1RleHQgPSBcImZsZXg6IDFcIjtcblxuICAgICAgaWYgKHR5cGUgPT0gXCJsaXN0XCIpIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHN0b3JhZ2UubGlzdChuYW1lKTtcblxuICAgICAgICB0b3BEaXNwbGF5LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibmFtZVwiPiR7bGlzdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZS5wbHVzQnV0dG9uKCk7XG4gICAgICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b2RvID0gVG9kbyh7XG4gICAgICAgICAgICB0aXRsZTogcHJvbXB0KFwiVGl0bGVcIiksXG4gICAgICAgICAgICBkdWVEYXRlOiBwcm9tcHQoXCJEdWU/XCIpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN0b3JhZ2UucHJvamVjdHNbMF0uYWRkVG9kbyh0b2RvKTtcbiAgICAgICAgICBldmVudHMucHVibGlzaChcIkRpc3BsYXkgdG9kb3NcIiwgeyBuYW1lLCB0eXBlIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RJZHggaW4gbGlzdC5wcm9qZWN0cykge1xuICAgICAgICAgIGxldCBwcm9qZWN0T2JqID0gbGlzdC5wcm9qZWN0c1twcm9qZWN0SWR4XTtcbiAgICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RPYmo7XG4gICAgICAgICAgY3JlYXRlLnRvZG9zRnJvbShwcm9qZWN0LCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwicHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBzdG9yYWdlLnByb2plY3QobmFtZSk7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZS5wbHVzQnV0dG9uKCk7XG4gICAgICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b2RvID0gVG9kbyhwcm9tcHQoXCJUaXRsZVwiKSwgcHJvbXB0KFwiRHVlP1wiKSk7XG4gICAgICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKFwiRGlzcGxheSB0b2Rvc1wiLCB7IG5hbWUsIHR5cGUgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcHJvamVjdC5kZWZhdWx0KSB7XG4gICAgICAgICAgdG9wRGlzcGxheS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtY29udHJvbD1cImRlbGV0ZVwiPmRlbGV0ZTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBpZD1cIm5hbWVcIj4ke3Byb2plY3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtY29udHJvbD1cInJlbmFtZVwiPmVkaXQ8L3NwYW4+XG4gICAgICAgICAgYDtcbiAgICAgICAgICBiaW5kRXZlbnRzLnByb2plY3RVSShwcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3BEaXNwbGF5LmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8c3BhbiBpZD1cIm5hbWVcIj4ke3Byb2plY3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0ZS50b2Rvc0Zyb20ocHJvamVjdCwgdHlwZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBjcmVhdGUgPSB7XG4gICAgcGx1c0J1dHRvbjogKCkgPT4ge1xuICAgICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdUb2RvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3V3JhcHBlclwiKTtcbiAgICAgIG5ld1RvZG8uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBpZD1cIm5ld1wiPmFkZDwvc3Bhbj4nO1xuICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kKG5ld1RvZG8pO1xuICAgICAgcmV0dXJuIG5ld1RvZG87XG4gICAgfSxcbiAgICB0b2Rvc0Zyb206IChwcm9qZWN0LCB0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0b2Rvc09iamVjdCA9IHByb2plY3QudG9kb3M7XG5cbiAgICAgIGZvciAoY29uc3QgdG9kb05hbWUgaW4gdG9kb3NPYmplY3QpIHtcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZCh0b2RvRGl2KTtcblxuICAgICAgICBjb25zdCB0b2RvID0gdG9kb3NPYmplY3RbdG9kb05hbWVdO1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0b2RvKSB7XG4gICAgICAgICAgaWYgKHRvZG8uaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Qcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9Qcm9wLmNsYXNzTGlzdC5hZGQocHJvcCk7XG4gICAgICAgICAgICB0b2RvUHJvcC50ZXh0Q29udGVudCA9IGAke3RvZG9bcHJvcF19YDtcbiAgICAgICAgICAgIHRvZG9EaXYuYXBwZW5kKHRvZG9Qcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvZG8uY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRvZG9EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDBmZjM3ODBcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWxpZ2h0LWJhY2tncm91bmQpXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9kb0NvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvQ29udHJvbC5jbGFzc0xpc3QuYWRkKFwidG9kb0NvbnRyb2xcIik7XG4gICAgICAgIHRvZG9Db250cm9sLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLWNvbnRyb2w9XCJkZWxldGVUb2RvXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtY29udHJvbD1cImV4cGFuZF9tb3JlXCI+ZXhwYW5kX21vcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS1jb250cm9sPVwidG9nZ2xlQ29tcGxldGVcIj5kb25lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtY29udHJvbD1cImVkaXRUb2RvXCI+ZWRpdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQodG9kb0NvbnRyb2wpO1xuXG4gICAgICAgIGJpbmRFdmVudHMuc2luZ2xlVG9kb1VJKHRvZG8sIHRvZG9EaXYsIHRvZG9Db250cm9sLCBwcm9qZWN0LCB0eXBlKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGJpbmRFdmVudHMgPSB7XG4gICAgcHJvamVjdFVJOiAocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdzcGFuW2RhdGEtY29udHJvbD1cImRlbGV0ZVwiXSdcbiAgICAgICk7XG4gICAgICBjb25zdCByZW5hbWVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ3NwYW5bZGF0YS1jb250cm9sPVwicmVuYW1lXCJdJ1xuICAgICAgKTtcblxuICAgICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmRlbGV0ZSgpO1xuICAgICAgICBkaXNwbGF5LnRvZG9zT2YoXCJJbmJveFwiLCBcImxpc3RcIik7XG4gICAgICB9KTtcblxuICAgICAgcmVuYW1lUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnJlbmFtZShwcm9tcHQoXCJOZXcgcHJvamVjdCBuYW1lP1wiKSk7XG4gICAgICAgIGRpc3BsYXkudG9kb3NPZihwcm9qZWN0Lm5hbWUsIFwicHJvamVjdFwiKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2luZ2xlVG9kb1VJOiAodG9kbywgdG9kb0RpdiwgdG9kb0NvbnRyb2wsIHByb2plY3QsIHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBzdG9yYWdlTW9kdWxlLmdldFN0b3JhZ2UoKTtcblxuICAgICAgY29uc3QgZXhwYW5kTW9yZSA9IHRvZG9Db250cm9sLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdzcGFuW2RhdGEtY29udHJvbD1cImV4cGFuZF9tb3JlXCJdJ1xuICAgICAgKTtcblxuICAgICAgY29uc3QgZGVsZXRlVG9kbyA9IHRvZG9Db250cm9sLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdzcGFuW2RhdGEtY29udHJvbD1cImRlbGV0ZVRvZG9cIl0nXG4gICAgICApO1xuXG4gICAgICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9IHRvZG9Db250cm9sLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdzcGFuW2RhdGEtY29udHJvbD1cInRvZ2dsZUNvbXBsZXRlXCJdJ1xuICAgICAgKTtcblxuICAgICAgY29uc3QgZWRpdFRvZG8gPSB0b2RvQ29udHJvbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnc3BhbltkYXRhLWNvbnRyb2w9XCJlZGl0VG9kb1wiXSdcbiAgICAgICk7XG5cbiAgICAgIGVkaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRvZG9EaXYucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSB0b2RvRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVwiKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSB0ZXh0YXJlYSBleHBhbmQgdG8gdGV4dCdzIGV4cGFuZGVkIGhlaWdodFxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG4gICAgICAgIGxldCB0aXRsZVN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGl0bGUpO1xuICAgICAgICBsZXQgdGl0bGVIZWlnaHQgPSB0aXRsZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJoZWlnaHRcIik7XG4gICAgICAgIHRpdGxlSGVpZ2h0ID0gYGNhbGMoJHt0aXRsZUhlaWdodH0gKyAxcmVtKWA7XG4gICAgICAgIHRpdGxlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gdGl0bGVIZWlnaHQ7XG5cbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdElucHV0XCIpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0SW5wdXRcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGVDb250ZW50ID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVDb250ZW50ID0gZHVlRGF0ZS50ZXh0Q29udGVudDtcblxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGVDb250ZW50O1xuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlQ29udGVudDtcblxuICAgICAgICB0aXRsZSA9IHRvZG9EaXYucmVwbGFjZUNoaWxkKHRpdGxlSW5wdXQsIHRpdGxlKTtcbiAgICAgICAgZHVlRGF0ZSA9IHRvZG9EaXYucmVwbGFjZUNoaWxkKGR1ZURhdGVJbnB1dCwgZHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3QgZWRpdENvbnRyb2xCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWRpdENvbnRyb2xCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJlZGl0Q29udHJvbEJ1dHRvbnNcIik7XG5cbiAgICAgICAgY29uc3QgYWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWNjZXB0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGRpc3BsYXkudG9kb3NPZihwcm9qZWN0Lm5hbWUsIFwicHJvamVjdFwiKTtcbiAgICAgICAgICB9LmJpbmQodG9kbylcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXNwbGF5LnRvZG9zT2YocHJvamVjdC5uYW1lLCBcInByb2plY3RcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVkaXRDb250cm9sQnV0dG9ucy5hcHBlbmQoYWNjZXB0LCBjYW5jZWwpO1xuXG4gICAgICAgIHRvZG9EaXYuaW5zZXJ0QmVmb3JlKGVkaXRDb250cm9sQnV0dG9ucywgdG9kb0NvbnRyb2wpO1xuICAgICAgfSk7XG5cbiAgICAgIGV4cGFuZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgICAgIFwiZXhwYW5kZWRcIlxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGRlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYHByb2plY3Q6YCwgcHJvamVjdCk7XG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvKTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCB0YWIgaXMgYSBwcm9qZWN0IG9yIGxpc3QgdGFiXG4gICAgICAgIGlmIChzdG9yYWdlLnByb2plY3QocHJvamVjdC5uYW1lKSkge1xuICAgICAgICAgIHR5cGUgPSBcInByb2plY3RcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gXCJsaXN0XCI7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goXCJEaXNwbGF5IHRvZG9zXCIsIHsgbmFtZTogcHJvamVjdC5uYW1lLCB0eXBlOiB0eXBlIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRvZ2dsZUNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICAgIGxldCBjb21wbGV0ZSA9IHRvZG8uc3dpdGNoQ29tcGxldGUoKTtcbiAgICAgICAgICBpZiAoY29tcGxldGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMGZmMzc4MFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbGlnaHQtYmFja2dyb3VuZClcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0b2RvRGl2KVxuICAgICAgKTtcblxuICAgICAgLy8gZWRpdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHJlc2V0ID0ge1xuICAgIGR5bmFtaWNDb250ZW50OiAoKSA9PiB7XG4gICAgICB0b3BEaXNwbGF5LmlubmVySFRNTCA9IGBgO1xuICAgICAgY29udGVudFdyYXBwZXIuaW5uZXJIVE1MID0gYGA7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXksXG4gIH07XG59KSgpO1xuIiwiLy9ldmVudHMgLSBhIHN1cGVyLWJhc2ljIEphdmFzY3JpcHQgKHB1Ymxpc2ggc3Vic2NyaWJlKSBwYXR0ZXJuXG5cbmxldCBldmVudHMgPSB7XG4gIGV2ZW50czoge30sXG4gIC8vIG9uXG4gIHN1YnNjcmliZTogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xuICB9LFxuICAvLyBvZmZcbiAgLy8gcmVtb3ZlOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICAvLyAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gIC8vICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gIC8vICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0pIHtcbiAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gZW1pdFxuICBwdWJsaXNoOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgZm4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG5cbi8vIGV2ZW50cy5zdWJzY3JpYmUoJ2xvZycsICgpID0+IGNvbnNvbGUubG9nKGRhdGEpKSlcbi8qIFxuICBldmVudHMgPSB7XG4gICAgICAvLyBldmVudE5hbWU6IFtoYW5kbGVyXSBcbiAgICAgIGxvZzogWygpID0+IGNvbnNvbGUubG9nKGRhdGEpXSBcbiAgfVxuICAqL1xuXG4vLyBldmVudHMucHVibGlzaCgnbG9nJywgJ3B1Ymxpc2hlZCEnKVxuXG4vLyBydW5zIGVhY2ggaGFuZGxlciB3aXRoIGdpdmVuIGRhdGEgZm9yIGEgZ2l2ZW4gZXZlbnROYW1lXG5cbi8vIFNvLCB3aGVuIGEgbW9kdWxlIHB1Ymxpc2hlcyBhbiBldmVudCwgaXQgcnVucyBoYW5kbGVycyAoZnVuY3Rpb25zKSBvZiBhIG1vZHVsZSB0aGF0IHN1YnNjcmliZXMgdG8gaXQuXG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2xpYnJhcmllcy9wdWJzdWJcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgTGlzdCA9IChkYXRhKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnByb2plY3RzKSkge1xuICAgIGRhdGEucHJvamVjdHMgPSBbZGF0YS5wcm9qZWN0c107XG4gIH1cblxuICBjb25zdCBsaXN0T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG5cbiAgZXZlbnRzLnB1Ymxpc2goXCJDcmVhdGVkIGFuIG9iamVjdFwiLCB7XG4gICAgb2JqZWN0OiBsaXN0T2JqLFxuICAgIHR5cGU6IFwibGlzdHNcIixcbiAgfSk7XG5cbiAgcmV0dXJuIGxpc3RPYmo7XG59O1xuXG5leHBvcnQgeyBMaXN0IH07XG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2xpYnJhcmllcy9wdWJzdWJcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgcHJvdG8gPSB7XG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3NbdG9kby50aXRsZV0gPSB0b2RvO1xuICAgIGV2ZW50cy5wdWJsaXNoKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIik7XG4gIH0sXG4gIHJlbW92ZVRvZG8odG9kbykge1xuICAgIGRlbGV0ZSB0aGlzLnRvZG9zW3RvZG8udGl0bGVdO1xuICAgIGV2ZW50cy5wdWJsaXNoKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIik7XG4gIH0sXG59O1xuXG5sZXQgZWRpdE1ldGhvZHMgPSB7XG4gIHJlbmFtZShuZXdOYW1lKSB7XG4gICAgY29uc29sZS5sb2coYHN0b3JhZ2U6YCwgc3RvcmFnZSk7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICBldmVudHMucHVibGlzaChcIlVwZGF0ZSBsb2NhbCBzdG9yYWdlXCIpO1xuICB9LFxuICBkZWxldGUoKSB7XG4gICAgbGV0IHByb2plY3RJZHggPSB0aGlzLnByb2plY3RJZHgodGhpcy5uYW1lKTtcbiAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SWR4LCAxKTtcbiAgICBldmVudHMucHVibGlzaChcIlVwZGF0ZSBsb2NhbCBzdG9yYWdlXCIpO1xuICB9LFxufTtcblxuY29uc3QgUHJvamVjdCA9IChkYXRhKSA9PiAoZXh0ZW5kV2l0aCkgPT4ge1xuICBsZXQgcHJvamVjdE9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCBkYXRhLCBleHRlbmRXaXRoKTtcblxuICBldmVudHMucHVibGlzaChcIkNyZWF0ZWQgYW4gb2JqZWN0XCIsIHtcbiAgICBvYmplY3Q6IHByb2plY3RPYmosXG4gICAgdHlwZTogXCJwcm9qZWN0c1wiLFxuICB9KTtcblxuICByZXR1cm4gcHJvamVjdE9iajtcbn07XG5cbmNvbnN0IFVzZXJQcm9qZWN0ID0gKGRhdGEpID0+IFByb2plY3QoZGF0YSkoZWRpdE1ldGhvZHMpO1xuXG5leHBvcnQgeyBQcm9qZWN0LCBVc2VyUHJvamVjdCB9O1xuIiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9saWJyYXJpZXMvcHVic3ViXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBVc2VyUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuXG5jb25zdCBwcm90byA9IHtcbiAgcHJvamVjdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBjb25zb2xlLmxvZyhgdGhpczpgLCB0aGlzKTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHByb2plY3RJZHg6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgZm9yIChsZXQgW2lkeCwgcHJvamVjdF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wcm9qZWN0cykpIHtcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGlzdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgbGlzdDpgLCB0aGlzKTtcbiAgICBmb3IgKGxldCBsaXN0IG9mIHRoaXMubGlzdHMpIHtcbiAgICAgIGlmIChsaXN0Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5jb25zdCBzdG9yYWdlTW9kdWxlID0gKCgpID0+IHtcbiAgbGV0IHN0b3JhZ2U7XG5cbiAgY29uc3QgcG9wdWxhdGUgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJbU3RhcnQgc3RvcmFnZS5pbml0XVwiKTtcblxuICAgIHN0b3JhZ2UgPSBPYmplY3QuYXNzaWduKHByb3RvLCB7XG4gICAgICBsaXN0czogW10sXG4gICAgICBwcm9qZWN0czogW10sXG4gICAgfSk7XG5cbiAgICBldmVudHMuc3Vic2NyaWJlKFwiQ3JlYXRlZCBhbiBvYmplY3RcIiwgKHsgb2JqZWN0LCB0eXBlIH0pID0+IHtcbiAgICAgIHN0b3JhZ2VbdHlwZV0ucHVzaChvYmplY3QpO1xuICAgIH0pO1xuXG4gICAgLy8gUG9wdWxhdGUgc3RvcmFnZVxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCh7XG4gICAgICBuYW1lOiBcIkluYm94XCIsXG4gICAgICB0b2Rvczoge30sXG4gICAgfSkoeyBkZWZhdWx0OiB0cnVlIH0pO1xuXG4gICAgbGV0IHVzZXJQcm9qZWN0ID0gVXNlclByb2plY3Qoe1xuICAgICAgbmFtZTogXCJZb3VyIHByb2plY3RcIixcbiAgICAgIHRvZG9zOiB7fSxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIGxpc3RzXG4gICAgY29uc3QgaW5ib3ggPSBMaXN0KHtcbiAgICAgIG5hbWU6IFwiSW5ib3hcIixcbiAgICAgIHByb2plY3RzOiBkZWZhdWx0UHJvamVjdCxcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBhbGwgPSBMaXN0KHtcbiAgICAgIG5hbWU6IFwiQWxsIFRhc2tzXCIsXG4gICAgICBwcm9qZWN0czogc3RvcmFnZS5wcm9qZWN0cyxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIHRvZG9zIGFuZCBhZGQgdGhlbSB0byBpbml0aWFsIHByb2plY3RzXG4gICAgbGV0IGluaXRUb2RvID0gVG9kbyh7XG4gICAgICB0aXRsZTogXCJXZWxjb21lXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwLTA1LTIwMDBcIixcbiAgICB9KTtcblxuICAgIGxldCBuZXdOZXdUb2RvID0gVG9kbyh7XG4gICAgICB0aXRsZTogXCJIZWxsb1wiLFxuICAgICAgZHVlRGF0ZTogXCIwMS0wMS0yMDAwXCIsXG4gICAgfSk7XG5cbiAgICAvLyBEb2VzIGl0IG1ha2Ugc2Vuc2UgdG8gc3RvcmUgdG9kbyBvYmplY3RzPyBJIHRoaW5rIHNvLCBiZWNhdXNlIHRoZW4sIHdlIGhhdmUgYSByZWZlcmVuY2UuLi5cbiAgICBkZWZhdWx0UHJvamVjdC5hZGRUb2RvKGluaXRUb2RvKTtcbiAgICB1c2VyUHJvamVjdC5hZGRUb2RvKG5ld05ld1RvZG8pO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFN0b3JhZ2UgYWZ0ZXIgcG9wdWxhdGluZzogYCwgc3RvcmFnZSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAvLyAgIGBMb2NhbCBzdG9yYWdlIGFmdGVyIHBvcHVsYXRpbmc6YCxcbiAgICAvLyAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZUxTXCIpXG4gICAgLy8gKTtcbiAgfTtcbiAgY29uc3QgZ2V0U3RvcmFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RvcmFnZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFN0b3JhZ2UsXG4gICAgcG9wdWxhdGUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBzdG9yYWdlTW9kdWxlIH07XG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2xpYnJhcmllcy9wdWJzdWJcIjtcblxuY29uc3QgcHJvdG8gPSB7XG4gIHN3aXRjaENvbXBsZXRlKCkge1xuICAgIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcblxuICAgIGlmICh0aGlzLmNvbXBsZXRlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCFcIik7XG4gICAgfSBlbHNlIGlmICghdGhpcy5jb21wbGV0ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJOb3QgZG9uZSAoeWV0KSFcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGU7XG4gIH0sXG59O1xuXG5jb25zdCBUb2RvID0gKGRhdGEpID0+IHtcbiAgbGV0IHRvZG9PYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7XG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodG9kb09iaiwgXCJjb21wbGV0ZVwiLCB7XG4gICAgdmFsdWU6IGRhdGEuY29tcGxldGUgfHwgZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gIH0pO1xuXG4gIHJldHVybiB0b2RvT2JqO1xufTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN0b3JhZ2VNb2R1bGUgfSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2VcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuXG4vLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInN0b3JhZ2VMU1wiKTtcbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZUxTXCIpKSB7XG4gIHN0b3JhZ2VNb2R1bGUucG9wdWxhdGUoKTtcbn1cblxuVUkuZGlzcGxheS50b2Rvc09mKFwiSW5ib3hcIiwgXCJsaXN0XCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==