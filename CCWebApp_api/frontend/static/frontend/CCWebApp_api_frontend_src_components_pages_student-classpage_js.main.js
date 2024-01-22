/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkccwebapp"] = self["webpackChunkccwebapp"] || []).push([["CCWebApp_api_frontend_src_components_pages_student-classpage_js"],{

/***/ "./CCWebApp_api/frontend/src/components/pages/student-classpage.js":
/*!*************************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/components/pages/student-classpage.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _common_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/withAuth */ \"./CCWebApp_api/frontend/src/components/common/withAuth.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/main */ \"./CCWebApp_api/frontend/src/redux/actions/main.js\");\n/* harmony import */ var _assets_images_avatars_avatar_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/avatars/avatar.webp */ \"./CCWebApp_api/frontend/src/assets/images/avatars/avatar.webp\");\n/* harmony import */ var _assets_images_avatars_avatar_webp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_avatars_avatar_webp__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _assets_svg_clnsmpl_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/svg/clnsmpl-icon */ \"./CCWebApp_api/frontend/src/assets/svg/clnsmpl-icon.js\");\n\n\n\n\n\n\n\n\n\nfunction Studentclasspage(props) {\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n  var handleSubmitactivity = function handleSubmitactivity(id) {\n    props.getActivity(id);\n    navigate('/students/activity-submit');\n  };\n  var user = JSON.parse(localStorage.getItem('user'));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    props.setsidebarState('dashboard');\n    props.setsubsidebarState('inclass');\n    props.setpageHeader(props.selectedClass, '', '');\n    props.getActivities(props.selectedClass);\n  }, [props.selectedClass]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#e9ecef',\n      borderTopLeftRadius: '8px',\n      borderTopRightRadius: '8px',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      backgroundColor: '#ffffff',\n      height: '124px',\n      borderRadius: '8px',\n      display: 'flex',\n      alignItems: 'center',\n      padding: '24px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      transform: 'translate( 0px, -60px)',\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"circular-avatar\",\n    src: (_assets_images_avatars_avatar_webp__WEBPACK_IMPORTED_MODULE_4___default()),\n    alt: \"description\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      alignItems: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"inter-700-28px\"\n  }, user.first_name, \" \", user.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      gap: '16px',\n      maxHeight: '36px'\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      display: 'flex',\n      gap: '40px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ongoing-activity-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"card-title\",\n    style: {\n      borderBottom: '1px solid #EEEEEE'\n    }\n  }, \"Upcoming and Ongoing Activities\"), props.activitiesOnclass.map(function (activity) {\n    var currentDate = new Date();\n    var deadlineDate = new Date(activity.deadline);\n    if (currentDate <= deadlineDate) {\n      if (activity.related_entry.length > 0) {\n        var hasSubmitted = activity.related_entry.some(function (entry) {\n          return entry.submitted_by === props.studentData[0].id;\n        });\n        if (!hasSubmitted) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            key: activity.id,\n            className: \"activity-item\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-500-19px-nopadding\"\n          }, activity.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-500-16px-dark\"\n          }, activity.activity_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-400-16px\",\n            style: {\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, activity.instruction), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            style: {\n              display: 'flex',\n              gap: '10px'\n            }\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-400-16px\",\n            style: {\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, \"Start Date: \", activity.start), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-400-16px\",\n            style: {\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, \"Deadline: \", activity.deadline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            type: \"button\",\n            onClick: function onClick() {\n              return handleSubmitactivity(activity.id);\n            },\n            style: {\n              borderColor: '#3A57E8',\n              borderRadius: '4px',\n              backgroundColor: '#3A57E8',\n              width: '30%',\n              height: '48px',\n              alignContent: 'center',\n              marginRight: '24px',\n              maxWidth: '180px'\n            }\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            style: {\n              color: 'white',\n              fontFamily: 'Inter',\n              fontStyle: 'normal',\n              fontWeight: 500,\n              fontSize: '18px',\n              paddingTop: '8px',\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, \"Submit Answer \")));\n        }\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          key: activity.id,\n          className: \"activity-item\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-19px-nopadding\"\n        }, activity.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-16px-dark\"\n        }, activity.activity_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-400-16px\",\n          style: {\n            whiteSpace: 'nowrap',\n            overflow: 'hidden'\n          }\n        }, activity.instruction), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          style: {\n            display: 'flex',\n            gap: '10px'\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-400-16px\",\n          style: {\n            whiteSpace: 'nowrap',\n            overflow: 'hidden'\n          }\n        }, \"Start Date: \", activity.start), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-400-16px\",\n          style: {\n            whiteSpace: 'nowrap',\n            overflow: 'hidden'\n          }\n        }, \"Deadline: \", activity.deadline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          type: \"button\",\n          onClick: function onClick() {\n            return handleSubmitactivity(activity.id);\n          },\n          style: {\n            borderColor: '#3A57E8',\n            borderRadius: '4px',\n            backgroundColor: '#3A57E8',\n            width: '30%',\n            height: '48px',\n            alignContent: 'center',\n            marginRight: '24px',\n            maxWidth: '180px'\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          style: {\n            color: 'white',\n            fontFamily: 'Inter',\n            fontStyle: 'normal',\n            fontWeight: 500,\n            fontSize: '18px',\n            paddingTop: '8px',\n            whiteSpace: 'nowrap',\n            overflow: 'hidden'\n          }\n        }, \"Submit Answer \")));\n      }\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      width: '43%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"finished-activity-container\",\n    style: {\n      maxHeight: '520px',\n      overflowY: 'auto',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"card-title\",\n    style: {\n      borderBottom: '1px solid #EEEEEE'\n    }\n  }, \"Finished Activities\"), props.activitiesOnclass.map(function (activity) {\n    var currentDate = new Date();\n    var deadlineDate = new Date(activity.deadline);\n    if (currentDate <= deadlineDate) {\n      if (activity.related_entry.length > 0) {\n        var hasSubmitted = activity.related_entry.some(function (entry) {\n          return entry.submitted_by == props.studentData[0].id;\n        });\n        if (hasSubmitted) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            key: activity.id,\n            className: \"activity-item\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-500-19px-nopadding\"\n          }, activity.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-500-16px-dark\"\n          }, activity.activity_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-400-16px\",\n            style: {\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, activity.instruction), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            style: {\n              display: 'flex',\n              gap: '10px'\n            }\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-400-16px\",\n            style: {\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, \"Start Date: \", activity.start), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-400-16px\",\n            style: {\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, \"Deadline: \", activity.deadline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            type: \"button\",\n            style: {\n              borderColor: '#3A57E8',\n              borderRadius: '4px',\n              backgroundColor: '#3A57E8',\n              width: '30%',\n              height: '48px',\n              alignContent: 'center',\n              marginRight: '24px',\n              maxWidth: '180px'\n            }\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            style: {\n              color: 'white',\n              fontFamily: 'Inter',\n              fontStyle: 'normal',\n              fontWeight: 500,\n              fontSize: '18px',\n              paddingTop: '8px',\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, \"View Details \")));\n        }\n      }\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"finished-activity-container\",\n    style: {\n      maxHeight: '520px',\n      overflowY: 'auto',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"card-title\",\n    style: {\n      borderBottom: '1px solid #EEEEEE'\n    }\n  }, \"Over-Due Activities\"), props.activitiesOnclass.map(function (activity) {\n    var currentDate = new Date();\n    var deadlineDate = new Date(activity.deadline);\n    if (currentDate > deadlineDate) {\n      if (activity.related_entry.length > 0) {\n        var hasSubmitted = activity.related_entry.some(function (entry) {\n          return entry.submitted_by === props.studentData[0].id;\n        });\n        if (!hasSubmitted) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            key: activity.id,\n            className: \"activity-item\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-500-19px-nopadding\"\n          }, activity.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-500-16px-dark\"\n          }, activity.activity_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-400-16px\",\n            style: {\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, activity.instruction), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            style: {\n              display: 'flex',\n              gap: '10px'\n            }\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-400-16px\",\n            style: {\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, \"Start Date: \", activity.start), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            className: \"inter-400-16px\",\n            style: {\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, \"Deadline: \", activity.deadline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            type: \"button\",\n            style: {\n              borderColor: '#3A57E8',\n              borderRadius: '4px',\n              backgroundColor: '#3A57E8',\n              width: '30%',\n              height: '48px',\n              alignContent: 'center',\n              marginRight: '24px',\n              maxWidth: '180px'\n            }\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n            style: {\n              color: 'white',\n              fontFamily: 'Inter',\n              fontStyle: 'normal',\n              fontWeight: 500,\n              fontSize: '18px',\n              paddingTop: '8px',\n              whiteSpace: 'nowrap',\n              overflow: 'hidden'\n            }\n          }, \"View Details \")));\n        }\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          key: activity.id,\n          className: \"activity-item\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-19px-nopadding\"\n        }, activity.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-500-16px-dark\"\n        }, activity.activity_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-400-16px\",\n          style: {\n            whiteSpace: 'nowrap',\n            overflow: 'hidden'\n          }\n        }, activity.instruction), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          style: {\n            display: 'flex',\n            gap: '10px'\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-400-16px\",\n          style: {\n            whiteSpace: 'nowrap',\n            overflow: 'hidden'\n          }\n        }, \"Start Date: \", activity.start), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          className: \"inter-400-16px\",\n          style: {\n            whiteSpace: 'nowrap',\n            overflow: 'hidden'\n          }\n        }, \"Deadline: \", activity.deadline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          type: \"button\",\n          style: {\n            borderColor: '#3A57E8',\n            borderRadius: '4px',\n            backgroundColor: '#3A57E8',\n            width: '30%',\n            height: '48px',\n            alignContent: 'center',\n            marginRight: '24px',\n            maxWidth: '180px'\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n          style: {\n            color: 'white',\n            fontFamily: 'Inter',\n            fontStyle: 'normal',\n            fontWeight: 500,\n            fontSize: '18px',\n            paddingTop: '8px',\n            whiteSpace: 'nowrap',\n            overflow: 'hidden'\n          }\n        }, \"View Details \")));\n      }\n    }\n  }))))));\n}\nStudentclasspage.propTypes = {\n  sidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n  setsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func).isRequired,\n  subsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n  setsubsidebarState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func).isRequired,\n  setpageHeader: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),\n  selectedClass: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n  selectedBG: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),\n  getActivities: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),\n  setSelectedBG: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),\n  setClassbackground: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),\n  getActivity: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),\n  studentData: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array)\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    sidebarState: state.main.sidebarState,\n    subsidebarState: state.main.subsidebarState,\n    selectedClass: state.main.selectedClass,\n    selectedBG: state.main.selectedBG,\n    activitiesOnclass: state.main.activitiesOnclass,\n    studentData: state.main.studentData\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {\n  setsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsidebarState,\n  setsubsidebarState: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setsubsidebarState,\n  setpageHeader: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setpageHeader,\n  getActivities: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getActivities,\n  setSelectedBG: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setSelectedBG,\n  setClassbackground: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.setClassbackground,\n  getActivity: _redux_actions_main__WEBPACK_IMPORTED_MODULE_3__.getActivity\n})(Studentclasspage)));\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/components/pages/student-classpage.js?");

/***/ }),

/***/ "./CCWebApp_api/frontend/src/assets/images/avatars/avatar.webp":
/*!*********************************************************************!*\
  !*** ./CCWebApp_api/frontend/src/assets/images/avatars/avatar.webp ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\n        srcSet: __webpack_require__.p + \"498300cf6fe2c213-1280.webp\"+\" 1280w\",\n        images: [{path: __webpack_require__.p + \"498300cf6fe2c213-1280.webp\",width: 1280,height: 1280}],\n        src: __webpack_require__.p + \"498300cf6fe2c213-1280.webp\",\n        toString: function(){return __webpack_require__.p + \"498300cf6fe2c213-1280.webp\"},\n        \n        width: 1280,\n        height: 1280\n      }\n\n//# sourceURL=webpack://ccwebapp/./CCWebApp_api/frontend/src/assets/images/avatars/avatar.webp?");

/***/ })

}]);