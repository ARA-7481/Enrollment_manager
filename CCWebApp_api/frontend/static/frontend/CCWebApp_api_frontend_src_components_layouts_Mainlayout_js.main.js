"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_layouts_Mainlayout_js"],{

/***/ "./CCWebApp_api/frontend/src/components/layouts/Mainlayout.js":
/*!********************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/layouts/Mainlayout.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _reusable_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/sidebar */ \"./CCWebApp_api/frontend/src/components/reusable/sidebar.js\");\n/* harmony import */ var _reusable_topnavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/topnavbar */ \"./CCWebApp_api/frontend/src/components/reusable/topnavbar.js\");\n/* harmony import */ var _reusable_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/footer */ \"./CCWebApp_api/frontend/src/components/reusable/footer.js\");\n/* harmony import */ var _reusable_mainnavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusable/mainnavbar */ \"./CCWebApp_api/frontend/src/components/reusable/mainnavbar.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _reusable_error_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reusable/error-main */ \"./CCWebApp_api/frontend/src/components/reusable/error-main.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar MainLayout = function MainLayout(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerHeight),\n    _useState2 = _slicedToArray(_useState, 2),\n    windowHeight = _useState2[0],\n    setWindowHeight = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),\n    _useState4 = _slicedToArray(_useState3, 2),\n    windowWidth = _useState4[0],\n    setWindowWidth = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n      height: window.innerHeight,\n      width: window.innerWidth\n    }),\n    _useState6 = _slicedToArray(_useState5, 2),\n    windowDimensions = _useState6[0],\n    setWindowdimensions = _useState6[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.isLess800) {\n      if (window.innerWidth >= 800) {\n        props.setCollapseState(false);\n      }\n    } else if (!props.isLess800) {\n      if (window.innerWidth < 800) {\n        props.setCollapseState(true);\n      }\n    }\n    var handleResize = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.debounce)(function () {\n      setWindowHeight(window.innerHeight);\n      setWindowWidth(window.innerWidth);\n      setWindowdimensions({\n        height: window.innerHeight,\n        width: window.innerWidth\n      });\n      props.setResolution(windowDimensions);\n    }, 1);\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, [windowDimensions, props.isLess800]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      backgroundColor: '#e9ecef',\n      height: windowHeight,\n      overflow: 'hidden',\n      minWidth: '720px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      zIndex: 9999\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: windowWidth,\n      position: 'relative',\n      minWidth: '1px'\n    }\n  }, props.errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'fixed',\n      left: '56%',\n      transform: 'translateX(-50%)',\n      zIndex: 9999\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_error_main__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      maxHeight: windowHeight,\n      overflowY: 'auto',\n      zIndex: 9999\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'sticky',\n      top: 0,\n      zIndex: 9998\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_mainnavbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_topnavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      minHeight: '64.5vh'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 0px, -36px)',\n      backgroundColor: '#ffffff',\n      marginRight: !props.isLess800 ? '40px' : '15px',\n      marginLeft: !props.isLess800 ? '40px' : '15px',\n      borderRadius: '8px',\n      minHeight: '1px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Outlet, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'sticky',\n      bottom: 0,\n      backgroundColor: '#ffffff',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))))));\n};\nMainLayout.propTypes = {\n  errorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),\n  setResolution: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),\n  isLess800: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),\n  setCollapseState: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    errorMessage: state.main.errorMessage,\n    isLess800: state.main.isLess800\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, {\n  setResolution: _redux_actions_main__WEBPACK_IMPORTED_MODULE_8__.setResolution,\n  setCollapseState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_8__.setCollapseState\n})(MainLayout));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/layouts/Mainlayout.js?");

/***/ })

}]);