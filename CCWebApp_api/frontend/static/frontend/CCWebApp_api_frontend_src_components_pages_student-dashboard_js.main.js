"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_pages_student-dashboard_js"],{

/***/ "./CCWebApp_api/frontend/src/components/pages/student-dashboard.js":
/*!*************************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/pages/student-dashboard.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Placeholder.js\");\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction Studentdashboard(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(localStorage.getItem('user')).avatar),\n    _useState2 = _slicedToArray(_useState, 2),\n    avatar = _useState2[0],\n    setAvatar = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(localStorage.getItem('user'))),\n    _useState4 = _slicedToArray(_useState3, 2),\n    user = _useState4[0],\n    setUser = _useState4[1];\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();\n  var date = new Date();\n  var currentDay = date.getDay();\n  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  if (!user) {\n    navigate('/auth/admin-signin');\n  }\n  var handleClassSelection = function handleClassSelection(classcode, bg_url) {\n    props.setSelectedclass(classcode);\n    props.setSelectedBG(bg_url);\n    navigate('/students/classdashboard');\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setsidebarState('dashboard');\n    props.setsubsidebarState(null);\n    props.setpageHeader(\"Hello \".concat(user.first_name), '', 'Welcome to your dashboard');\n    props.getStudentdata(user.studentprofile);\n    props.setSelectedBG('');\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.newAvatar) {\n      setAvatar(props.newAvatar);\n    }\n  }, [props.newAvatar]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#e9ecef',\n      borderTopLeftRadius: '8px',\n      borderTopRightRadius: '8px',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      height: '124px',\n      borderRadius: '8px',\n      display: 'flex',\n      alignItems: 'center',\n      padding: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 0px, -60px)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"circular-avatar\",\n    src: avatar,\n    alt: \"description\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-700-28px\"\n  }, user.first_name, \" \", user.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: '8px',\n      marginTop: '3px'\n    }\n  }, props.studentData.id && function () {\n    switch (props.studentData.status) {\n      case 'Draft':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.Draft, null);\n      case 'For Evaluation':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.ForEvaluation, null);\n      case 'Evaluation In Progress':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.EvaluationInProgress, null);\n      case 'Evaluation Complete':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.EvaluationComplete, null);\n      case 'Pending Payment':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.PendingPayment, null);\n      case 'Payment Received':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.PaymentReceived, null);\n      case 'Enrolled':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.Enrolled, null);\n      case 'Verification Failed':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_4__.VerificationFailed, null);\n      default:\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);\n    }\n  }())), props.studentData.id && function () {\n    switch (props.studentData.yearlevel) {\n      case '1st':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-16px-dark\"\n        }, \"First Year\");\n      case '2nd':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-16px-dark\"\n        }, \"Second Year\");\n      case '3rd':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-16px-dark\"\n        }, \"Third Year\");\n      case '4th':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-16px-dark\"\n        }, \"Fourth Year\");\n      case '5th':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-16px-dark\"\n        }, \"Fifth Year\");\n      case 'Irregular':\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-16px-dark\"\n        }, \"Irregular\");\n      default:\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-16px-dark\"\n        }, \"-\");\n    }\n  }(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, props.studentData.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-400-16px\",\n    style: {\n      marginRight: '8px'\n    }\n  }, props.studentData.course)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-container\"\n  }, props.studentData.id ? _toConsumableArray(props.studentData.student_related_class).sort(function (a, b) {\n    return a.code.localeCompare(b.code);\n  }).map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: item.code,\n      className: \"class-item\",\n      onClick: function onClick() {\n        return handleClassSelection(item.code, item.bg_gradient);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"class-itemheader\",\n      style: {\n        backgroundImage: \"url(\".concat(item.bg_gradient, \")\")\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"class-itemdata\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-500-19px-nopadding\"\n    }, item.code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-500-16px\"\n    }, item.schedule.map(function (sched, index) {\n      if (sched.day === days[currentDay]) {\n        var timein = sched.time_in.split(':').slice(0, 2).join(':');\n        var timeout = sched.time_out.split(':').slice(0, 2).join(':');\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n          key: index\n        }, timein, \"-\", timeout, \"  \", '(', sched.room, ')');\n      }\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        key: index\n      }, \"No schedule for today\");\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-600-16px\"\n    }, item.teacher.userprofile.first_name, \" \", item.teacher.userprofile.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-500-16px\"\n    }, \"Activities: \", item.related_activities.length)));\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemheader\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemdata\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 4\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemheader\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemdata\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 4\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemheader\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemdata\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 6\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    xs: 4\n  })))))))));\n}\nStudentdashboard.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func).isRequired,\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func).isRequired,\n  setpageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),\n  getStudentdata: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),\n  studentData: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),\n  setSelectedclass: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),\n  setSelectedBG: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),\n  newAvatar: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    studentData: state.main.studentData,\n    newAvatar: state.main.newAvatar\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  getStudentdata: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getStudentdata,\n  setSelectedclass: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setSelectedclass,\n  setSelectedBG: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setSelectedBG\n})(Studentdashboard)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/pages/student-dashboard.js?");

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