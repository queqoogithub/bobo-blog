"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[id]",{

/***/ "./pages/article/[id].js":
/*!*******************************!*\
  !*** ./pages/article/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Article; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar __N_SSG = true;\nfunction Article(param) {\n    var article = param.article;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid place-items-center h-screen p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold underline\",\n                children: article.attributes.Title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"---------\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-start\",\n                children: [\n                    \"Publish at: \",\n                    article.attributes.publishedAt\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid place-items-center h-screen text-justify\",\n                    dangerouslySetInnerHTML: {\n                        __html: article.attributes.Body\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\n_c = Article;\nvar _c;\n$RefreshReg$(_c, \"Article\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQzJDOztBQUc1QixTQUFTQyxPQUFPLENBQUMsS0FBVyxFQUFFO1FBQWIsT0FBUyxHQUFULEtBQVcsQ0FBVEMsT0FBTztJQUN2QyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsc0NBQXNDOzswQkFDbkQsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyw4QkFBOEI7MEJBQUVGLE9BQU8sQ0FBQ0ksVUFBVSxDQUFDQyxLQUFLOzs7OztvQkFBTTswQkFFNUUsOERBQUNDLElBQUU7MEJBQUMsV0FBUzs7Ozs7b0JBQUs7MEJBQ2xCLDhEQUFDQyxHQUFDO2dCQUFDTCxTQUFTLEVBQUMsZUFBZTs7b0JBQUMsY0FBWTtvQkFBQ0YsT0FBTyxDQUFDSSxVQUFVLENBQUNJLFdBQVc7Ozs7OztvQkFBSzswQkFDN0UsOERBQUNQLEtBQUc7MEJBQ0YsNEVBQUNBLEtBQUc7b0JBQUNDLFNBQVMsRUFBQywrQ0FBK0M7b0JBQzVETyx1QkFBdUIsRUFBRTt3QkFBQ0MsTUFBTSxFQUFFVixPQUFPLENBQUNJLFVBQVUsQ0FBQ08sSUFBSTtxQkFBQzs7Ozs7d0JBQzFEOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBZHVCWixLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGUvW2lkXS5qcz9kNWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVybCwgYXBpVG9rZW4gfSBmcm9tIFwiLi4vLi4vY29uZmlnL25leHQuY29uZmlnXCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGUoeyBhcnRpY2xlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBoLXNjcmVlbiBwLTRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB1bmRlcmxpbmVcIj57YXJ0aWNsZS5hdHRyaWJ1dGVzLlRpdGxlfTwvaDE+XHJcbiAgICAgIHsvKiA8ZGl2PjxSZWFjdE1hcmtkb3duPnthcnRpY2xlLmF0dHJpYnV0ZXMuQm9keX08L1JlYWN0TWFya2Rvd24+PC9kaXY+ICovfVxyXG4gICAgICA8aDM+LS0tLS0tLS0tPC9oMz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudC1zdGFydFwiPlB1Ymxpc2ggYXQ6IHthcnRpY2xlLmF0dHJpYnV0ZXMucHVibGlzaGVkQXR9PC9wPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgaC1zY3JlZW4gdGV4dC1qdXN0aWZ5XCJcclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBhcnRpY2xlLmF0dHJpYnV0ZXMuQm9keX19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9hcGkvYXJ0aWNsZXNgLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246XHJcbiAgICAgIGBCZWFyZXIgJHthcGlUb2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdhcnRpY2xlcyA6ICcsIGFydGljbGVzKVxyXG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgY29uc3QgcGF0aHMgPSBhcnRpY2xlcy5kYXRhLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgIHBhcmFtczogeyBpZDogaXRlbS5pZC50b1N0cmluZygpIH0sXHJcbiAgfSkpO1xyXG5cclxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cclxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9hcGkvYXJ0aWNsZXMvJHtjb250ZXh0LnBhcmFtcy5pZH1gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246XHJcbiAgICAgIGBCZWFyZXIgJHthcGlUb2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBhcnRpY2xlID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhcnRpY2xlOiBhcnRpY2xlLmRhdGEgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdE1hcmtkb3duIiwiQXJ0aWNsZSIsImFydGljbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImF0dHJpYnV0ZXMiLCJUaXRsZSIsImgzIiwicCIsInB1Ymxpc2hlZEF0IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJCb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/article/[id].js\n"));

/***/ })

});