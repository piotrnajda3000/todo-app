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
      const storage = _storage__WEBPACK_IMPORTED_MODULE_3__.storageModule.retrieve();

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
      const storage = _storage__WEBPACK_IMPORTED_MODULE_3__.storageModule.retrieve();
      console.log(`retrieved storage:`, storage);

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
      const storage = _storage__WEBPACK_IMPORTED_MODULE_3__.storageModule.retrieve();

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
  const populate = () => {
    // console.log("[Start storage.init]");

    const storage = Object.assign(proto, {
      lists: [],
      projects: [],
    });

    bindEvents(storage);

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
  const bindEvents = (storage) => {
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("Created an object", ({ object, type }) => {
      if (!storage[type].some((item) => item.name === object.name)) {
        storage[type].push(object);
        _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.publish("Update local storage");
      }
    });
    _libraries_pubsub__WEBPACK_IMPORTED_MODULE_0__.default.subscribe("Update local storage", () => {
      localStorage.setItem("storageLS", JSON.stringify(storage));
    });
  };
  const retrieve = () => {
    // console.log(events.events);
    let storage = JSON.parse(localStorage.getItem("storageLS"));
    bindEvents(storage);
    storage = rebuildMethods(storage);
    // console.log(`retrieved storage:`, storage);
    return storage;
  };
  const rebuildMethods = (storage) => {
    // console.log(`rebuilding:`, storage);
    Object.assign(storage, proto);

    // Rebuild object methods after JSON
    for (let [idx, project] of Object.entries(storage.projects)) {
      if (project.default) {
        storage.projects[idx] = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)({
          name: project.name,
          todos: project.todos,
        })({ default: true });
      } else {
        storage.projects[idx] = (0,_project__WEBPACK_IMPORTED_MODULE_1__.UserProject)({
          name: project.name,
          todos: project.todos,
        });
      }
      for (let [idx, todo] of Object.entries(project.todos)) {
        project.todos[idx] = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.Todo)({
          title: todo.title,
          dueDate: todo.dueDate,
          complete: todo.complete || false,
        });
      }
    }

    storage.lists[0] = (0,_list__WEBPACK_IMPORTED_MODULE_3__.List)({
      name: "Inbox",
      projects: storage.projects[0],
      default: true,
    });

    storage.lists[1] = (0,_list__WEBPACK_IMPORTED_MODULE_3__.List)({
      name: "All Tasks",
      projects: storage.projects,
    });

    return storage;
  };

  return {
    populate,
    retrieve,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9saWJyYXJpZXMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9saXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG9FQUFvRSwyQkFBMkIsR0FBRyxXQUFXLDJDQUEyQyx5Q0FBeUMsNkNBQTZDLGlDQUFpQyxvQ0FBb0MsR0FBRyxVQUFVLGlCQUFpQixHQUFHLFVBQVUsZ0RBQWdELGlCQUFpQixtQkFBbUIsa0JBQWtCLDJCQUEyQixxQkFBcUIsR0FBRyxnRUFBZ0UsOEJBQThCLEdBQUcsd0RBQXdELGlCQUFpQixvQkFBb0IsR0FBRyxxQ0FBcUMsMkRBQTJELEdBQUcsV0FBVyxnQ0FBZ0MsR0FBRyxzQ0FBc0Msa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcsY0FBYyxnQ0FBZ0MsR0FBRyxjQUFjLGdDQUFnQyxHQUFHLHFEQUFxRCw0Q0FBNEMsa0JBQWtCLGtCQUFrQixrQ0FBa0Msd0JBQXdCLGlEQUFpRCxpQkFBaUIsR0FBRyxXQUFXLHNCQUFzQixHQUFHLGtEQUFrRCxrQkFBa0IsMkJBQTJCLFlBQVkscUJBQXFCLEdBQUcsd0NBQXdDLGtCQUFrQixHQUFHLHFCQUFxQiw2QkFBNkIsNENBQTRDLGlCQUFpQixnQ0FBZ0MsOENBQThDLGtCQUFrQixxQkFBcUIsd0JBQXdCLHdCQUF3QixrQkFBa0IsMkJBQTJCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHlCQUF5QixvQkFBb0IsMEJBQTBCLEdBQUcsWUFBWSxvQkFBb0IscUJBQXFCLEdBQUcsMEJBQTBCLHFCQUFxQixHQUFHLGVBQWUsaUJBQWlCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxjQUFjLHVCQUF1QixHQUFHLGtCQUFrQixrQkFBa0Isa0NBQWtDLEdBQUcsZ0JBQWdCLDBCQUEwQixHQUFHLHlCQUF5QixrQkFBa0IsNEJBQTRCLDBDQUEwQywwQkFBMEIsR0FBRyxrREFBa0Qsa0JBQWtCLGlCQUFpQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLGlCQUFpQiw0QkFBNEIsR0FBRyxVQUFVLGdCQUFnQix3QkFBd0IsaUNBQWlDLDhDQUE4QyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRywyQ0FBMkMsOENBQThDLDRDQUE0QyxrQkFBa0IsMENBQTBDLHNCQUFzQixHQUFHLFlBQVkscUJBQXFCLHNDQUFzQyxjQUFjLGlCQUFpQixrQkFBa0IsR0FBRyxnQ0FBZ0MsNENBQTRDLFlBQVksb0JBQW9CLEdBQUcsOENBQThDLGdEQUFnRCxHQUFHLDhEQUE4RCxZQUFZLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHNCQUFzQix5QkFBeUIsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsZ0JBQWdCLDRDQUE0QyxrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLDBDQUEwQyxHQUFHLFdBQVcsMENBQTBDLG9CQUFvQixpQkFBaUIsR0FBRyxtQ0FBbUMsa0ZBQWtGLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLFFBQVEsWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLHdCQUF3Qix1QkFBdUIsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLDBEQUEwRCwyQkFBMkIsR0FBRyxXQUFXLDJDQUEyQyx5Q0FBeUMsNkNBQTZDLGlDQUFpQyxvQ0FBb0MsR0FBRyxVQUFVLGlCQUFpQixHQUFHLFVBQVUsZ0RBQWdELGlCQUFpQixtQkFBbUIsa0JBQWtCLDJCQUEyQixxQkFBcUIsR0FBRyxnRUFBZ0UsOEJBQThCLEdBQUcsd0RBQXdELGlCQUFpQixvQkFBb0IsR0FBRyxxQ0FBcUMsMkRBQTJELEdBQUcsV0FBVyxnQ0FBZ0MsR0FBRyxzQ0FBc0Msa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcsY0FBYyxnQ0FBZ0MsR0FBRyxjQUFjLGdDQUFnQyxHQUFHLHFEQUFxRCw0Q0FBNEMsa0JBQWtCLGtCQUFrQixrQ0FBa0Msd0JBQXdCLGlEQUFpRCxpQkFBaUIsR0FBRyxXQUFXLHNCQUFzQixHQUFHLGtEQUFrRCxrQkFBa0IsMkJBQTJCLFlBQVkscUJBQXFCLEdBQUcsd0NBQXdDLGtCQUFrQixHQUFHLHFCQUFxQiw2QkFBNkIsNENBQTRDLGlCQUFpQixnQ0FBZ0MsOENBQThDLGtCQUFrQixxQkFBcUIsd0JBQXdCLHdCQUF3QixrQkFBa0IsMkJBQTJCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHlCQUF5QixvQkFBb0IsMEJBQTBCLEdBQUcsWUFBWSxvQkFBb0IscUJBQXFCLEdBQUcsMEJBQTBCLHFCQUFxQixHQUFHLGVBQWUsaUJBQWlCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxjQUFjLHVCQUF1QixHQUFHLGtCQUFrQixrQkFBa0Isa0NBQWtDLEdBQUcsZ0JBQWdCLDBCQUEwQixHQUFHLHlCQUF5QixrQkFBa0IsNEJBQTRCLDBDQUEwQywwQkFBMEIsR0FBRyxrREFBa0Qsa0JBQWtCLGlCQUFpQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLGlCQUFpQiw0QkFBNEIsR0FBRyxVQUFVLGdCQUFnQix3QkFBd0IsaUNBQWlDLDhDQUE4QyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRywyQ0FBMkMsOENBQThDLDRDQUE0QyxrQkFBa0IsMENBQTBDLHNCQUFzQixHQUFHLFlBQVkscUJBQXFCLHNDQUFzQyxjQUFjLGlCQUFpQixrQkFBa0IsR0FBRyxnQ0FBZ0MsNENBQTRDLFlBQVksb0JBQW9CLEdBQUcsOENBQThDLGdEQUFnRCxHQUFHLDhEQUE4RCxZQUFZLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHNCQUFzQix5QkFBeUIsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsZ0JBQWdCLDRDQUE0QyxrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLDBDQUEwQyxHQUFHLFdBQVcsMENBQTBDLG9CQUFvQixpQkFBaUIsR0FBRywrQ0FBK0M7QUFDMTJUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFbmYsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBc0Y7QUFDdEYsTUFBd0c7QUFDeEcsTUFBbUc7Ozs7QUFJbkc7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkZBQVM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQ2pEaEU7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7OztBQzFCYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQSxXQUFXLFVBQVU7QUFDbUI7QUFDUztBQUNuQjtBQUNZOztBQUUxQyxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDhEQUFjLG1CQUFtQiw4QkFBOEI7QUFDckU7QUFDQTtBQUNBLE1BQU0sOERBQWM7QUFDcEI7QUFDQTtBQUNBLE1BQU0sOERBQWM7QUFDcEI7O0FBRUEsSUFBSSxnRUFBZ0I7QUFDcEIsSUFBSSxnRUFBZ0Isb0JBQW9CLGFBQWE7QUFDckQ7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDREQUFzQjs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Qsd0JBQXdCO0FBQzlFLE9BQU87QUFDUDtBQUNBLHlCQUF5Qix3QkFBd0IsK0JBQStCO0FBQ2hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscURBQVc7QUFDckI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLDhEQUFjLG1CQUFtQixhQUFhO0FBQzFELFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsNERBQXNCO0FBQzVDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDJDQUFJO0FBQzNCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxVQUFVLDhEQUFjLG1CQUFtQixhQUFhO0FBQ3hELFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLDJDQUFJO0FBQzNCO0FBQ0EsVUFBVSw4REFBYyxtQkFBbUIsYUFBYTtBQUN4RCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFdBQVc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLHNCQUFzQiw0REFBc0I7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsOERBQWMsbUJBQW1CLGlDQUFpQztBQUMxRSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsMERBQTBEO0FBQzFELEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL1ZMOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdER3QztBQUNSOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7O0FBRWxDLEVBQUUsOERBQWM7QUFDaEI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCd0I7QUFDUjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBYztBQUNsQixHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksOERBQWM7QUFDbEIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQU87QUFDbkM7QUFDQSxJQUFJLDhEQUFjO0FBQ2xCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFjO0FBQ2xCLEdBQUc7QUFDSDs7QUFFQTtBQUNBLG1DQUFtQzs7QUFFbkMsRUFBRSw4REFBYztBQUNoQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDUTtBQUNTO0FBQ25CO0FBQ0E7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsMkJBQTJCLGlEQUFPO0FBQ2xDO0FBQ0EsZUFBZTtBQUNmLEtBQUssR0FBRyxnQkFBZ0I7O0FBRXhCLHNCQUFzQixxREFBVztBQUNqQztBQUNBLGVBQWU7QUFDZixLQUFLOztBQUVMO0FBQ0Esa0JBQWtCLDJDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsZ0JBQWdCLDJDQUFJO0FBQ3BCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbUJBQW1CLDJDQUFJO0FBQ3ZCO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHFCQUFxQiwyQ0FBSTtBQUN6QjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBZ0Isd0JBQXdCLGVBQWU7QUFDM0Q7QUFDQTtBQUNBLFFBQVEsOERBQWM7QUFDdEI7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnRUFBZ0I7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBTztBQUN2QztBQUNBO0FBQ0EsU0FBUyxHQUFHLGdCQUFnQjtBQUM1QixPQUFPO0FBQ1AsZ0NBQWdDLHFEQUFXO0FBQzNDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSx1QkFBdUIsMkNBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx1QkFBdUIsMkNBQUk7QUFDM0I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEplOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFZ0I7Ozs7Ozs7VUMvQmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUM3QjtBQUNTOztBQUU5QjtBQUNBOztBQUVBO0FBQ0EsRUFBRSxvRUFBc0I7QUFDeEI7O0FBRUEsZ0VBQWtCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbGlnaHQtYmFja2dyb3VuZDogcmdiKDI1MiwgMjUyLCAyNTIpO1xcbiAgLS1kaW0tYmFja2dyb3VuZDogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiAgLS1kaW1tZXN0LWJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIC0tYWNjZW50LWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW1tZXN0LWJhY2tncm91bmQpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogOTYwcHg7XFxufVxcblxcbi8qIEhvdmVyIHByb3BlcnRpZXMgKi9cXG5cXG4ubWF0ZXJpYWwtaWNvbnMsXFxuYnV0dG9uLFxcbi5saXN0IHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5tYXRlcmlhbC1pY29uczpob3ZlcixcXG5idXR0b246aG92ZXIsXFxuLmxpc3Q6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuLmxpc3Qgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW1tZXN0LWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saXN0IHtcXG4gIGZsZXgtYmFzaXM6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuXFxuLyogUG9wLXVwIG1lc3NhZ2UgKi9cXG5cXG4ubWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZhaWx1cmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDgwO1xcbn1cXG5cXG4uc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjM3ODA7XFxufVxcblxcbi8qIE1lc3NhZ2UgZW5kICovXFxuXFxuLyogVG9wIGJhciAqL1xcbiN0b3BEaXNwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbS1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBoZWlnaHQ6IDU3cHg7XFxufVxcblxcbiNuYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4vKiBFbmQgVG9wIHByb2plY3QgYmFyICovXFxuXFxuI2NvbnRlbnRXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNjb250ZW50V3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnRXcmFwcGVyIHtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4vKiBTaW5nbGUgdG9kbyAqL1xcblxcbi50b2RvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4taW5saW5lOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kbzpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRpdGxlLFxcbi5lZGl0SW5wdXQge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgaGVpZ2h0OiAxLjE1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5vdC1leHBhbmRlZDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi4uLlxcXCI7XFxufVxcblxcbi5leHBhbmRlZCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xcbn1cXG5cXG4udG9kbyAudGl0bGUsXFxuLmR1ZURhdGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kb0NvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZWRpdElucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmVkaXRDb250cm9sQnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4vKiBFbmQgU2luZ2xlIFRvZG8gKi9cXG5cXG4jbmV3V3JhcHBlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4jbmV3V3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI25ldyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1pbmxpbmU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMnJlbSAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBCb3R0b20gbmF2aWdhdGlvbiAqL1xcblxcbiNib3R0b21OYXYge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGJvcmRlcjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5lZGl0Q29udHJvbEJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpbS1iYWNrZ3JvdW5kKTtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5lZGl0Q29udHJvbEJ1dHRvbnMgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuLyogRW5kIGJvdHRvbSBuYXZpZ2F0aW9uICovXFxuXFxuLyogTGlzdCBkaXNwbGF5ICovXFxuLmxpc3Qge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbn1cXG5cXG4ubGlzdDpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLmxpc3Qgc3BhbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW0tYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBFbmQgbGlzdCBkaXNwbGF5ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLG9DQUFvQztFQUNwQyx3Q0FBd0M7RUFDeEMsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBLHFCQUFxQjs7QUFFckI7OztFQUdFLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUEsZ0JBQWdCOztBQUVoQixZQUFZO0FBQ1o7RUFDRSx1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsd0JBQXdCOztBQUV4QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHdCQUF3QixFQUFFLGdCQUFnQjtFQUMxQyxxQkFBcUIsRUFBRSxZQUFZO0FBQ3JDOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMscUJBQXFCO0FBQ3ZCOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UseUNBQXlDO0VBQ3pDLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsT0FBTztFQUNQLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUEsMEJBQTBCOztBQUUxQixpQkFBaUI7QUFDakI7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBLHFCQUFxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWxpZ2h0LWJhY2tncm91bmQ6IHJnYigyNTIsIDI1MiwgMjUyKTtcXG4gIC0tZGltLWJhY2tncm91bmQ6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gIC0tZGltbWVzdC1iYWNrZ3JvdW5kOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICAtLWFjY2VudC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltbWVzdC1iYWNrZ3JvdW5kKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcbn1cXG5cXG4vKiBIb3ZlciBwcm9wZXJ0aWVzICovXFxuXFxuLm1hdGVyaWFsLWljb25zLFxcbmJ1dHRvbixcXG4ubGlzdCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnM6aG92ZXIsXFxuYnV0dG9uOmhvdmVyLFxcbi5saXN0OmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbi5saXN0IHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltbWVzdC1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBmbGV4LWJhc2lzOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFBvcC11cCBtZXNzYWdlICovXFxuXFxuLm1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mYWlsdXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA4MDtcXG59XFxuXFxuLnN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmYzNzgwO1xcbn1cXG5cXG4vKiBNZXNzYWdlIGVuZCAqL1xcblxcbi8qIFRvcCBiYXIgKi9cXG4jdG9wRGlzcGxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW0tYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgaGVpZ2h0OiA1N3B4O1xcbn1cXG5cXG4jbmFtZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLyogRW5kIFRvcCBwcm9qZWN0IGJhciAqL1xcblxcbiNjb250ZW50V3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jY29udGVudFdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb250ZW50V3JhcHBlciB7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuLyogU2luZ2xlIHRvZG8gKi9cXG5cXG4udG9kbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWlubGluZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG86bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50aXRsZSxcXG4uZWRpdElucHV0IHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGhlaWdodDogMS4xNXJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5ub3QtZXhwYW5kZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuLi5cXFwiO1xcbn1cXG5cXG4uZXhwYW5kZWQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcXG59XFxuXFxuLnRvZG8gLnRpdGxlLFxcbi5kdWVEYXRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG9Db250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmVkaXRJbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5lZGl0Q29udHJvbEJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogRW5kIFNpbmdsZSBUb2RvICovXFxuXFxuI25ld1dyYXBwZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuI25ld1dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNuZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4taW5saW5lOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDJyZW0gMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogQm90dG9tIG5hdmlnYXRpb24gKi9cXG5cXG4jYm90dG9tTmF2IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBib3JkZXI6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZWRpdENvbnRyb2xCdXR0b25zIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaW0tYmFja2dyb3VuZCk7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZWRpdENvbnRyb2xCdXR0b25zIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi8qIEVuZCBib3R0b20gbmF2aWdhdGlvbiAqL1xcblxcbi8qIExpc3QgZGlzcGxheSAqL1xcbi5saXN0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXG59XFxuXFxuLmxpc3Q6bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5saXN0IHNwYW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGltLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogRW5kIGxpc3QgZGlzcGxheSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIi8vIGltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwiLi9saXN0XCI7XG5pbXBvcnQgZXZlbnRzIGZyb20gXCIuL2xpYnJhcmllcy9wdWJzdWJcIjtcbmltcG9ydCB7IFByb2plY3QsIFVzZXJQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IHN0b3JhZ2VNb2R1bGUgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBVSSgpIHtcbiAgY29uc3QgaW5pdCA9ICgoKSA9PiB7XG4gICAgLy8gSW5pdFxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgaWQ9XCJ0b3BEaXNwbGF5XCI+PC9kaXY+XG4gICAgICBcbiAgICA8ZGl2IGlkPVwiY29udGVudFdyYXBwZXJcIj48L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGlkPVwiYm90dG9tTmF2XCI+XG4gICAgICAgIDxidXR0b24gZGF0YS10YWI9XCJwcm9qZWN0c1wiPlByb2plY3RzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gZGF0YS10YWI9XCJsaXN0c1wiPkxpc3RzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gZGF0YS10YWI9XCJpbmJveFwiPkluYm94PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAgIC8qIENhY2hlIGVsZW1lbnRzICovXG4gICAgLy8gV3JhcHBlcnNcbiAgICBjb25zdCB0b3BEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3BEaXNwbGF5XCIpO1xuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50V3JhcHBlclwiKTtcbiAgICBjb25zdCBib3R0b21OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvdHRvbU5hdlwiKTtcbiAgICAvLyBOYXYgYnV0dG9uc1xuICAgIGNvbnN0IHByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdidXR0b25bZGF0YS10YWI9XCJwcm9qZWN0c1wiXSdcbiAgICApO1xuICAgIGNvbnN0IGxpc3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtdGFiPVwibGlzdHNcIl0nKTtcbiAgICBjb25zdCBpbmJveEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLXRhYj1cImluYm94XCJdJyk7XG5cbiAgICAvLyBBZGQgZXZlbnRzIGxpc3RlbmVycyBhbmQgYmluZCBldmVudHNcbiAgICBpbmJveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIGV2ZW50cy5wdWJsaXNoKFwiRGlzcGxheSB0b2Rvc1wiLCB7IG5hbWU6IFwiSW5ib3hcIiwgdHlwZTogXCJsaXN0XCIgfSlcbiAgICApO1xuICAgIGxpc3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgZXZlbnRzLnB1Ymxpc2goXCJTd2l0Y2ggdGFiXCIsIFwibGlzdHNcIilcbiAgICApO1xuICAgIHByb2plY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgZXZlbnRzLnB1Ymxpc2goXCJTd2l0Y2ggdGFiXCIsIFwicHJvamVjdHNcIilcbiAgICApO1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZShcIlN3aXRjaCB0YWJcIiwgKG5hbWUpID0+IGRpc3BsYXkubGlzdE9mKG5hbWUpKTtcbiAgICBldmVudHMuc3Vic2NyaWJlKFwiRGlzcGxheSB0b2Rvc1wiLCAoeyBuYW1lLCB0eXBlIH0pID0+XG4gICAgICBkaXNwbGF5LnRvZG9zT2YobmFtZSwgdHlwZSlcbiAgICApO1xuICB9KSgpO1xuXG4gIGNvbnN0IGRpc3BsYXkgPSB7XG4gICAgLy8gRGlzcGxheSBsaXN0IG9mIGFsbCBwcm9qZWN0cyBvciBsaXN0c1xuICAgIGxpc3RPZjogKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JhZ2UgPSBzdG9yYWdlTW9kdWxlLnJldHJpZXZlKCk7XG5cbiAgICAgIHJlc2V0LmR5bmFtaWNDb250ZW50KCk7XG5cbiAgICAgIGxldCB0b3BOYW1lO1xuICAgICAgaWYgKHR5cGUgPT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgICAgIHRvcE5hbWUgPSBcIlByb2plY3RzXCI7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJsaXN0c1wiKSB7XG4gICAgICAgIHRvcE5hbWUgPSBcIkxpc3RzXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRvcE5hbWU7XG4gICAgICB0b3BEaXNwbGF5LmFwcGVuZChzcGFuKTtcblxuICAgICAgaWYgKHN0b3JhZ2UucHJvamVjdHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgY29udGVudFdyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgIFwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09IFwicHJvamVjdHNcIikge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlLnBsdXNCdXR0b24oKTtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIFVzZXJQcm9qZWN0KHByb21wdChcIlByb2plY3QgbmFtZT9cIikpO1xuICAgICAgICAgIGRpc3BsYXkuc3RvcmFnZShcInByb2plY3RzXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1dyYXBwZXJcIik7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZChkaXYpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGlkeCBpbiBzdG9yYWdlW3R5cGVdKSB7XG4gICAgICAgIC8vIERvbid0IGRpc3BsYXkgdGhlIGRlZmF1bHQgcHJvamVjdCBvciBsaXN0LlxuICAgICAgICBpZiAoIXN0b3JhZ2VbdHlwZV1baWR4XS5kZWZhdWx0KSB7XG4gICAgICAgICAgbGV0IG5hbWUgPSBzdG9yYWdlW3R5cGVdW2lkeF0ubmFtZTtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgZGl2LmFwcGVuZChzcGFuKTtcbiAgICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoZGl2KTtcbiAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlID09IFwibGlzdHNcIikge1xuICAgICAgICAgICAgICB0eXBlID0gXCJsaXN0XCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0eXBlID0gXCJwcm9qZWN0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudHMucHVibGlzaChcIkRpc3BsYXkgdG9kb3NcIiwgeyBuYW1lLCB0eXBlIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBEaXNwbGF5IHRvZG9zIGVpdGhlciB0eXBlIGEgcHJvamVjdCBvciBhIGxpc3RcbiAgICB0b2Rvc09mOiAobmFtZSwgdHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IHN0b3JhZ2VNb2R1bGUucmV0cmlldmUoKTtcbiAgICAgIGNvbnNvbGUubG9nKGByZXRyaWV2ZWQgc3RvcmFnZTpgLCBzdG9yYWdlKTtcblxuICAgICAgcmVzZXQuZHluYW1pY0NvbnRlbnQoKTtcblxuICAgICAgY29udGVudFdyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IFwiZmxleDogMVwiO1xuXG4gICAgICBpZiAodHlwZSA9PSBcImxpc3RcIikge1xuICAgICAgICBjb25zdCBsaXN0ID0gc3RvcmFnZS5saXN0KG5hbWUpO1xuXG4gICAgICAgIHRvcERpc3BsYXkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJuYW1lXCI+JHtsaXN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgYDtcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlLnBsdXNCdXR0b24oKTtcbiAgICAgICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvZG8gPSBUb2RvKHtcbiAgICAgICAgICAgIHRpdGxlOiBwcm9tcHQoXCJUaXRsZVwiKSxcbiAgICAgICAgICAgIGR1ZURhdGU6IHByb21wdChcIkR1ZT9cIiksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3RvcmFnZS5wcm9qZWN0c1swXS5hZGRUb2RvKHRvZG8pO1xuICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKFwiRGlzcGxheSB0b2Rvc1wiLCB7IG5hbWUsIHR5cGUgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdElkeCBpbiBsaXN0LnByb2plY3RzKSB7XG4gICAgICAgICAgbGV0IHByb2plY3RPYmogPSBsaXN0LnByb2plY3RzW3Byb2plY3RJZHhdO1xuICAgICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdE9iajtcbiAgICAgICAgICBjcmVhdGUudG9kb3NGcm9tKHByb2plY3QsIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHN0b3JhZ2UucHJvamVjdChuYW1lKTtcblxuICAgICAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlLnBsdXNCdXR0b24oKTtcbiAgICAgICAgbmV3VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvZG8gPSBUb2RvKHByb21wdChcIlRpdGxlXCIpLCBwcm9tcHQoXCJEdWU/XCIpKTtcbiAgICAgICAgICBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgICAgICAgZXZlbnRzLnB1Ymxpc2goXCJEaXNwbGF5IHRvZG9zXCIsIHsgbmFtZSwgdHlwZSB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFwcm9qZWN0LmRlZmF1bHQpIHtcbiAgICAgICAgICB0b3BEaXNwbGF5LmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS1jb250cm9sPVwiZGVsZXRlXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGlkPVwibmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS1jb250cm9sPVwicmVuYW1lXCI+ZWRpdDwvc3Bhbj5cbiAgICAgICAgICBgO1xuICAgICAgICAgIGJpbmRFdmVudHMucHJvamVjdFVJKHByb2plY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvcERpc3BsYXkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxzcGFuIGlkPVwibmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICBgO1xuICAgICAgICB9XG5cbiAgICAgICAgY3JlYXRlLnRvZG9zRnJvbShwcm9qZWN0LCB0eXBlKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZSA9IHtcbiAgICBwbHVzQnV0dG9uOiAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1RvZG8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdXcmFwcGVyXCIpO1xuICAgICAgbmV3VG9kby5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGlkPVwibmV3XCI+YWRkPC9zcGFuPic7XG4gICAgICBjb250ZW50V3JhcHBlci5hcHBlbmQobmV3VG9kbyk7XG4gICAgICByZXR1cm4gbmV3VG9kbztcbiAgICB9LFxuICAgIHRvZG9zRnJvbTogKHByb2plY3QsIHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9zT2JqZWN0ID0gcHJvamVjdC50b2RvcztcblxuICAgICAgZm9yIChjb25zdCB0b2RvTmFtZSBpbiB0b2Rvc09iamVjdCkge1xuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kKHRvZG9EaXYpO1xuXG4gICAgICAgIGNvbnN0IHRvZG8gPSB0b2Rvc09iamVjdFt0b2RvTmFtZV07XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHRvZG8pIHtcbiAgICAgICAgICBpZiAodG9kby5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgY29uc3QgdG9kb1Byb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9kb1Byb3AuY2xhc3NMaXN0LmFkZChwcm9wKTtcbiAgICAgICAgICAgIHRvZG9Qcm9wLnRleHRDb250ZW50ID0gYCR7dG9kb1twcm9wXX1gO1xuICAgICAgICAgICAgdG9kb0Rpdi5hcHBlbmQodG9kb1Byb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodG9kby5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdG9kb0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMGZmMzc4MFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbGlnaHQtYmFja2dyb3VuZClcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b2RvQ29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9Db250cm9sLmNsYXNzTGlzdC5hZGQoXCJ0b2RvQ29udHJvbFwiKTtcbiAgICAgICAgdG9kb0NvbnRyb2wuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIGRhdGEtY29udHJvbD1cImRlbGV0ZVRvZG9cIj5kZWxldGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS1jb250cm9sPVwiZXhwYW5kX21vcmVcIj5leHBhbmRfbW9yZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBkYXRhLWNvbnRyb2w9XCJ0b2dnbGVDb21wbGV0ZVwiPmRvbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgZGF0YS1jb250cm9sPVwiZWRpdFRvZG9cIj5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcblxuICAgICAgICB0b2RvRGl2LmFwcGVuZCh0b2RvQ29udHJvbCk7XG5cbiAgICAgICAgYmluZEV2ZW50cy5zaW5nbGVUb2RvVUkodG9kbywgdG9kb0RpdiwgdG9kb0NvbnRyb2wsIHByb2plY3QsIHR5cGUpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgYmluZEV2ZW50cyA9IHtcbiAgICBwcm9qZWN0VUk6IChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ3NwYW5bZGF0YS1jb250cm9sPVwiZGVsZXRlXCJdJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlbmFtZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnc3BhbltkYXRhLWNvbnRyb2w9XCJyZW5hbWVcIl0nXG4gICAgICApO1xuXG4gICAgICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3QuZGVsZXRlKCk7XG4gICAgICAgIGRpc3BsYXkudG9kb3NPZihcIkluYm94XCIsIFwibGlzdFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICByZW5hbWVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3QucmVuYW1lKHByb21wdChcIk5ldyBwcm9qZWN0IG5hbWU/XCIpKTtcbiAgICAgICAgZGlzcGxheS50b2Rvc09mKHByb2plY3QubmFtZSwgXCJwcm9qZWN0XCIpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzaW5nbGVUb2RvVUk6ICh0b2RvLCB0b2RvRGl2LCB0b2RvQ29udHJvbCwgcHJvamVjdCwgdHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc3RvcmFnZSA9IHN0b3JhZ2VNb2R1bGUucmV0cmlldmUoKTtcblxuICAgICAgY29uc3QgZXhwYW5kTW9yZSA9IHRvZG9Db250cm9sLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdzcGFuW2RhdGEtY29udHJvbD1cImV4cGFuZF9tb3JlXCJdJ1xuICAgICAgKTtcblxuICAgICAgY29uc3QgZGVsZXRlVG9kbyA9IHRvZG9Db250cm9sLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdzcGFuW2RhdGEtY29udHJvbD1cImRlbGV0ZVRvZG9cIl0nXG4gICAgICApO1xuXG4gICAgICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9IHRvZG9Db250cm9sLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdzcGFuW2RhdGEtY29udHJvbD1cInRvZ2dsZUNvbXBsZXRlXCJdJ1xuICAgICAgKTtcblxuICAgICAgY29uc3QgZWRpdFRvZG8gPSB0b2RvQ29udHJvbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnc3BhbltkYXRhLWNvbnRyb2w9XCJlZGl0VG9kb1wiXSdcbiAgICAgICk7XG5cbiAgICAgIGVkaXRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRvZG9EaXYucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSB0b2RvRGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVwiKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSB0ZXh0YXJlYSBleHBhbmQgdG8gdGV4dCdzIGV4cGFuZGVkIGhlaWdodFxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG4gICAgICAgIGxldCB0aXRsZVN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGl0bGUpO1xuICAgICAgICBsZXQgdGl0bGVIZWlnaHQgPSB0aXRsZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJoZWlnaHRcIik7XG4gICAgICAgIHRpdGxlSGVpZ2h0ID0gYGNhbGMoJHt0aXRsZUhlaWdodH0gKyAxcmVtKWA7XG4gICAgICAgIHRpdGxlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gdGl0bGVIZWlnaHQ7XG5cbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdElucHV0XCIpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0SW5wdXRcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGVDb250ZW50ID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGR1ZURhdGVDb250ZW50ID0gZHVlRGF0ZS50ZXh0Q29udGVudDtcblxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGVDb250ZW50O1xuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBkdWVEYXRlQ29udGVudDtcblxuICAgICAgICB0aXRsZSA9IHRvZG9EaXYucmVwbGFjZUNoaWxkKHRpdGxlSW5wdXQsIHRpdGxlKTtcbiAgICAgICAgZHVlRGF0ZSA9IHRvZG9EaXYucmVwbGFjZUNoaWxkKGR1ZURhdGVJbnB1dCwgZHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3QgZWRpdENvbnRyb2xCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZWRpdENvbnRyb2xCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJlZGl0Q29udHJvbEJ1dHRvbnNcIik7XG5cbiAgICAgICAgY29uc3QgYWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWNjZXB0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGRpc3BsYXkudG9kb3NPZihwcm9qZWN0Lm5hbWUsIFwicHJvamVjdFwiKTtcbiAgICAgICAgICB9LmJpbmQodG9kbylcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXNwbGF5LnRvZG9zT2YocHJvamVjdC5uYW1lLCBcInByb2plY3RcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVkaXRDb250cm9sQnV0dG9ucy5hcHBlbmQoYWNjZXB0LCBjYW5jZWwpO1xuXG4gICAgICAgIHRvZG9EaXYuaW5zZXJ0QmVmb3JlKGVkaXRDb250cm9sQnV0dG9ucywgdG9kb0NvbnRyb2wpO1xuICAgICAgfSk7XG5cbiAgICAgIGV4cGFuZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgICAgIFwiZXhwYW5kZWRcIlxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGRlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYHByb2plY3Q6YCwgcHJvamVjdCk7XG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvKTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCB0YWIgaXMgYSBwcm9qZWN0IG9yIGxpc3QgdGFiXG4gICAgICAgIGlmIChzdG9yYWdlLnByb2plY3QocHJvamVjdC5uYW1lKSkge1xuICAgICAgICAgIHR5cGUgPSBcInByb2plY3RcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlID0gXCJsaXN0XCI7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goXCJEaXNwbGF5IHRvZG9zXCIsIHsgbmFtZTogcHJvamVjdC5uYW1lLCB0eXBlOiB0eXBlIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRvZ2dsZUNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICAgIGxldCBjb21wbGV0ZSA9IHRvZG8uc3dpdGNoQ29tcGxldGUoKTtcbiAgICAgICAgICBpZiAoY29tcGxldGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMGZmMzc4MFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidmFyKC0tbGlnaHQtYmFja2dyb3VuZClcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0b2RvRGl2KVxuICAgICAgKTtcblxuICAgICAgLy8gZWRpdFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHJlc2V0ID0ge1xuICAgIGR5bmFtaWNDb250ZW50OiAoKSA9PiB7XG4gICAgICB0b3BEaXNwbGF5LmlubmVySFRNTCA9IGBgO1xuICAgICAgY29udGVudFdyYXBwZXIuaW5uZXJIVE1MID0gYGA7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXksXG4gIH07XG59KSgpO1xuIiwiLy9ldmVudHMgLSBhIHN1cGVyLWJhc2ljIEphdmFzY3JpcHQgKHB1Ymxpc2ggc3Vic2NyaWJlKSBwYXR0ZXJuXG5cbmxldCBldmVudHMgPSB7XG4gIGV2ZW50czoge30sXG4gIC8vIG9uXG4gIHN1YnNjcmliZTogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xuICB9LFxuICAvLyBvZmZcbiAgLy8gcmVtb3ZlOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbikge1xuICAvLyAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gIC8vICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gIC8vICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0pIHtcbiAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gZW1pdFxuICBwdWJsaXNoOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgZm4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG5cbi8vIGV2ZW50cy5zdWJzY3JpYmUoJ2xvZycsICgpID0+IGNvbnNvbGUubG9nKGRhdGEpKSlcbi8qIFxuICBldmVudHMgPSB7XG4gICAgICAvLyBldmVudE5hbWU6IFtoYW5kbGVyXSBcbiAgICAgIGxvZzogWygpID0+IGNvbnNvbGUubG9nKGRhdGEpXSBcbiAgfVxuICAqL1xuXG4vLyBldmVudHMucHVibGlzaCgnbG9nJywgJ3B1Ymxpc2hlZCEnKVxuXG4vLyBydW5zIGVhY2ggaGFuZGxlciB3aXRoIGdpdmVuIGRhdGEgZm9yIGEgZ2l2ZW4gZXZlbnROYW1lXG5cbi8vIFNvLCB3aGVuIGEgbW9kdWxlIHB1Ymxpc2hlcyBhbiBldmVudCwgaXQgcnVucyBoYW5kbGVycyAoZnVuY3Rpb25zKSBvZiBhIG1vZHVsZSB0aGF0IHN1YnNjcmliZXMgdG8gaXQuXG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2xpYnJhcmllcy9wdWJzdWJcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgTGlzdCA9IChkYXRhKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnByb2plY3RzKSkge1xuICAgIGRhdGEucHJvamVjdHMgPSBbZGF0YS5wcm9qZWN0c107XG4gIH1cblxuICBjb25zdCBsaXN0T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG5cbiAgZXZlbnRzLnB1Ymxpc2goXCJDcmVhdGVkIGFuIG9iamVjdFwiLCB7XG4gICAgb2JqZWN0OiBsaXN0T2JqLFxuICAgIHR5cGU6IFwibGlzdHNcIixcbiAgfSk7XG5cbiAgcmV0dXJuIGxpc3RPYmo7XG59O1xuXG5leHBvcnQgeyBMaXN0IH07XG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2xpYnJhcmllcy9wdWJzdWJcIjtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgcHJvdG8gPSB7XG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3NbdG9kby50aXRsZV0gPSB0b2RvO1xuICAgIGV2ZW50cy5wdWJsaXNoKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIik7XG4gIH0sXG4gIHJlbW92ZVRvZG8odG9kbykge1xuICAgIGRlbGV0ZSB0aGlzLnRvZG9zW3RvZG8udGl0bGVdO1xuICAgIGV2ZW50cy5wdWJsaXNoKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIik7XG4gIH0sXG59O1xuXG5sZXQgZWRpdE1ldGhvZHMgPSB7XG4gIHJlbmFtZShuZXdOYW1lKSB7XG4gICAgY29uc29sZS5sb2coYHN0b3JhZ2U6YCwgc3RvcmFnZSk7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICBldmVudHMucHVibGlzaChcIlVwZGF0ZSBsb2NhbCBzdG9yYWdlXCIpO1xuICB9LFxuICBkZWxldGUoKSB7XG4gICAgbGV0IHByb2plY3RJZHggPSB0aGlzLnByb2plY3RJZHgodGhpcy5uYW1lKTtcbiAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SWR4LCAxKTtcbiAgICBldmVudHMucHVibGlzaChcIlVwZGF0ZSBsb2NhbCBzdG9yYWdlXCIpO1xuICB9LFxufTtcblxuY29uc3QgUHJvamVjdCA9IChkYXRhKSA9PiAoZXh0ZW5kV2l0aCkgPT4ge1xuICBsZXQgcHJvamVjdE9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCBkYXRhLCBleHRlbmRXaXRoKTtcblxuICBldmVudHMucHVibGlzaChcIkNyZWF0ZWQgYW4gb2JqZWN0XCIsIHtcbiAgICBvYmplY3Q6IHByb2plY3RPYmosXG4gICAgdHlwZTogXCJwcm9qZWN0c1wiLFxuICB9KTtcblxuICByZXR1cm4gcHJvamVjdE9iajtcbn07XG5cbmNvbnN0IFVzZXJQcm9qZWN0ID0gKGRhdGEpID0+IFByb2plY3QoZGF0YSkoZWRpdE1ldGhvZHMpO1xuXG5leHBvcnQgeyBQcm9qZWN0LCBVc2VyUHJvamVjdCB9O1xuIiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9saWJyYXJpZXMvcHVic3ViXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBVc2VyUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vbGlzdFwiO1xuXG5jb25zdCBwcm90byA9IHtcbiAgcHJvamVjdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBjb25zb2xlLmxvZyhgdGhpczpgLCB0aGlzKTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdHMpIHtcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHByb2plY3RJZHg6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgZm9yIChsZXQgW2lkeCwgcHJvamVjdF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wcm9qZWN0cykpIHtcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGlzdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgbGlzdDpgLCB0aGlzKTtcbiAgICBmb3IgKGxldCBsaXN0IG9mIHRoaXMubGlzdHMpIHtcbiAgICAgIGlmIChsaXN0Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5jb25zdCBzdG9yYWdlTW9kdWxlID0gKCgpID0+IHtcbiAgY29uc3QgcG9wdWxhdGUgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJbU3RhcnQgc3RvcmFnZS5pbml0XVwiKTtcblxuICAgIGNvbnN0IHN0b3JhZ2UgPSBPYmplY3QuYXNzaWduKHByb3RvLCB7XG4gICAgICBsaXN0czogW10sXG4gICAgICBwcm9qZWN0czogW10sXG4gICAgfSk7XG5cbiAgICBiaW5kRXZlbnRzKHN0b3JhZ2UpO1xuXG4gICAgLy8gUG9wdWxhdGUgc3RvcmFnZVxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCh7XG4gICAgICBuYW1lOiBcIkluYm94XCIsXG4gICAgICB0b2Rvczoge30sXG4gICAgfSkoeyBkZWZhdWx0OiB0cnVlIH0pO1xuXG4gICAgbGV0IHVzZXJQcm9qZWN0ID0gVXNlclByb2plY3Qoe1xuICAgICAgbmFtZTogXCJZb3VyIHByb2plY3RcIixcbiAgICAgIHRvZG9zOiB7fSxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIGxpc3RzXG4gICAgY29uc3QgaW5ib3ggPSBMaXN0KHtcbiAgICAgIG5hbWU6IFwiSW5ib3hcIixcbiAgICAgIHByb2plY3RzOiBkZWZhdWx0UHJvamVjdCxcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBhbGwgPSBMaXN0KHtcbiAgICAgIG5hbWU6IFwiQWxsIFRhc2tzXCIsXG4gICAgICBwcm9qZWN0czogc3RvcmFnZS5wcm9qZWN0cyxcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIHRvZG9zIGFuZCBhZGQgdGhlbSB0byBpbml0aWFsIHByb2plY3RzXG4gICAgbGV0IGluaXRUb2RvID0gVG9kbyh7XG4gICAgICB0aXRsZTogXCJXZWxjb21lXCIsXG4gICAgICBkdWVEYXRlOiBcIjIwLTA1LTIwMDBcIixcbiAgICB9KTtcblxuICAgIGxldCBuZXdOZXdUb2RvID0gVG9kbyh7XG4gICAgICB0aXRsZTogXCJIZWxsb1wiLFxuICAgICAgZHVlRGF0ZTogXCIwMS0wMS0yMDAwXCIsXG4gICAgfSk7XG5cbiAgICAvLyBEb2VzIGl0IG1ha2Ugc2Vuc2UgdG8gc3RvcmUgdG9kbyBvYmplY3RzPyBJIHRoaW5rIHNvLCBiZWNhdXNlIHRoZW4sIHdlIGhhdmUgYSByZWZlcmVuY2UuLi5cbiAgICBkZWZhdWx0UHJvamVjdC5hZGRUb2RvKGluaXRUb2RvKTtcbiAgICB1c2VyUHJvamVjdC5hZGRUb2RvKG5ld05ld1RvZG8pO1xuXG4gICAgLy8gY29uc29sZS5sb2coYFN0b3JhZ2UgYWZ0ZXIgcG9wdWxhdGluZzogYCwgc3RvcmFnZSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAvLyAgIGBMb2NhbCBzdG9yYWdlIGFmdGVyIHBvcHVsYXRpbmc6YCxcbiAgICAvLyAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZUxTXCIpXG4gICAgLy8gKTtcbiAgfTtcbiAgY29uc3QgYmluZEV2ZW50cyA9IChzdG9yYWdlKSA9PiB7XG4gICAgZXZlbnRzLnN1YnNjcmliZShcIkNyZWF0ZWQgYW4gb2JqZWN0XCIsICh7IG9iamVjdCwgdHlwZSB9KSA9PiB7XG4gICAgICBpZiAoIXN0b3JhZ2VbdHlwZV0uc29tZSgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBvYmplY3QubmFtZSkpIHtcbiAgICAgICAgc3RvcmFnZVt0eXBlXS5wdXNoKG9iamVjdCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKFwiVXBkYXRlIGxvY2FsIHN0b3JhZ2VcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZXZlbnRzLnN1YnNjcmliZShcIlVwZGF0ZSBsb2NhbCBzdG9yYWdlXCIsICgpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmFnZUxTXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmV0cmlldmUgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnRzLmV2ZW50cyk7XG4gICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZUxTXCIpKTtcbiAgICBiaW5kRXZlbnRzKHN0b3JhZ2UpO1xuICAgIHN0b3JhZ2UgPSByZWJ1aWxkTWV0aG9kcyhzdG9yYWdlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgcmV0cmlldmVkIHN0b3JhZ2U6YCwgc3RvcmFnZSk7XG4gICAgcmV0dXJuIHN0b3JhZ2U7XG4gIH07XG4gIGNvbnN0IHJlYnVpbGRNZXRob2RzID0gKHN0b3JhZ2UpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhgcmVidWlsZGluZzpgLCBzdG9yYWdlKTtcbiAgICBPYmplY3QuYXNzaWduKHN0b3JhZ2UsIHByb3RvKTtcblxuICAgIC8vIFJlYnVpbGQgb2JqZWN0IG1ldGhvZHMgYWZ0ZXIgSlNPTlxuICAgIGZvciAobGV0IFtpZHgsIHByb2plY3RdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JhZ2UucHJvamVjdHMpKSB7XG4gICAgICBpZiAocHJvamVjdC5kZWZhdWx0KSB7XG4gICAgICAgIHN0b3JhZ2UucHJvamVjdHNbaWR4XSA9IFByb2plY3Qoe1xuICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICB0b2RvczogcHJvamVjdC50b2RvcyxcbiAgICAgICAgfSkoeyBkZWZhdWx0OiB0cnVlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmFnZS5wcm9qZWN0c1tpZHhdID0gVXNlclByb2plY3Qoe1xuICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICB0b2RvczogcHJvamVjdC50b2RvcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBbaWR4LCB0b2RvXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0LnRvZG9zKSkge1xuICAgICAgICBwcm9qZWN0LnRvZG9zW2lkeF0gPSBUb2RvKHtcbiAgICAgICAgICB0aXRsZTogdG9kby50aXRsZSxcbiAgICAgICAgICBkdWVEYXRlOiB0b2RvLmR1ZURhdGUsXG4gICAgICAgICAgY29tcGxldGU6IHRvZG8uY29tcGxldGUgfHwgZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0b3JhZ2UubGlzdHNbMF0gPSBMaXN0KHtcbiAgICAgIG5hbWU6IFwiSW5ib3hcIixcbiAgICAgIHByb2plY3RzOiBzdG9yYWdlLnByb2plY3RzWzBdLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHN0b3JhZ2UubGlzdHNbMV0gPSBMaXN0KHtcbiAgICAgIG5hbWU6IFwiQWxsIFRhc2tzXCIsXG4gICAgICBwcm9qZWN0czogc3RvcmFnZS5wcm9qZWN0cyxcbiAgICB9KTtcblxuICAgIHJldHVybiBzdG9yYWdlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcG9wdWxhdGUsXG4gICAgcmV0cmlldmUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBzdG9yYWdlTW9kdWxlIH07XG4iLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL2xpYnJhcmllcy9wdWJzdWJcIjtcblxuY29uc3QgcHJvdG8gPSB7XG4gIHN3aXRjaENvbXBsZXRlKCkge1xuICAgIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcblxuICAgIGlmICh0aGlzLmNvbXBsZXRlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbXBsZXRlZCFcIik7XG4gICAgfSBlbHNlIGlmICghdGhpcy5jb21wbGV0ZSkge1xuICAgICAgY29uc29sZS5sb2coXCJOb3QgZG9uZSAoeWV0KSFcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGU7XG4gIH0sXG59O1xuXG5jb25zdCBUb2RvID0gKGRhdGEpID0+IHtcbiAgbGV0IHRvZG9PYmogPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7XG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgZHVlRGF0ZTogZGF0YS5kdWVEYXRlLFxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodG9kb09iaiwgXCJjb21wbGV0ZVwiLCB7XG4gICAgdmFsdWU6IGRhdGEuY29tcGxldGUgfHwgZmFsc2UsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gIH0pO1xuXG4gIHJldHVybiB0b2RvT2JqO1xufTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN0b3JhZ2VNb2R1bGUgfSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2VcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuXG4vLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInN0b3JhZ2VMU1wiKTtcbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmFnZUxTXCIpKSB7XG4gIHN0b3JhZ2VNb2R1bGUucG9wdWxhdGUoKTtcbn1cblxuVUkuZGlzcGxheS50b2Rvc09mKFwiSW5ib3hcIiwgXCJsaXN0XCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==