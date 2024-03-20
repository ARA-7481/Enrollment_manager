"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_pages_dashboard-faculty-classpage_js"],{

/***/ "./CCWebApp_api/frontend/src/components/pages/dashboard-faculty-classpage.js":
/*!***********************************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/pages/dashboard-faculty-classpage.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/InputGroup.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Dropdown.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction ClassPage(props) {\n  var _students$sort;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState2 = _slicedToArray(_useState, 2),\n    classcode = _useState2[0],\n    setClasscode = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    description = _useState4[0],\n    setDescription = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState6 = _slicedToArray(_useState5, 2),\n    section = _useState6[0],\n    setSection = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState8 = _slicedToArray(_useState7, 2),\n    subject = _useState8[0],\n    setSubject = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('NONE'),\n    _useState10 = _slicedToArray(_useState9, 2),\n    strand = _useState10[0],\n    setStrand = _useState10[1];\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState12 = _slicedToArray(_useState11, 2),\n    students = _useState12[0],\n    setStudents = _useState12[1];\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState14 = _slicedToArray(_useState13, 2),\n    activeinput = _useState14[0],\n    setActiveinput = _useState14[1];\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState16 = _slicedToArray(_useState15, 2),\n    q1 = _useState16[0],\n    setQ1 = _useState16[1];\n  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState18 = _slicedToArray(_useState17, 2),\n    q2 = _useState18[0],\n    setQ2 = _useState18[1];\n  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState20 = _slicedToArray(_useState19, 2),\n    q3 = _useState20[0],\n    setQ3 = _useState20[1];\n  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState22 = _slicedToArray(_useState21, 2),\n    q4 = _useState22[0],\n    setQ4 = _useState22[1];\n  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState24 = _slicedToArray(_useState23, 2),\n    remarks = _useState24[0],\n    setRemarks = _useState24[1];\n  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState26 = _slicedToArray(_useState25, 2),\n    gradeid = _useState26[0],\n    setGradeid = _useState26[1];\n  var handleCreategradesheet = function handleCreategradesheet(studentid) {\n    props.setGradesheet(studentid, classcode);\n    props.getClassdata(props.selectedClass);\n  };\n  var handleSetactiveid = function handleSetactiveid(studentid) {\n    setActiveinput(studentid);\n    var scores = _toConsumableArray(props.classData.class_related_score).find(function (score) {\n      return score.student === studentid;\n    });\n    setGradeid(scores.id);\n    setQ1(scores.quarter1);\n    setQ2(scores.quarter2);\n    setQ3(scores.quarter3);\n    setQ4(scores.quarter4);\n    setRemarks(scores.remarks);\n  };\n  var handlePatchgrade = function handlePatchgrade(studentid) {\n    props.patchGrades(gradeid, studentid, q1, q2, q3, q4, remarks, classcode);\n    setActiveinput();\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setsidebarState('dashboard');\n    props.setsubsidebarState(null);\n    props.getClassdata(props.selectedClass);\n  }, [props.emptygradeSheet]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    try {\n      props.setpageHeader(\"\".concat(props.classData.subject), \"\".concat(props.classData.section.code), \"\".concat(props.classData.code));\n      setClasscode(props.classData.code);\n      setDescription(props.classData.description);\n      setSubject(props.classData.subject);\n      setStrand(props.classData.strand);\n      setSection(props.classData.section.code);\n      var newStudents = _toConsumableArray(props.classData.section.students);\n      setStudents(newStudents);\n    } catch (error) {}\n  }, [props.classData]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      borderRadius: '8px',\n      paddingBottom: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      borderBottom: '1px solid gray',\n      marginLeft: '24px',\n      marginRight: '24px',\n      paddingBottom: '24px',\n      paddingTop: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"card-title\"\n  }, \"Class Information\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      width: '100%',\n      gap: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Class Code\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"text\",\n    disabled: true,\n    defaultValue: classcode,\n    id: \"classcode\",\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, {\n    htmlFor: \"description\",\n    className: \"form-label\"\n  }, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"text\",\n    disabled: true,\n    defaultValue: description,\n    id: \"description\",\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      width: '100%',\n      gap: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Section\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"text\",\n    disabled: true,\n    defaultValue: section,\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Subject\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"text\",\n    disabled: true,\n    defaultValue: subject,\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  }))))), props.classData.strand !== \"NONE\" || !strand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"form-group text-left\",\n    style: {\n      width: '50%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, {\n    className: \"form-label\"\n  }, \"Strand\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n    type: \"text\",\n    disabled: true,\n    defaultValue: strand,\n    style: {\n      width: '100%',\n      border: '1px solid #EEEEEE',\n      borderRadius: '4px'\n    }\n  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"card-title\",\n    style: {\n      marginTop: '24px',\n      marginLeft: '24px'\n    }\n  }, \"Grade Sheet\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    hover: true,\n    style: {\n      border: 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '20%',\n      paddingLeft: '20px'\n    }\n  }, \"IDs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '30%'\n    }\n  }, \"FULL NAME\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '8%'\n    }\n  }, \"Q1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '8%'\n    }\n  }, \"Q2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '8%'\n    }\n  }, \"Q3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '8%'\n    }\n  }, \"Q4\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '8%'\n    }\n  }, \"AVERAGE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '20%'\n    }\n  }, \"REMARKS\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", {\n    className: \"table-head\",\n    style: {\n      width: '20%'\n    }\n  }, \"ACTION\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", null, (_students$sort = students.sort(function (a, b) {\n    return a.userprofile.last_name.localeCompare(b.userprofile.last_name);\n  })) === null || _students$sort === void 0 ? void 0 : _students$sort.map(function (student) {\n    var studentScores = _toConsumableArray(props.classData.class_related_score).find(function (score) {\n      return score.student === student.id;\n    });\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n      key: student.id,\n      style: {\n        border: 'none'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\",\n      style: {\n        paddingLeft: '20px'\n      }\n    }, student.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, student.userprofile.last_name, \", \", student.userprofile.first_name, \" \", student.userprofile.middle_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, studentScores ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      disabled: activeinput !== student.id,\n      style: {\n        border: 'none',\n        width: '100%'\n      },\n      defaultValue: studentScores.quarter1,\n      onChange: function onChange(e) {\n        return setQ1(parseFloat(e.target.value));\n      }\n    }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, studentScores ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      disabled: activeinput !== student.id,\n      style: {\n        border: 'none',\n        width: '100%'\n      },\n      defaultValue: studentScores.quarter2,\n      onChange: function onChange(e) {\n        return setQ2(parseFloat(e.target.value));\n      }\n    }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, studentScores ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      disabled: activeinput !== student.id,\n      style: {\n        border: 'none',\n        width: '100%'\n      },\n      defaultValue: studentScores.quarter3,\n      onChange: function onChange(e) {\n        return setQ3(parseFloat(e.target.value));\n      }\n    }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, studentScores ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      disabled: activeinput !== student.id,\n      style: {\n        border: 'none',\n        width: '100%'\n      },\n      defaultValue: studentScores.quarter4,\n      onChange: function onChange(e) {\n        return setQ4(parseFloat(e.target.value));\n      }\n    }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, studentScores ? ((studentScores.quarter1 !== 0 ? studentScores.quarter1 : 0) + (studentScores.quarter2 !== 0 ? studentScores.quarter2 : 0) + (studentScores.quarter3 !== 0 ? studentScores.quarter3 : 0) + (studentScores.quarter4 !== 0 ? studentScores.quarter4 : 0)) / ((studentScores.quarter1 !== 0 ? 1 : 0) + (studentScores.quarter2 !== 0 ? 1 : 0) + (studentScores.quarter3 !== 0 ? 1 : 0) + (studentScores.quarter4 !== 0 ? 1 : 0)).toFixed(2) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, studentScores ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Toggle, {\n      disabled: activeinput !== student.id,\n      id: \"dropdown-basic\",\n      className: \"formselect-border drop-noarrow\",\n      style: {\n        border: 'none',\n        backgroundColor: 'rgba(51, 51, 51, 0.00)',\n        color: 'black',\n        width: '100%',\n        display: 'flex',\n        alignItems: 'center',\n        outline: 'none',\n        justifyContent: 'space-between'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        margin: '8px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px-dark\",\n      style: {\n        color: activeinput == student.id ? 'black' : studentScores.remarks === \"Ongoing\" ? '#0047AB' : studentScores.remarks === \"Passed\" ? 'green' : studentScores.remarks === \"Failed\" ? 'red' : 'black'\n      }\n    }, activeinput == student.id ? remarks : studentScores.remarks)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ConnectedAccordionIconOpen, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Menu, {\n      style: {\n        width: '100%',\n        maxHeight: '200px',\n        overflow: 'auto'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n      onClick: function onClick() {\n        return setRemarks('Ongoing');\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px-dark\",\n      style: {\n        color: '#0047AB'\n      }\n    }, \"Ongoing\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n      onClick: function onClick() {\n        return setRemarks('Passed');\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px-dark\",\n      style: {\n        color: 'green'\n      }\n    }, \"Passed\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n      onClick: function onClick() {\n        return setRemarks('Failed');\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px-dark\",\n      style: {\n        color: 'red'\n      }\n    }, \"Failed\")))) : 'none'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n      className: \"table-body\"\n    }, studentScores ? activeinput == student.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      type: \"button\",\n      onClick: function onClick() {\n        return handlePatchgrade(student.id);\n      },\n      style: {\n        borderColor: '#D0F0C0',\n        borderRadius: '4px',\n        backgroundColor: '#D0F0C0',\n        width: '100%',\n        height: '50px',\n        alignContent: 'center'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      style: {\n        color: 'black',\n        fontFamily: 'Inter',\n        fontStyle: 'normal',\n        fontWeight: 400,\n        fontSize: '15px'\n      }\n    }, \"Submit\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Toggle, {\n      id: \"dropdown-basic\",\n      style: {\n        border: 'none',\n        backgroundColor: '#e9ecef',\n        color: 'rgba(51, 51, 51, 0.00)',\n        width: '38px',\n        height: '38px',\n        display: 'flex',\n        alignItems: 'center',\n        outline: 'none',\n        justifyContent: 'center',\n        marginLeft: '10px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n      style: {\n        color: '#8A92A6',\n        marginLeft: '12px',\n        marginBottom: '15px'\n      }\n    }, \"...\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Menu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n      onClick: function onClick() {\n        return handleSetactiveid(student.id);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"dropdown-item\"\n    }, \"Edit\"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      type: \"button\",\n      onClick: function onClick() {\n        return handleCreategradesheet(student.id);\n      },\n      style: {\n        borderColor: '#3A57E8',\n        borderRadius: '4px',\n        backgroundColor: '#3A57E8',\n        width: '100%',\n        height: '50px',\n        alignContent: 'center'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      style: {\n        color: 'white',\n        fontFamily: 'Inter',\n        fontStyle: 'normal',\n        fontWeight: 400,\n        fontSize: '15px'\n      }\n    }, \"Generate GradeSheet\"))));\n  })))));\n}\nClassPage.protoTypes = {\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),\n  setpageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),\n  teacherData: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),\n  setSelectedBG: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),\n  selectedClass: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),\n  getClassdata: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),\n  classData: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),\n  setGradesheet: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),\n  emptygradeSheet: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),\n  patchGrades: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    teacherData: state.main.teacherData,\n    selectedClass: state.main.selectedClass,\n    classData: state.main.classData,\n    emptygradeSheet: state.main.emptygradeSheet\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  setSelectedBG: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setSelectedBG,\n  getClassdata: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getClassdata,\n  setGradesheet: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setGradesheet,\n  patchGrades: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.patchGrades\n})(ClassPage)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/pages/dashboard-faculty-classpage.js?");

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

/***/ "./node_modules/react-bootstrap/esm/Table.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Table.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\"use client\";\n\n\n\n\n\nconst Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({\n  bsPrefix,\n  className,\n  striped,\n  bordered,\n  borderless,\n  hover,\n  size,\n  variant,\n  responsive,\n  ...props\n}, ref) => {\n  const decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'table');\n  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-${typeof striped === 'string' ? `striped-${striped}` : 'striped'}`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);\n  const table = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"table\", {\n    ...props,\n    className: classes,\n    ref: ref\n  });\n  if (responsive) {\n    let responsiveClass = `${decoratedBsPrefix}-responsive`;\n    if (typeof responsive === 'string') {\n      responsiveClass = `${responsiveClass}-${responsive}`;\n    }\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n      className: responsiveClass,\n      children: table\n    });\n  }\n  return table;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/Table.js?");

/***/ })

}]);