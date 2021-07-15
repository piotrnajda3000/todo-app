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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --light-background: rgb(252, 252, 252);\n  --dim-background: rgb(242, 242, 242);\n  --dimmest-background: rgb(235, 235, 235);\n  --accent-color: lightskyblue;\n  font-family: Roboto, sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--dimmest-background);\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Hover properties */\n\n.material-icons,\nbutton,\n.list {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.material-icons:hover,\nbutton:hover,\n.list:hover {\n  color: black;\n  cursor: pointer;\n}\n\nbutton:hover,\n.list span:hover {\n  background-color: var(--dimmest-background) !important;\n}\n\n.list {\n  flex-basis: 100% !important;\n}\n\n/* Pop-up message */\n\n.message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n\n.failure {\n  background-color: #ff000080;\n}\n\n.success {\n  background-color: #00ff3780;\n}\n\n/* Message end */\n\n/* Top bar */\n#topDisplay {\n  background-color: var(--dim-background);\n  padding: 1rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 57px;\n}\n\n#name {\n  font-size: 1.1rem;\n}\n\n/* End Top project bar */\n\n#contentWrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: scroll;\n}\n\n#contentWrapper::-webkit-scrollbar {\n  display: none;\n}\n\n#contentWrapper {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\n/* Single todo */\n\n.todo {\n  background-color: var(--light-background);\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-inline: 1rem;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todo:last-of-type {\n  margin-bottom: 1rem;\n}\n\n.title,\n.editInput {\n  max-width: 100%;\n  word-break: break-all;\n}\n\n.title {\n  height: 1.15rem;\n  overflow: hidden;\n}\n\n.not-expanded::after {\n  content: \"...\";\n}\n\n.expanded {\n  height: auto;\n  overflow-y: visible;\n}\n\n.todo .title,\n.dueDate {\n  margin-bottom: 1rem;\n}\n\n.dueDate {\n  align-self: center;\n}\n\n.todoControl {\n  display: flex;\n  justify-content: space-around;\n}\n\n.editInput {\n  margin-bottom: 0.5rem;\n}\n\n.editControlButtons {\n  display: flex;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 0.5rem;\n}\n\n/* End Single Todo */\n\n#newWrapper::before {\n  content: \"\";\n  height: 2rem;\n}\n\n#newWrapper {\n  display: flex;\n  justify-content: center;\n  height: 2rem;\n  background: transparent;\n}\n\n#new {\n  width: 100%;\n  margin-inline: 1rem;\n  border-radius: 0 0 2rem 2rem;\n  background-color: var(--light-background);\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Bottom navigation */\n\n#bottomNav {\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  background-color: var(--dim-background);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  font-size: 1.1rem;\n}\n\nbutton {\n  background: none;\n  border-color: rgba(0, 0, 0, 0.75);\n  border: 0;\n  height: 100%;\n  padding: 1rem;\n}\n\n.editControlButtons button {\n  background-color: var(--dim-background);\n  flex: 1;\n  padding: 0.5rem;\n}\n\n.editControlButtons button:first-of-type {\n  border-right: 1px solid rgba(0, 0, 0, 0.25);\n}\n\n/* End bottom navigation */\n\n/* List display */\n.list {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1rem;\n  padding-inline: 1rem;\n}\n\n.list:last-of-type {\n  margin-bottom: 3rem;\n}\n\n.list span {\n  background-color: var(--dim-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n}\n\ninput {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 0.2rem;\n  height: auto;\n}\n\n/* End list display */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,sCAAsC;EACtC,oCAAoC;EACpC,wCAAwC;EACxC,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2CAA2C;EAC3C,YAAY;EACZ,cAAc;EACd,aAAa;EACb,sBAAsB;AACxB;;AAEA,qBAAqB;;AAErB;;;EAGE,yBAAyB;AAC3B;;AAEA;;;EAGE,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,sDAAsD;AACxD;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,gBAAgB;;AAEhB,YAAY;AACZ;EACE,uCAAuC;EACvC,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,4CAA4C;EAC5C,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA,wBAAwB;;AAExB;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB,EAAE,gBAAgB;EAC1C,qBAAqB,EAAE,YAAY;AACrC;;AAEA,gBAAgB;;AAEhB;EACE,yCAAyC;EACzC,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qCAAqC;EACrC,qBAAqB;AACvB;;AAEA,oBAAoB;;AAEpB;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,4BAA4B;EAC5B,yCAAyC;EACzC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,sBAAsB;;AAEtB;EACE,yCAAyC;EACzC,uCAAuC;EACvC,aAAa;EACb,qCAAqC;EACrC,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,SAAS;EACT,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,uCAAuC;EACvC,OAAO;EACP,eAAe;AACjB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA,0BAA0B;;AAE1B,iBAAiB;AACjB;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;EACvC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,YAAY;AACd;;AAEA,qBAAqB","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --light-background: rgb(252, 252, 252);\n  --dim-background: rgb(242, 242, 242);\n  --dimmest-background: rgb(235, 235, 235);\n  --accent-color: lightskyblue;\n  font-family: Roboto, sans-serif;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--dimmest-background);\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Hover properties */\n\n.material-icons,\nbutton,\n.list {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.material-icons:hover,\nbutton:hover,\n.list:hover {\n  color: black;\n  cursor: pointer;\n}\n\nbutton:hover,\n.list span:hover {\n  background-color: var(--dimmest-background) !important;\n}\n\n.list {\n  flex-basis: 100% !important;\n}\n\n/* Pop-up message */\n\n.message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n\n.failure {\n  background-color: #ff000080;\n}\n\n.success {\n  background-color: #00ff3780;\n}\n\n/* Message end */\n\n/* Top bar */\n#topDisplay {\n  background-color: var(--dim-background);\n  padding: 1rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  height: 57px;\n}\n\n#name {\n  font-size: 1.1rem;\n}\n\n/* End Top project bar */\n\n#contentWrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: scroll;\n}\n\n#contentWrapper::-webkit-scrollbar {\n  display: none;\n}\n\n#contentWrapper {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\n/* Single todo */\n\n.todo {\n  background-color: var(--light-background);\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-inline: 1rem;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todo:last-of-type {\n  margin-bottom: 1rem;\n}\n\n.title,\n.editInput {\n  max-width: 100%;\n  word-break: break-all;\n}\n\n.title {\n  height: 1.15rem;\n  overflow: hidden;\n}\n\n.not-expanded::after {\n  content: \"...\";\n}\n\n.expanded {\n  height: auto;\n  overflow-y: visible;\n}\n\n.todo .title,\n.dueDate {\n  margin-bottom: 1rem;\n}\n\n.dueDate {\n  align-self: center;\n}\n\n.todoControl {\n  display: flex;\n  justify-content: space-around;\n}\n\n.editInput {\n  margin-bottom: 0.5rem;\n}\n\n.editControlButtons {\n  display: flex;\n  justify-content: center;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 0.5rem;\n}\n\n/* End Single Todo */\n\n#newWrapper::before {\n  content: \"\";\n  height: 2rem;\n}\n\n#newWrapper {\n  display: flex;\n  justify-content: center;\n  height: 2rem;\n  background: transparent;\n}\n\n#new {\n  width: 100%;\n  margin-inline: 1rem;\n  border-radius: 0 0 2rem 2rem;\n  background-color: var(--light-background);\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Bottom navigation */\n\n#bottomNav {\n  border-top: 1px solid rgba(0, 0, 0, 0.25);\n  background-color: var(--dim-background);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  font-size: 1.1rem;\n}\n\nbutton {\n  background: none;\n  border-color: rgba(0, 0, 0, 0.75);\n  border: 0;\n  height: 100%;\n  padding: 1rem;\n}\n\n.editControlButtons button {\n  background-color: var(--dim-background);\n  flex: 1;\n  padding: 0.5rem;\n}\n\n.editControlButtons button:first-of-type {\n  border-right: 1px solid rgba(0, 0, 0, 0.25);\n}\n\n/* End bottom navigation */\n\n/* List display */\n.list {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1rem;\n  padding-inline: 1rem;\n}\n\n.list:last-of-type {\n  margin-bottom: 3rem;\n}\n\n.list span {\n  background-color: var(--dim-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n}\n\ninput {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 0.2rem;\n  height: auto;\n}\n\n/* End list display */\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/List.js":
/*!*****************************!*\
  !*** ./src/modules/List.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries/pubsub */ "./src/modules/libraries/pubsub.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");



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

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultProject": () => (/* binding */ DefaultProject),
/* harmony export */   "UserProject": () => (/* binding */ UserProject)
/* harmony export */ });
/* harmony import */ var _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries/pubsub */ "./src/modules/libraries/pubsub.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");



