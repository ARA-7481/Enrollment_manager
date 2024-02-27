"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_layouts_Studentlayout_js"],{

/***/ "./CCWebApp_api/frontend/src/components/layouts/Studentlayout.js":
/*!***********************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/layouts/Studentlayout.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _reusable_studentsidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusable/studentsidebar */ \"./CCWebApp_api/frontend/src/components/reusable/studentsidebar.js\");\n/* harmony import */ var _reusable_topnavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reusable/topnavbar */ \"./CCWebApp_api/frontend/src/components/reusable/topnavbar.js\");\n/* harmony import */ var _reusable_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reusable/footer */ \"./CCWebApp_api/frontend/src/components/reusable/footer.js\");\n/* harmony import */ var _reusable_mainnavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reusable/mainnavbar */ \"./CCWebApp_api/frontend/src/components/reusable/mainnavbar.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _reusable_error_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reusable/error-main */ \"./CCWebApp_api/frontend/src/components/reusable/error-main.js\");\n/* harmony import */ var _reusable_success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reusable/success */ \"./CCWebApp_api/frontend/src/components/reusable/success.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Studentlayout = function Studentlayout(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerHeight),\n    _useState2 = _slicedToArray(_useState, 2),\n    windowHeight = _useState2[0],\n    setWindowHeight = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),\n    _useState4 = _slicedToArray(_useState3, 2),\n    windowWidth = _useState4[0],\n    setWindowWidth = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n      height: window.innerHeight,\n      width: window.innerWidth\n    }),\n    _useState6 = _slicedToArray(_useState5, 2),\n    windowDimensions = _useState6[0],\n    setWindowdimensions = _useState6[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.isLess800) {\n      if (window.innerWidth >= 800) {\n        props.setCollapseState(false);\n      }\n    } else if (!props.isLess800) {\n      if (window.innerWidth < 800) {\n        props.setCollapseState(true);\n      }\n    }\n    var handleResize = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.debounce)(function () {\n      setWindowHeight(window.innerHeight);\n      setWindowWidth(window.innerWidth);\n      setWindowdimensions({\n        height: window.innerHeight,\n        width: window.innerWidth\n      });\n      props.setResolution(windowDimensions);\n    }, 1);\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, [windowDimensions, props.isLess800]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'fixed',\n      transform: 'translateX(-50%)',\n      left: '50%',\n      zIndex: 9999\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_error_main__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    errorMessage: props.error\n  })), props.success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'fixed',\n      transform: 'translateX(-50%)',\n      left: '50%',\n      zIndex: 9999\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_success__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      backgroundColor: '#e9ecef',\n      height: windowHeight,\n      overflow: 'hidden',\n      minWidth: '720px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      zIndex: 9999\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_studentsidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: windowWidth,\n      position: 'relative',\n      minWidth: '1px'\n    }\n  }, props.errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'fixed',\n      left: '56%',\n      transform: 'translateX(-50%)',\n      zIndex: 9999\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorPopupmain, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      maxHeight: windowHeight,\n      overflowY: 'auto',\n      zIndex: 9999\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'sticky',\n      top: 0,\n      zIndex: 9998\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_mainnavbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_topnavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      minHeight: '64.5vh'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 0px, -36px)',\n      backgroundColor: '#ffffff',\n      marginRight: !props.isLess800 ? '40px' : '15px',\n      marginLeft: !props.isLess800 ? '40px' : '15px',\n      borderRadius: '8px',\n      minHeight: '1px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Outlet, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'sticky',\n      bottom: 0,\n      backgroundColor: '#ffffff',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reusable_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))))));\n};\nStudentlayout.propTypes = {\n  errorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),\n  setResolution: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),\n  isLess800: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),\n  setCollapseState: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),\n  error: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),\n  success: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    errorMessage: state.main.errorMessage,\n    isLess800: state.main.isLess800,\n    error: state.main.error,\n    success: state.main.success\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, {\n  setResolution: _redux_actions_main__WEBPACK_IMPORTED_MODULE_9__.setResolution,\n  setCollapseState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_9__.setCollapseState\n})(Studentlayout));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/layouts/Studentlayout.js?");

/***/ }),

