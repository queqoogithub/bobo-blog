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
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/create-checkout-session.js":
/*!**********************************************!*\
  !*** ./pages/api/create-checkout-session.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { items , email  } = req.body;\n    console.log(items);\n    console.log(email);\n    const transformedItems = items.map((item)=>({\n            price_data: {\n                currency: \"thb\",\n                product_data: {\n                    images: [\n                        item.image\n                    ],\n                    name: item.title\n                },\n                unit_amount: item.price * 100\n            },\n            description: item.description,\n            quantity: 1\n        }));\n    const session = await stripe.checkout.sessions.create({\n        payment_method_types: [\n            \"card\"\n        ],\n        shipping_address_collection: {\n            allowed_countries: [\n                \"TH\"\n            ]\n        },\n        line_items: transformedItems,\n        mode: \"payment\",\n        success_url: \"http://localhost:3000/success\",\n        cancel_url: \"http://localhost:3000/cancel\",\n        metadata: {\n            email\n        }\n    });\n    console.log(\"session: \", session.id);\n    res.status(200).json({\n        id: session.id\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQztBQUUvRCxpRUFBZSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNqQyxNQUFNLEVBQUVDLEtBQUssR0FBRUMsS0FBSyxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUVqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQyxDQUFDO0lBQ25CRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7SUFFbkIsTUFBTUksZ0JBQWdCLEdBQUdMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQUksR0FBSyxDQUFDO1lBQzVDQyxVQUFVLEVBQUU7Z0JBQ1ZDLFFBQVEsRUFBRSxLQUFLO2dCQUNmQyxZQUFZLEVBQUU7b0JBQ1pDLE1BQU0sRUFBRTt3QkFBQ0osSUFBSSxDQUFDSyxLQUFLO3FCQUFDO29CQUNwQkMsSUFBSSxFQUFFTixJQUFJLENBQUNPLEtBQUs7aUJBQ2pCO2dCQUNEQyxXQUFXLEVBQUVSLElBQUksQ0FBQ1MsS0FBSyxHQUFHLEdBQUc7YUFDOUI7WUFDREMsV0FBVyxFQUFFVixJQUFJLENBQUNVLFdBQVc7WUFDN0JDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQyxDQUFDO0lBRUgsTUFBTUMsT0FBTyxHQUFHLE1BQU0xQixNQUFNLENBQUMyQixRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3BEQyxvQkFBb0IsRUFBRTtZQUFDLE1BQU07U0FBQztRQUM5QkMsMkJBQTJCLEVBQUU7WUFDM0JDLGlCQUFpQixFQUFFO2dCQUFDLElBQUk7YUFBQztTQUMxQjtRQUNEQyxVQUFVLEVBQUVyQixnQkFBZ0I7UUFDNUJzQixJQUFJLEVBQUUsU0FBUztRQUNmQyxXQUFXLEVBQUUsK0JBQStCO1FBQzVDQyxVQUFVLEVBQUUsOEJBQThCO1FBQzFDQyxRQUFRLEVBQUU7WUFDUjdCLEtBQUs7U0FFTjtLQUNGLENBQUM7SUFFRkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFZSxPQUFPLENBQUNZLEVBQUUsQ0FBQztJQUVwQ2hDLEdBQUcsQ0FBQ2lDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVGLEVBQUUsRUFBRVosT0FBTyxDQUFDWSxFQUFFO0tBQUUsQ0FBQyxDQUFDO0NBQzFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWZyb250ZW5kLy4vcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzP2YxMjgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IGl0ZW1zLCBlbWFpbCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcblxyXG4gIGNvbnN0IHRyYW5zZm9ybWVkSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICBwcmljZV9kYXRhOiB7XHJcbiAgICAgIGN1cnJlbmN5OiBcInRoYlwiLFxyXG4gICAgICBwcm9kdWN0X2RhdGE6IHtcclxuICAgICAgICBpbWFnZXM6IFtpdGVtLmltYWdlXSxcclxuICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxyXG4gICAgICB9LFxyXG4gICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCxcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcclxuICAgIHF1YW50aXR5OiAxLFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xyXG4gICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFtcImNhcmRcIl0sXHJcbiAgICBzaGlwcGluZ19hZGRyZXNzX2NvbGxlY3Rpb246IHtcclxuICAgICAgYWxsb3dlZF9jb3VudHJpZXM6IFtcIlRIXCJdLFxyXG4gICAgfSxcclxuICAgIGxpbmVfaXRlbXM6IHRyYW5zZm9ybWVkSXRlbXMsXHJcbiAgICBtb2RlOiBcInBheW1lbnRcIixcclxuICAgIHN1Y2Nlc3NfdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zdWNjZXNzXCIsXHJcbiAgICBjYW5jZWxfdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jYW5jZWxcIixcclxuICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICAvL2ltYWdlczogSlNPTi5zdHJpbmdpZnkoaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmltYWdlKSksXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnc2Vzc2lvbjogJywgc2Vzc2lvbi5pZClcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBpZDogc2Vzc2lvbi5pZCB9KTtcclxufTsiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsInJlcSIsInJlcyIsIml0ZW1zIiwiZW1haWwiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInRyYW5zZm9ybWVkSXRlbXMiLCJtYXAiLCJpdGVtIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwiaW1hZ2VzIiwiaW1hZ2UiLCJuYW1lIiwidGl0bGUiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJxdWFudGl0eSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJzaGlwcGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJhbGxvd2VkX2NvdW50cmllcyIsImxpbmVfaXRlbXMiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJjYW5jZWxfdXJsIiwibWV0YWRhdGEiLCJpZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/create-checkout-session.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();