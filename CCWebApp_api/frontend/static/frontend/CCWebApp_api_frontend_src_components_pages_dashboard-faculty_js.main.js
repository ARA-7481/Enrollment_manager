"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_pages_dashboard-faculty_js"],{

/***/ "./CCWebApp_api/frontend/src/components/pages/dashboard-faculty.js":
/*!*************************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/pages/dashboard-faculty.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction FacultyDashboard(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(localStorage.getItem('user')).avatar),\n    _useState2 = _slicedToArray(_useState, 2),\n    avatar = _useState2[0],\n    setAvatar = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(localStorage.getItem('user'))),\n    _useState4 = _slicedToArray(_useState3, 2),\n    user = _useState4[0],\n    setUser = _useState4[1];\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();\n  var date = new Date();\n  var currentDay = date.getDay();\n  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  if (!user) {\n    navigate('/auth/admin-signin');\n  }\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setsidebarState('dashboard');\n    props.setsubsidebarState(null);\n    props.setpageHeader(\"Hello \".concat(user.first_name), '', 'Welcome to your dashboard');\n    props.getTeacherdata(user.facultyprofile);\n    props.setSelectedBG('https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/bg0.png');\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.newAvatar) {\n      setAvatar(props.newAvatar);\n    }\n  }, [props.newAvatar]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#e9ecef',\n      borderTopLeftRadius: '8px',\n      borderTopRightRadius: '8px',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      height: '124px',\n      borderRadius: '8px',\n      display: 'flex',\n      alignItems: 'center',\n      padding: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 0px, -60px)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"circular-avatar\",\n    src: avatar,\n    alt: \"description\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-700-28px\"\n  }, user.first_name, \" \", user.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: '8px',\n      marginTop: '3px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-400-16px\",\n    style: {\n      paddingTop: '5px'\n    }\n  }, \"- \", props.teacherData.position))), props.teacherData.id))));\n}\nFacultyDashboard.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func).isRequired,\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func).isRequired,\n  setpageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),\n  getTeacherdata: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),\n  teacherData: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),\n  setSelectedBG: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),\n  newAvatar: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    teacherData: state.main.teacherData,\n    newAvatar: state.main.newAvatar\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  getTeacherdata: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getTeacherdata,\n  setSelectedBG: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setSelectedBG\n})(FacultyDashboard)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/pages/dashboard-faculty.js?");

/***/ })

}]);