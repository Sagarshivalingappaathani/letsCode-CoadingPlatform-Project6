"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/problems/page",{

/***/ "(app-pages-browser)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"99b49a742238\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz85NGI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiOTliNDlhNzQyMjM4XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/problemsTable.tsx":
/*!**************************************!*\
  !*** ./components/problemsTable.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"(app-pages-browser)/./firebaseConfig.tsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\nconst ProblemsTable = (param)=>{\n    let { loadingProblems, setLoadingProblems } = param;\n    _s();\n    const problems = useGetProblems(loadingProblems, setLoadingProblems);\n    const userDetails = getusedetailsonproblem();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n            className: \"gradiant text-dark \",\n            children: problems.map((problem, idx)=>{\n                const difficulyColor = problem.difficulty === \"Easy\" ? \"text-dark-green-s\" : problem.difficulty === \"Medium\" ? \"text-dark-yellow\" : \"text-dark-pink\";\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"gradiant items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: idx + 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"hover:text-blue-600 cursor-pointer\",\n                                href: \"/problems/\".concat(problem.id),\n                                children: problem.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 10\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4 \".concat(difficulyColor),\n                            children: problem.difficulty\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: problem.category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"text-left py-4 font-medium whitespace-nowrap  text-dark-green-s\",\n                            children: userDetails.find((element)=>element === problem.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-orange-500\",\n                                children: \"completed\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 10\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"do it Now\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 10\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/solution/\".concat(problem.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/assets/images/solution.png\",\n                                    alt: \"logo\",\n                                    width: 45,\n                                    height: 45,\n                                    className: \"object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 8\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, problem.id, true, {\n                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n            lineNumber: 21,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProblemsTable, \"9Uv03Ll4Pl7bQK/ARctgRuyhsZM=\", false, function() {\n    return [\n        useGetProblems\n    ];\n});\n_c = ProblemsTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemsTable);\nfunction useGetProblems(loadingProblems, setLoadingProblems) {\n    _s1();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getProblems = async ()=>{\n            setLoadingProblems(true);\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.firestore, \"problems\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.orderBy)(\"order\", \"asc\"));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);\n            const tmp = [];\n            querySnapshot.forEach((doc)=>{\n                tmp.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setProblems(tmp);\n            setLoadingProblems(false);\n        };\n        getProblems();\n    }, [\n        setLoadingProblems\n    ]);\n    return problems;\n}\n_s1(useGetProblems, \"VBi59e6jMrp0EO3shHKvwMVAqws=\");\nfunction getusedetailsonproblem() {\n    _s2();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const fetchUserDetails = async (email)=>{\n        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getFirestore)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.app);\n        const usersCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(db, \"users\");\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)(usersCollection, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"email\", \"==\", email));\n        try {\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(q);\n            if (!querySnapshot.empty) {\n                querySnapshot.forEach((doc)=>{\n                    const userData = doc.data();\n                    //console.log('User Details:', userData.solvedProblems);\n                    setUser(userData);\n                    return user.solvedProblems;\n                });\n            } else {\n                console.log(\"No user found with this email.\");\n            }\n        } catch (error) {\n            console.error(\"Error fetching user details:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.app);\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.onAuthStateChanged)(auth, (currentUser)=>{\n            if (currentUser) {\n                const userEmail = currentUser.email;\n                fetchUserDetails(userEmail);\n            } else {\n                setUser(null);\n            }\n        });\n        return ()=>unsubscribe();\n    }, [\n        user\n    ]);\n    return (user === null || user === void 0 ? void 0 : user.solvedProblems) || null;\n}\n_s2(getusedetailsonproblem, \"iCEFdcn4VWii5CszsjcYbeQHEgM=\");\nvar _c;\n$RefreshReg$(_c, \"ProblemsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvYmxlbXNUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBRWE7QUFDRztBQUNhO0FBQytDO0FBTzNHLE1BQU1jLGdCQUE4QztRQUFDLEVBQUVDLGVBQWUsRUFBQ0Msa0JBQWtCLEVBQUU7O0lBRTFGLE1BQU1DLFdBQVdDLGVBQWVILGlCQUFnQkM7SUFDaEQsTUFBTUcsY0FBWUM7SUFFbEIscUJBQ0M7a0JBQ0MsNEVBQUNDO1lBQU1DLFdBQVU7c0JBQ2ZMLFNBQVNNLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQztnQkFDdkIsTUFBTUMsaUJBQ0xGLFFBQVFHLFVBQVUsS0FBSyxTQUNwQixzQkFDQUgsUUFBUUcsVUFBVSxLQUFLLFdBQ3ZCLHFCQUNBO2dCQUNKLHFCQUNDLDhEQUFDQztvQkFBR04sV0FBVzs7c0NBQ2QsOERBQUNPOzRCQUFHUCxXQUFXO3NDQUFjRyxNQUFJOzs7Ozs7c0NBQ2pDLDhEQUFDSTs0QkFBR1AsV0FBVTtzQ0FFWiw0RUFBQ3RCLGtEQUFJQTtnQ0FDSnNCLFdBQVU7Z0NBQ1ZRLE1BQU0sYUFBd0IsT0FBWE4sUUFBUU8sRUFBRTswQ0FFNUJQLFFBQVFRLEtBQUs7Ozs7Ozs7Ozs7O3NDQUlqQiw4REFBQ0g7NEJBQUdQLFdBQVcsYUFBNEIsT0FBZkk7c0NBQW1CRixRQUFRRyxVQUFVOzs7Ozs7c0NBQ2pFLDhEQUFDRTs0QkFBR1AsV0FBVztzQ0FBY0UsUUFBUVMsUUFBUTs7Ozs7O3NDQUN4Qiw4REFBQ0M7NEJBQUdaLFdBQVU7c0NBQ2pDSCxZQUFZZ0IsSUFBSSxDQUFDLENBQUNDLFVBQW9CQSxZQUFZWixRQUFRTyxFQUFFLGtCQUM1RCw4REFBQ007Z0NBQUlmLFdBQVU7MENBQWdCOzs7OzswREFDL0IsOERBQUNlOzBDQUFJOzs7Ozs7Ozs7OztzQ0FHUCw4REFBQ1I7NEJBQUdQLFdBQVc7c0NBQ2YsNEVBQUN0QixrREFBSUE7Z0NBQUM4QixNQUFNLGFBQXdCLE9BQVhOLFFBQVFPLEVBQUU7MENBQ1YsNEVBQUM5QixtREFBS0E7b0NBQ05xQyxLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSbkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBM0JRRSxRQUFRTyxFQUFFOzs7OztZQWtDeEQ7Ozs7Ozs7QUFLSjtHQXZETWpCOztRQUVZSTs7O0tBRlpKO0FBd0ROLCtEQUFlQSxhQUFhQSxFQUFDO0FBRTdCLFNBQVNJLGVBQWVILGVBQXVCLEVBQUNDLGtCQUFpRTs7SUFDaEgsTUFBTSxDQUFDQyxVQUFVeUIsWUFBWSxHQUFHdkMsK0NBQVFBLENBQWMsRUFBRTtJQUN4REQsZ0RBQVNBLENBQUM7UUFDVCxNQUFNeUMsY0FBYztZQUNuQjNCLG1CQUFtQjtZQUNuQixNQUFNNEIsSUFBSS9CLHlEQUFLQSxDQUFDTCw4REFBVUEsQ0FBQ0gsc0RBQVNBLEVBQUUsYUFBYU8sMkRBQU9BLENBQUMsU0FBUztZQUNwRSxNQUFNaUMsZ0JBQWdCLE1BQU1wQywyREFBT0EsQ0FBQ21DO1lBQ3BDLE1BQU1FLE1BQW1CLEVBQUU7WUFDM0JELGNBQWNFLE9BQU8sQ0FBQyxDQUFDQztnQkFDdEJGLElBQUlHLElBQUksQ0FBQztvQkFBRWxCLElBQUlpQixJQUFJakIsRUFBRTtvQkFBRSxHQUFHaUIsSUFBSUUsSUFBSSxFQUFFO2dCQUFDO1lBQ3RDO1lBQ0FSLFlBQVlJO1lBQ1o5QixtQkFBbUI7UUFDcEI7UUFFQTJCO0lBQ0QsR0FBRztRQUFDM0I7S0FBbUI7SUFDdkIsT0FBT0M7QUFDUjtJQWxCU0M7QUFvQlQsU0FBU0U7O0lBQ1IsTUFBTSxDQUFDK0IsTUFBS0MsUUFBUSxHQUFDakQsK0NBQVFBLENBQU07SUFFbEMsTUFBTWtELG1CQUFtQixPQUFPQztRQUM5QixNQUFNQyxLQUFLNUMsZ0VBQVlBLENBQUNQLGdEQUFHQTtRQUMzQixNQUFNb0Qsa0JBQWtCaEQsOERBQVVBLENBQUMrQyxJQUFJO1FBRXZDLE1BQU1YLElBQUkvQix5REFBS0EsQ0FBQzJDLGlCQUFpQjlDLHlEQUFLQSxDQUFDLFNBQVMsTUFBTTRDO1FBRXRELElBQUk7WUFDRixNQUFNVCxnQkFBZ0IsTUFBTXBDLDJEQUFPQSxDQUFDbUM7WUFDcEMsSUFBSSxDQUFDQyxjQUFjWSxLQUFLLEVBQUU7Z0JBQ3RCWixjQUFjRSxPQUFPLENBQUMsQ0FBQ0M7b0JBRXZCLE1BQU1VLFdBQVdWLElBQUlFLElBQUk7b0JBQ3pCLHdEQUF3RDtvQkFDeERFLFFBQVFNO29CQUNkLE9BQU9QLEtBQUtRLGNBQWM7Z0JBQ3RCO1lBQ0YsT0FBTztnQkFDTEMsUUFBUUMsR0FBRyxDQUFDO1lBQ2Q7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDRjtJQUVBNUQsZ0RBQVNBLENBQUM7UUFDUixNQUFNNkQsT0FBT3pELHNEQUFPQSxDQUFDRixnREFBR0E7UUFFeEIsTUFBTTRELGNBQWN6RCxpRUFBa0JBLENBQUN3RCxNQUFNLENBQUNFO1lBQzVDLElBQUlBLGFBQWE7Z0JBQ2YsTUFBTUMsWUFBWUQsWUFBWVgsS0FBSztnQkFDbkNELGlCQUFpQmE7WUFDbkIsT0FBTztnQkFDTGQsUUFBUTtZQUNWO1FBQ0Y7UUFFQSxPQUFPLElBQU1ZO0lBQ2YsR0FBRztRQUFDYjtLQUFLO0lBRVQsT0FBT0EsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNUSxjQUFjLEtBQUk7QUFFakM7SUE1Q1N2QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2JsZW1zVGFibGUudHN4P2ExYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IERCUHJvYmxlbSB9IGZyb20gXCIuLi9kYXRhL3R5cGVzL3Byb2JsZW1cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2FwcCxmaXJlc3RvcmV9IGZyb20gXCIuLi9maXJlYmFzZUNvbmZpZ1wiXHJcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgZ2V0RG9jLCBnZXREb2NzLCB3aGVyZSwgZ2V0RmlyZXN0b3JlLCBvcmRlckJ5LCBxdWVyeSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbnR5cGUgUHJvYmxlbXNUYWJsZVByb3BzID0ge1xyXG5cdGxvYWRpbmdQcm9ibGVtczpib29sZWFuXHJcblx0c2V0TG9hZGluZ1Byb2JsZW1zOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcbn07XHJcblxyXG5jb25zdCBQcm9ibGVtc1RhYmxlOiBSZWFjdC5GQzxQcm9ibGVtc1RhYmxlUHJvcHM+ID0gKHsgbG9hZGluZ1Byb2JsZW1zLHNldExvYWRpbmdQcm9ibGVtcyB9KSA9PiB7XHJcblxyXG5cdGNvbnN0IHByb2JsZW1zID0gdXNlR2V0UHJvYmxlbXMobG9hZGluZ1Byb2JsZW1zLHNldExvYWRpbmdQcm9ibGVtcyk7XHJcblx0Y29uc3QgdXNlckRldGFpbHM9Z2V0dXNlZGV0YWlsc29ucHJvYmxlbSgpO1xyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPSdncmFkaWFudCB0ZXh0LWRhcmsgJz5cclxuXHRcdFx0XHR7cHJvYmxlbXMubWFwKChwcm9ibGVtLCBpZHgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGRpZmZpY3VseUNvbG9yID1cclxuXHRcdFx0XHRcdFx0cHJvYmxlbS5kaWZmaWN1bHR5ID09PSBcIkVhc3lcIlxyXG5cdFx0XHRcdFx0XHRcdD8gXCJ0ZXh0LWRhcmstZ3JlZW4tc1wiXHJcblx0XHRcdFx0XHRcdFx0OiBwcm9ibGVtLmRpZmZpY3VsdHkgPT09IFwiTWVkaXVtXCJcclxuXHRcdFx0XHRcdFx0XHQ/IFwidGV4dC1kYXJrLXllbGxvd1wiXHJcblx0XHRcdFx0XHRcdFx0OiBcInRleHQtZGFyay1waW5rXCI7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPSBcImdyYWRpYW50IGl0ZW1zLWNlbnRlclwiIGtleT17cHJvYmxlbS5pZH0+XHJcblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17XCJweC02IHB5LTRcIn0+e2lkeCsxfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT0ncHgtNiBweS00Jz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2hvdmVyOnRleHQtYmx1ZS02MDAgY3Vyc29yLXBvaW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17YC9wcm9ibGVtcy8ke3Byb2JsZW0uaWR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwcm9ibGVtLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e2BweC02IHB5LTQgJHtkaWZmaWN1bHlDb2xvcn1gfT57cHJvYmxlbS5kaWZmaWN1bHR5fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17XCJweC02IHB5LTRcIn0+e3Byb2JsZW0uY2F0ZWdvcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3RleHQtbGVmdCBweS00IGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwICB0ZXh0LWRhcmstZ3JlZW4tcyc+XHJcblx0XHRcdFx0XHRcdFx0XHR7dXNlckRldGFpbHMuZmluZCgoZWxlbWVudDogc3RyaW5nKSA9PiBlbGVtZW50ID09PSBwcm9ibGVtLmlkKT9cclxuXHRcdFx0XHRcdFx0XHRcdCg8ZGl2IGNsYXNzTmFtZT1cImJnLW9yYW5nZS01MDBcIj5jb21wbGV0ZWQ8L2Rpdj4pOlxyXG5cdFx0XHRcdFx0XHRcdFx0KDxkaXY+ZG8gaXQgTm93PC9kaXY+KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17XCJweC02IHB5LTRcIn0+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9zb2x1dGlvbi8ke3Byb2JsZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc29sdXRpb24ucG5nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQ1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9ibGVtc1RhYmxlO1xyXG5cclxuZnVuY3Rpb24gdXNlR2V0UHJvYmxlbXMobG9hZGluZ1Byb2JsZW1zOmJvb2xlYW4sc2V0TG9hZGluZ1Byb2JsZW1zOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4pIHtcclxuXHRjb25zdCBbcHJvYmxlbXMsIHNldFByb2JsZW1zXSA9IHVzZVN0YXRlPERCUHJvYmxlbVtdPihbXSk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGdldFByb2JsZW1zID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRzZXRMb2FkaW5nUHJvYmxlbXModHJ1ZSk7XHJcblx0XHRcdGNvbnN0IHEgPSBxdWVyeShjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJwcm9ibGVtc1wiKSwgb3JkZXJCeShcIm9yZGVyXCIsIFwiYXNjXCIpKTtcclxuXHRcdFx0Y29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XHJcblx0XHRcdGNvbnN0IHRtcDogREJQcm9ibGVtW10gPSBbXTtcclxuXHRcdFx0cXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuXHRcdFx0XHR0bXAucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSBhcyBEQlByb2JsZW0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0UHJvYmxlbXModG1wKTtcclxuXHRcdFx0c2V0TG9hZGluZ1Byb2JsZW1zKGZhbHNlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Z2V0UHJvYmxlbXMoKTtcclxuXHR9LCBbc2V0TG9hZGluZ1Byb2JsZW1zXSk7XHJcblx0cmV0dXJuIHByb2JsZW1zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXR1c2VkZXRhaWxzb25wcm9ibGVtKCl7XHJcblx0Y29uc3QgW3VzZXIsc2V0VXNlcl09dXNlU3RhdGU8YW55PihudWxsKVxyXG5cclxuICBjb25zdCBmZXRjaFVzZXJEZXRhaWxzID0gYXN5bmMgKGVtYWlsOnN0cmluZ3xudWxsKSA9PiB7XHJcbiAgICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG4gICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ3VzZXJzJyk7IFxyXG4gIFxyXG4gICAgY29uc3QgcSA9IHF1ZXJ5KHVzZXJzQ29sbGVjdGlvbiwgd2hlcmUoJ2VtYWlsJywgJz09JywgZW1haWwpKTtcclxuICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xyXG4gICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnVXNlciBEZXRhaWxzOicsIHVzZXJEYXRhLnNvbHZlZFByb2JsZW1zKTtcclxuICAgICAgICAgIHNldFVzZXIodXNlckRhdGEpO1xyXG5cdFx0ICByZXR1cm4gdXNlci5zb2x2ZWRQcm9ibGVtcztcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm8gdXNlciBmb3VuZCB3aXRoIHRoaXMgZW1haWwuJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgZGV0YWlsczonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuICBcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChjdXJyZW50VXNlcikgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudFVzZXIpIHtcclxuICAgICAgICBjb25zdCB1c2VyRW1haWwgPSBjdXJyZW50VXNlci5lbWFpbDtcclxuICAgICAgICBmZXRjaFVzZXJEZXRhaWxzKHVzZXJFbWFpbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTsgXHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgcmV0dXJuIHVzZXI/LnNvbHZlZFByb2JsZW1zIHx8IG51bGw7XHJcblxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcHAiLCJmaXJlc3RvcmUiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJ3aGVyZSIsImdldEZpcmVzdG9yZSIsIm9yZGVyQnkiLCJxdWVyeSIsIlByb2JsZW1zVGFibGUiLCJsb2FkaW5nUHJvYmxlbXMiLCJzZXRMb2FkaW5nUHJvYmxlbXMiLCJwcm9ibGVtcyIsInVzZUdldFByb2JsZW1zIiwidXNlckRldGFpbHMiLCJnZXR1c2VkZXRhaWxzb25wcm9ibGVtIiwidGJvZHkiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9ibGVtIiwiaWR4IiwiZGlmZmljdWx5Q29sb3IiLCJkaWZmaWN1bHR5IiwidHIiLCJ0ZCIsImhyZWYiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJ0aCIsImZpbmQiLCJlbGVtZW50IiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzZXRQcm9ibGVtcyIsImdldFByb2JsZW1zIiwicSIsInF1ZXJ5U25hcHNob3QiLCJ0bXAiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoVXNlckRldGFpbHMiLCJlbWFpbCIsImRiIiwidXNlcnNDb2xsZWN0aW9uIiwiZW1wdHkiLCJ1c2VyRGF0YSIsInNvbHZlZFByb2JsZW1zIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYXV0aCIsInVuc3Vic2NyaWJlIiwiY3VycmVudFVzZXIiLCJ1c2VyRW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/problemsTable.tsx\n"));

/***/ })

});