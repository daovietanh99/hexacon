webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_hexagon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hexagon */ "./node_modules/react-hexagon/lib/Hexagon.js");
/* harmony import */ var react_hexagon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_hexagon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gestalt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gestalt */ "./node_modules/gestalt/dist/gestalt.es.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./base */ "./components/base.js");
/* harmony import */ var gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gestalt/dist/gestalt.css */ "./node_modules/gestalt/dist/gestalt.css");
/* harmony import */ var gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_13__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Menu =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Menu, _React$Component);

  function Menu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Menu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Menu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "authenticate", function (provider) {
      var authProvider = new firebase__WEBPACK_IMPORTED_MODULE_11___default.a.auth["".concat(provider, "AuthProvider")]();
      _base__WEBPACK_IMPORTED_MODULE_12__["default"].auth().signInWithPopup(authProvider).then(_this.authHandler);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "authHandler", function _callee(authData) {
      var user;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = authData.user;
              console.log(user);

              _this.setState({
                email: user.email,
                displayName: user.displayName,
                photo: user.photoURL
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "logout", function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(firebase__WEBPACK_IMPORTED_MODULE_11___default.a.auth().signOut());

            case 2:
              _this.setState({
                email: null,
                displayName: null
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    _this.state = {
      email: null,
      displayName: null,
      photo: null
    };
    return _this;
  } //xác thực theo provider


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      firebase__WEBPACK_IMPORTED_MODULE_11___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          _this2.authHandler({
            user: user
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.email) {
        return __jsx("button", {
          className: "ui facebook button",
          onClick: function onClick() {
            return _this3.authenticate("Facebook");
          }
        }, __jsx("i", {
          className: "facebook icon"
        }), "Login with Facebook");
      }

      return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        height: "100vh",
        overflow: "hidden"
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        height: "50vh"
      }, __jsx("button", {
        onClick: function onClick() {
          return _this3.logout();
        }
      }, "Logout"), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], null, this.state.displayName), __jsx("img", {
        src: this.state.photo + ""
      })), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        height: "50vh"
      }));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.5cec3a3bad8a005e5e87.hot-update.js.map