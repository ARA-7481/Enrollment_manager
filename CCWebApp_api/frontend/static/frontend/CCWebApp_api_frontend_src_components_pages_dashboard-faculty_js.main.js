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

/***/ "./node_modules/@restart/ui/esm/Button.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isTrivialHref: () => (/* binding */ isTrivialHref),\n/* harmony export */   useButtonProps: () => (/* binding */ useButtonProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst _excluded = [\"as\", \"disabled\"];\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\nfunction isTrivialHref(href) {\n  return !href || href.trim() === '#';\n}\nfunction useButtonProps({\n  tagName,\n  disabled,\n  href,\n  target,\n  rel,\n  role,\n  onClick,\n  tabIndex = 0,\n  type\n}) {\n  if (!tagName) {\n    if (href != null || target != null || rel != null) {\n      tagName = 'a';\n    } else {\n      tagName = 'button';\n    }\n  }\n  const meta = {\n    tagName\n  };\n  if (tagName === 'button') {\n    return [{\n      type: type || 'button',\n      disabled\n    }, meta];\n  }\n  const handleClick = event => {\n    if (disabled || tagName === 'a' && isTrivialHref(href)) {\n      event.preventDefault();\n    }\n    if (disabled) {\n      event.stopPropagation();\n      return;\n    }\n    onClick == null ? void 0 : onClick(event);\n  };\n  const handleKeyDown = event => {\n    if (event.key === ' ') {\n      event.preventDefault();\n      handleClick(event);\n    }\n  };\n  if (tagName === 'a') {\n    // Ensure there's a href so Enter can trigger anchor button.\n    href || (href = '#');\n    if (disabled) {\n      href = undefined;\n    }\n  }\n  return [{\n    role: role != null ? role : 'button',\n    // explicitly undefined so that it overrides the props disabled in a spread\n    // e.g. <Tag {...props} {...hookProps} />\n    disabled: undefined,\n    tabIndex: disabled ? undefined : tabIndex,\n    href,\n    target: tagName === 'a' ? target : undefined,\n    'aria-disabled': !disabled ? undefined : disabled,\n    rel: tagName === 'a' ? rel : undefined,\n    onClick: handleClick,\n    onKeyDown: handleKeyDown\n  }, meta];\n}\nconst Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {\n  let {\n      as: asProp,\n      disabled\n    } = _ref,\n    props = _objectWithoutPropertiesLoose(_ref, _excluded);\n  const [buttonProps, {\n    tagName: Component\n  }] = useButtonProps(Object.assign({\n    tagName: asProp,\n    disabled\n  }, props));\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, Object.assign({}, props, buttonProps, {\n    ref: ref\n  }));\n});\nButton.displayName = 'Button';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://ccwebapp/./node_modules/@restart/ui/esm/Button.js?");

/***/ }),

