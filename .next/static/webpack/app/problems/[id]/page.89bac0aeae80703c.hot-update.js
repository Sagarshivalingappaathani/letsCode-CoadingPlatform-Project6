"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/problems/[id]/page",{

/***/ "(app-pages-browser)/./data/Problems/index.ts":
/*!********************************!*\
  !*** ./data/Problems/index.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   problems: function() { return /* binding */ problems; }\n/* harmony export */ });\n/* harmony import */ var _quick_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quick-sort */ \"(app-pages-browser)/./data/Problems/quick-sort.ts\");\n/* harmony import */ var _next_greater_ele__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./next-greater-ele */ \"(app-pages-browser)/./data/Problems/next-greater-ele.ts\");\n/* harmony import */ var _equilibrium_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equilibrium-point */ \"(app-pages-browser)/./data/Problems/equilibrium-point.ts\");\n\n\n\nconst problems = {\n    \"quick-sort\": _quick_sort__WEBPACK_IMPORTED_MODULE_0__.quickSort,\n    \"next-greatest-ele\": _next_greater_ele__WEBPACK_IMPORTED_MODULE_1__.nextGretestEle,\n    \"equilibrium-point\": _equilibrium_point__WEBPACK_IMPORTED_MODULE_2__.equilibriumPoint\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2RhdGEvUHJvYmxlbXMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QztBQUNXO0FBQ0c7QUFPaEQsTUFBTUcsV0FBdUI7SUFDbkMsY0FBY0gsa0RBQVNBO0lBQ3ZCLHFCQUFvQkMsNkRBQWNBO0lBQ2xDLHFCQUFxQkMsZ0VBQWdCQTtBQUN0QyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvUHJvYmxlbXMvaW5kZXgudHM/ZGNiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9ibGVtIH0gZnJvbSBcIi4uL3R5cGVzL3Byb2JsZW1cIjtcclxuaW1wb3J0IHsgcXVpY2tTb3J0IH0gZnJvbSBcIi4vcXVpY2stc29ydFwiO1xyXG5pbXBvcnQgeyBuZXh0R3JldGVzdEVsZSB9IGZyb20gXCIuL25leHQtZ3JlYXRlci1lbGVcIjtcclxuaW1wb3J0IHsgZXF1aWxpYnJpdW1Qb2ludCB9IGZyb20gXCIuL2VxdWlsaWJyaXVtLXBvaW50XCI7XHJcbmltcG9ydCB7IG1pZE9mTEwgfSBmcm9tIFwiLi9taWQtbGlua2VkTGlzdFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2JsZW1NYXAge1xyXG5cdFtrZXk6IHN0cmluZ106IFByb2JsZW07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9ibGVtczogUHJvYmxlbU1hcCA9IHtcclxuXHRcInF1aWNrLXNvcnRcIjogcXVpY2tTb3J0LFxyXG5cdFwibmV4dC1ncmVhdGVzdC1lbGVcIjpuZXh0R3JldGVzdEVsZSxcclxuXHRcImVxdWlsaWJyaXVtLXBvaW50XCI6IGVxdWlsaWJyaXVtUG9pbnRcclxufTsiXSwibmFtZXMiOlsicXVpY2tTb3J0IiwibmV4dEdyZXRlc3RFbGUiLCJlcXVpbGlicml1bVBvaW50IiwicHJvYmxlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./data/Problems/index.ts\n"));

/***/ })

});