/***/ "./CCWebApp_api/frontend/src/components/reusable/studentsidebar.js":
/*!*************************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/reusable/studentsidebar.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var cdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cdbreact */ \"./node_modules/cdbreact/dist/index.modern.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nfunction Studentsidebar(props) {\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    isCollapsed = _useState2[0],\n    setIsCollapsed = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState4 = _slicedToArray(_useState3, 2),\n    isToggled = _useState4[0],\n    setIsToggled = _useState4[1];\n  var handleCollapse = function handleCollapse() {\n    setIsCollapsed(!isCollapsed);\n    setIsToggled(!isToggled);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!isCollapsed) {\n      if (window.innerWidth < 1140) {\n        handleCollapse();\n      }\n    }\n  }, [isCollapsed, isToggled, props.sidebarState, props.subsidebarState, window.innerWidth]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      height: '100vh',\n      overflow: 'scroll initial'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(cdbreact__WEBPACK_IMPORTED_MODULE_2__.CDBSidebar, {\n    toggled: isToggled,\n    breakpoint: 200,\n    textColor: \"#8A92A6\",\n    backgroundColor: \"#fff\",\n    collapsed: isCollapsed,\n    maxWidth: isCollapsed ? '92px' : '257px',\n    minWidth: \"92px\",\n    style: {\n      fontFamily: 'Inter',\n      fontStyle: 'normal',\n      fontWeight: 500,\n      fontSize: '16px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(cdbreact__WEBPACK_IMPORTED_MODULE_2__.CDBSidebarHeader, {\n    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        display: 'flex'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        transform: 'translate( 0px, 6px)'\n      }\n    }, isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n      href: \"/#/students/dashboard\",\n      onClick: handleCollapse\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ColoredHat, null))), window.innerWidth >= 1140 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      onClick: handleCollapse,\n      style: {\n        backgroundColor: 'rgba(51, 51, 51, 0.00)',\n        transform: 'translate(86px, 6px)',\n        position: 'fixed',\n        width: '10px'\n      }\n    }, !isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ToogleIcon, null), isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ToogleIconOn, null))),\n    style: {\n      display: 'flex',\n      height: '78px'\n    }\n  }, !isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: \"/#/students/dashboard\",\n    style: {\n      transform: 'translate( 0px, -12px)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.MainIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(cdbreact__WEBPACK_IMPORTED_MODULE_2__.CDBSidebarContent, {\n    className: \"sidebar-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(cdbreact__WEBPACK_IMPORTED_MODULE_2__.CDBSidebarMenu, {\n    style: {\n      display: 'flex',\n      justifyContent: 'start',\n      paddingLeft: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: \"/#/students/dashboard\",\n    style: {\n      paddingBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    title: isCollapsed ? 'Grades' : '',\n    className: \"zooming-icon\",\n    style: {\n      color: props.sidebarState === 'dashboard' ? 'white' : '',\n      backgroundColor: props.sidebarState === 'dashboard' ? '#3A57E8' : '',\n      display: 'flex',\n      justifyContent: isCollapsed ? 'center' : 'start',\n      alignItems: 'center',\n      width: isCollapsed ? '45px' : '210px',\n      height: '44px',\n      borderRadius: '4px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: isCollapsed ? '20px' : '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedDashboardIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      paddingLeft: '20px'\n    }\n  }, !isCollapsed && 'Grades'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Link, {\n    href: \"/#/students/profile\",\n    style: {\n      paddingBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    title: isCollapsed ? 'My Profile' : '',\n    className: \"zooming-icon\",\n    style: {\n      color: props.sidebarState === 'settings' ? 'white' : '',\n      backgroundColor: props.sidebarState === 'settings' ? '#3A57E8' : '',\n      display: 'flex',\n      justifyContent: isCollapsed ? 'center' : 'start',\n      alignItems: 'center',\n      width: isCollapsed ? '45px' : '210px',\n      height: '44px',\n      borderRadius: '4px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: isCollapsed ? '20px' : '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedSettingsIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      paddingLeft: '20px'\n    }\n  }, !isCollapsed && 'My profile')))))));\n}\n;\nStudentsidebar.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func).isRequired,\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func).isRequired,\n  windowDimensions: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    windowDimensions: state.main.windowDimensions\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState\n})(Studentsidebar));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/reusable/studentsidebar.js?");

/***/ }),

/***/ "./CCWebApp_api/frontend/src/components/reusable/success.js":
/*!******************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/reusable/success.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n\n\n\n\n\nvar SuccessPopupMain = function SuccessPopupMain(props) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var timer = setTimeout(function () {\n      props.emptySuccess();\n    }, 3000);\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"error-popup\",\n    style: {\n      border: '2px solid #12703A'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_2__.GreenCheck, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-400-16px\",\n    style: {\n      marginLeft: '16px',\n      marginRight: '16px',\n      marginTop: '6px',\n      color: 'black'\n    }\n  }, props.success));\n};\nSuccessPopupMain.propTypes = {\n  success: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),\n  emptySuccess: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    success: state.main.success\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  emptySuccess: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.emptySuccess\n})(SuccessPopupMain));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/reusable/success.js?");

/***/ })

}]);