/***/ "./CCWebApp_api/frontend/src/components/pages/dashboard-faculty.js":
/*!*************************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/pages/dashboard-faculty.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Placeholder.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction FacultyDashboard(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(localStorage.getItem('user')).avatar),\n    _useState2 = _slicedToArray(_useState, 2),\n    avatar = _useState2[0],\n    setAvatar = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(localStorage.getItem('user'))),\n    _useState4 = _slicedToArray(_useState3, 2),\n    user = _useState4[0],\n    setUser = _useState4[1];\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();\n  if (!user) {\n    navigate('/auth/admin-signin');\n  }\n  var handleClassSelection = function handleClassSelection(classcode, bg_url) {\n    props.setSelectedclass(classcode);\n    props.setSelectedBG(bg_url);\n    navigate('/faculty/classpage');\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setsidebarState('dashboard');\n    props.setsubsidebarState(null);\n    props.setpageHeader(\"Hello \".concat(user.first_name), '', 'Welcome to your dashboard');\n    props.getTeacherdata(user.facultyprofile);\n    props.setSelectedBG('https://ccwebappbucket.s3.ap-southeast-1.amazonaws.com/uploads/bg0.png');\n    props.clearClassdata();\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (props.newAvatar) {\n      setAvatar(props.newAvatar);\n    }\n  }, [props.newAvatar]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#e9ecef',\n      borderTopLeftRadius: '8px',\n      borderTopRightRadius: '8px',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      height: '124px',\n      borderRadius: '8px',\n      display: 'flex',\n      alignItems: 'center',\n      padding: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 0px, -60px)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"circular-avatar\",\n    src: avatar,\n    alt: \"description\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-700-28px\"\n  }, user.first_name, \" \", user.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginLeft: '8px',\n      marginTop: '3px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-400-16px\",\n    style: {\n      paddingTop: '5px'\n    }\n  }, \"- \", props.teacherData.position))), props.teacherData.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-container\"\n  }, props.teacherData.id ? _toConsumableArray(props.teacherData.teacher_related_class).sort(function (a, b) {\n    return a.code.localeCompare(b.code);\n  }).map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: item.code,\n      className: \"class-item\",\n      onClick: function onClick() {\n        return handleClassSelection(item.code, item.bg_gradient);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"class-itemheader\",\n      style: {\n        backgroundImage: \"url(\".concat(item.bg_gradient, \")\")\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"class-itemdata\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-500-19px-nopadding\",\n      style: {\n        color: '#3A57E8'\n      }\n    }, item.code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        display: 'flex',\n        gap: '20px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-500-19px-nopadding\",\n      style: {\n        overflow: 'hidden',\n        whiteSpace: 'nowrap'\n      }\n    }, item.section.code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-600-16px\",\n      style: {\n        overflow: 'hidden',\n        whiteSpace: 'nowrap'\n      }\n    }, item.subject)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        display: 'flex',\n        gap: '16px',\n        overflow: 'hidden',\n        whiteSpace: 'nowrap'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px\"\n    }, \"STUDENTS:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px-dark\"\n    }, item.section.students.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        display: 'flex',\n        gap: '16px',\n        overflow: 'hidden',\n        whiteSpace: 'nowrap'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px\"\n    }, \"QUARTERS:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px-dark\"\n    }, item.span)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        display: 'flex',\n        gap: '16px',\n        overflow: 'hidden',\n        whiteSpace: 'nowrap'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px\"\n    }, \"STRAND:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"inter-400-16px-dark\"\n    }, item.strand))));\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemheader\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemdata\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 6\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 4\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemheader\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemdata\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 6\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 4\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemheader\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"class-itemdata\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 6\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 8\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    animation: \"glow\",\n    style: {\n      color: 'rgba(51, 51, 51, 0.20)'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    xs: 4\n  })))))))));\n}\nFacultyDashboard.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func).isRequired,\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func).isRequired,\n  setpageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  getTeacherdata: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  teacherData: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),\n  setSelectedBG: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  newAvatar: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),\n  setSelectedclass: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  getClassdata: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),\n  clearClassdata: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    teacherData: state.main.teacherData,\n    newAvatar: state.main.newAvatar\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  getTeacherdata: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getTeacherdata,\n  setSelectedBG: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setSelectedBG,\n  setSelectedclass: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setSelectedclass,\n  getClassdata: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getClassdata,\n  clearClassdata: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.clearClassdata\n})(FacultyDashboard)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/pages/dashboard-faculty.js?");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Button.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Button.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/ui/Button */ \"./node_modules/@restart/ui/esm/Button.js\");\n/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ \"./node_modules/react-bootstrap/esm/ThemeProvider.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\"use client\";\n\n\n\n\n\n\nconst Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({\n  as,\n  bsPrefix,\n  variant = 'primary',\n  size,\n  active = false,\n  disabled = false,\n  className,\n  ...props\n}, ref) => {\n  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'btn');\n  const [buttonProps, {\n    tagName\n  }] = (0,_restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__.useButtonProps)({\n    tagName: as,\n    disabled,\n    ...props\n  });\n  const Component = tagName;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {\n    ...buttonProps,\n    ...props,\n    ref: ref,\n    disabled: disabled,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && 'disabled')\n  });\n});\nButton.displayName = 'Button';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://ccwebapp/./node_modules/react-bootstrap/esm/Button.js?");

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