const proto = {
  addTodo(todo) {
    const storage = _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getStorage();
    console.log(`1`, storage);
    console.log(`2`, this.name);
    const project = storage.getProject(this.name);
    todo.project = this.name;
    project.todos[todo.title] = todo;
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage", storage);
  },
  removeTodo(todo) {
    // console.log("Removing", todo, "from", this.todos);
    const storage = _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getStorage();
    const project = storage.getProject(this.name);
    const todoID = storage.getTodo(todo.title, todo.project);

    delete project.todos[todo.title];
    // console.log(`after deleting:`, storage);
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage", storage);
  },
};

let editMethods = {
  rename(newName) {
    const storage = _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getStorage();
    const project = storage.getProject(this.name);
    project.name = newName;
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage", storage);
    return newName;
  },
  delete() {
    const storage = _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getStorage();
    const project = storage.getProject(this.name);
    let projectIdx = storage.getProjectIdx(this.name);
    storage.projects.splice(projectIdx, 1);
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage", storage);
  },
};

const Project = (data) => (extendWith) => {
  let projectObj = Object.assign({}, proto, data, extendWith);

  if (projectObj.name) {
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Created an object", {
      object: projectObj,
      type: "projects",
    });
  }

  return projectObj;
};

const DefaultProject = (name) => Project(name)({ default: true });
const UserProject = (data) => Project(data)(editMethods);




/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries/pubsub */ "./src/modules/libraries/pubsub.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List */ "./src/modules/List.js");





const Storage = (() => {
  const createEmptyStorage = () => {
    const proto = {
      getProject: function (name) {
        return this.projects.find((project) => project.name == name);
      },
      getProjectIdx: function (name) {
        return this.projects.findIndex((project) => project.name == name);
      },
      getList: function (name) {
        return this.lists.find((list) => list.name == name);
      },
      getTodo: function (todosTitle, todosProjectName) {
        const project = this.getProject(todosProjectName);
        for (const todo in project.todos) {
          if (todosTitle == project.todos[todo].title) {
            return project.todos[todo];
          }
        }
      },
    };
    return Object.assign(proto, {
      lists: [],
      projects: [],
    });
  };

  const init = () => {
    // console.log("[Start storage.init]");

    const storage = createEmptyStorage();
    bindStorageEvents(storage);

    // Populate storage
    const defaultProject = (0,_Project__WEBPACK_IMPORTED_MODULE_1__.DefaultProject)({
      name: "Inbox",
      todos: {},
    });

    let userProject = (0,_Project__WEBPACK_IMPORTED_MODULE_1__.UserProject)({
      name: "Your project",
      todos: {},
    });

    // Create initial lists
    const inbox = (0,_List__WEBPACK_IMPORTED_MODULE_3__.List)({
      name: "Inbox",
      projects: defaultProject,
      default: true,
    });

    const all = (0,_List__WEBPACK_IMPORTED_MODULE_3__.List)({
      name: "All Tasks",
      projects: storage.projects,
    });

    // Create initial todos and add them to initial projects
    let initTodo = (0,_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo)({
      title: "Welcome",
      dueDate: "20-05-2000",
    });

    let newNewTodo = (0,_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo)({
      title: "Hello",
      dueDate: "01-01-2000",
    });

    defaultProject.addTodo(initTodo);
    userProject.addTodo(newNewTodo);
  };

  const getStorage = () => {
    const storage = Object.assign(
      createEmptyStorage(),
      JSON.parse(localStorage.getItem("storageLS"))
    );

    bindStorageEvents(storage);

    storage.projects.map((project) => {
      if (project.default) {
        project = Object.assign(project, (0,_Project__WEBPACK_IMPORTED_MODULE_1__.DefaultProject)());
      } else {
        project = Object.assign(project, (0,_Project__WEBPACK_IMPORTED_MODULE_1__.UserProject)());
      }

      for (let todo in project.todos) {
        // console.log(project.todos[todo]);
        // console.log(project.todos[todo].complete);

        project.todos[todo] = Object.assign(
          (0,_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo)({
            title: project.todos[todo].title,
            dueDate: project.todos[todo].dueDate,
            complete: project.todos[todo].complete,
            project: project.name,
          })
        );
      }
    });

    storage.lists[1] = (0,_List__WEBPACK_IMPORTED_MODULE_3__.List)({
      name: "All Tasks",
      projects: storage.projects,
    });

    // It didnt work before, because I was passing in copies in a for..of loop, instead of references
    for (let list of Object.values(storage.lists)) {
      for (let [idx, project] of Object.entries(list.projects)) {
        // if (project) {
        list.projects[idx] = storage.getProject(project.name);
        // }
      }
    }

    return storage;
  };
  const bindStorageEvents = (storage) => {
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("Created an object", ({ object, type }) => {
      if (!storage[type].some((i) => i.name == object.name)) {
        storage[type].push(object);
        _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage", storage);
        // console.log("pushed", type, object);
      }
    });

    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("Update local storage", (storage) => {
      localStorage.setItem("storageLS", JSON.stringify(storage));
    });
  };

  return {
    init,
    getStorage,
  };
})();




/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries/pubsub */ "./src/modules/libraries/pubsub.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");



const proto = {
  switchComplete() {
    const storage = _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getStorage();
    const todo = storage.getTodo(this.title, this.project);
    todo.complete = !todo.complete;
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage", storage);
    return todo.complete;
  },
  edit(newTitle, newDueDate) {
    const storage = _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getStorage();
    const todo = storage.getTodo(this.title, this.project);
    const project = storage.getProject(this.project);
    delete project.todos[this.title];
    project.todos[newTitle] = Todo({
      title: newTitle,
      dueDate: newDueDate,
      project: this.project,
    });
    console.log(project.todos);
    // todo.title = newTitle;
    // todo.dueDate = newDueDate;
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage", storage);
  },
};

