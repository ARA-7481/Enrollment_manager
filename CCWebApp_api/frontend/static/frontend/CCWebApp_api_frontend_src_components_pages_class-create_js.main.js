"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_pages_class-create_js"],{

/***/ "./CCWebApp_api/frontend/src/components/pages/class-create.js":
/*!********************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/pages/class-create.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/InputGroup.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Spinner.js\");\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction ClassCreate(props) {\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    submissionComplete = _useState2[0],\n    setSubmission = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    classcode = _useState4[0],\n    setClasscode = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState6 = _slicedToArray(_useState5, 2),\n    description = _useState6[0],\n    setDescription = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState8 = _slicedToArray(_useState7, 2),\n    section = _useState8[0],\n    setSection = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState10 = _slicedToArray(_useState9, 2),\n    subject = _useState10[0],\n    setSubject = _useState10[1];\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState12 = _slicedToArray(_useState11, 2),\n    teacher = _useState12[0],\n    setTeacher = _useState12[1];\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4),\n    _useState14 = _slicedToArray(_useState13, 2),\n    span = _useState14[0],\n    setSpan = _useState14[1];\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('NONE'),\n    _useState16 = _slicedToArray(_useState15, 2),\n    strand = _useState16[0],\n    setStrand = _useState16[1];\n  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n    _useState18 = _slicedToArray(_useState17, 2),\n    formData = _useState18[0],\n    setFormData = _useState18[1];\n  var handleSubmit = function handleSubmit() {\n    props.setLoading('isLoading');\n    props.addClass(formData);\n    setSubmission(true);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setsidebarState('class');\n    props.setsubsidebarState(null);\n    props.setclassState('create-page-one');\n    props.setpageHeader('Create a Class', '', 'Fill Information to Create a Class');\n    props.getSubjectsList('');\n    props.getSectionList('', '');\n    props.getFaculty('', '');\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.loadingState === 'isNotLoading' && submissionComplete) {\n      if (props.error) {\n        setSubmission(false);\n      } else if (props.success) {\n        navigate('/admins/class');\n      }\n    }\n    setFormData({\n      code: classcode,\n      description: description,\n      section: section,\n      subject: subject,\n      teacher: teacher,\n      span: span,\n      strand: strand\n    });\n  }, [classcode, description, section, subject, teacher, span, strand, props.loadingState, props.error, props.success]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      borderRadius: '8px',\n      paddingBottom: '48px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      padding: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"card-title\"\n  }, \"Class Information\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      width: '100%',\n      gap: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Class Code\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n    type: \"text\",\n    value: classcode,\n    placeholder: \"Enter Unique Class Code\",\n    id: \"classcode\",\n    onChange: function onChange(e) {\n      return setClasscode(e.target.value);\n    },\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  }), !classcode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( -33px, 5px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    htmlFor: \"description\",\n    className: \"form-label\"\n  }, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n    type: \"text\",\n    value: description,\n    placeholder: \"Enter Class Description\",\n    id: \"description\",\n    onChange: function onChange(e) {\n      return setDescription(e.target.value);\n    },\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  }), !description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( -33px, 5px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      width: '100%',\n      gap: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Section\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Toggle, {\n    id: \"dropdown-basic\",\n    className: \"formselect-border drop-noarrow\",\n    style: {\n      border: 'none',\n      backgroundColor: 'rgba(51, 51, 51, 0.00)',\n      color: section ? 'black' : 'rgba(51, 51, 51, 0.80)',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      outline: 'none',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '90%',\n      textAlign: 'left'\n    }\n  }, section ? section : \"Select Section\"), !section && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 1, -40px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedAccordionIconOpen, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Menu, {\n    style: {\n      width: '49.5%',\n      maxHeight: '200px',\n      overflow: 'auto'\n    }\n  }, _toConsumableArray(props.sectionList).sort(function (a, b) {\n    return a.code.localeCompare(b.code);\n  }).map(function (section) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n      key: section.code,\n      onClick: function onClick() {\n        return setSection(section.code);\n      }\n    }, section.code);\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Subject\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Toggle, {\n    id: \"dropdown-basic\",\n    className: \"formselect-border drop-noarrow\",\n    style: {\n      border: 'none',\n      backgroundColor: 'rgba(51, 51, 51, 0.00)',\n      color: subject ? 'black' : 'rgba(51, 51, 51, 0.80)',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      outline: 'none',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '90%',\n      textAlign: 'left'\n    }\n  }, subject ? subject : \"Select Subject\"), !subject && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 1, -40px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedAccordionIconOpen, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Menu, {\n    style: {\n      width: '49.5%',\n      maxHeight: '200px',\n      overflow: 'auto'\n    }\n  }, _toConsumableArray(props.subjectsListForTable).sort(function (a, b) {\n    return a.code.localeCompare(b.code);\n  }).map(function (subject) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n      key: subject.code,\n      onClick: function onClick() {\n        return setSubject(subject.code);\n      }\n    }, subject.code);\n  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      width: '100%',\n      gap: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Class Teacher\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Toggle, {\n    id: \"dropdown-basic\",\n    className: \"formselect-border drop-noarrow\",\n    style: {\n      border: 'none',\n      backgroundColor: 'rgba(51, 51, 51, 0.00)',\n      color: teacher ? 'black' : 'rgba(51, 51, 51, 0.80)',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      outline: 'none',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '90%',\n      textAlign: 'left'\n    }\n  }, teacher ? teacher : \"Select Teacher\"), !teacher && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 1, -40px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedAccordionIconOpen, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Menu, {\n    style: {\n      width: '49.5%',\n      maxHeight: '200px',\n      overflow: 'auto'\n    }\n  }, _toConsumableArray(props.facultyList).sort(function (a, b) {\n    return a.userprofile.last_name.localeCompare(b.userprofile.last_name);\n  }).map(function (faculty) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n      key: faculty.id,\n      onClick: function onClick() {\n        return setTeacher(faculty.id);\n      }\n    }, faculty.userprofile.last_name, \", \", faculty.userprofile.first_name, \" \", faculty.userprofile.middle_name);\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Number Of Quarters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Toggle, {\n    id: \"dropdown-basic\",\n    className: \"formselect-border drop-noarrow\",\n    style: {\n      border: 'none',\n      backgroundColor: 'rgba(51, 51, 51, 0.00)',\n      color: span ? 'black' : 'rgba(51, 51, 51, 0.80)',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      outline: 'none',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '90%',\n      textAlign: 'left'\n    }\n  }, span ? span : \"Set Number of Quarters\"), !span && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 1, -40px)',\n      width: '0px',\n      pointerEvents: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.RedExclamation, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedAccordionIconOpen, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Menu, {\n    style: {\n      width: '49.5%',\n      maxHeight: '200px',\n      overflow: 'auto'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n    onClick: function onClick() {\n      return setSpan(2);\n    }\n  }, \"2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n    onClick: function onClick() {\n      return setSpan(4);\n    }\n  }, \"4\")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Strand\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Toggle, {\n    id: \"dropdown-basic\",\n    className: \"formselect-border drop-noarrow\",\n    style: {\n      border: 'none',\n      backgroundColor: 'rgba(51, 51, 51, 0.00)',\n      color: strand ? 'black' : 'rgba(51, 51, 51, 0.80)',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      outline: 'none',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '90%',\n      textAlign: 'left'\n    }\n  }, strand ? strand : \"Select Strand(For SHS Classes ONLY)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedAccordionIconOpen, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Menu, {\n    style: {\n      width: '50%',\n      maxHeight: '200px',\n      overflow: 'auto'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n    onClick: function onClick() {\n      return setStrand(\"Industrial Arts\");\n    }\n  }, \"Industrial Arts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n    onClick: function onClick() {\n      return setStrand(\"Home Economics\");\n    }\n  }, \"Home Economics\"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'flex-end',\n      marginTop: '32px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    disabled: !classcode || !description || !section || !subject || !teacher,\n    type: \"button\",\n    onClick: handleSubmit,\n    style: {\n      borderColor: '#3A57E8',\n      borderRadius: '4px',\n      backgroundColor: '#3A57E8',\n      width: '15%',\n      height: '48px',\n      alignContent: 'center',\n      marginRight: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: {\n      color: 'white',\n      fontFamily: 'Inter',\n      fontStyle: 'normal',\n      fontWeight: 500,\n      fontSize: '18px',\n      paddingTop: '8px'\n    }\n  }, props.loadingState == 'isNotLoading' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"Create Class\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 0px, -6px)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    animation: \"border\",\n    variant: \"light\"\n  })))))));\n}\nClassCreate.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func).isRequired,\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func).isRequired,\n  setclassState: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),\n  classState: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),\n  pageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),\n  setLoading: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),\n  loadingState: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),\n  error: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),\n  success: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),\n  getSubjectsList: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),\n  subjectsListForTable: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),\n  getSectionList: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),\n  sectionList: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),\n  getFaculty: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),\n  facultyList: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),\n  addClass: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    classState: state.main.classState,\n    pageHeader: state.main.pageHeader,\n    loadingState: state.main.loadingState,\n    subjectsListForTable: state.main.subjectsListForTable,\n    error: state.main.error,\n    success: state.main.success,\n    sectionList: state.main.sectionList,\n    facultyList: state.main.facultyList\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setclassState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setclassState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  setLoading: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setLoading,\n  getSubjectsList: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getSubjectsList,\n  getSectionList: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getSectionList,\n  getFaculty: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getFaculty,\n  addClass: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.addClass\n})(ClassCreate)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/pages/class-create.js?");

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