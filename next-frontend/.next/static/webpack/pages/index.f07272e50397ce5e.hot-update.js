"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Articles.js":
/*!********************************!*\
  !*** ./components/Articles.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/next.config */ \"./config/next.config.js\");\nvar _this = undefined;\n\n\n\n\nvar Articles = function(param) {\n    var list = param.list, loading = param.loading;\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\components\\\\Articles.js\",\n            lineNumber: 7,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: list.map(function(item) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/article/\".concat(item.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[20px]\",\n                                    children: item.attributes.Title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\components\\\\Articles.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: _config_next_config__WEBPACK_IMPORTED_MODULE_3__.url + item.attributes.Cover.data.attributes.url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\components\\\\Articles.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\components\\\\Articles.js\",\n                            lineNumber: 16,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\components\\\\Articles.js\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, _this)\n                }, item.id, false, {\n                    fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\components\\\\Articles.js\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\components\\\\Articles.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\components\\\\Articles.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = Articles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Articles);\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ0c7QUFDeUI7QUFFdEQsSUFBTUksUUFBUSxHQUFHLGdCQUF1QjtRQUFwQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLE9BQU8sU0FBUEEsT0FBTztJQUMvQixJQUFJQSxPQUFPLEVBQUU7UUFDWCxxQkFBTyw4REFBQ0MsSUFBRTtzQkFBQyxZQUFVOzs7OztpQkFBSyxDQUFDO0tBQzVCO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNDLElBQUU7c0JBQ0FKLElBQUksQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLElBQUk7cUNBQ2IsOERBQUNDLElBQUU7b0JBQWVDLFNBQVMsRUFBQyxNQUFNOzhCQUNoQyw0RUFBQ1osa0RBQUk7d0JBQUNhLElBQUksRUFBRSxXQUFVLENBQVUsT0FBUkgsSUFBSSxDQUFDSSxFQUFFLENBQUU7a0NBQy9CLDRFQUFDQyxHQUFDOzs4Q0FDQSw4REFBQ1IsS0FBRztvQ0FBQ0ssU0FBUyxFQUFDLGFBQWE7OENBQUVGLElBQUksQ0FBQ00sVUFBVSxDQUFDQyxLQUFLOzs7Ozt5Q0FBTzs4Q0FDMUQsOERBQUNDLEtBQUc7b0NBQUNDLEdBQUcsRUFBR2xCLG9EQUFHLEdBQUdTLElBQUksQ0FBQ00sVUFBVSxDQUFDSSxLQUFLLENBQUNDLElBQUksQ0FBQ0wsVUFBVSxDQUFDZixHQUFHOzs7Ozt5Q0FBSzs7Ozs7O2lDQUM3RDs7Ozs7NkJBQ0M7bUJBTkFTLElBQUksQ0FBQ0ksRUFBRTs7Ozt5QkFPWDthQUNOLENBQUM7Ozs7O2lCQUNDOzs7OzthQUNELENBQ047Q0FDSDtBQXJCS1gsS0FBQUEsUUFBUTtBQXVCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZXMuanM/YTkzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXJsLCBhcGlUb2tlbiB9IGZyb20gXCIuLi9jb25maWcvbmV4dC5jb25maWdcIjtcclxuXHJcbmNvbnN0IEFydGljbGVzID0gKHsgbGlzdCwgbG9hZGluZyB9KSA9PiB7XHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8aDI+TG9hZGluZy4uLjwvaDI+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT0nbWItMyc+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZS8ke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIwcHhdXCI+e2l0ZW0uYXR0cmlidXRlcy5UaXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgdXJsICsgaXRlbS5hdHRyaWJ1dGVzLkNvdmVyLmRhdGEuYXR0cmlidXRlcy51cmwgfSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlczsiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXJsIiwiYXBpVG9rZW4iLCJBcnRpY2xlcyIsImxpc3QiLCJsb2FkaW5nIiwiaDIiLCJkaXYiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsImNsYXNzTmFtZSIsImhyZWYiLCJpZCIsImEiLCJhdHRyaWJ1dGVzIiwiVGl0bGUiLCJpbWciLCJzcmMiLCJDb3ZlciIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Articles.js\n"));

/***/ }),

/***/ "./config/next.config.js":
/*!*******************************!*\
  !*** ./config/next.config.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiToken\": function() { return /* binding */ apiToken; },\n/* harmony export */   \"url\": function() { return /* binding */ url; }\n/* harmony export */ });\nvar production = \"development\" === \"production\";\nvar url = production ? \"https://www.yoursite.com\" : \"http://localhost:1337\";\nvar apiToken = \"04735e1b198b1ac25aab3b12c91f2963acdb91b33386071002a05ea2281629dd51e1be3f0da609c304b681c9817e9ca64fc454f4ca446a583af69985663de9cee6f92c3ff7e062adc07a932b0cdbe9ab15ab49e4156e57c5bd059210f8c4ad1dd5fc7bd5eb2930bdc94959ad1f2d360c916c0fc482cfc066d880ded089a64dc0\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvbmV4dC5jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUdDLGFBQU4sS0FBK0IsWUFBWTtBQUVqRCxJQUFNQyxHQUFHLEdBQUdGLFVBQVUsR0FDekIsMEJBQTBCLEdBQzFCLHVCQUF1QixDQUFDO0FBRXJCLElBQU1HLFFBQVEsR0FBRyxrUUFBa1EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25maWcvbmV4dC5jb25maWcuanM/YzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVybCA9IHByb2R1Y3Rpb25cclxuICA/IFwiaHR0cHM6Ly93d3cueW91cnNpdGUuY29tXCJcclxuICA6IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpVG9rZW4gPSBcIjA0NzM1ZTFiMTk4YjFhYzI1YWFiM2IxMmM5MWYyOTYzYWNkYjkxYjMzMzg2MDcxMDAyYTA1ZWEyMjgxNjI5ZGQ1MWUxYmUzZjBkYTYwOWMzMDRiNjgxYzk4MTdlOWNhNjRmYzQ1NGY0Y2E0NDZhNTgzYWY2OTk4NTY2M2RlOWNlZTZmOTJjM2ZmN2UwNjJhZGMwN2E5MzJiMGNkYmU5YWIxNWFiNDllNDE1NmU1N2M1YmQwNTkyMTBmOGM0YWQxZGQ1ZmM3YmQ1ZWIyOTMwYmRjOTQ5NTlhZDFmMmQzNjBjOTE2YzBmYzQ4MmNmYzA2NmQ4ODBkZWQwODlhNjRkYzBcIjsiXSwibmFtZXMiOlsicHJvZHVjdGlvbiIsInByb2Nlc3MiLCJ1cmwiLCJhcGlUb2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/next.config.js\n"));

/***/ })

});