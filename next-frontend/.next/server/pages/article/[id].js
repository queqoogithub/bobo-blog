"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/article/[id]";
exports.ids = ["pages/article/[id]"];
exports.modules = {

/***/ "./config/next.config.js":
/*!*******************************!*\
  !*** ./config/next.config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"url\": () => (/* binding */ url)\n/* harmony export */ });\nconst production = \"development\" === \"production\";\nconst url = production ? \"https://www.yoursite.com\" : \"http://localhost:1337\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvbmV4dC5jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFVBQVUsR0FBR0MsYUFBTixLQUErQixZQUFZO0FBRWpELE1BQU1DLEdBQUcsR0FBR0YsVUFBVSxHQUN6QiwwQkFBMEIsR0FDMUIsdUJBQXVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWZyb250ZW5kLy4vY29uZmlnL25leHQuY29uZmlnLmpzP2MzNTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1cmwgPSBwcm9kdWN0aW9uXHJcbiAgPyBcImh0dHBzOi8vd3d3LnlvdXJzaXRlLmNvbVwiXHJcbiAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiOyJdLCJuYW1lcyI6WyJwcm9kdWN0aW9uIiwicHJvY2VzcyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/next.config.js\n");

/***/ }),

/***/ "./pages/article/[id].js":
/*!*******************************!*\
  !*** ./pages/article/[id].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Article),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/next.config */ \"./config/next.config.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);\nreact_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Article({ article  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid place-items-center h-screen p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold underline\",\n                children: article.attributes.Title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"---------\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid place-items-center h-screen text-justify\",\n                    dangerouslySetInnerHTML: {\n                        __html: article.attributes.Body\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\narathip.pho\\\\Documents\\\\GitHub\\\\bobo-blog\\\\next-frontend\\\\pages\\\\article\\\\[id].js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\nasync function getStaticProps(context) {\n    const data = await fetch(`${_config_next_config__WEBPACK_IMPORTED_MODULE_1__.url}/api/articles/${context.params.id}`);\n    const article = await data.json();\n    return {\n        props: {\n            article: article.data\n        },\n        revalidate: 1\n    };\n}\n;\nasync function getStaticPaths() {\n    // Call an external API endpoint to get posts\n    const res = await fetch(`${_config_next_config__WEBPACK_IMPORTED_MODULE_1__.url}/api/articles`);\n    const articles = await res.json();\n    console.log(\"articles : \", articles);\n    // Get the paths we want to pre-render based on posts\n    const paths = articles.data.map((item)=>({\n            params: {\n                id: item.id.toString()\n            }\n        }));\n    // We'll pre-render only these paths at build time.\n    // { fallback: false } means other routes should 404.\n    return {\n        paths,\n        fallback: false\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStDO0FBQ0o7QUFHNUIsU0FBU0UsT0FBTyxDQUFDLEVBQUVDLE9BQU8sR0FBRSxFQUFFO0lBQzNDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxzQ0FBc0M7OzBCQUNuRCw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjswQkFBRUYsT0FBTyxDQUFDSSxVQUFVLENBQUNDLEtBQUs7Ozs7O29CQUFNOzBCQUU1RSw4REFBQ0MsSUFBRTswQkFBQyxXQUFTOzs7OztvQkFBSzswQkFDbEIsOERBQUNMLEtBQUc7MEJBQ0YsNEVBQUNBLEtBQUc7b0JBQUNDLFNBQVMsRUFBQywrQ0FBK0M7b0JBQzVESyx1QkFBdUIsRUFBRTt3QkFBQ0MsTUFBTSxFQUFFUixPQUFPLENBQUNJLFVBQVUsQ0FBQ0ssSUFBSTtxQkFBQzs7Ozs7d0JBQzFEOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBRU0sZUFBZUMsY0FBYyxDQUFDQyxPQUFPLEVBQUU7SUFDNUMsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUVoQixvREFBRyxDQUFDLGNBQWMsRUFBRWMsT0FBTyxDQUFDRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEUsTUFBTWYsT0FBTyxHQUFHLE1BQU1ZLElBQUksQ0FBQ0ksSUFBSSxFQUFFO0lBRWpDLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQUVqQixPQUFPLEVBQUVBLE9BQU8sQ0FBQ1ksSUFBSTtTQUFFO1FBQ2hDTSxVQUFVLEVBQUUsQ0FBQztLQUNkLENBQUM7Q0FDSDs7QUFFTSxlQUFlQyxjQUFjLEdBQUc7SUFDckMsNkNBQTZDO0lBQzdDLE1BQU1DLEdBQUcsR0FBRyxNQUFNUCxLQUFLLENBQUMsQ0FBQyxFQUFFaEIsb0RBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxNQUFNd0IsUUFBUSxHQUFHLE1BQU1ELEdBQUcsQ0FBQ0osSUFBSSxFQUFFO0lBRWpDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVGLFFBQVEsQ0FBQztJQUNwQyxxREFBcUQ7SUFDckQsTUFBTUcsS0FBSyxHQUFHSCxRQUFRLENBQUNULElBQUksQ0FBQ2EsR0FBRyxDQUFDLENBQUNDLElBQUksR0FBSyxDQUFDO1lBQ3pDWixNQUFNLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRVcsSUFBSSxDQUFDWCxFQUFFLENBQUNZLFFBQVEsRUFBRTthQUFFO1NBQ25DLENBQUMsQ0FBQztJQUVILG1EQUFtRDtJQUNuRCxxREFBcUQ7SUFDckQsT0FBTztRQUFFSCxLQUFLO1FBQUVJLFFBQVEsRUFBRSxLQUFLO0tBQUUsQ0FBQztDQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZnJvbnRlbmQvLi9wYWdlcy9hcnRpY2xlL1tpZF0uanM/ZDVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cmwgfSBmcm9tIFwiLi4vLi4vY29uZmlnL25leHQuY29uZmlnXCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGUoeyBhcnRpY2xlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBoLXNjcmVlbiBwLTRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB1bmRlcmxpbmVcIj57YXJ0aWNsZS5hdHRyaWJ1dGVzLlRpdGxlfTwvaDE+XHJcbiAgICAgIHsvKiA8ZGl2PjxSZWFjdE1hcmtkb3duPnthcnRpY2xlLmF0dHJpYnV0ZXMuQm9keX08L1JlYWN0TWFya2Rvd24+PC9kaXY+ICovfVxyXG4gICAgICA8aDM+LS0tLS0tLS0tPC9oMz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGgtc2NyZWVuIHRleHQtanVzdGlmeVwiXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYXJ0aWNsZS5hdHRyaWJ1dGVzLkJvZHl9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9hcGkvYXJ0aWNsZXMvJHtjb250ZXh0LnBhcmFtcy5pZH1gKTtcclxuICBjb25zdCBhcnRpY2xlID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhcnRpY2xlOiBhcnRpY2xlLmRhdGEgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9L2FwaS9hcnRpY2xlc2ApO1xyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ2FydGljbGVzIDogJywgYXJ0aWNsZXMpXHJcbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gcG9zdHNcclxuICBjb25zdCBwYXRocyA9IGFydGljbGVzLmRhdGEubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IGlkOiBpdGVtLmlkLnRvU3RyaW5nKCkgfSxcclxuICB9KSk7XHJcblxyXG4gIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxyXG4gIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xyXG59Il0sIm5hbWVzIjpbInVybCIsIlJlYWN0TWFya2Rvd24iLCJBcnRpY2xlIiwiYXJ0aWNsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYXR0cmlidXRlcyIsIlRpdGxlIiwiaDMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkJvZHkiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJkYXRhIiwiZmV0Y2giLCJwYXJhbXMiLCJpZCIsImpzb24iLCJwcm9wcyIsInJldmFsaWRhdGUiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImFydGljbGVzIiwiY29uc29sZSIsImxvZyIsInBhdGhzIiwibWFwIiwiaXRlbSIsInRvU3RyaW5nIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/article/[id].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/article/[id].js"));
module.exports = __webpack_exports__;

})();