const Todo = (data) => {
  // console.log(data);
  let todoObj = Object.assign(Object.create(proto), {
    title: data.title,
    dueDate: data.dueDate,
  });

  Object.defineProperty(todoObj, "complete", {
    value: data.complete || false,
    enumerable: true,
    writable: true,
    configurable: false,
  });

  Object.defineProperty(todoObj, "project", {
    value: data.project,
    enumerable: false,
    writable: true,
  });

  return todoObj;
};




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
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
// import { storage } from "./list";





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function UI() {
  const init = () => {
    if (!localStorage.getItem("storageLS")) {
      _Storage__WEBPACK_IMPORTED_MODULE_3__.Storage.init();
    }

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
  };

  const display = {
    // Display list of all projects or lists
    listOf: (type) => {
      const storage = _Storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getStorage();

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
          (0,_Project__WEBPACK_IMPORTED_MODULE_1__.UserProject)({ name: prompt("Project name?"), todos: {} });
          display.listOf("projects");
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
      const storage = _Storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getStorage();
      console.log("Reading from:", storage);

      reset.dynamicContent();

      contentWrapper.style.cssText = "flex: 1";

      if (type == "list") {
        const list = storage.getList(name);

        topDisplay.innerHTML = `
                  <span id="name">${list.name}</span>
                  `;

        const newTodo = create.plusButton();
        newTodo.addEventListener("click", () => {
          const todo = (0,_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo)({
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
        const project = storage.getProject(name);

        const newTodo = create.plusButton();
        newTodo.addEventListener("click", () => {
          const todo = (0,_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo)({
            title: prompt("Title"),
            dueDate: prompt("Due?"),
          });
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
          if (todo.hasOwnProperty(prop) && prop != "complete") {
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
        let newName = project.rename(prompt("New project name?"));
        display.todosOf(newName, "project");
      });
    },
    singleTodoUI: (todo, todoDiv, todoControl, project, type) => {
      const storage = _Storage__WEBPACK_IMPORTED_MODULE_3__.Storage.getStorage();

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
            this.edit(titleInput.value, dueDateInput.value);
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
        project.removeTodo(todo);
        // Determine whether the current tab is a project or list tab
        if (storage.getProject(project.name)) {
          type = "project";
        } else {
          type = "list";
        }
        _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Display todos", { name: project.name, type: type });
      });

      toggleComplete.addEventListener(
        "click",
        function () {
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
    init,
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");



// localStorage.clear();

_modules_UI__WEBPACK_IMPORTED_MODULE_1__.default.init();
_modules_UI__WEBPACK_IMPORTED_MODULE_1__.default.display.todosOf("Inbox", "list");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9saWJyYXJpZXMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG9FQUFvRSwyQkFBMkIsR0FBRyxXQUFXLDJDQUEyQyx5Q0FBeUMsNkNBQTZDLGlDQUFpQyxvQ0FBb0MsR0FBRyxVQUFVLGlCQUFpQixHQUFHLFVBQVUsZ0RBQWdELGlCQUFpQixtQkFBbUIsa0JBQWtCLDJCQUEyQixHQUFHLGdFQUFnRSw4QkFBOEIsR0FBRyx3REFBd0QsaUJBQWlCLG9CQUFvQixHQUFHLHFDQUFxQywyREFBMkQsR0FBRyxXQUFXLGdDQUFnQyxHQUFHLHNDQUFzQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixrQkFBa0IsR0FBRyxjQUFjLGdDQUFnQyxHQUFHLGNBQWMsZ0NBQWdDLEdBQUcscURBQXFELDRDQUE0QyxrQkFBa0Isa0JBQWtCLGtDQUFrQyx3QkFBd0IsaURBQWlELGlCQUFpQixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsa0RBQWtELGtCQUFrQiwyQkFBMkIsWUFBWSxxQkFBcUIsR0FBRyx3Q0FBd0Msa0JBQWtCLEdBQUcscUJBQXFCLDZCQUE2Qiw0Q0FBNEMsaUJBQWlCLGdDQUFnQyw4Q0FBOEMsa0JBQWtCLHFCQUFxQix3QkFBd0Isd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcseUJBQXlCLG9CQUFvQiwwQkFBMEIsR0FBRyxZQUFZLG9CQUFvQixxQkFBcUIsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsZUFBZSxpQkFB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Q0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztVQ3REQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNTOztBQUU5Qjs7QUFFQSxxREFBTztBQUNQLGdFQUFrQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWxpZ2h0LWJhY2tncm91bmQ6IHJnYigyNTIsIDI1MiwgMjUyKTtcXG4gIC0tZGltLWJhY2tncm91bmQ6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gIC0tZGltbWVzdC1iYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICAtLWFjY2VudC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltbWVzdC1iYWNrZ3JvdW5kKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIEhvdmVyIHByb3BlcnRpZXMgKi9cXG5cXG4ubWF0ZXJpYWwtaWNvbnMsXFxuYnV0dG9uLFxcbi5saXN0IHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5tYXRlcmlhbC1pY29uczpob3ZlcixcXG5idXR0b246aG92ZXIsXFxuLmxpc3Q6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuLmxpc3Qgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW1tZXN0LWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saXN0IHtcXG4gIGZsZXgtYmFzaXM6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuXFxuLyogUG9wLXVwIG1lc3NhZ2UgKi9cXG5cXG4ubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZhaWx1cmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDgwO1xcbn1cXG5cXG4uc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjM3ODA7XFxufVxcblxcbi8qIE1lc3NhZ2UgZW5kICovXFxuXFxuLyogVG9wIGJhciAqL1xcbiN0b3BEaXNwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbS1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBoZWlnaHQ6IDU3cHg7XFxufVxcblxcbiNuYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4vKiBFbmQgVG9wIHByb2plY3QgYmFyICovXFxuXFxuI2NvbnRlbnRXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNjb250ZW50V3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnRXcmFwcGVyIHtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4vKiBTaW5nbGUgdG9kbyAqL1xcblxcbi50b2RvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4taW5saW5lOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kbzpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRpdGxlLFxcbi5lZGl0SW5wdXQge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgaGVpZ2h0OiAxLjE1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5vdC1leHBhbmRlZDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi4uLlxcXCI7XFxufVxcblxcbi5leHBhbmRlZCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xcbn1cXG5cXG4udG9kbyAudGl0bGUsXFxuLmR1ZURhdGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kb0NvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZWRpdElucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmVkaXRDb250cm9sQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4vKiBFbmQgU2luZ2xlIFRvZG8gKi9cXG5cXG4jbmV3V3JhcHBlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jbmV3V3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI25ldyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1pbmxpbmU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMnJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBCb3R0b20gbmF2aWdhdGlvbiAqL1xcblxcbiNib3R0b21OYXYge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGJvcmRlcjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5lZGl0Q29udHJvbEJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbS1iYWNrZ3JvdW5kKTtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5lZGl0Q29udHJvbEJ1dHRvbnMgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLyogRW5kIGJvdHRvbSBuYXZpZ2F0aW9uICovXFxuXFxuLyogTGlzdCBkaXNwbGF5ICovXFxuLmxpc3Qge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbn1cXG5cXG4ubGlzdDpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmxpc3Qgc3BhbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBFbmQgbGlzdCBkaXNwbGF5ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10s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QUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUEscUJBQXFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogcmdiKDI1MiwgMjUyLCAyNTIpO1xcbiAgLS1kaW0tYmFja2dyb3VuZDogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiAgLS1kaW1tZXN0LWJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tYWNjZW50LWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW1tZXN0LWJhY2tncm91bmQpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogSG92ZXIgcHJvcGVydGllcyAqL1xcblxcbi5tYXRlcmlhbC1pY29ucyxcXG5idXR0b24sXFxuLmxpc3Qge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zOmhvdmVyLFxcbmJ1dHRvbjpob3ZlcixcXG4ubGlzdDpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4ubGlzdCBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbW1lc3QtYmFja2dyb3VuZCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgZmxleC1iYXNpczogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBQb3AtdXAgbWVzc2FnZSAqL1xcblxcbi5tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZmFpbHVyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwODA7XFxufVxcblxcbi5zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmMzc4MDtcXG59XFxuXFxuLyogTWVzc2FnZSBlbmQgKi9cXG5cXG4vKiBUb3AgYmFyICovXFxuI3RvcERpc3BsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGhlaWdodDogNTdweDtcXG59XFxuXFxuI25hbWUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi8qIEVuZCBUb3AgcHJvamVjdCBiYXIgKi9cXG5cXG4jY29udGVudFdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI2NvbnRlbnRXcmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY29udGVudFdyYXBwZXIge1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxufVxcblxcbi8qIFNpbmdsZSB0b2RvICovXFxuXFxuLnRvZG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1pbmxpbmU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvOmxhc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udGl0bGUsXFxuLmVkaXRJbnB1dCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi50aXRsZSB7XFxuICBoZWlnaHQ6IDEuMTVyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubm90LWV4cGFuZGVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLi4uXFxcIjtcXG59XFxuXFxuLmV4cGFuZGVkIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG92ZXJmbG93LXk6IHZpc2libGU7XFxufVxcblxcbi50b2RvIC50aXRsZSxcXG4uZHVlRGF0ZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvQ29udHJvbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5lZGl0SW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZWRpdENvbnRyb2xCdXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIEVuZCBTaW5nbGUgVG9kbyAqL1xcblxcbiNuZXdXcmFwcGVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbiNuZXdXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jbmV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWlubGluZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAycmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIEJvdHRvbSBuYXZpZ2F0aW9uICovXFxuXFxuI2JvdHRvbU5hdiB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbS1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmVkaXRDb250cm9sQnV0dG9ucyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltLWJhY2tncm91bmQpO1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmVkaXRDb250cm9sQnV0dG9ucyBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG4vKiBFbmQgYm90dG9tIG5hdmlnYXRpb24gKi9cXG5cXG4vKiBMaXN0IGRpc3BsYXkgKi9cXG4ubGlzdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxufVxcblxcbi5saXN0Omxhc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ubGlzdCBzcGFuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbS1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIEVuZCBsaXN0IGRpc3BsYXkgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2xpYnJhcmllcy9wdWJzdWJcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIjtcblxuY29uc3QgTGlzdCA9IChkYXRhKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnByb2plY3RzKSkge1xuICAgIGRhdGEucHJvamVjdHMgPSBbZGF0YS5wcm9qZWN0c107XG4gIH1cblxuICBjb25zdCBsaXN0T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG5cbiAgZXZlbnRzLnB1Ymxpc2goXCJDcmVhdGVkIGFuIG9iamVjdFwiLCB7XG4gICAgb2JqZWN0OiBsaXN0T2JqLFxuICAgIHR5cGU6IFwibGlzdHNcIixcbiAgfSk7XG5cbiAgcmV0dXJuIGxpc3RPYmo7XG59O1xuXG5leHBvcnQgeyBMaXN0IH07XG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2xpYnJhcmllcy9wdWJzdWJcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmNvbnN0IHByb3RvID0ge1xuICBhZGRUb2RvKHRvZG8pIHtcbiAgICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgY29uc29sZS5sb2coYDFgLCBzdG9yYWdlKTtcbiAgICBjb25zb2xlLmxvZyhgMmAsIHRoaXMubmFtZSk7XG4gICAgY29uc3QgcHJvamVjdCA9IHN0b3JhZ2UuZ2V0UHJvamVjdCh0aGlzLm5hbWUpO1xuICAgIHRvZG8ucHJvamVjdCA9IHRoaXMubmFtZTtcbiAgICBwcm9qZWN0LnRvZG9zW3RvZG8udGl0bGVdID0gdG9kbztcbiAgICBldmVudHMucHVibGlzaChcIlVwZGF0ZSBsb2NhbCBzdG9yYWdlXCIsIHN0b3JhZ2UpO1xuICB9LFxuICByZW1vdmVUb2RvKHRvZG8pIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIlJlbW92aW5nXCIsIHRvZG8sIFwiZnJvbVwiLCB0aGlzLnRvZG9zKTtcbiAgICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IHN0b3JhZ2UuZ2V0UHJvamVjdCh0aGlzLm5hbWUpO1xuICAgIGNvbnN0IHRvZG9JRCA9IHN0b3JhZ2UuZ2V0VG9kbyh0b2RvLnRpdGxlLCB0b2RvLnByb2plY3QpO1xuXG4gICAgZGVsZXRlIHByb2plY3QudG9kb3NbdG9kby50aXRsZV07XG4gICAgLy8gY29uc29sZS5sb2coYGFmdGVyIGRlbGV0aW5nOmAsIHN0b3JhZ2UpO1xuICAgIGV2ZW50cy5wdWJsaXNoKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIiwgc3RvcmFnZSk7XG4gIH0sXG59O1xuXG5sZXQgZWRpdE1ldGhvZHMgPSB7XG4gIHJlbmFtZShuZXdOYW1lKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IFN0b3JhZ2UuZ2V0U3RvcmFnZSgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBzdG9yYWdlLmdldFByb2plY3QodGhpcy5uYW1lKTtcbiAgICBwcm9qZWN0Lm5hbWUgPSBuZXdOYW1lO1xuICAgIGV2ZW50cy5wdWJsaXNoKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIiwgc3RvcmFnZSk7XG4gICAgcmV0dXJuIG5ld05hbWU7XG4gIH0sXG4gIGRlbGV0ZSgpIHtcbiAgICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IHN0b3JhZ2UuZ2V0UHJvamVjdCh0aGlzLm5hbWUpO1xuICAgIGxldCBwcm9qZWN0SWR4ID0gc3RvcmFnZS5nZXRQcm9qZWN0SWR4KHRoaXMubmFtZSk7XG4gICAgc3RvcmFnZS5wcm9qZWN0cy5zcGxpY2UocHJvamVjdElkeCwgMSk7XG4gICAgZXZlbnRzLnB1Ymxpc2goXCJVcGRhdGUgbG9jYWwgc3RvcmFnZVwiLCBzdG9yYWdlKTtcbiAgfSxcbn07XG5cbmNvbnN0IFByb2plY3QgPSAoZGF0YSkgPT4gKGV4dGVuZFdpdGgpID0+IHtcbiAgbGV0IHByb2plY3RPYmogPSBPYmplY3QuYXNzaWduKHt9LCBwcm90bywgZGF0YSwgZXh0ZW5kV2l0aCk7XG5cbiAgaWYgKHByb2plY3RPYmoubmFtZSkge1xuICAgIGV2ZW50cy5wdWJsaXNoKFwiQ3JlYXRlZCBhbiBvYmplY3RcIiwge1xuICAgICAgb2JqZWN0OiBwcm9qZWN0T2JqLFxuICAgICAgdHlwZTogXCJwcm9qZWN0c1wiLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3RPYmo7XG59O1xuXG5jb25zdCBEZWZhdWx0UHJvamVjdCA9IChuYW1lKSA9PiBQcm9qZWN0KG5hbWUpKHsgZGVmYXVsdDogdHJ1ZSB9KTtcbmNvbnN0IFVzZXJQcm9qZWN0ID0gKGRhdGEpID0+IFByb2plY3QoZGF0YSkoZWRpdE1ldGhvZHMpO1xuXG5leHBvcnQgeyBEZWZhdWx0UHJvamVjdCwgVXNlclByb2plY3QgfTtcbiIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vbGlicmFyaWVzL3B1YnN1YlwiO1xuaW1wb3J0IHsgRGVmYXVsdFByb2plY3QsIFVzZXJQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL1RvZG9cIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9MaXN0XCI7XG5cbmNvbnN0IFN0b3JhZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVFbXB0eVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdG8gPSB7XG4gICAgICBnZXRQcm9qZWN0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT0gbmFtZSk7XG4gICAgICB9LFxuICAgICAgZ2V0UHJvamVjdElkeDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT0gbmFtZSk7XG4gICAgICB9LFxuICAgICAgZ2V0TGlzdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5uYW1lID09IG5hbWUpO1xuICAgICAgfSxcbiAgICAgIGdldFRvZG86IGZ1bmN0aW9uICh0b2Rvc1RpdGxlLCB0b2Rvc1Byb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QodG9kb3NQcm9qZWN0TmFtZSk7XG4gICAgICAgIGZvciAoY29uc3QgdG9kbyBpbiBwcm9qZWN0LnRvZG9zKSB7XG4gICAgICAgICAgaWYgKHRvZG9zVGl0bGUgPT0gcHJvamVjdC50b2Rvc1t0b2RvXS50aXRsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3QudG9kb3NbdG9kb107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG8sIHtcbiAgICAgIGxpc3RzOiBbXSxcbiAgICAgIHByb2plY3RzOiBbXSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiW1N0YXJ0IHN0b3JhZ2UuaW5pdF1cIik7XG5cbiAgICBjb25zdCBzdG9yYWdlID0gY3JlYXRlRW1wdHlTdG9yYWdlKCk7XG4gICAgYmluZFN0b3JhZ2VFdmVudHMoc3RvcmFnZSk7XG5cbiAgICAvLyBQb3B1bGF0ZSBzdG9yYWdlXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBEZWZhdWx0UHJvamVjdCh7XG4gICAgICBuYW1lOiBcIkluYm94XCIsXG4gICAgICB0b2Rvczoge30sXG4gICAgfSk7XG5cbiAgICBsZXQgdXNlclByb2plY3QgPSBVc2VyUHJvamVjdCh7XG4gICAgICBuYW1lOiBcIllvdXIgcHJvamVjdFwiLFxuICAgICAgdG9kb3M6IHt9LFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGluaXRpYWwgbGlzdHNcbiAgICBjb25zdCBpbmJveCA9IExpc3Qoe1xuICAgICAgbmFtZTogXCJJbmJveFwiLFxuICAgICAgcHJvamVjdHM6IGRlZmF1bHRQcm9qZWN0LFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbCA9IExpc3Qoe1xuICAgICAgbmFtZTogXCJBbGwgVGFza3NcIixcbiAgICAgIHByb2plY3RzOiBzdG9yYWdlLnByb2plY3RzLFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGluaXRpYWwgdG9kb3MgYW5kIGFkZCB0aGVtIHRvIGluaXRpYWwgcHJvamVjdHNcbiAgICBsZXQgaW5pdFRvZG8gPSBUb2RvKHtcbiAgICAgIHRpdGxlOiBcIldlbGNvbWVcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAtMDUtMjAwMFwiLFxuICAgIH0pO1xuXG4gICAgbGV0IG5ld05ld1RvZG8gPSBUb2RvKHtcbiAgICAgIHRpdGxlOiBcIkhlbGxvXCIsXG4gICAgICBkdWVEYXRlOiBcIjAxLTAxLTIwMDBcIixcbiAgICB9KTtcblxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG8oaW5pdFRvZG8pO1xuICAgIHVzZXJQcm9qZWN0LmFkZFRvZG8obmV3TmV3VG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIGNyZWF0ZUVtcHR5U3RvcmFnZSgpLFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0b3JhZ2VMU1wiKSlcbiAgICApO1xuXG4gICAgYmluZFN0b3JhZ2VFdmVudHMoc3RvcmFnZSk7XG5cbiAgICBzdG9yYWdlLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QuZGVmYXVsdCkge1xuICAgICAgICBwcm9qZWN0ID0gT2JqZWN0LmFzc2lnbihwcm9qZWN0LCBEZWZhdWx0UHJvamVjdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3QgPSBPYmplY3QuYXNzaWduKHByb2plY3QsIFVzZXJQcm9qZWN0KCkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB0b2RvIGluIHByb2plY3QudG9kb3MpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdC50b2Rvc1t0b2RvXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QudG9kb3NbdG9kb10uY29tcGxldGUpO1xuXG4gICAgICAgIHByb2plY3QudG9kb3NbdG9kb10gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIFRvZG8oe1xuICAgICAgICAgICAgdGl0bGU6IHByb2plY3QudG9kb3NbdG9kb10udGl0bGUsXG4gICAgICAgICAgICBkdWVEYXRlOiBwcm9qZWN0LnRvZG9zW3RvZG9dLmR1ZURhdGUsXG4gICAgICAgICAgICBjb21wbGV0ZTogcHJvamVjdC50b2Rvc1t0b2RvXS5jb21wbGV0ZSxcbiAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3QubmFtZSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RvcmFnZS5saXN0c1sxXSA9IExpc3Qoe1xuICAgICAgbmFtZTogXCJBbGwgVGFza3NcIixcbiAgICAgIHByb2plY3RzOiBzdG9yYWdlLnByb2plY3RzLFxuICAgIH0pO1xuXG4gICAgLy8gSXQgZGlkbnQgd29yayBiZWZvcmUsIGJlY2F1c2UgSSB3YXMgcGFzc2luZyBpbiBjb3BpZXMgaW4gYSBmb3IuLm9mIGxvb3AsIGluc3RlYWQgb2YgcmVmZXJlbmNlc1xuICAgIGZvciAobGV0IGxpc3Qgb2YgT2JqZWN0LnZhbHVlcyhzdG9yYWdlLmxpc3RzKSkge1xuICAgICAgZm9yIChsZXQgW2lkeCwgcHJvamVjdF0gb2YgT2JqZWN0LmVudHJpZXMobGlzdC5wcm9qZWN0cykpIHtcbiAgICAgICAgLy8gaWYgKHByb2plY3QpIHtcbiAgICAgICAgbGlzdC5wcm9qZWN0c1tpZHhdID0gc3RvcmFnZS5nZXRQcm9qZWN0KHByb2plY3QubmFtZSk7XG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmFnZTtcbiAgfTtcbiAgY29uc3QgYmluZFN0b3JhZ2VFdmVudHMgPSAoc3RvcmFnZSkgPT4ge1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoXCJDcmVhdGVkIGFuIG9iamVjdFwiLCAoeyBvYmplY3QsIHR5cGUgfSkgPT4ge1xuICAgICAgaWYgKCFzdG9yYWdlW3R5cGVdLnNvbWUoKGkpID0+IGkubmFtZSA9PSBvYmplY3QubmFtZSkpIHtcbiAgICAgICAgc3RvcmFnZVt0eXBlXS5wdXNoKG9iamVjdCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIiwgc3RvcmFnZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicHVzaGVkXCIsIHR5cGUsIG9iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBldmVudHMuc3Vic2NyaWJlKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIiwgKHN0b3JhZ2UpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmFnZUxTXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgZ2V0U3RvcmFnZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFN0b3JhZ2UgfTtcbiIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vbGlicmFyaWVzL3B1YnN1YlwiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL1N0b3JhZ2VcIjtcblxuY29uc3QgcHJvdG8gPSB7XG4gIHN3aXRjaENvbXBsZXRlKCkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBTdG9yYWdlLmdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCB0b2RvID0gc3RvcmFnZS5nZXRUb2RvKHRoaXMudGl0bGUsIHRoaXMucHJvamVjdCk7XG4gICAgdG9kby5jb21wbGV0ZSA9ICF0b2RvLmNvbXBsZXRlO1xuICAgIGV2ZW50cy5wdWJsaXNoKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIiwgc3RvcmFnZSk7XG4gICAgcmV0dXJuIHRvZG8uY29tcGxldGU7XG4gIH0sXG4gIGVkaXQobmV3VGl0bGUsIG5ld0R1ZURhdGUpIHtcbiAgICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgY29uc3QgdG9kbyA9IHN0b3JhZ2UuZ2V0VG9kbyh0aGlzLnRpdGxlLCB0aGlzLnByb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3QgPSBzdG9yYWdlLmdldFByb2plY3QodGhpcy5wcm9qZWN0KTtcbiAgICBkZWxldGUgcHJvamVjdC50b2Rvc1t0aGlzLnRpdGxlXTtcbiAgICBwcm9qZWN0LnRvZG9zW25ld1RpdGxlXSA9IFRvZG8oe1xuICAgICAgdGl0bGU6IG5ld1RpdGxlLFxuICAgICAgZHVlRGF0ZTogbmV3RHVlRGF0ZSxcbiAgICAgIHByb2plY3Q6IHRoaXMucHJvamVjdCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zKTtcbiAgICAvLyB0b2RvLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgLy8gdG9kby5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICBldmVudHMucHVibGlzaChcIlVwZGF0ZSBsb2NhbCBzdG9yYWdlXCIsIHN0b3JhZ2UpO1xuICB9LFxufTtcblxuY29uc3QgVG9kbyA9IChkYXRhKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICBsZXQgdG9kb09iaiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICBkdWVEYXRlOiBkYXRhLmR1ZURhdGUsXG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0b2RvT2JqLCBcImNvbXBsZXRlXCIsIHtcbiAgICB2YWx1ZTogZGF0YS5jb21wbGV0ZSB8fCBmYWxzZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0b2RvT2JqLCBcInByb2plY3RcIiwge1xuICAgIHZhbHVlOiBkYXRhLnByb2plY3QsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gIH0pO1xuXG4gIHJldHVybiB0b2RvT2JqO1xufTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiLy8gaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBldmVudHMgZnJvbSBcIi4vbGlicmFyaWVzL3B1YnN1YlwiO1xuaW1wb3J0IHsgRGVmYXVsdFByb2plY3QsIFVzZXJQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL1RvZG9cIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBVSSgpIHtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZUxTXCIpKSB7XG4gICAgICBTdG9yYWdlLmluaXQoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGlkPVwidG9wRGlzcGxheVwiPjwvZGl2PlxuICAgICAgXG4gICAgPGRpdiBpZD1cImNvbnRlbnRXcmFwcGVyXCI+PC9kaXY+XG4gICAgXG4gICAgPGRpdiBpZD1cImJvdHRvbU5hdlwiPlxuICAgICAgICA8YnV0dG9uIGRhdGEtdGFiPVwicHJvamVjdHNcIj5Qcm9qZWN0czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGRhdGEtdGFiPVwibGlzdHNcIj5MaXN0czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGRhdGEtdGFiPVwiaW5ib3hcIj5JbmJveDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICAvKiBDYWNoZSBlbGVtZW50cyAqL1xuICAgIC8vIFdyYXBwZXJzXG4gICAgY29uc3QgdG9wRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wRGlzcGxheVwiKTtcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFdyYXBwZXJcIik7XG4gICAgY29uc3QgYm90dG9tTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3R0b21OYXZcIik7XG4gICAgLy8gTmF2IGJ1dHRvbnNcbiAgICBjb25zdCBwcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYnV0dG9uW2RhdGEtdGFiPVwicHJvamVjdHNcIl0nXG4gICAgKTtcbiAgICBjb25zdCBsaXN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLXRhYj1cImxpc3RzXCJdJyk7XG4gICAgY29uc3QgaW5ib3hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS10YWI9XCJpbmJveFwiXScpO1xuXG4gICAgLy8gQWRkIGV2ZW50cyBsaXN0ZW5lcnMgYW5kIGJpbmQgZXZlbnRzXG4gICAgaW5ib3hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICBldmVudHMucHVibGlzaChcIkRpc3BsYXkgdG9kb3NcIiwgeyBuYW1lOiBcIkluYm94XCIsIHR5cGU6IFwibGlzdFwiIH0pXG4gICAgKTtcbiAgICBsaXN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIGV2ZW50cy5wdWJsaXNoKFwiU3dpdGNoIHRhYlwiLCBcImxpc3RzXCIpXG4gICAgKTtcbiAgICBwcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIGV2ZW50cy5wdWJsaXNoKFwiU3dpdGNoIHRhYlwiLCBcInByb2plY3RzXCIpXG4gICAgKTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoXCJTd2l0Y2ggdGFiXCIsIChuYW1lKSA9PiBkaXNwbGF5Lmxpc3RPZihuYW1lKSk7XG4gICAgZXZlbnRzLnN1YnNjcmliZShcIkRpc3BsYXkgdG9kb3NcIiwgKHsgbmFtZSwgdHlwZSB9KSA9PlxuICAgICAgZGlzcGxheS50b2Rvc09mKG5hbWUsIHR5cGUpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5ID0ge1xuICAgIC8vIERpc3BsYXkgbGlzdCBvZiBhbGwgcHJvamVjdHMgb3IgbGlzdHNcbiAgICBsaXN0T2Y6ICh0eXBlKSA9PiB7XG4gICAgICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZS5nZXRTdG9yYWdlKCk7XG5cbiAgICAgIHJlc2V0LmR5bmFtaWNDb250ZW50KCk7XG5cbiAgICAgIGxldCB0b3BOYW1lO1xuICAgICAgaWYgKHR5cGUgPT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgICAgIHRvcE5hbWUgPSBcIlByb2plY3RzXCI7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJsaXN0c1wiKSB7XG4gICAgICAgIHRvcE5hbWUgPSBcIkxpc3RzXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRvcE5hbWU7XG4gICAgICB0b3BEaXNwbGF5LmFwcGVuZChzcGFuKTtcblxuICAgICAgaWYgKHN0b3JhZ2UucHJvamVjdHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgY29udGVudFdyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgIFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09IFwicHJvamVjdHNcIikge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlLnBsdXNCdXR0b24oKTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIFVzZXJQcm9qZWN0KHsgbmFtZTogcHJvbXB0KFwiUHJvamVjdCBuYW1lP1wiKSwgdG9kb3M6IHt9IH0pO1xuICAgICAgICAgIGRpc3BsYXkubGlzdE9mKFwicHJvamVjdHNcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3V3JhcHBlclwiKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kKGRpdik7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgaWR4IGluIHN0b3JhZ2VbdHlwZV0pIHtcbiAgICAgICAgLy8gRG9uJ3QgZGlzcGxheSB0aGUgZGVmYXVsdCBwcm9qZWN0IG9yIGxpc3QuXG4gICAgICAgIGlmICghc3RvcmFnZVt0eXBlXVtpZHhdLmRlZmF1bHQpIHtcbiAgICAgICAgICBsZXQgbmFtZSA9IHN0b3JhZ2VbdHlwZV1baWR4XS5uYW1lO1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgICBkaXYuYXBwZW5kKHNwYW4pO1xuICAgICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZChkaXYpO1xuICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJsaXN0c1wiKSB7XG4gICAgICAgICAgICAgIHR5cGUgPSBcImxpc3RcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHR5cGUgPSBcInByb2plY3RcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKFwiRGlzcGxheSB0b2Rvc1wiLCB7IG5hbWUsIHR5cGUgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIERpc3BsYXkgdG9kb3MgZWl0aGVyIHR5cGUgYSBwcm9qZWN0IG9yIGEgbGlzdFxuICAgIHRvZG9zT2Y6IChuYW1lLCB0eXBlKSA9PiB7XG4gICAgICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZS5nZXRTdG9yYWdlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlYWRpbmcgZnJvbTpcIiwgc3RvcmFnZSk7XG5cbiAgICAgIHJlc2V0LmR5bmFtaWNDb250ZW50KCk7XG5cbiAgICAgIGNvbnRlbnRXcmFwcGVyLnN0eWxlLmNzc1RleHQgPSBcImZsZXg6IDFcIjtcblxuICAgICAgaWYgKHR5cGUgPT0gXCJsaXN0XCIpIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHN0b3JhZ2UuZ2V0TGlzdChuYW1lKTtcblxuICAgICAgICB0b3BEaXNwbGF5LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibmFtZVwiPiR7bGlzdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIGA7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZS5wbHVzQnV0dG9uKCk7XG4gICAgICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b2RvID0gVG9kbyh7XG4gICAgICAgICAgICB0aXRsZTogcHJvbXB0KFwiVGl0bGVcIiksXG4gICAgICAgICAgICBkdWVEYXRlOiBwcm9tcHQoXCJEdWU/XCIpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN0b3JhZ2UucHJvamVjdHNbMF0uYWRkVG9kbyh0b2RvKTtcbiAgICAgICAgICBldmVudHMucHVibGlzaChcIkRpc3BsYXkgdG9kb3NcIiwgeyBuYW1lLCB0eXBlIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3RJZHggaW4gbGlzdC5wcm9qZWN0cykge1xuICAgICAgICAgIGxldCBwcm9qZWN0T2JqID0gbGlzdC5wcm9qZWN0c1twcm9qZWN0SWR4XTtcbiAgICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RPYmo7XG4gICAgICAgICAgY3JlYXRlLnRvZG9zRnJvbShwcm9qZWN0LCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwicHJvamVjdFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBzdG9yYWdlLmdldFByb2plY3QobmFtZSk7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IGNyZWF0ZS5wbHVzQnV0dG9uKCk7XG4gICAgICAgIG5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0b2RvID0gVG9kbyh7XG4gICAgICAgICAgICB0aXRsZTogcHJvbXB0KFwiVGl0bGVcIiksXG4gICAgICAgICAgICBkdWVEYXRlOiBwcm9tcHQoXCJEdWU/XCIpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHByb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgICAgICAgICBldmVudHMucHVibGlzaChcIkRpc3BsYXkgdG9kb3NcIiwgeyBuYW1lLCB0eXBlIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXByb2plY3QuZGVmYXVsdCkge1xuICAgICAgICAgIHRvcERpc3BsYXkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLWNvbnRyb2w9XCJkZWxldGVcIj5kZWxldGU8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gaWQ9XCJuYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLWNvbnRyb2w9XCJyZW5hbWVcIj5lZGl0PC9zcGFuPlxuICAgICAgICAgIGA7XG4gICAgICAgICAgYmluZEV2ZW50cy5wcm9qZWN0VUkocHJvamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wRGlzcGxheS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPHNwYW4gaWQ9XCJuYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgIGA7XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGUudG9kb3NGcm9tKHByb2plY3QsIHR5cGUpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgY3JlYXRlID0ge1xuICAgIHBsdXNCdXR0b246ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3VG9kby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1dyYXBwZXJcIik7XG4gICAgICBuZXdUb2RvLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgaWQ9XCJuZXdcIj5hZGQ8L3NwYW4+JztcbiAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZChuZXdUb2RvKTtcbiAgICAgIHJldHVybiBuZXdUb2RvO1xuICAgIH0sXG4gICAgdG9kb3NGcm9tOiAocHJvamVjdCwgdHlwZSkgPT4ge1xuICAgICAgY29uc3QgdG9kb3NPYmplY3QgPSBwcm9qZWN0LnRvZG9zO1xuXG4gICAgICBmb3IgKGNvbnN0IHRvZG9OYW1lIGluIHRvZG9zT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmQodG9kb0Rpdik7XG5cbiAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9zT2JqZWN0W3RvZG9OYW1lXTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gdG9kbykge1xuICAgICAgICAgIGlmICh0b2RvLmhhc093blByb3BlcnR5KHByb3ApICYmIHByb3AgIT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvUHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2RvUHJvcC5jbGFzc0xpc3QuYWRkKHByb3ApO1xuICAgICAgICAgICAgdG9kb1Byb3AudGV4dENvbnRlbnQgPSBgJHt0b2RvW3Byb3BdfWA7XG4gICAgICAgICAgICB0b2RvRGl2LmFwcGVuZCh0b2RvUHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0b2RvLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0b2RvRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwZmYzNzgwXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1saWdodC1iYWNrZ3JvdW5kKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvZG9Db250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0NvbnRyb2wuY2xhc3NMaXN0LmFkZChcInRvZG9Db250cm9sXCIpO1xuICAgICAgICB0b2RvQ29udHJvbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS1jb250cm9sPVwiZGVsZXRlVG9kb1wiPmRlbGV0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLWNvbnRyb2w9XCJleHBhbmRfbW9yZVwiPmV4cGFuZF9tb3JlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtY29udHJvbD1cInRvZ2dsZUNvbXBsZXRlXCI+ZG9uZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLWNvbnRyb2w9XCJlZGl0VG9kb1wiPmVkaXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xuXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKHRvZG9Db250cm9sKTtcblxuICAgICAgICBiaW5kRXZlbnRzLnNpbmdsZVRvZG9VSSh0b2RvLCB0b2RvRGl2LCB0b2RvQ29udHJvbCwgcHJvamVjdCwgdHlwZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBiaW5kRXZlbnRzID0ge1xuICAgIHByb2plY3RVSTogKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnc3BhbltkYXRhLWNvbnRyb2w9XCJkZWxldGVcIl0nXG4gICAgICApO1xuICAgICAgY29uc3QgcmVuYW1lUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdzcGFuW2RhdGEtY29udHJvbD1cInJlbmFtZVwiXSdcbiAgICAgICk7XG5cbiAgICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC5kZWxldGUoKTtcbiAgICAgICAgZGlzcGxheS50b2Rvc09mKFwiSW5ib3hcIiwgXCJsaXN0XCIpO1xuICAgICAgfSk7XG5cbiAgICAgIHJlbmFtZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IG5ld05hbWUgPSBwcm9qZWN0LnJlbmFtZShwcm9tcHQoXCJOZXcgcHJvamVjdCBuYW1lP1wiKSk7XG4gICAgICAgIGRpc3BsYXkudG9kb3NPZihuZXdOYW1lLCBcInByb2plY3RcIik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNpbmdsZVRvZG9VSTogKHRvZG8sIHRvZG9EaXYsIHRvZG9Db250cm9sLCBwcm9qZWN0LCB0eXBlKSA9PiB7XG4gICAgICBjb25zdCBzdG9yYWdlID0gU3RvcmFnZS5nZXRTdG9yYWdlKCk7XG5cbiAgICAgIGNvbnN0IGV4cGFuZE1vcmUgPSB0b2RvQ29udHJvbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnc3BhbltkYXRhLWNvbnRyb2w9XCJleHBhbmRfbW9yZVwiXSdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSB0b2RvQ29udHJvbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnc3BhbltkYXRhLWNvbnRyb2w9XCJkZWxldGVUb2RvXCJdJ1xuICAgICAgKTtcblxuICAgICAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSB0b2RvQ29udHJvbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnc3BhbltkYXRhLWNvbnRyb2w9XCJ0b2dnbGVDb21wbGV0ZVwiXSdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGVkaXRUb2RvID0gdG9kb0NvbnRyb2wucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ3NwYW5bZGF0YS1jb250cm9sPVwiZWRpdFRvZG9cIl0nXG4gICAgICApO1xuXG4gICAgICBlZGl0VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0b2RvRGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG4gICAgICAgIGxldCBkdWVEYXRlID0gdG9kb0Rpdi5xdWVyeVNlbGVjdG9yKFwiLmR1ZURhdGVcIik7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgdGV4dGFyZWEgZXhwYW5kIHRvIHRleHQncyBleHBhbmRlZCBoZWlnaHRcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuICAgICAgICBsZXQgdGl0bGVTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpdGxlKTtcbiAgICAgICAgbGV0IHRpdGxlSGVpZ2h0ID0gdGl0bGVTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiaGVpZ2h0XCIpO1xuICAgICAgICB0aXRsZUhlaWdodCA9IGBjYWxjKCR7dGl0bGVIZWlnaHR9ICsgMXJlbSlgO1xuICAgICAgICB0aXRsZUlucHV0LnN0eWxlLmhlaWdodCA9IHRpdGxlSGVpZ2h0O1xuXG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXRJbnB1dFwiKTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdElucHV0XCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBkdWVEYXRlQ29udGVudCA9IGR1ZURhdGUudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRpdGxlQ29udGVudDtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZHVlRGF0ZUNvbnRlbnQ7XG5cbiAgICAgICAgdGl0bGUgPSB0b2RvRGl2LnJlcGxhY2VDaGlsZCh0aXRsZUlucHV0LCB0aXRsZSk7XG4gICAgICAgIGR1ZURhdGUgPSB0b2RvRGl2LnJlcGxhY2VDaGlsZChkdWVEYXRlSW5wdXQsIGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRDb250cm9sQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVkaXRDb250cm9sQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiZWRpdENvbnRyb2xCdXR0b25zXCIpO1xuXG4gICAgICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGFjY2VwdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICBhY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lZGl0KHRpdGxlSW5wdXQudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBkaXNwbGF5LnRvZG9zT2YocHJvamVjdC5uYW1lLCBcInByb2plY3RcIik7XG4gICAgICAgICAgfS5iaW5kKHRvZG8pXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGlzcGxheS50b2Rvc09mKHByb2plY3QubmFtZSwgXCJwcm9qZWN0XCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlZGl0Q29udHJvbEJ1dHRvbnMuYXBwZW5kKGFjY2VwdCwgY2FuY2VsKTtcblxuICAgICAgICB0b2RvRGl2Lmluc2VydEJlZm9yZShlZGl0Q29udHJvbEJ1dHRvbnMsIHRvZG9Db250cm9sKTtcbiAgICAgIH0pO1xuXG4gICAgICBleHBhbmRNb3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcbiAgICAgICAgICBcImV4cGFuZGVkXCJcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvKTtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGN1cnJlbnQgdGFiIGlzIGEgcHJvamVjdCBvciBsaXN0IHRhYlxuICAgICAgICBpZiAoc3RvcmFnZS5nZXRQcm9qZWN0KHByb2plY3QubmFtZSkpIHtcbiAgICAgICAgICB0eXBlID0gXCJwcm9qZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZSA9IFwibGlzdFwiO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKFwiRGlzcGxheSB0b2Rvc1wiLCB7IG5hbWU6IHByb2plY3QubmFtZSwgdHlwZTogdHlwZSB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0b2dnbGVDb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgY29tcGxldGUgPSB0b2RvLnN3aXRjaENvbXBsZXRlKCk7XG4gICAgICAgICAgaWYgKGNvbXBsZXRlID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDBmZjM3ODBcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLWxpZ2h0LWJhY2tncm91bmQpXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodG9kb0RpdilcbiAgICAgICk7XG5cbiAgICAgIC8vIGVkaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCByZXNldCA9IHtcbiAgICBkeW5hbWljQ29udGVudDogKCkgPT4ge1xuICAgICAgdG9wRGlzcGxheS5pbm5lckhUTUwgPSBgYDtcbiAgICAgIGNvbnRlbnRXcmFwcGVyLmlubmVySFRNTCA9IGBgO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGRpc3BsYXksXG4gIH07XG59KSgpO1xuIiwiLy9ldmVudHMgLSBhIHN1cGVyLWJhc2ljIEphdmFzY3JpcHQgKHB1Ymxpc2ggc3Vic2NyaWJlKSBwYXR0ZXJuXG5cbmxldCBldmVudHMgPSB7XG4gIGV2ZW50czoge30sXG4gIC8vIG9uXG4gIHN1YnNjcmliZTogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xuICB9LFxuICAvLyBvZmZcbiAgLy8gcmVtb3ZlOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICAvLyAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gIC8vICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gIC8vICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0pIHtcbiAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gZW1pdFxuICBwdWJsaXNoOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgZm4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG5cbi8vIGV2ZW50cy5zdWJzY3JpYmUoJ2xvZycsICgpID0+IGNvbnNvbGUubG9nKGRhdGEpKSlcbi8qIFxuICBldmVudHMgPSB7XG4gICAgICAvLyBldmVudE5hbWU6IFtoYW5kbGVyXSBcbiAgICAgIGxvZzogWygpID0+IGNvbnNvbGUubG9nKGRhdGEpXSBcbiAgfVxuICAqL1xuXG4vLyBldmVudHMucHVibGlzaCgnbG9nJywgJ3B1Ymxpc2hlZCEnKVxuXG4vLyBydW5zIGVhY2ggaGFuZGxlciB3aXRoIGdpdmVuIGRhdGEgZm9yIGEgZ2l2ZW4gZXZlbnROYW1lXG5cbi8vIFNvLCB3aGVuIGEgbW9kdWxlIHB1Ymxpc2hlcyBhbiBldmVudCwgaXQgcnVucyBoYW5kbGVycyAoZnVuY3Rpb25zKSBvZiBhIG1vZHVsZSB0aGF0IHN1YnNjcmliZXMgdG8gaXQuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG5VSS5pbml0KCk7XG5VSS5kaXNwbGF5LnRvZG9zT2YoXCJJbmJveFwiLCBcImxpc3RcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9