webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_styles_SingleProductStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styles/SingleProductStyles */ "./components/styles/SingleProductStyles.js");
/* harmony import */ var _components_styles_ProductTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/ProductTitle */ "./components/styles/ProductTitle.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_formatCurrency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/formatCurrency */ "./components/utils/formatCurrency.js");
/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteItem */ "./components/DeleteItem.js");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddToCart */ "./components/AddToCart.js");
var _jsxFileName = "/mnt/c/Users/Pauli/Desktop/Personal Projects/E-commerce Application/frontend/components/Product.js";








var Product = function Product(_ref) {
  var product = _ref.product,
      hasPermissions = _ref.hasPermissions;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_SingleProductStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, product.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: product.image,
    alt: product.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_ProductTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: "/product",
      query: {
        id: product.id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, product.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "product-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, Object(_utils_formatCurrency__WEBPACK_IMPORTED_MODULE_4__["default"])(product.price)), hasPermissions ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: product.id,
    className: "delete-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: product.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

})
//# sourceMappingURL=products.js.903ec8dc99fb78027cfd.hot-update.js.map