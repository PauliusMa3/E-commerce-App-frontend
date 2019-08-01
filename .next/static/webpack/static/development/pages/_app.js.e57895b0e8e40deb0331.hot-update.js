webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/*! exports provided: default, ADD_TO_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART_MUTATION", function() { return ADD_TO_CART_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/mnt/c/Users/Pauli/Desktop/Personal Projects/E-commerce Application/frontend/components/AddToCart.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation addToCart($id: ID!) {\n    addToCart(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var ADD_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "AddToCart__Button",
  componentId: "sc-1syyje4-0"
})(["padding:10px 15px;background-color:", ";border-radius:5px;border:0;font-size:20px;font-weight:600;color:white;cursor:pointer;&:hover{background-color:", ";}&[disabled]{opacity:0.5;}"], function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.lightRed;
});

var AddToCart = function AddToCart(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: ADD_TO_CART_MUTATION,
    variables: {
      id: props.id
    },
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__["USER_QUERY"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, function (addToCart, _ref) {
    var loading = _ref.loading;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
      disabled: loading,
      onClick: addToCart,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Add", loading && "ing", " To Cart");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);


/***/ })

})
//# sourceMappingURL=_app.js.e57895b0e8e40deb0331.hot-update.js.map