/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_index_2_weatherdashboard_js"],{

/***/ "./CCWebApp_api/frontend/src/components/index_2/weatherdashboard.js":
/*!**************************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/index_2/weatherdashboard.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\n/* harmony import */ var _assets_images_backgrounds_plant_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/backgrounds/plant.jpg */ \"./CCWebApp_api/frontend/src/assets/images/backgrounds/plant.jpg\");\n/* harmony import */ var _assets_images_backgrounds_plant_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_backgrounds_plant_jpg__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction WeatherDashboard(props) {\n  var _ref2, _ref3;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerHeight),\n    _useState2 = _slicedToArray(_useState, 2),\n    windowHeight = _useState2[0],\n    setWindowHeight = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth),\n    _useState4 = _slicedToArray(_useState3, 2),\n    windowWidth = _useState4[0],\n    setWindowWidth = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n      height: window.innerHeight,\n      width: window.innerWidth\n    }),\n    _useState6 = _slicedToArray(_useState5, 2),\n    windowDimensions = _useState6[0],\n    setWindowdimensions = _useState6[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setsidebarState('dashboard');\n    props.setsubsidebarState(null);\n    props.setpageHeader('Dashboard', '', 'Welcome to the dashboard');\n    props.getDeviceRain('c5Y1An7aOd');\n  }, [props.isLess800]);\n  var websocket = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    websocket.current = new WebSocket(\"wss://\".concat(window.location.host, \"/ws/dbupdatetrigger/\"));\n    websocket.current.onmessage = function (event) {\n      var data = JSON.parse(event.data);\n      console.log(data);\n      console.log(data.event.event);\n      if (data.event.event === 'model_update') {\n        props.getDeviceRain('c5Y1An7aOd');\n      }\n    };\n    return function () {\n      if (websocket.current) {\n        websocket.current.close();\n      }\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: _defineProperty({\n      display: 'flex',\n      backgroundColor: '#ffffff',\n      borderRadius: '8px',\n      borderTopRightRadius: '8px'\n    }, \"backgroundColor\", 'rgba(51, 51, 51, 0.20)')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: (_ref2 = {\n      backgroundColor: '#ffffff',\n      borderRadius: '8px',\n      width: '50%'\n    }, _defineProperty(_ref2, \"backgroundColor\", 'rgba(14, 141, 12, 0.2)'), _defineProperty(_ref2, \"margin\", '5px'), _ref2)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      margin: '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    style: {\n      color: 'green',\n      marginBottom: '5px'\n    }\n  }, \"RAIN-GAUGE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      transform: !props.isLess800 ? 'translate(0px, 0px) scale(1)' : 'translate(0px, 0px) scale(0.7)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '50%',\n      marginRight: '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Sensor:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Device Sytem ID:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Module:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Protocol:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Tip Counter:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Rainfall Intensity:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Alert Code:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Sampling Period:   \"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"UART-6mL Tipping Bucket\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"c5Y1An7aOd\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"ESP-WROOM-32\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"HTTP/HTTPS\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, props.deviceData.hourcount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, props.deviceData.rainrate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, props.deviceData.rainwarning)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"1st,16th,31st,46th minute\")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: (_ref3 = {\n      backgroundColor: '#ffffff',\n      borderRadius: '8px',\n      width: '50%'\n    }, _defineProperty(_ref3, \"backgroundColor\", 'rgba(12, 31, 141, 0.2)'), _defineProperty(_ref3, \"margin\", '5px'), _ref3)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      margin: '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    style: {\n      color: 'rgba(12, 36, 145, 1)',\n      marginBottom: '5px'\n    }\n  }, \"FLOOD MONITOR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      transform: !props.isLess800 ? 'translate(0px, 0px) scale(1)' : 'translate(0px, 0px) scale(0.7)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '50%',\n      marginRight: '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Sensor:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Device Sytem ID:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Module:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Protocol:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Alert Code:   \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", null, \"Sampling Period:   \"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"Float Switch\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"bx5HHPfZhZ\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"ESP-WROOM-32\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"HTTP/HTTPS\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, props.deviceData.waterlevelwarning)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      overflow: 'hidden',\n      whiteSpace: 'nowrap',\n      textOverflow: 'ellipsis'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    style: {\n      color: 'white'\n    }\n  }, \"1st,31st Second\"))))))));\n}\nWeatherDashboard.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  setpageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  getDeviceRain: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  deviceData: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),\n  isLess800: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    deviceData: state.main.deviceData,\n    isLess800: state.main.isLess800\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  getDeviceRain: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getDeviceRain\n})(WeatherDashboard)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/index_2/weatherdashboard.js?");

/***/ }),

/***/ "./CCWebApp_api/frontend/src/assets/images/backgrounds/plant.jpg":
/*!***********************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/assets/images/backgrounds/plant.jpg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n        srcSet: __webpack_require__.p + \"573044b42c4efe26-1200.jpg\"+\" 1200w\",\n        images: [{path: __webpack_require__.p + \"573044b42c4efe26-1200.jpg\",width: 1200,height: 800}],\n        src: __webpack_require__.p + \"573044b42c4efe26-1200.jpg\",\n        toString: function(){return __webpack_require__.p + \"573044b42c4efe26-1200.jpg\"},\n        \n        width: 1200,\n        height: 800\n      }\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/assets/images/backgrounds/plant.jpg?");

/***/ })

}]);