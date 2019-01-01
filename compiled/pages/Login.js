"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ui = require("@ludwigjs/ui");

var _index = require("../constants/index");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          actions = _this$props.actions,
          match = _this$props.match;

      if (match.params.sid) {
        actions.account.login(match.params.sid);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          account = _this$props2.account,
          actions = _this$props2.actions;

      if (account.status === _index.Constants.ACCOUNT_STATUS.LOGGED_IN) {
        return _react.default.createElement(_reactRouterDom.Redirect, {
          to: "/account"
        });
      } else if (account.status === _index.Constants.ACCOUNT_STATUS.LOGGING_IN) {
        return _react.default.createElement("div", null, _react.default.createElement("section", {
          className: "t-mrg bolt-btm bolt-top"
        }, _react.default.createElement(_ui.Elements.PageTitle, {
          titleText: "Check Your Email"
        })), _react.default.createElement("section", null, _react.default.createElement(_ui.Message, {
          title: "A One Time Login Was Sent",
          message: "Click it to login"
        })));
      } else if (account.status === _index.Constants.ACCOUNT_STATUS.NON_EXISTENT) {
        return _react.default.createElement("div", null, _react.default.createElement("section", {
          className: "t-mrg bolt-btm bolt-top"
        }, _react.default.createElement(_ui.Elements.PageTitle, {
          titleText: "Whoops"
        })), _react.default.createElement("section", null, _react.default.createElement(_ui.Message, {
          title: "Something went wrong",
          message: "Please refresh this page and try again"
        })));
      } else {
        return _react.default.createElement("div", null, _react.default.createElement("section", {
          className: "t-mrg bolt-btm bolt-top"
        }, _react.default.createElement(_ui.Elements.PageTitle, {
          titleText: "Login"
        })), _react.default.createElement("section", null, _react.default.createElement(_ui.Forms.Login, this.props)));
      }
    }
  }]);

  return Login;
}(_react.Component);

var _default = Login;
exports.default = _default;