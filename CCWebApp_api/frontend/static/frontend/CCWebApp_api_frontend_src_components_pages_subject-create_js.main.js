"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_pages_subject-create_js"],{

/***/ "./CCWebApp_api/frontend/src/components/pages/subject-create.js":
/*!**********************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/pages/subject-create.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/InputGroup.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Spinner.js\");\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction SubjectCreate(props) {\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    submissionComplete = _useState2[0],\n    setSubmission = _useState2[1];\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    subjectcode = _React$useState2[0],\n    setSubjectcode = _React$useState2[1];\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),\n    _React$useState4 = _slicedToArray(_React$useState3, 2),\n    description = _React$useState4[0],\n    setDescription = _React$useState4[1];\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),\n    _React$useState6 = _slicedToArray(_React$useState5, 2),\n    units = _React$useState6[0],\n    setUnits = _React$useState6[1];\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),\n    _React$useState8 = _slicedToArray(_React$useState7, 2),\n    lecture = _React$useState8[0],\n    setLecture = _React$useState8[1];\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),\n    _React$useState10 = _slicedToArray(_React$useState9, 2),\n    laboratory = _React$useState10[0],\n    setLaboratory = _React$useState10[1];\n  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),\n    _React$useState12 = _slicedToArray(_React$useState11, 2),\n    prerequisite = _React$useState12[0],\n    setPrerequisite = _React$useState12[1];\n  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),\n    _React$useState14 = _slicedToArray(_React$useState13, 2),\n    corequisite = _React$useState14[0],\n    setCorequisite = _React$useState14[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n    _useState4 = _slicedToArray(_useState3, 2),\n    formData = _useState4[0],\n    setFormData = _useState4[1];\n  var handleSubmit = function handleSubmit() {\n    props.setLoading('isLoading');\n    props.addSubject(formData);\n    setSubmission(true);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.loadingState === 'isNotLoading' && submissionComplete) {\n      navigate('/admins/subjects');\n    }\n    props.setsidebarState('subjects');\n    props.setsubsidebarState(null);\n    props.setsubjectState('create-page-one');\n    props.setpageHeader('Create a Subject', '', 'Fill Information to Create a Subject');\n    props.getSubjectsList('');\n    setFormData({\n      code: subjectcode,\n      description: description,\n      units: units,\n      lecture: lecture,\n      lab: laboratory,\n      prerequisite: prerequisite,\n      corequisite: corequisite\n    });\n  }, [subjectcode, description, units, lecture, laboratory, prerequisite, corequisite, props.loadingState]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      borderRadius: '8px',\n      paddingBottom: '48px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      padding: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"card-title\"\n  }, \"Subject Information\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%',\n      marginRight: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    htmlFor: \"subjectcode\",\n    className: \"form-label\"\n  }, \"Subject Code\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n    type: \"text\",\n    value: subjectcode,\n    placeholder: \"Enter Subject Code\",\n    id: \"subjectcode\",\n    onChange: function onChange(e) {\n      return setSubjectcode(e.target.value);\n    },\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  }), !subjectcode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( -33px, 5px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%',\n      marginLeft: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    htmlFor: \"description\",\n    className: \"form-label\"\n  }, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n    type: \"text\",\n    value: description,\n    placeholder: \"Enter Subject Description\",\n    id: \"description\",\n    onChange: function onChange(e) {\n      return setDescription(e.target.value);\n    },\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  }), !description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( -33px, 5px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%',\n      marginRight: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    htmlFor: \"prerequisite\",\n    className: \"form-label\"\n  }, \"Prerequisite\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Toggle, {\n    id: \"dropdown-basic\",\n    className: \"formselect-border drop-noarrow\",\n    style: {\n      border: 'none',\n      backgroundColor: 'rgba(51, 51, 51, 0.00)',\n      color: prerequisite ? 'black' : 'rgba(51, 51, 51, 0.80)',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      outline: 'none',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, prerequisite ? prerequisite : \"Select Prerequisite\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedAccordionIconOpen, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Menu, {\n    style: {\n      width: '49.5%',\n      maxHeight: '200px',\n      overflow: 'auto'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n    onClick: function onClick() {\n      return setPrerequisite('');\n    }\n  }, \"NONE\"), _toConsumableArray(props.subjectsListForTable).sort(function (a, b) {\n    return a.code.localeCompare(b.code);\n  }).map(function (subject) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n      key: subject.code,\n      onClick: function onClick() {\n        return setPrerequisite(subject.code);\n      }\n    }, subject.code);\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%',\n      marginLeft: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    htmlFor: \"corequisite\",\n    className: \"form-label\"\n  }, \"Corequisite\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Toggle, {\n    id: \"dropdown-basic\",\n    className: \"formselect-border drop-noarrow\",\n    style: {\n      border: 'none',\n      backgroundColor: 'rgba(51, 51, 51, 0.00)',\n      color: corequisite ? 'black' : 'rgba(51, 51, 51, 0.80)',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      outline: 'none',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, corequisite ? corequisite : \"Select Corequisite\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedAccordionIconOpen, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Menu, {\n    style: {\n      width: '49.5%',\n      maxHeight: '200px',\n      overflow: 'auto'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n    onClick: function onClick() {\n      return setCorequisite('');\n    }\n  }, \"NONE\"), _toConsumableArray(props.subjectsListForTable).sort(function (a, b) {\n    return a.code.localeCompare(b.code);\n  }).map(function (subject) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n      key: subject.code,\n      onClick: function onClick() {\n        return setCorequisite(subject.code);\n      }\n    }, subject.code);\n  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '34%',\n      marginRight: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    htmlFor: \"units\",\n    className: \"form-label\"\n  }, \"Units\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n    type: \"text\",\n    value: units,\n    placeholder: \"Enter Units\",\n    id: \"units\",\n    onChange: function onChange(e) {\n      return setUnits(e.target.value);\n    },\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  }), !units && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( -33px, 5px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '33%',\n      marginRight: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    htmlFor: \"lecture\",\n    className: \"form-label\"\n  }, \"Lecture Hours\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n    type: \"text\",\n    value: lecture,\n    placeholder: \"Enter Lecture Hours\",\n    id: \"lecture\",\n    onChange: function onChange(e) {\n      return setLecture(e.target.value);\n    },\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  }), !lecture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( -33px, 5px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '33%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    htmlFor: \"laboratory\",\n    className: \"form-label\"\n  }, \"Lab/Internship Hours\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n    type: \"text\",\n    value: laboratory,\n    placeholder: \"Enter Lab Hours\",\n    id: \"laboratory\",\n    onChange: function onChange(e) {\n      return setLaboratory(e.target.value);\n    },\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  }), !laboratory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( -33px, 5px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-500-19px\"\n  }, \"Subject Details Preview\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    style: {\n      border: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '10%',\n      paddingLeft: '20px'\n    }\n  }, \"CODE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '23%'\n    }\n  }, \"SUBJECT\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '10%'\n    }\n  }, \"UNITS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '10%'\n    }\n  }, \"LEC\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '10%'\n    }\n  }, \"LAB\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '10%'\n    }\n  }, \"COREQUISITE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '10%'\n    }\n  }, \"PREREQUISITE\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", {\n    style: {\n      cursor: 'pointer'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-body\",\n    style: {\n      paddingLeft: '20px'\n    }\n  }, subjectcode ? subjectcode : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-body\",\n    style: {\n      maxWidth: '400px',\n      overflow: 'auto'\n    }\n  }, description ? description : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-body\"\n  }, units ? units : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-body\"\n  }, lecture ? lecture : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-body\"\n  }, laboratory ? laboratory : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-body\"\n  }, prerequisite ? prerequisite : '-'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n    className: \"table-body\"\n  }, corequisite ? corequisite : '-')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'flex-end',\n      marginTop: '32px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    disabled: !subjectcode || !description || !units || !lecture || !laboratory,\n    type: \"button\",\n    onClick: handleSubmit,\n    style: {\n      borderColor: '#3A57E8',\n      borderRadius: '4px',\n      backgroundColor: '#3A57E8',\n      width: '15%',\n      height: '48px',\n      alignContent: 'center',\n      marginRight: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: {\n      color: 'white',\n      fontFamily: 'Inter',\n      fontStyle: 'normal',\n      fontWeight: 500,\n      fontSize: '18px',\n      paddingTop: '8px'\n    }\n  }, props.loadingState == 'isNotLoading' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"Create Subject\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 0px, -6px)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    animation: \"border\",\n    variant: \"light\"\n  })))))));\n}\nSubjectCreate.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,\n  setsubjectState: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),\n  subjectState: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),\n  pageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object),\n  setLoading: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),\n  loadingState: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),\n  subjectsListForTable: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().array),\n  getSubjectsList: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),\n  addSubject: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    subjectState: state.main.classState,\n    pageHeader: state.main.pageHeader,\n    loadingState: state.main.loadingState,\n    subjectsListForTable: state.main.subjectsListForTable\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setsubjectState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubjectState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  setLoading: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setLoading,\n  getSubjectsList: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getSubjectsList,\n  addSubject: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.addSubject\n})(SubjectCreate)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/pages/subject-create.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/InputGroup.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/InputGroup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var _FormCheckInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormCheckInput */ \"./node_modules/react-bootstrap/esm/FormCheckInput.js\");\n/* harmony import */ var _InputGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputGroupContext */ \"./node_modules/react-bootstrap/esm/InputGroupContext.js\");\n/* harmony import */ var _InputGroupText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputGroupText */ \"./node_modules/react-bootstrap/esm/InputGroupText.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\"use client\";\n\n\n\n\n\n\n\n\n\nconst InputGroupCheckbox = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InputGroupText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormCheckInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    type: \"checkbox\",\n    ...props\n  })\n});\nconst InputGroupRadio = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InputGroupText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormCheckInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    type: \"radio\",\n    ...props\n  })\n});\nconst InputGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({\n  bsPrefix,\n  size,\n  hasValidation,\n  className,\n  // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\n  as: Component = 'div',\n  ...props\n}, ref) => {\n  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'input-group');\n\n  // Intentionally an empty object. Used in detecting if a dropdown\n  // exists under an input group.\n  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({}), []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InputGroupContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Provider, {\n    value: contextValue,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n      ref: ref,\n      ...props,\n      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, size && `${bsPrefix}-${size}`, hasValidation && 'has-validation')\n    })\n  });\n});\nInputGroup.displayName = 'InputGroup';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(InputGroup, {\n  Text: _InputGroupText__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  Radio: InputGroupRadio,\n  Checkbox: InputGroupCheckbox\n}));\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/InputGroup.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/InputGroupText.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/InputGroupText.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\"use client\";\n\n\n\n\n\nconst InputGroupText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({\n  className,\n  bsPrefix,\n  as: Component = 'span',\n  ...props\n}, ref) => {\n  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'input-group-text');\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n    ref: ref,\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, bsPrefix),\n    ...props\n  });\n});\nInputGroupText.displayName = 'InputGroupText';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroupText);\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/InputGroupText.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Spinner.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Spinner.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\"use client\";\n\n\n\n\n\nconst Spinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({\n  bsPrefix,\n  variant,\n  animation = 'border',\n  size,\n  // Need to define the default \"as\" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595\n  as: Component = 'div',\n  className,\n  ...props\n}, ref) => {\n  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'spinner');\n  const bsSpinnerPrefix = `${bsPrefix}-${animation}`;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n    ref: ref,\n    ...props,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsSpinnerPrefix, size && `${bsSpinnerPrefix}-${size}`, variant && `text-${variant}`)\n  });\n});\nSpinner.displayName = 'Spinner';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/Spinner.js?");

/***/ })

}]);