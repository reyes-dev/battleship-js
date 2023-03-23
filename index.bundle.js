"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Electrolize&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Electrolize', sans-serif;\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8rem;\n  background-color: #8d99ae;\n}\nh1 {\n  font-size: 6rem;\n  margin-top: 2rem;\n}\nbutton {\n  border-radius: 5px;\n  background-color: #003049;\n  color: #669bbc;\n  min-height: min-content;\n  font-size: 150%;\n}\n.w3r-dot {\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8rem;\n\n\n  width: 100vw;\n  height: 100vh;\n  background-color: \n#ccc;\n  background-image: radial-gradient(#495867 10%, transparent 11%),\n    radial-gradient(#495867 10%, transparent 11%);\n  background-size: 10px 10px;\n  background-position: 0 0, 30px 30px;\n  background-repeat: repeat;\n}\n.boards {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: fit-content;\n  width: fit-content;\n  gap: 12rem;\n}\n.boards > div {\n  height: 30rem;\n  width: 30rem;\n}\n.player, .computer {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n.rainbow_text_animated {\n  background: linear-gradient(to right, #edf2f4, #ef233c , #d90429, #669bbc, #003049);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  animation: rainbow_animation 6s ease-in-out infinite;\n  background-size: 400% 100%;\n}\n.direction {\n  height: 50px;\n  width: 50px;\n  margin-bottom: 10px;\n  margin-left: 19%;\n}\n.hide {\n  display: none;\n}\n\n@keyframes rainbow_animation {\n  0%,100% {\n      background-position: 0 0;\n  }\n\n  50% {\n      background-position: 100% 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,uBAAuB;EACvB,eAAe;AACjB;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;;EAGT,YAAY;EACZ,aAAa;EACb;IACE;EACF;iDAC+C;EAC/C,0BAA0B;EAC1B,mCAAmC;EACnC,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,mCAAmC;EACnC,sCAAsC;AACxC;AACA;EACE,mFAAmF;EACnF,6BAA6B;EAC7B,qBAAqB;EACrB,kBAAkB;EAClB,oDAAoD;EACpD,0BAA0B;AAC5B;AACA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;;AAEA;EACE;MACI,wBAAwB;EAC5B;;EAEA;MACI,2BAA2B;EAC/B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Electrolize&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Electrolize', sans-serif;\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8rem;\n  background-color: #8d99ae;\n}\nh1 {\n  font-size: 6rem;\n  margin-top: 2rem;\n}\nbutton {\n  border-radius: 5px;\n  background-color: #003049;\n  color: #669bbc;\n  min-height: min-content;\n  font-size: 150%;\n}\n.w3r-dot {\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8rem;\n\n\n  width: 100vw;\n  height: 100vh;\n  background-color: \n#ccc;\n  background-image: radial-gradient(#495867 10%, transparent 11%),\n    radial-gradient(#495867 10%, transparent 11%);\n  background-size: 10px 10px;\n  background-position: 0 0, 30px 30px;\n  background-repeat: repeat;\n}\n.boards {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: fit-content;\n  width: fit-content;\n  gap: 12rem;\n}\n.boards > div {\n  height: 30rem;\n  width: 30rem;\n}\n.player, .computer {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n}\n.rainbow_text_animated {\n  background: linear-gradient(to right, #edf2f4, #ef233c , #d90429, #669bbc, #003049);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  animation: rainbow_animation 6s ease-in-out infinite;\n  background-size: 400% 100%;\n}\n.direction {\n  height: 50px;\n  width: 50px;\n  margin-bottom: 10px;\n  margin-left: 19%;\n}\n.hide {\n  display: none;\n}\n\n@keyframes rainbow_animation {\n  0%,100% {\n      background-position: 0 0;\n  }\n\n  50% {\n      background-position: 100% 0;\n  }\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/computerFactory.js":
/*!********************************!*\
  !*** ./src/computerFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Computer": () => (/* binding */ Computer)
