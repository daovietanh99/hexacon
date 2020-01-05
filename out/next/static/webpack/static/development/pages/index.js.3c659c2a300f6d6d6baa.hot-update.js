webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hexagon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hexagon */ "./node_modules/react-hexagon/lib/Hexagon.js");
/* harmony import */ var react_hexagon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_hexagon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gestalt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gestalt */ "./node_modules/gestalt/dist/gestalt.es.js");
/* harmony import */ var gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gestalt/dist/gestalt.css */ "./node_modules/gestalt/dist/gestalt.css");
/* harmony import */ var gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gestalt_dist_gestalt_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/home/daovietanh99/Documents/hexacon/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "row", function (j) {
      var row = [];

      var _loop = function _loop(i) {
        if (!(i == 0 && j == 0 || i == 12 && j == 12 || i == 0 && j == 12 || i == 12 && j == 0)) row.push(__jsx(react_hexagon__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: {
            stroke: i == 0 || i == 12 ? "#e50000" : j == 0 || j == 12 ? "#0080ff" : '#ffffff',
            strokeWidth: _this.state.strokeWidth,
            fill: _this.state.arrayEl[i] && _this.state.arrayEl[i][j] ? _this.state.arrayEl[i][j] : i == _this.state.chooseEl[0] && j == _this.state.chooseEl[1] ? 'rgba(255, 255, 255, .8)' : j == 0 || j == 12 || i == 0 || i == 12 ? "transparent" : 'rgba(255, 255, 100, .15)'
          },
          key: "tile" + i + j,
          onClick: function onClick(e) {
            _this.play(i, j);
          },
          hexProps: {
            onMouseLeave: function onMouseLeave(e) {
              e.type === "mouseenter" ? _this.choose(i, j) : {};
            },
            onMouseEnter: function onMouseEnter(e) {
              e.type === "mouseenter" ? _this.choose(i, j) : {};
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, !(i !== 0 && j !== 0 && i !== 12 && j !== 12) ? __jsx("text", {
          x: "41%",
          y: "60%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, i == 0 ? j : j == 12 ? String.fromCharCode(i + 64) : "") : __jsx("text", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        })));else row.push(__jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
          width: _this.state.size + "%",
          key: "tile" + i + j,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }));
      };

      for (var i = 0; i <= 12; i++) {
        _loop(i);
      }

      return row;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "table", function () {
      var table = [];

      for (var i = 0; i <= 12; i++) {
        table.push(__jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
          display: "flex",
          direction: "row",
          dangerouslySetInlineStyle: {
            __style: {
              width: "100%",
              marginLeft: i * (_this.state.size / 2) + "%",
              // true
              marginTop: i !== 0 ? "-" + (_this.state.size / (2 * Math.sqrt(3)) + 0.01) + "%" : "0"
            }
          },
          key: "row" + i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, _this.row(i)));
      }

      return table;
    });

    _this.state = {
      size: 5,
      strokeWidth: 21,
      chooseEl: [],
      arrayEl: [],
      currentPlayer: "#0080ff",
      winner: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "choose",
    value: function choose(i, j) {
      if (i !== 0 && j !== 0 && i !== 12 && j !== 12) this.setState({
        chooseEl: [i, j]
      });
    }
  }, {
    key: "play",
    value: function play(i, j) {
      if (i !== 0 && j !== 0 && i !== 12 && j !== 12 && !(this.state.arrayEl[i] && this.state.arrayEl[i][j])) {
        this.setState(function (prev) {
          if (!prev.arrayEl[i]) prev.arrayEl[i] = [];
          prev.arrayEl[i][j] = prev.currentPlayer; //check win 

          var arrayVis = [];
          var queue = [];

          for (var x = 0; x < 12; x++) {
            if (prev.currentPlayer === "#0080ff") if (prev.arrayEl[x] && prev.arrayEl[x][1] == prev.currentPlayer) {
              queue.push({
                x: x,
                y: 1
              });
              if (!arrayVis[x]) arrayVis[x] = [];
              arrayVis[x][1] = true;
            } else if (prev.arrayEl[1] && prev.arrayEl[1][x] == prev.currentPlayer) {
              queue.push({
                x: 1,
                y: x
              });
              if (!arrayVis[1]) arrayVis[1] = [];
              arrayVis[1][x] = true;
            }
          }

          while (queue.length !== 0) {
            var point = queue.pop();

            for (var _x = point.x - 1; _x <= point.x + 1; _x++) {
              for (var y = point.y - 1; y <= point.y + 1; y++) {
                if (prev.arrayEl[_x] && prev.arrayEl[_x][y] == prev.currentPlayer && (!arrayVis[_x] || !arrayVis[_x][y]) && !(_x == point.x - 1 && y == point.y - 1) && !(_x == point.x + 1 && y == point.y + 1)) {
                  queue.push({
                    x: _x,
                    y: y
                  });
                  if (!arrayVis[_x]) arrayVis[_x] = [];
                  arrayVis[_x][y] = true;

                  if (y == 11 && prev.currentPlayer === "#0080ff") {
                    console.log("win win win");
                    break;
                  } else if (_x == 11 && prev.currentPlayer === "#e50000") {
                    console.log("win win win");
                    break;
                  }
                }
              }
            }
          }

          return {
            arrayEl: prev.arrayEl,
            currentPlayer: prev.currentPlayer === "#0080ff" ? "#e50000" : "#0080ff"
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        width: "100%",
        height: "100vh",
        display: "flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: "100vh",
        color: "transparentDarkGray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Box"], {
        position: "relative",
        dangerouslySetInlineStyle: {
          __style: {
            left: "2.5%"
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, this.table()))), __jsx(gestalt__WEBPACK_IMPORTED_MODULE_9__["Column"], {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3c659c2a300f6d6d6baa.hot-update.js.map