"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_index_4_subjects_js"],{

/***/ "./CCWebApp_api/frontend/src/components/index_4/subjects.js":
/*!******************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/index_4/subjects.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Placeholder.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Table.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction Subjects(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Newest-Oldest'),\n    _useState2 = _slicedToArray(_useState, 2),\n    sortStatus = _useState2[0],\n    setsortStatus = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    value = _useState4[0],\n    setValue = _useState4[1];\n  var handleChange = function handleChange(event) {\n    setValue(event.target.value);\n  };\n  var handleSearch = function handleSearch(query) {\n    props.getSubjectsList(query);\n    props.setLoading('isLoading');\n  };\n  var handleSort = function handleSort(sort) {\n    setsortStatus(sort);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.subjectsListForTable.length == 0) {\n      props.setLoading('isLoading');\n    }\n    props.setsidebarState('subjects');\n    props.setsubsidebarState(null);\n    props.setsubjectState('list');\n    props.setpageHeader('Manage Subjects', '', 'View, add and update subjects.');\n    props.getSubjectsList('');\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#e9ecef',\n      borderTopLeftRadius: '8px',\n      borderTopRightRadius: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      height: !props.isLess800 ? '72px' : '120px',\n      borderRadius: '8px',\n      display: !props.isLess800 ? 'flex' : '',\n      alignItems: 'center',\n      padding: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      width: !props.isLess800 ? '40%' : '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: function onClick() {\n      return handleSearch(value);\n    },\n    style: {\n      cursor: 'pointer',\n      marginTop: '7px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.Magnifier, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    style: {\n      width: '62.5%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n    controlId: \"searchbar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Control, {\n    type: \"search\",\n    placeholder: \"Search section name...\",\n    value: value,\n    onChange: handleChange,\n    style: {\n      border: 'none',\n      width: '100%',\n      minWidth: '145px'\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-500-16px\",\n    style: {\n      paddingTop: '10px'\n    }\n  }, \"Sort:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    style: {\n      width: '37.5%',\n      minWidth: '1px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Toggle, {\n    id: \"dropdown-basic\",\n    style: {\n      border: 'none',\n      backgroundColor: 'rgba(51, 51, 51, 0.00)',\n      color: 'black',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      outline: 'none',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      overflow: 'hidden'\n    }\n  }, sortStatus)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Menu, {\n    style: {\n      minWidth: '1px',\n      width: '100%'\n    }\n  }, sortStatus !== 'Newest-Oldest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n    onClick: function onClick() {\n      return handleSort('Newest-Oldest');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"zooming-text\"\n  }, \"Newest-Oldest\")), sortStatus !== 'Oldest-Newest' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n    onClick: function onClick() {\n      return handleSort('Oldest-Newest');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"zooming-text\"\n  }, \"Oldest-Newest\")), sortStatus !== 'A-Z' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n    onClick: function onClick() {\n      return handleSort('A-Z');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"zooming-text\"\n  }, \"A-Z\")), sortStatus !== 'Z-A' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n    onClick: function onClick() {\n      return handleSort('Z-A');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"zooming-text\"\n  }, \"Z-A\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      width: !props.isLess800 ? '60%' : '100%'\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      height: '40px',\n      backgroundColor: 'rgba(51, 51, 51, 0.00)',\n      margin: '0px'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      borderRadius: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      height: '81px',\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"table-title\"\n  }, \"Subjects List\")), props.loadingState == 'isLoading' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: '20px',\n      marginRight: '40px',\n      marginTop: '7px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      marginBottom: '27px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '20%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 2\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '40%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 7\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '30%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 7\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '30%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 7\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '30%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 7\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      width: '5%',\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 7\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 12\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '35px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    xs: 12\n  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    hover: true,\n    style: {\n      border: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '25%',\n      paddingLeft: '20px'\n    }\n  }, \"CODE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '40%'\n    }\n  }, \"DESCRIPTION\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '15%'\n    }\n  }, \"PREREQUISITE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '15%'\n    }\n  }, \"COREQUISITE\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", {\n    style: {\n      cursor: 'pointer'\n    }\n  }, _toConsumableArray(props.subjectsListForTable).sort(function (a, b) {\n    return a.code.localeCompare(b.code);\n  }).map(function (subject) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n      key: subject.code,\n      style: {\n        border: 'none'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\",\n      style: {\n        paddingLeft: '20px'\n      }\n    }, subject.code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\",\n      style: {\n        paddingLeft: '20px'\n      }\n    }, subject.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, subject.prerequisite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, subject.corequisite));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      height: '10px'\n    }\n  }))));\n}\nSubjects.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func).isRequired,\n  pageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),\n  setpageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func).isRequired,\n  getSubjectsList: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),\n  setLoading: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),\n  loadingState: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),\n  setsubjectState: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),\n  subjectsListForTable: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    pageHeader: state.main.pageHeader,\n    loadingState: state.main.loadingState,\n    subjectState: state.main.subjectState,\n    subjectsListForTable: state.main.subjectsListForTable\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  getSubjectsList: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getSubjectsList,\n  setLoading: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setLoading,\n  setsubjectState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubjectState\n})(Subjects)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/index_4/subjects.js?");

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

/***/ "./node_modules/react-bootstrap/esm/Table.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Table.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\"use client\";\n\n\n\n\n\nconst Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({\n  bsPrefix,\n  className,\n  striped,\n  bordered,\n  borderless,\n  hover,\n  size,\n  variant,\n  responsive,\n  ...props\n}, ref) => {\n  const decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'table');\n  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-${typeof striped === 'string' ? `striped-${striped}` : 'striped'}`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);\n  const table = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"table\", {\n    ...props,\n    className: classes,\n    ref: ref\n  });\n  if (responsive) {\n    let responsiveClass = `${decoratedBsPrefix}-responsive`;\n    if (typeof responsive === 'string') {\n      responsiveClass = `${responsiveClass}-${responsive}`;\n    }\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      className: responsiveClass,\n      children: table\n    });\n  }\n  return table;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/Table.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/usePlaceholder.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/usePlaceholder.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ usePlaceholder)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n\"use client\";\n\n\n\n\nfunction usePlaceholder({\n  animation,\n  bg,\n  bsPrefix,\n  size,\n  ...props\n}) {\n  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.useBootstrapPrefix)(bsPrefix, 'placeholder');\n  const [{\n    className,\n    ...colProps\n  }] = (0,_Col__WEBPACK_IMPORTED_MODULE_2__.useCol)(props);\n  return {\n    ...colProps,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size && `${bsPrefix}-${size}`, bg && `bg-${bg}`)\n  };\n}\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/usePlaceholder.js?");

/***/ })

}]);