/* harmony export */ });
const Computer = () => {
  const _randZeroToNine = () => {
    return Math.floor(Math.random() * 10);
  };
  const _generateRandomCoordinate = () => {
    return [_randZeroToNine(), _randZeroToNine()];
  };
  const _checkRandomCoordinate = (board) => {
    let randomCoordinate = _generateRandomCoordinate();
    while (
      board[randomCoordinate[0]][randomCoordinate[1]] === 1 ||
      board[randomCoordinate[0]][randomCoordinate[1]] === 2
    ) {
      randomCoordinate = _generateRandomCoordinate();
    }
    return randomCoordinate;
  };
  // Double check to make sure one ship does not override another
  const _checkRandomCoordinateForShipContact = (
    board,
    ship,
    coordinate,
    randBool
  ) => {
    for (let i = 0; i < ship.shipLength; i++) {
      if (randBool) {
        if (typeof board[coordinate[0] + i][coordinate[1]] === "object") {
          return true;
        }
      } else {
        if (typeof board[coordinate[0]][coordinate[1] + i] === "object") {
          return true;
        }
      }
    }
  };
  const _checkRandomCoordinateIfOccupied = (board, ship, randBool) => {
    let randCoordinate = _generateRandomCoordinate();
    while (
      typeof board[randCoordinate[0]][randCoordinate[1]] === "object" ||
      randCoordinate[0] + ship.shipLength > 10 ||
      randCoordinate[1] + ship.shipLength > 10 ||
      _checkRandomCoordinateForShipContact(
        board,
        ship,
        randCoordinate,
        randBool
      )
    ) {
      randCoordinate = _generateRandomCoordinate();
    }
    return randCoordinate;
  };
  const randomAttack = (board) => {
    return board.receiveAttack(_checkRandomCoordinate(board.board));
  };
  const placeShipsRandomly = (board) => {
    board.shipyard.forEach((ship) => {
      const randBool = Math.random() > 0.5 ? true : false;
      let randCoordinate = _checkRandomCoordinateIfOccupied(
        board.board,
        ship,
        randBool
      );
      board.placeShip(ship, randCoordinate, randBool);
      board.afterPlacementShipyard.push(ship);
    });
  };
  return { randomAttack, placeShipsRandomly };
};




/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


const displayController = (() => {
  let playerBoard = document.querySelector(".player");
  let computerBoard = document.querySelector(".computer");
  let directionBtn = document.querySelector(".direction");
  const boardsContainer = document.querySelector(".boards");
  let direction = false;
  let called = true;
  const _revealSquare = (board, coord1, coord2, square) => {
    square.disabled = true;
    if (board[coord1][coord2] === 0) {
      square.innerHTML = "v";
      square.style.color = "#DBF4A7";
    } else if (typeof board[coord1][coord2] === "object") {
      square.innerHTML = "#";
      square.style.color = "red";
    }
  };
  const _shipMouseoverVertical = (buttons, gameboard) => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseover", () => {
        const indices = [];

        for (let k = 0; k < gameboard.shipyard[0].shipLength; k++) {
          indices.push(i + k * 10);
        }

        for (const index of indices) {
          buttons[index].style.backgroundColor = "green";
        }
      });
    }
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseout", () => {
        const indices = [];

        for (let k = 0; k < gameboard.shipyard[0].shipLength; k++) {
          indices.push(i + k * 10);
        }

        for (const index of indices) {
          buttons[index].style.backgroundColor = "#003049";
        }
      });
    }
  };
  const _shipMouseoverHorizontal = (buttons, gameboard) => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseover", () => {
        const indices = [];

        for (let k = 0; k < gameboard.shipyard[0].shipLength; k++) {
          indices.push(i + k);
        }

        for (const index of indices) {
          buttons[index].style.backgroundColor = "green";
        }
      });
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mouseout", () => {
          const indices = [];

          for (let k = 0; k < gameboard.shipyard[0].shipLength; k++) {
            indices.push(i + k);
          }

          for (const index of indices) {
            buttons[index].style.backgroundColor = "#003049";
          }
        });
      }
    }
  };
  const _placeShipListener = (gameboard, square, coordinate) => {
    square.addEventListener("click", () => {
      gameboard.placeShip(gameboard.shipyard[0], coordinate, direction);
      gameboard.afterPlacementShipyard.push(gameboard.shipyard.shift());
      renderPlayerBoardPlacementPhase(gameboard);
    });
  };
  const renderPlayerBoardPlacementPhase = (gameboard) => {
    playerBoard.innerHTML = "";
    for (let i = 0; i < gameboard.board.length; i++) {
      for (let j = 0; j < gameboard.board[i].length; j++) {
        let square = document.createElement("button");
        if (typeof gameboard.board[i][j] === "object") {
          square.innerHTML = "#";
        } else {
          square.innerHTML = "~";
        }
        playerBoard.appendChild(square);
        _placeShipListener(gameboard, square, [i, j]);
      }
    }
    const buttons = document.querySelectorAll(".player button");
    if (direction) {
      _shipMouseoverVertical(buttons, gameboard);
    } else {
      _shipMouseoverHorizontal(buttons, gameboard);
    }
  };
  const renderPlayerBoard = (board) => {
    playerBoard.innerHTML = "";
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board[i].length; j++) {
        let square = document.createElement("button");
        square.disabled = true;
        if (board.board[i][j] === 1) {
          square.innerHTML = "#";
          square.style.color = "red";
        } else if (board.board[i][j] === 2) {
          square.innerHTML = "v";
          square.style.color = "#DBF4A7";
        } else if (typeof board.board[i][j] === "object") {
          square.innerHTML = "#";
        } else {
          square.innerHTML = "~";
        }
        playerBoard.appendChild(square);
      }
    }
  };
  const renderComputerBoard = (board, player) => {
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board[i].length; j++) {
        let square = document.createElement("button");
        if (board.board[i][j] === 1) {
          square.innerHTML = "x";
          square.disabled = true;
        } else if (board.board[i][j] === 2) {
          square.innerHTML = "v";
          square.disabled = true;
        } else {
          square.innerHTML = "~";
        }
        square.addEventListener("click", function () {
          _revealSquare(board.board, i, j, square);
          player.attack(board, [i, j]);
        });
        computerBoard.appendChild(square);
      }
    }
  };
  const renderWinner = (winner) => {
    const congratsMsg = document.createElement("h2");
    const replayBtn = document.createElement("button");
    congratsMsg.innerHTML = `${winner} won! Congratulations!`;
    replayBtn.innerHTML = "Play Again";
    boardsContainer.innerHTML = "";
    replayBtn.classList.add("replay-btn");
    replayBtn.addEventListener("click", () => {
      const boardsContainer = document.querySelector(".boards");
      const playerDiv = document.createElement("div");
      playerDiv.classList.add("player");
      const computerDiv = document.createElement("div");
      computerDiv.classList.add("computer");
      boardsContainer.appendChild(playerDiv);
      boardsContainer.appendChild(computerDiv);
      playerBoard = document.querySelector(".player");
      computerBoard = document.querySelector(".computer");
      boardsContainer.removeChild(congratsMsg);
      boardsContainer.removeChild(replayBtn);
      (0,___WEBPACK_IMPORTED_MODULE_0__.Game)().play();
    });
    boardsContainer.appendChild(congratsMsg);
    boardsContainer.appendChild(replayBtn);
  };
  function _setDirection(gameboard) {
    if (direction) {
      direction = false;
      renderPlayerBoardPlacementPhase(gameboard);
    } else {
      direction = true;
      renderPlayerBoardPlacementPhase(gameboard);
    }
  }
  const setupDirectionBtn = (gameboard) => {
    if (called) {
      directionBtn.addEventListener("click", () => {
        _setDirection(gameboard);
      });
      called = false;
    }
  };
  return {
    renderPlayerBoardPlacementPhase,
    renderPlayerBoard,
    renderComputerBoard,
    renderWinner,
    setupDirectionBtn,
  };
})();




