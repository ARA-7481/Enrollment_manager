"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_pages_schoolyear_js"],{

/***/ "./CCWebApp_api/frontend/src/components/pages/schoolyear.js":
/*!******************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/pages/schoolyear.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Placeholder.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\n\n\n\nfunction SchoolYear(props) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.schoolyearList.length == 0) {\n      props.setLoading('isLoading');\n    }\n    props.setsidebarState('schoolyear');\n    props.setsubsidebarState(null);\n    props.setpageHeader('Manage School Years', '', 'Initiate new school year & check school history');\n    props.getSchoolYearList();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#e9ecef',\n      borderTopLeftRadius: '8px',\n      borderTopRightRadius: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      borderRadius: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      height: '81px',\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"table-title\"\n  }, \"School Year Archive\")), props.loadingState == 'isLoading' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: '20px',\n      marginRight: '40px',\n      marginTop: '7px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      marginBottom: '27px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '20%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 2\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '40%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 7\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '30%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 7\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '30%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 7\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '30%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 7\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '5%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 7\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 12\n  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    hover: true,\n    style: {\n      border: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '30%',\n      paddingLeft: '20px'\n    }\n  }, \"YEAR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '30%'\n    }\n  }, \"PRINCIPAL\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '30%'\n    }\n  }, \"ASSISTANT PRINCIPAL\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '30%'\n    }\n  }, \"REMARKS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      border: 'none'\n    }\n  }, \"ACTION\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", {\n    style: {\n      cursor: 'pointer'\n    }\n  }, _toConsumableArray(props.schoolyearList).sort(function (a, b) {\n    return a.code.localeCompare(b.code);\n  }).map(function (schoolyear) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n      key: schoolyear.code,\n      style: {\n        border: 'none'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\",\n      style: {\n        paddingLeft: '20px'\n      }\n    }, schoolyear.code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, schoolyear.principal.userprofile.last_name, \", \", schoolyear.principal.userprofile.first_name, \" \", schoolyear.principal.userprofile.middle_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, schoolyear.assistantprincipal.userprofile.last_name, \", \", schoolyear.assistantprincipal.userprofile.first_name, \" \", schoolyear.assistantprincipal.userprofile.middle_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, schoolyear.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Toggle, {\n      id: \"dropdown-basic\",\n      style: {\n        border: 'none',\n        backgroundColor: '#e9ecef',\n        color: 'rgba(51, 51, 51, 0.00)',\n        width: '38px',\n        height: '38px',\n        display: 'flex',\n        alignItems: 'center',\n        outline: 'none',\n        justifyContent: 'center',\n        marginLeft: '10px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n      style: {\n        color: '#8A92A6',\n        marginLeft: '12px',\n        marginBottom: '15px'\n      }\n    }, \"...\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"dropdown-item\"\n    }, \"Update Info\"))))));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      height: '10px'\n    }\n  }))));\n}\nSchoolYear.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n  pageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),\n  setLoading: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),\n  loadingState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n  isLess800: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),\n  getSchoolYearList: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),\n  schoolyearList: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    pageHeader: state.main.pageHeader,\n    loadingState: state.main.loadingState,\n    isLess800: state.main.isLess800,\n    schoolyearList: state.main.schoolyearList\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  setLoading: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setLoading,\n  getSchoolYearList: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getSchoolYearList\n})(SchoolYear)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/pages/schoolyear.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Col.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Col.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useCol: () => (/* binding */ useCol)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\"use client\";\n\n\n\n\n\nfunction useCol({\n  as,\n  bsPrefix,\n  className,\n  ...props\n}) {\n  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'col');\n  const breakpoints = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapBreakpoints)();\n  const minBreakpoint = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapMinBreakpoint)();\n  const spans = [];\n  const classes = [];\n  breakpoints.forEach(brkPoint => {\n    const propValue = props[brkPoint];\n    delete props[brkPoint];\n    let span;\n    let offset;\n    let order;\n    if (typeof propValue === 'object' && propValue != null) {\n      ({\n        span,\n        offset,\n        order\n      } = propValue);\n    } else {\n      span = propValue;\n    }\n    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';\n    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);\n    if (order != null) classes.push(`order${infix}-${order}`);\n    if (offset != null) classes.push(`offset${infix}-${offset}`);\n  });\n  return [{\n    ...props,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, ...spans, ...classes)\n  }, {\n    as,\n    bsPrefix,\n    spans\n  }];\n}\nconst Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(\n// Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\n(props, ref) => {\n  const [{\n    className,\n    ...colProps\n  }, {\n    as: Component = 'div',\n    bsPrefix,\n    spans\n  }] = useCol(props);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n    ...colProps,\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, !spans.length && bsPrefix)\n  });\n});\nCol.displayName = 'Col';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/Col.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Placeholder.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Placeholder.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usePlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usePlaceholder */ \"./node_modules/react-bootstrap/esm/usePlaceholder.js\");\n/* harmony import */ var _PlaceholderButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlaceholderButton */ \"./node_modules/react-bootstrap/esm/PlaceholderButton.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nconst Placeholder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({\n  as: Component = 'span',\n  ...props\n}, ref) => {\n  const placeholderProps = (0,_usePlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, {\n    ...placeholderProps,\n    ref: ref\n  });\n});\nPlaceholder.displayName = 'Placeholder';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Placeholder, {\n  Button: _PlaceholderButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/Placeholder.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/PlaceholderButton.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/PlaceholderButton.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _usePlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usePlaceholder */ \"./node_modules/react-bootstrap/esm/usePlaceholder.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\nconst PlaceholderButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {\n  const placeholderProps = (0,_usePlaceholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    ...placeholderProps,\n    ref: ref,\n    disabled: true,\n    tabIndex: -1\n  });\n});\nPlaceholderButton.displayName = 'PlaceholderButton';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderButton);\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/PlaceholderButton.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/usePlaceholder.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/usePlaceholder.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ usePlaceholder)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n\"use client\";\n\n\n\n\nfunction usePlaceholder({\n  animation,\n  bg,\n  bsPrefix,\n  size,\n  ...props\n}) {\n  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.useBootstrapPrefix)(bsPrefix, 'placeholder');\n  const [{\n    className,\n    ...colProps\n  }] = (0,_Col__WEBPACK_IMPORTED_MODULE_2__.useCol)(props);\n  return {\n    ...colProps,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size && `${bsPrefix}-${size}`, bg && `bg-${bg}`)\n  };\n}\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/usePlaceholder.js?");

/***/ })

}]);