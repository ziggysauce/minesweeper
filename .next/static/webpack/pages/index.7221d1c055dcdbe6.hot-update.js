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

/***/ "./components/modal.tsx":
/*!******************************!*\
  !*** ./components/modal.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyModal() {\n    var closeModal = function closeModal() {\n        setIsOpen(false);\n    };\n    var openModal = function openModal() {\n        setIsOpen(true);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center m-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: openModal,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCircleInfo,\n                        style: {\n                            fontSize: 25\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                appear: true,\n                show: isOpen,\n                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n                    as: \"div\",\n                    className: \"relative z-10\",\n                    onClose: closeModal,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {\n                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                            enter: \"ease-out duration-300\",\n                            enterFrom: \"opacity-0\",\n                            enterTo: \"opacity-100\",\n                            leave: \"ease-in duration-200\",\n                            leaveFrom: \"opacity-100\",\n                            leaveTo: \"opacity-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 bg-black bg-opacity-25\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 overflow-y-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex min-h-full items-center justify-center p-4 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {\n                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                    enter: \"ease-out duration-300\",\n                                    enterFrom: \"opacity-0 scale-95\",\n                                    enterTo: \"opacity-100 scale-100\",\n                                    leave: \"ease-in duration-200\",\n                                    leaveFrom: \"opacity-100 scale-100\",\n                                    leaveTo: \"opacity-0 scale-95\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Panel, {\n                                        className: \"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Title, {\n                                                as: \"h3\",\n                                                className: \"text-lg font-medium leading-6 text-gray-900\",\n                                                children: \"How to play\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm text-gray-500\",\n                                                    children: \"The rules are very simple. The board is divided into cells, with mines randomly distributed. To win, you need to open all the cells. The number on a cell shows the number of mines adjacent to it. Using this information, you can determine cells that are safe, and cells that contain mines. Cells suspected of being mines can be marked with a flag using the right mouse button.\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    className: \"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2\",\n                                                    onClick: closeModal,\n                                                    children: \"Got it, thanks!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyModal, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = MyModal;\nvar _c;\n$RefreshReg$(_c, \"MyModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDtBQUNKLENBQUM7R0E3RXVCRCxPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC50c3g/OTNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCc7XG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUNpcmNsZUluZm8gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15TW9kYWwoKSB7XG4gIGxldCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBzZXRJc09wZW4oZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG0tM1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvcGVuTW9kYWx9PlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGljb249e2ZhQ2lyY2xlSW5mb31cbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAyNSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxUcmFuc2l0aW9uIGFwcGVhciBzaG93PXtpc09wZW59IGFzPXtGcmFnbWVudH0+XG4gICAgICAgIDxEaWFsb2cgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCIgb25DbG9zZT17Y2xvc2VNb2RhbH0+XG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS0yNVwiIC8+XG4gICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxuICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPERpYWxvZy5QYW5lbCBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgdHJhbnNmb3JtIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBwLTYgdGV4dC1sZWZ0IGFsaWduLW1pZGRsZSBzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICAgIDxEaWFsb2cuVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBIb3cgdG8gcGxheVxuICAgICAgICAgICAgICAgICAgPC9EaWFsb2cuVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVGhlIHJ1bGVzIGFyZSB2ZXJ5IHNpbXBsZS4gVGhlIGJvYXJkIGlzIGRpdmlkZWQgaW50byBjZWxscywgd2l0aCBtaW5lcyByYW5kb21seSBkaXN0cmlidXRlZC4gVG8gd2luLCB5b3UgbmVlZCB0byBvcGVuIGFsbCB0aGUgY2VsbHMuIFRoZSBudW1iZXIgb24gYSBjZWxsIHNob3dzIHRoZSBudW1iZXIgb2YgbWluZXMgYWRqYWNlbnQgdG8gaXQuIFVzaW5nIHRoaXMgaW5mb3JtYXRpb24sIHlvdSBjYW4gZGV0ZXJtaW5lIGNlbGxzIHRoYXQgYXJlIHNhZmUsIGFuZCBjZWxscyB0aGF0IGNvbnRhaW4gbWluZXMuIENlbGxzIHN1c3BlY3RlZCBvZiBiZWluZyBtaW5lcyBjYW4gYmUgbWFya2VkIHdpdGggYSBmbGFnIHVzaW5nIHRoZSByaWdodCBtb3VzZSBidXR0b24uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1ibHVlLTEwMCBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWJsdWUtOTAwIGhvdmVyOmJnLWJsdWUtMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctYmx1ZS01MDAgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgR290IGl0LCB0aGFua3MhXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9EaWFsb2cuUGFuZWw+XG4gICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJEaWFsb2ciLCJUcmFuc2l0aW9uIiwiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2lyY2xlSW5mbyIsIk15TW9kYWwiLCJjbG9zZU1vZGFsIiwic2V0SXNPcGVuIiwib3Blbk1vZGFsIiwiaXNPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJpY29uIiwic3R5bGUiLCJmb250U2l6ZSIsImFwcGVhciIsInNob3ciLCJhcyIsIm9uQ2xvc2UiLCJDaGlsZCIsImVudGVyIiwiZW50ZXJGcm9tIiwiZW50ZXJUbyIsImxlYXZlIiwibGVhdmVGcm9tIiwibGVhdmVUbyIsIlBhbmVsIiwiVGl0bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/modal.tsx\n"));

/***/ })

});