/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
const Gameboard = () => {
  const shipyard = [];
  let afterPlacementShipyard = [];
  const _createBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = 0;
      }
    }
    return board;
  };
  const board = _createBoard();

  const placeShip = (ship, coordinate, direction) => {
    if (direction) {
      for (let i = 0; i < ship.shipLength; i++) {
        board[coordinate[0] + i][coordinate[1]] = ship;
      }
    } else {
      for (let i = 0; i < ship.shipLength; i++) {
        board[coordinate[0]][coordinate[1] + i] = ship;
      }
    }
  };

  const receiveAttack = (coordinate) => {
    // If the passed coordinate lands on a ship
    if (typeof board[coordinate[0]][coordinate[1]] === "object") {
      board[coordinate[0]][coordinate[1]].hit();
      board[coordinate[0]][coordinate[1]] = 1;
    } else {
      board[coordinate[0]][coordinate[1]] = 2;
      return coordinate;
    }
  };

  const allShipsSunk = () => {
    // Return early from loop with false if any ship is not sunk
    for (let i = 0; i < afterPlacementShipyard.length; i++) {
      if (!afterPlacementShipyard[i].isSunk()) {
        return false;
      }
    }
    // Otherwise reach the return true statement
    return true;
  };
  return {
    board,
    shipyard,
    afterPlacementShipyard,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* harmony import */ var _computerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computerFactory */ "./src/computerFactory.js");
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playerFactory */ "./src/playerFactory.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");







