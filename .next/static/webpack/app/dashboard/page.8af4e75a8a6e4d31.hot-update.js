"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.js":
/*!***********************************!*\
  !*** ./src/app/dashboard/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ShoppingCart */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ShoppingCart.js\");\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Logout.js\");\n/* harmony import */ var _mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/AddShoppingCart */ \"(app-pages-browser)/./node_modules/@mui/icons-material/AddShoppingCart.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/ThemeProvider.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/createTheme.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/colors */ \"(app-pages-browser)/./node_modules/@mui/material/colors/orange.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n//import Button from '@mui/material/Button';\n\n\n\n\n\n\n\n\n\n\n//import { withIronSessionApiRoute } from \"iron-session/next\";\nfunction Page() {\n    _s();\n    //\n    // function for putting items into the shopping cart.\n    //\n    function putInCart(pname) {\n        console.log(\"putting in cart: \" + pname);\n        fetch(\"api/putInCart?pname=\" + pname);\n    }\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [weather, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"api/getProducts\").then((res)=>res.json()).then((data)=>{\n            setData(data);\n        });\n        fetch(\"api/getWeather\").then((res)=>res.json()).then((weather)=>{\n            setWeatherData(weather);\n        });\n    }, []);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No data\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n        lineNumber: 52,\n        columnNumber: 21\n    }, this);\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        palette: {\n            secondary: {\n                main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__[\"default\"][500]\n            }\n        }\n    });\n    if (!weather) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No weather\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n        lineNumber: 67,\n        columnNumber: 24\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        theme: theme,\n        children: [\n            \"Today's temperature: \",\n            JSON.stringify(weather.temp),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                component: \"main\",\n                maxWidth: \"xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontSize: \"40px\",\n                            fontFamily: \"Garamond\",\n                            fontWeight: \"bold\",\n                            textAlign: \"center\",\n                            color: \"orange\",\n                            paddingTop: \"20px\"\n                        },\n                        children: [\n                            \" Hello User!\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    float: \"right\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    href: \"/\",\n                                    variant: \"outlined\",\n                                    \"aria-label\": \"logout\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        style: {\n                                            color: \"orange\",\n                                            fontSize: \"40px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 3\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 2\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 75,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 74,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 81,\n                        columnNumber: 2\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            float: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            href: \"cart\",\n                            variant: \"outlined\",\n                            \"aria-label\": \"shopping cart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ShoppingCart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                style: {\n                                    color: \"orange\",\n                                    fontSize: \"40px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 85,\n                                columnNumber: 3\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 84,\n                            columnNumber: 2\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 83,\n                        columnNumber: 2\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                color: \"secondary\",\n                                margin: \"dense\",\n                                id: \"filled-helperText\",\n                                label: \"Search products\",\n                                variant: \"filled\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 90,\n                                columnNumber: 3\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                            lineNumber: 89,\n                            columnNumber: 2\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 88,\n                        columnNumber: 2\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            paddingTop: \"40px\"\n                        },\n                        children: data.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    padding: \"15px\",\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 4\n                                    }, this),\n                                    \"Unique ID: \",\n                                    item._id,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 10\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: [\n                                            item.pname,\n                                            \" -  \",\n                                            item.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 10\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 10\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: ()=>putInCart(item.pname),\n                                        variant: \"outlined\",\n                                        \"aria-label\": \"Add to cart\",\n                                        children: [\n                                            \"Add to cart\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddShoppingCart__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                style: {\n                                                    color: \"orange\",\n                                                    fontSize: \"30px\",\n                                                    paddingRight: \"6px\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 4\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 10\n                                    }, this)\n                                ]\n                            }, i, true, {\n                                fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 105,\n                                columnNumber: 8\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 102,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 72,\n                columnNumber: 2\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\karol\\\\OneDrive\\\\Pulpit\\\\AntiqueAlley\\\\app\\\\src\\\\app\\\\dashboard\\\\page.js\",\n        lineNumber: 70,\n        columnNumber: 2\n    }, this);\n}\n_s(Page, \"y+ABoySffmjFuAtks9Wdhbh5948=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQy9CLDRDQUE0QztBQUNvQjtBQUNaO0FBQ2tCO0FBQ3BCO0FBQ0Y7QUFDQTtBQUNJO0FBQ0Q7QUFDTjtBQUNEO0FBRTVDLDhEQUE4RDtBQUcvQyxTQUFTWTs7SUFHdEIsRUFBRTtJQUNGLHFEQUFxRDtJQUNyRCxFQUFFO0lBQ0YsU0FBU0MsVUFBVUMsS0FBSztRQUV6QkMsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQkY7UUFFbENHLE1BQU0seUJBQXVCSDtJQUU1QjtJQUVBLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNVLFNBQVNDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFHM0NDLGdEQUFTQSxDQUFDO1FBQ1hNLE1BQU0sbUJBQ0hLLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0o7WUFDTEMsUUFBUUQ7UUFDVjtRQUVBRCxNQUFNLGtCQUNGSyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNGO1lBQ0xDLGVBQWVEO1FBQ2pCO0lBRUosR0FBRyxFQUFFO0lBR0wsSUFBSSxDQUFDRixNQUFNLHFCQUFPLDhEQUFDTztrQkFBRTs7Ozs7O0lBSXJCLE1BQU1DLFFBQVFsQixnRUFBV0EsQ0FBQztRQUMzQm1CLFNBQVM7WUFFUEMsV0FBVztnQkFDVEMsTUFBTXBCLDREQUFNLENBQUMsSUFBSTtZQUNuQjtRQUNGO0lBQ0M7SUFJQSxJQUFJLENBQUNXLFNBQVMscUJBQU8sOERBQUNLO2tCQUFFOzs7Ozs7SUFFeEIscUJBQ0QsOERBQUNsQiw0REFBYUE7UUFBQ21CLE9BQU9BOztZQUFPO1lBQ05JLEtBQUtDLFNBQVMsQ0FBQ1gsUUFBUVksSUFBSTswQkFDbEQsOERBQUMxQiwrREFBU0E7Z0JBQUMyQixXQUFVO2dCQUFRQyxVQUFTOztrQ0FFbkMsOERBQUNDO3dCQUFJQyxPQUFPOzRCQUFDQyxVQUFVOzRCQUFRQyxZQUFXOzRCQUFhQyxZQUFZOzRCQUFRQyxXQUFVOzRCQUFVQyxPQUFNOzRCQUFVQyxZQUFZO3dCQUFNOzs0QkFBSTswQ0FDdkksOERBQUNQO2dDQUFJQyxPQUFPO29DQUFDTyxPQUFNO2dDQUFPOzBDQUMzQiw0RUFBQ3ZDLGdFQUFVQTtvQ0FBQ3dDLE1BQUs7b0NBQUlDLFNBQVE7b0NBQVdDLGNBQVc7OENBQ2xELDRFQUFDNUMsa0VBQVVBO3dDQUFFa0MsT0FBTzs0Q0FBQ0ssT0FBTTs0Q0FBVUosVUFBVTt3Q0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJdEQsOERBQUNVOzs7OztrQ0FFRCw4REFBQ1o7d0JBQUlDLE9BQU87NEJBQUNPLE9BQU07d0JBQU87a0NBQzFCLDRFQUFDdkMsZ0VBQVVBOzRCQUFDd0MsTUFBSzs0QkFBT0MsU0FBUTs0QkFBV0MsY0FBVztzQ0FDckQsNEVBQUM3Qyx3RUFBZ0JBO2dDQUFDbUMsT0FBTztvQ0FBQ0ssT0FBTTtvQ0FBVUosVUFBVTtnQ0FBTTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHM0QsOERBQUNXO2tDQUNELDRFQUFDYjtzQ0FDQSw0RUFBQzlCLCtEQUFTQTtnQ0FDUm9DLE9BQU07Z0NBQ05RLFFBQU87Z0NBQ0RDLElBQUc7Z0NBQ0hDLE9BQU07Z0NBQ1ROLFNBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT1YsOERBQUNWO3dCQUFJQyxPQUFPOzRCQUFDTSxZQUFZO3dCQUFNO2tDQUUvQnhCLEtBQUtrQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsa0JBQ2QsOERBQUNuQjtnQ0FBSUMsT0FBTztvQ0FBQ21CLFNBQVM7b0NBQVFmLFdBQVU7Z0NBQVE7O2tEQUNwRCw4REFBQ087Ozs7O29DQUFRO29DQUNTTSxLQUFLRyxHQUFHO2tEQUNwQiw4REFBQ1Q7Ozs7O2tEQUNELDhEQUFDVTs7NENBQVFKLEtBQUt2QyxLQUFLOzRDQUFDOzRDQUFLdUMsS0FBS0ssS0FBSzs7Ozs7OztrREFDbkMsOERBQUNYOzs7OztrREFDRCw4REFBQzNDLGdFQUFVQTt3Q0FBRXVELFNBQVMsSUFBTTlDLFVBQVV3QyxLQUFLdkMsS0FBSzt3Q0FBSStCLFNBQVE7d0NBQVdDLGNBQVc7OzRDQUFjOzBEQUV0Ryw4REFBQzNDLDRFQUFtQkE7Z0RBQUNpQyxPQUFPO29EQUFDSyxPQUFNO29EQUFVSixVQUFVO29EQUFRdUIsY0FBYztnREFBSzs7Ozs7Ozs7Ozs7OzsrQkFSdEJOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUIvRDtHQTVHd0IxQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLmpzP2QyYjgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0JztcbmltcG9ydCBMb2dvdXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkU2hvcHBpbmdDYXJ0JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IHtUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgeyBvcmFuZ2V9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvY29sb3JzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbi8vaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uQXBpUm91dGUgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuXG5cbiAgLy9cbiAgLy8gZnVuY3Rpb24gZm9yIHB1dHRpbmcgaXRlbXMgaW50byB0aGUgc2hvcHBpbmcgY2FydC5cbiAgLy9cbiAgZnVuY3Rpb24gcHV0SW5DYXJ0KHBuYW1lKXtcblxuXHRjb25zb2xlLmxvZyhcInB1dHRpbmcgaW4gY2FydDogXCIgKyBwbmFtZSlcblxuXHRmZXRjaChcImFwaS9wdXRJbkNhcnQ/cG5hbWU9XCIrcG5hbWUpO1xuIFxuICB9XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKDApXG5cbiBcbiAgdXNlRWZmZWN0KCgpID0+IHtcblx0ZmV0Y2goJ2FwaS9nZXRQcm9kdWN0cycpXG4gIFx0LnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgXHQudGhlbigoZGF0YSkgPT4ge1xuICAgIFx0c2V0RGF0YShkYXRhKVxuICBcdH0pXG5cblx0ICBmZXRjaCgnYXBpL2dldFdlYXRoZXInKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKCh3ZWF0aGVyKSA9PiB7XG4gICAgICAgIHNldFdlYXRoZXJEYXRhKHdlYXRoZXIpXG4gICAgICB9KVxuXG4gIH0sIFtdKVxuIFxuXG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vIGRhdGE8L3A+XG5cblxuIFxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcblx0cGFsZXR0ZToge1xuXHQgXG4gIFx0c2Vjb25kYXJ5OiB7XG4gICAgXHRtYWluOiBvcmFuZ2VbNTAwXSxcbiAgXHR9LFxuXHR9LFxuICB9KTtcbiBcblxuXG4gIGlmICghd2VhdGhlcikgcmV0dXJuIDxwPk5vIHdlYXRoZXI8L3A+XG4gXG4gIHJldHVybiAoXG5cdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG5cdFx0VG9kYXkncyB0ZW1wZXJhdHVyZToge0pTT04uc3RyaW5naWZ5KHdlYXRoZXIudGVtcCl9XG5cdDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiICBtYXhXaWR0aD1cInhzXCI+XG4gXG4gICBcdDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzQwcHgnLCBmb250RmFtaWx5OidHYXJhbW9uZCcsICBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRBbGlnbjonY2VudGVyJywgY29sb3I6J29yYW5nZScsIHBhZGRpbmdUb3A6ICcyMHB4J319ID4gSGVsbG8gVXNlciEgXG5cdFx0PGRpdiBzdHlsZT17e2Zsb2F0OidyaWdodCd9fT4gXG5cdDxJY29uQnV0dG9uIGhyZWY9Jy8nIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGFyaWEtbGFiZWw9XCJsb2dvdXRcIiA+XG5cdFx0PExvZ291dEljb24gIHN0eWxlPXt7Y29sb3I6XCJvcmFuZ2VcIiwgZm9udFNpemU6ICc0MHB4J319IC8+XG5cdFx0PC9JY29uQnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0PGJyPjwvYnI+XG5cblx0PGRpdiBzdHlsZT17e2Zsb2F0OidyaWdodCd9fT4gXG5cdDxJY29uQnV0dG9uIGhyZWY9J2NhcnQnIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGFyaWEtbGFiZWw9XCJzaG9wcGluZyBjYXJ0XCIgPlxuXHRcdDxTaG9wcGluZ0NhcnRJY29uIHN0eWxlPXt7Y29sb3I6XCJvcmFuZ2VcIiwgZm9udFNpemU6ICc0MHB4J319Lz5cblx0XHQ8L0ljb25CdXR0b24+XG5cdDwvZGl2PlxuXHQ8Y2VudGVyPlxuXHQ8ZGl2PlxuXHRcdDxUZXh0RmllbGQgXG5cdFx0ICBjb2xvcj1cInNlY29uZGFyeVwiXG5cdFx0ICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgaWQ9XCJmaWxsZWQtaGVscGVyVGV4dFwiXG4gICAgICAgICAgbGFiZWw9XCJTZWFyY2ggcHJvZHVjdHNcIlxuXHQgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcblx0XHQgIC8vZnVsbFdpZHRoXG5cdFx0ICAgIFxuICAgICAgICAvPlxuXHRcdFxuXHQ8L2Rpdj5cblx0PC9jZW50ZXI+XG4gICAgXHQ8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogJzQwcHgnfX0+XG4gIFx0e1xuICAgIFx0ZGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgIFx0PGRpdiBzdHlsZT17e3BhZGRpbmc6ICcxNXB4JywgdGV4dEFsaWduOidjZW50ZXInfX0ga2V5PXtpfSA+XG5cdFx0XHQ8YnI+PC9icj5cbiAgICAgICAgXHRVbmlxdWUgSUQ6IHtpdGVtLl9pZH0gXG4gICAgICAgIFx0PGJyPjwvYnI+XG4gICAgICAgIFx0PHN0cm9uZz57aXRlbS5wbmFtZX0gLSAge2l0ZW0ucHJpY2V9PC9zdHJvbmc+XG4gICAgICAgIFx0PGJyPjwvYnI+XG4gICAgICAgIFx0PEljb25CdXR0b24gIG9uQ2xpY2s9eygpID0+IHB1dEluQ2FydChpdGVtLnBuYW1lKX0gIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGFyaWEtbGFiZWw9XCJBZGQgdG8gY2FydFwiPiBcblx0XHRcdEFkZCB0byBjYXJ0IFxuXHRcdFx0PEFkZFNob3BwaW5nQ2FydEljb24gc3R5bGU9e3tjb2xvcjpcIm9yYW5nZVwiLCBmb250U2l6ZTogJzMwcHgnLCBwYWRkaW5nUmlnaHQ6ICc2cHgnfX0vPiBcblx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFxuICAgICAgXHQ8L2Rpdj5cbiAgICBcdCkpXG4gIFx0fVxuXHQ8L2Rpdj5cblxuXHQ8L0NvbnRhaW5lcj5cblxuXHQ8L1RoZW1lUHJvdmlkZXI+XG5cbiAgKTtcbn1cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTaG9wcGluZ0NhcnRJY29uIiwiTG9nb3V0SWNvbiIsIkFkZFNob3BwaW5nQ2FydEljb24iLCJJY29uQnV0dG9uIiwiVGV4dEZpZWxkIiwiQ29udGFpbmVyIiwiVGhlbWVQcm92aWRlciIsImNyZWF0ZVRoZW1lIiwib3JhbmdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQYWdlIiwicHV0SW5DYXJ0IiwicG5hbWUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJkYXRhIiwic2V0RGF0YSIsIndlYXRoZXIiLCJzZXRXZWF0aGVyRGF0YSIsInRoZW4iLCJyZXMiLCJqc29uIiwicCIsInRoZW1lIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJKU09OIiwic3RyaW5naWZ5IiwidGVtcCIsImNvbXBvbmVudCIsIm1heFdpZHRoIiwiZGl2Iiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWRkaW5nVG9wIiwiZmxvYXQiLCJocmVmIiwidmFyaWFudCIsImFyaWEtbGFiZWwiLCJiciIsImNlbnRlciIsIm1hcmdpbiIsImlkIiwibGFiZWwiLCJtYXAiLCJpdGVtIiwiaSIsInBhZGRpbmciLCJfaWQiLCJzdHJvbmciLCJwcmljZSIsIm9uQ2xpY2siLCJwYWRkaW5nUmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.js\n"));

/***/ })

});