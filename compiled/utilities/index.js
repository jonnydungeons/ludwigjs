"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Utilities=void 0;function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Utilities=/*#__PURE__*/function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"getLocalStorage",value:function b(a){return JSON.parse(localStorage.getItem(a))}},{key:"setLocalStorage",value:function c(a,b){localStorage.setItem(a,JSON.stringify(b))}}]),a}();exports.Utilities=Utilities;