const Game = () => {
  const player = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_4__.Player)();
  const computer = (0,_computerFactory__WEBPACK_IMPORTED_MODULE_3__.Computer)();
  const playerBoard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  const computerBoard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();

  const _setupShips = (gameboard) => {
    const destroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.Ship)(2);
    const submarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);
    const cruiser = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);
    const battleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.Ship)(4);
    const carrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.Ship)(5);

    gameboard.shipyard.push(destroyer, submarine, cruiser, battleship, carrier);
  };
  const _runCredits = (player, computer) => {
    if (player.allShipsSunk()) {
      _displayController__WEBPACK_IMPORTED_MODULE_5__.displayController.renderWinner("Computer");
    } else if (computer.allShipsSunk()) {
      _displayController__WEBPACK_IMPORTED_MODULE_5__.displayController.renderWinner("Human");
    }
  };
  function waitForPlayerInput(board) {
    const promises = [];

    for (let i = 0; i < board.length; i++) {
      const promise = new Promise((resolve) => {
        board[i].addEventListener("click", () => {
          resolve();
        });
      });
      promises.push(promise);
    }
    return Promise.any(promises);
  }

  async function play() {
    const playerShips = _setupShips(playerBoard);
    const computerShips = _setupShips(computerBoard);
    document.querySelector(".direction").style.display = "block";
    _displayController__WEBPACK_IMPORTED_MODULE_5__.displayController.setupDirectionBtn(playerBoard);

    while (true) {
      if (playerBoard.shipyard.length === 0) {
        break;
      }
      _displayController__WEBPACK_IMPORTED_MODULE_5__.displayController.renderPlayerBoardPlacementPhase(playerBoard);
      await waitForPlayerInput(document.getElementsByTagName("button"));
    }
    computer.placeShipsRandomly(computerBoard);
    _displayController__WEBPACK_IMPORTED_MODULE_5__.displayController.renderComputerBoard(computerBoard, player);
    while (!playerBoard.allShipsSunk() && !computerBoard.allShipsSunk()) {
      document.querySelector(".direction").style.display = "none";
      if (player.getTurn()) {
        _displayController__WEBPACK_IMPORTED_MODULE_5__.displayController.renderPlayerBoard(playerBoard);
        await waitForPlayerInput(
          document.querySelector(".computer").childNodes
        );
        player.setTurn();
      } else {
        computer.randomAttack(playerBoard);
        _displayController__WEBPACK_IMPORTED_MODULE_5__.displayController.renderPlayerBoard(playerBoard);
        player.setTurn();
      }
    }

    _runCredits(playerBoard, computerBoard);
  }
  return { play };
};

const newGame = Game();
newGame.play();




/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
const Player = (turn = true) => {
  const getTurn = () => turn;
  const setTurn = () => (turn ? (turn = false) : (turn = true));
  const attack = (board, coordinate) => {
    board.receiveAttack(coordinate);
  };
  return { attack, getTurn, setTurn };
};




/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (shipLength) => {
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const isSunk = () => {
    return hits === shipLength;
  };

  return { shipLength, hit, isSunk };
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1GQUFtQzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlHQUFpRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFGQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQSxRQUFRLG1GQUFtQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVEsbUZBQW1DO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7QUNqRmhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ1RsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcHV0ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FbGVjdHJvbGl6ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ0VsZWN0cm9saXplJywgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkOTlhZTtcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDMwNDk7XFxuICBjb2xvcjogIzY2OWJiYztcXG4gIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbn1cXG4udzNyLWRvdCB7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhyZW07XFxuXFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogXFxuI2NjYztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjNDk1ODY3IDEwJSwgdHJhbnNwYXJlbnQgMTElKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KCM0OTU4NjcgMTAlLCB0cmFuc3BhcmVudCAxMSUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDMwcHggMzBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxufVxcbi5ib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBnYXA6IDEycmVtO1xcbn1cXG4uYm9hcmRzID4gZGl2IHtcXG4gIGhlaWdodDogMzByZW07XFxuICB3aWR0aDogMzByZW07XFxufVxcbi5wbGF5ZXIsIC5jb21wdXRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLnJhaW5ib3dfdGV4dF9hbmltYXRlZCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZGYyZjQsICNlZjIzM2MgLCAjZDkwNDI5LCAjNjY5YmJjLCAjMDAzMDQ5KTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYW5pbWF0aW9uOiByYWluYm93X2FuaW1hdGlvbiA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSAxMDAlO1xcbn1cXG4uZGlyZWN0aW9uIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxOSU7XFxufVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgcmFpbmJvd19hbmltYXRpb24ge1xcbiAgMCUsMTAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7OztFQUdULFlBQVk7RUFDWixhQUFhO0VBQ2I7SUFDRTtFQUNGO2lEQUMrQztFQUMvQywwQkFBMEI7RUFDMUIsbUNBQW1DO0VBQ25DLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxtRkFBbUY7RUFDbkYsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0RBQW9EO0VBQ3BELDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtNQUNJLHdCQUF3QjtFQUM1Qjs7RUFFQTtNQUNJLDJCQUEyQjtFQUMvQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVsZWN0cm9saXplJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnRWxlY3Ryb2xpemUnLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ5OWFlO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzA0OTtcXG4gIGNvbG9yOiAjNjY5YmJjO1xcbiAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDE1MCU7XFxufVxcbi53M3ItZG90IHtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHJlbTtcXG5cXG5cXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBcXG4jY2NjO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCM0OTU4NjcgMTAlLCB0cmFuc3BhcmVudCAxMSUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoIzQ5NTg2NyAxMCUsIHRyYW5zcGFyZW50IDExJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMzBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG59XFxuLmJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGdhcDogMTJyZW07XFxufVxcbi5ib2FyZHMgPiBkaXYge1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIHdpZHRoOiAzMHJlbTtcXG59XFxuLnBsYXllciwgLmNvbXB1dGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4ucmFpbmJvd190ZXh0X2FuaW1hdGVkIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VkZjJmNCwgI2VmMjMzYyAsICNkOTA0MjksICM2NjliYmMsICMwMDMwNDkpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBhbmltYXRpb246IHJhaW5ib3dfYW5pbWF0aW9uIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDEwMCU7XFxufVxcbi5kaXJlY3Rpb24ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE5JTtcXG59XFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyByYWluYm93X2FuaW1hdGlvbiB7XFxuICAwJSwxMDAlIHtcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQ29tcHV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IF9yYW5kWmVyb1RvTmluZSA9ICgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICB9O1xuICBjb25zdCBfZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBbX3JhbmRaZXJvVG9OaW5lKCksIF9yYW5kWmVyb1RvTmluZSgpXTtcbiAgfTtcbiAgY29uc3QgX2NoZWNrUmFuZG9tQ29vcmRpbmF0ZSA9IChib2FyZCkgPT4ge1xuICAgIGxldCByYW5kb21Db29yZGluYXRlID0gX2dlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgIHdoaWxlIChcbiAgICAgIGJvYXJkW3JhbmRvbUNvb3JkaW5hdGVbMF1dW3JhbmRvbUNvb3JkaW5hdGVbMV1dID09PSAxIHx8XG4gICAgICBib2FyZFtyYW5kb21Db29yZGluYXRlWzBdXVtyYW5kb21Db29yZGluYXRlWzFdXSA9PT0gMlxuICAgICkge1xuICAgICAgcmFuZG9tQ29vcmRpbmF0ZSA9IF9nZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGU7XG4gIH07XG4gIC8vIERvdWJsZSBjaGVjayB0byBtYWtlIHN1cmUgb25lIHNoaXAgZG9lcyBub3Qgb3ZlcnJpZGUgYW5vdGhlclxuICBjb25zdCBfY2hlY2tSYW5kb21Db29yZGluYXRlRm9yU2hpcENvbnRhY3QgPSAoXG4gICAgYm9hcmQsXG4gICAgc2hpcCxcbiAgICBjb29yZGluYXRlLFxuICAgIHJhbmRCb29sXG4gICkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyYW5kQm9vbCkge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkW2Nvb3JkaW5hdGVbMF0gKyBpXVtjb29yZGluYXRlWzFdXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV0gKyBpXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBfY2hlY2tSYW5kb21Db29yZGluYXRlSWZPY2N1cGllZCA9IChib2FyZCwgc2hpcCwgcmFuZEJvb2wpID0+IHtcbiAgICBsZXQgcmFuZENvb3JkaW5hdGUgPSBfZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlKCk7XG4gICAgd2hpbGUgKFxuICAgICAgdHlwZW9mIGJvYXJkW3JhbmRDb29yZGluYXRlWzBdXVtyYW5kQ29vcmRpbmF0ZVsxXV0gPT09IFwib2JqZWN0XCIgfHxcbiAgICAgIHJhbmRDb29yZGluYXRlWzBdICsgc2hpcC5zaGlwTGVuZ3RoID4gMTAgfHxcbiAgICAgIHJhbmRDb29yZGluYXRlWzFdICsgc2hpcC5zaGlwTGVuZ3RoID4gMTAgfHxcbiAgICAgIF9jaGVja1JhbmRvbUNvb3JkaW5hdGVGb3JTaGlwQ29udGFjdChcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNoaXAsXG4gICAgICAgIHJhbmRDb29yZGluYXRlLFxuICAgICAgICByYW5kQm9vbFxuICAgICAgKVxuICAgICkge1xuICAgICAgcmFuZENvb3JkaW5hdGUgPSBfZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiByYW5kQ29vcmRpbmF0ZTtcbiAgfTtcbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkLnJlY2VpdmVBdHRhY2soX2NoZWNrUmFuZG9tQ29vcmRpbmF0ZShib2FyZC5ib2FyZCkpO1xuICB9O1xuICBjb25zdCBwbGFjZVNoaXBzUmFuZG9tbHkgPSAoYm9hcmQpID0+IHtcbiAgICBib2FyZC5zaGlweWFyZC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCByYW5kQm9vbCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyB0cnVlIDogZmFsc2U7XG4gICAgICBsZXQgcmFuZENvb3JkaW5hdGUgPSBfY2hlY2tSYW5kb21Db29yZGluYXRlSWZPY2N1cGllZChcbiAgICAgICAgYm9hcmQuYm9hcmQsXG4gICAgICAgIHNoaXAsXG4gICAgICAgIHJhbmRCb29sXG4gICAgICApO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJhbmRDb29yZGluYXRlLCByYW5kQm9vbCk7XG4gICAgICBib2FyZC5hZnRlclBsYWNlbWVudFNoaXB5YXJkLnB1c2goc2hpcCk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7IHJhbmRvbUF0dGFjaywgcGxhY2VTaGlwc1JhbmRvbWx5IH07XG59O1xuXG5leHBvcnQgeyBDb21wdXRlciB9O1xuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuXCI7XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJcIik7XG4gIGxldCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlclwiKTtcbiAgbGV0IGRpcmVjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlyZWN0aW9uXCIpO1xuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkc1wiKTtcbiAgbGV0IGRpcmVjdGlvbiA9IGZhbHNlO1xuICBsZXQgY2FsbGVkID0gdHJ1ZTtcbiAgY29uc3QgX3JldmVhbFNxdWFyZSA9IChib2FyZCwgY29vcmQxLCBjb29yZDIsIHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgaWYgKGJvYXJkW2Nvb3JkMV1bY29vcmQyXSA9PT0gMCkge1xuICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwidlwiO1xuICAgICAgc3F1YXJlLnN0eWxlLmNvbG9yID0gXCIjREJGNEE3XCI7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRbY29vcmQxXVtjb29yZDJdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBzcXVhcmUuaW5uZXJIVE1MID0gXCIjXCI7XG4gICAgICBzcXVhcmUuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgX3NoaXBNb3VzZW92ZXJWZXJ0aWNhbCA9IChidXR0b25zLCBnYW1lYm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGdhbWVib2FyZC5zaGlweWFyZFswXS5zaGlwTGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goaSArIGsgKiAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGluZGljZXMpIHtcbiAgICAgICAgICBidXR0b25zW2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kaWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZ2FtZWJvYXJkLnNoaXB5YXJkWzBdLnNoaXBMZW5ndGg7IGsrKykge1xuICAgICAgICAgIGluZGljZXMucHVzaChpICsgayAqIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgaW5kaWNlcykge1xuICAgICAgICAgIGJ1dHRvbnNbaW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwMzA0OVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IF9zaGlwTW91c2VvdmVySG9yaXpvbnRhbCA9IChidXR0b25zLCBnYW1lYm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGdhbWVib2FyZC5zaGlweWFyZFswXS5zaGlwTGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBpbmRpY2VzLnB1c2goaSArIGspO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRpY2VzKSB7XG4gICAgICAgICAgYnV0dG9uc1tpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kaWNlcyA9IFtdO1xuXG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBnYW1lYm9hcmQuc2hpcHlhcmRbMF0uc2hpcExlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goaSArIGspO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgaW5kaWNlcykge1xuICAgICAgICAgICAgYnV0dG9uc1tpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAzMDQ5XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IF9wbGFjZVNoaXBMaXN0ZW5lciA9IChnYW1lYm9hcmQsIHNxdWFyZSwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChnYW1lYm9hcmQuc2hpcHlhcmRbMF0sIGNvb3JkaW5hdGUsIGRpcmVjdGlvbik7XG4gICAgICBnYW1lYm9hcmQuYWZ0ZXJQbGFjZW1lbnRTaGlweWFyZC5wdXNoKGdhbWVib2FyZC5zaGlweWFyZC5zaGlmdCgpKTtcbiAgICAgIHJlbmRlclBsYXllckJvYXJkUGxhY2VtZW50UGhhc2UoZ2FtZWJvYXJkKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyUGxheWVyQm9hcmRQbGFjZW1lbnRQaGFzZSA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBwbGF5ZXJCb2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgaWYgKHR5cGVvZiBnYW1lYm9hcmQuYm9hcmRbaV1bal0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gXCIjXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiflwiO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIF9wbGFjZVNoaXBMaXN0ZW5lcihnYW1lYm9hcmQsIHNxdWFyZSwgW2ksIGpdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyIGJ1dHRvblwiKTtcbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBfc2hpcE1vdXNlb3ZlclZlcnRpY2FsKGJ1dHRvbnMsIGdhbWVib2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9zaGlwTW91c2VvdmVySG9yaXpvbnRhbChidXR0b25zLCBnYW1lYm9hcmQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVuZGVyUGxheWVyQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBwbGF5ZXJCb2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNxdWFyZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChib2FyZC5ib2FyZFtpXVtqXSA9PT0gMSkge1xuICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBcIiNcIjtcbiAgICAgICAgICBzcXVhcmUuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkLmJvYXJkW2ldW2pdID09PSAyKSB7XG4gICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwidlwiO1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5jb2xvciA9IFwiI0RCRjRBN1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZC5ib2FyZFtpXVtqXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBcIiNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gXCJ+XCI7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlckNvbXB1dGVyQm9hcmQgPSAoYm9hcmQsIHBsYXllcikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGlmIChib2FyZC5ib2FyZFtpXVtqXSA9PT0gMSkge1xuICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBcInhcIjtcbiAgICAgICAgICBzcXVhcmUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkLmJvYXJkW2ldW2pdID09PSAyKSB7XG4gICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwidlwiO1xuICAgICAgICAgIHNxdWFyZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiflwiO1xuICAgICAgICB9XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF9yZXZlYWxTcXVhcmUoYm9hcmQuYm9hcmQsIGksIGosIHNxdWFyZSk7XG4gICAgICAgICAgcGxheWVyLmF0dGFjayhib2FyZCwgW2ksIGpdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlcldpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgICBjb25zdCBjb25ncmF0c01zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCByZXBsYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbmdyYXRzTXNnLmlubmVySFRNTCA9IGAke3dpbm5lcn0gd29uISBDb25ncmF0dWxhdGlvbnMhYDtcbiAgICByZXBsYXlCdG4uaW5uZXJIVE1MID0gXCJQbGF5IEFnYWluXCI7XG4gICAgYm9hcmRzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVwbGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJyZXBsYXktYnRuXCIpO1xuICAgIHJlcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZHNcIik7XG4gICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJcIik7XG4gICAgICBjb25zdCBjb21wdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb21wdXRlckRpdi5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXJcIik7XG4gICAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyRGl2KTtcbiAgICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlckRpdik7XG4gICAgICBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuICAgICAgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIik7XG4gICAgICBib2FyZHNDb250YWluZXIucmVtb3ZlQ2hpbGQoY29uZ3JhdHNNc2cpO1xuICAgICAgYm9hcmRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHJlcGxheUJ0bik7XG4gICAgICBHYW1lKCkucGxheSgpO1xuICAgIH0pO1xuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25ncmF0c01zZyk7XG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlcGxheUJ0bik7XG4gIH07XG4gIGZ1bmN0aW9uIF9zZXREaXJlY3Rpb24oZ2FtZWJvYXJkKSB7XG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgICByZW5kZXJQbGF5ZXJCb2FyZFBsYWNlbWVudFBoYXNlKGdhbWVib2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XG4gICAgICByZW5kZXJQbGF5ZXJCb2FyZFBsYWNlbWVudFBoYXNlKGdhbWVib2FyZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNldHVwRGlyZWN0aW9uQnRuID0gKGdhbWVib2FyZCkgPT4ge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIGRpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBfc2V0RGlyZWN0aW9uKGdhbWVib2FyZCk7XG4gICAgICB9KTtcbiAgICAgIGNhbGxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICByZW5kZXJQbGF5ZXJCb2FyZFBsYWNlbWVudFBoYXNlLFxuICAgIHJlbmRlclBsYXllckJvYXJkLFxuICAgIHJlbmRlckNvbXB1dGVyQm9hcmQsXG4gICAgcmVuZGVyV2lubmVyLFxuICAgIHNldHVwRGlyZWN0aW9uQnRuLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfTtcbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcHlhcmQgPSBbXTtcbiAgbGV0IGFmdGVyUGxhY2VtZW50U2hpcHlhcmQgPSBbXTtcbiAgY29uc3QgX2NyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldW2pdID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuICBjb25zdCBib2FyZCA9IF9jcmVhdGVCb2FyZCgpO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZGluYXRlLCBkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVbMF0gKyBpXVtjb29yZGluYXRlWzFdXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXSArIGldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgLy8gSWYgdGhlIHBhc3NlZCBjb29yZGluYXRlIGxhbmRzIG9uIGEgc2hpcFxuICAgIGlmICh0eXBlb2YgYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dLmhpdCgpO1xuICAgICAgYm9hcmRbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2FyZFtjb29yZGluYXRlWzBdXVtjb29yZGluYXRlWzFdXSA9IDI7XG4gICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIC8vIFJldHVybiBlYXJseSBmcm9tIGxvb3Agd2l0aCBmYWxzZSBpZiBhbnkgc2hpcCBpcyBub3Qgc3Vua1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWZ0ZXJQbGFjZW1lbnRTaGlweWFyZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFhZnRlclBsYWNlbWVudFNoaXB5YXJkW2ldLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlIHJlYWNoIHRoZSByZXR1cm4gdHJ1ZSBzdGF0ZW1lbnRcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBzaGlweWFyZCxcbiAgICBhZnRlclBsYWNlbWVudFNoaXB5YXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZEZhY3RvcnlcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xuaW1wb3J0IHsgQ29tcHV0ZXIgfSBmcm9tIFwiLi9jb21wdXRlckZhY3RvcnlcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyID0gUGxheWVyKCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gQ29tcHV0ZXIoKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IF9zZXR1cFNoaXBzID0gKGdhbWVib2FyZCkgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMik7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzKTtcbiAgICBjb25zdCBjcnVpc2VyID0gU2hpcCgzKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCg0KTtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcCg1KTtcblxuICAgIGdhbWVib2FyZC5zaGlweWFyZC5wdXNoKGRlc3Ryb3llciwgc3VibWFyaW5lLCBjcnVpc2VyLCBiYXR0bGVzaGlwLCBjYXJyaWVyKTtcbiAgfTtcbiAgY29uc3QgX3J1bkNyZWRpdHMgPSAocGxheWVyLCBjb21wdXRlcikgPT4ge1xuICAgIGlmIChwbGF5ZXIuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlcldpbm5lcihcIkNvbXB1dGVyXCIpO1xuICAgIH0gZWxzZSBpZiAoY29tcHV0ZXIuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlcldpbm5lcihcIkh1bWFuXCIpO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gd2FpdEZvclBsYXllcklucHV0KGJvYXJkKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBib2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFueShwcm9taXNlcyk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBwbGF5KCkge1xuICAgIGNvbnN0IHBsYXllclNoaXBzID0gX3NldHVwU2hpcHMocGxheWVyQm9hcmQpO1xuICAgIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBfc2V0dXBTaGlwcyhjb21wdXRlckJvYXJkKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpcmVjdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRpc3BsYXlDb250cm9sbGVyLnNldHVwRGlyZWN0aW9uQnRuKHBsYXllckJvYXJkKTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAocGxheWVyQm9hcmQuc2hpcHlhcmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyUGxheWVyQm9hcmRQbGFjZW1lbnRQaGFzZShwbGF5ZXJCb2FyZCk7XG4gICAgICBhd2FpdCB3YWl0Rm9yUGxheWVySW5wdXQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIikpO1xuICAgIH1cbiAgICBjb21wdXRlci5wbGFjZVNoaXBzUmFuZG9tbHkoY29tcHV0ZXJCb2FyZCk7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLCBwbGF5ZXIpO1xuICAgIHdoaWxlICghcGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkgJiYgIWNvbXB1dGVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlyZWN0aW9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGlmIChwbGF5ZXIuZ2V0VHVybigpKSB7XG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclBsYXllckJvYXJkKHBsYXllckJvYXJkKTtcbiAgICAgICAgYXdhaXQgd2FpdEZvclBsYXllcklucHV0KFxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIikuY2hpbGROb2Rlc1xuICAgICAgICApO1xuICAgICAgICBwbGF5ZXIuc2V0VHVybigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllckJvYXJkKTtcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyUGxheWVyQm9hcmQocGxheWVyQm9hcmQpO1xuICAgICAgICBwbGF5ZXIuc2V0VHVybigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9ydW5DcmVkaXRzKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcbiAgfVxuICByZXR1cm4geyBwbGF5IH07XG59O1xuXG5jb25zdCBuZXdHYW1lID0gR2FtZSgpO1xubmV3R2FtZS5wbGF5KCk7XG5cbmV4cG9ydCB7IEdhbWUgfTtcbiIsImNvbnN0IFBsYXllciA9ICh0dXJuID0gdHJ1ZSkgPT4ge1xuICBjb25zdCBnZXRUdXJuID0gKCkgPT4gdHVybjtcbiAgY29uc3Qgc2V0VHVybiA9ICgpID0+ICh0dXJuID8gKHR1cm4gPSBmYWxzZSkgOiAodHVybiA9IHRydWUpKTtcbiAgY29uc3QgYXR0YWNrID0gKGJvYXJkLCBjb29yZGluYXRlKSA9PiB7XG4gICAgYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgfTtcbiAgcmV0dXJuIHsgYXR0YWNrLCBnZXRUdXJuLCBzZXRUdXJuIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSAoc2hpcExlbmd0aCkgPT4ge1xuICBsZXQgaGl0cyA9IDA7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzKys7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0cyA9PT0gc2hpcExlbmd0aDtcbiAgfTtcblxuICByZXR1cm4geyBzaGlwTGVuZ3RoLCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9