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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/modal.tsx":
/*!******************************!*\
  !*** ./components/modal.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ \"@headlessui/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyModal() {\n    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function closeModal() {\n        setIsOpen(false);\n    }\n    function openModal() {\n        setIsOpen(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inset-0 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: openModal,\n                    className: \"rounded-md border border-white bg-black bg-opacity-20 p-2 m-3 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75\",\n                    children: \"More\"\n                }, void 0, false, {\n                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {\n                appear: true,\n                show: isOpen,\n                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {\n                    as: \"div\",\n                    className: \"relative z-10\",\n                    onClose: closeModal,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {\n                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,\n                            enter: \"ease-out duration-300\",\n                            enterFrom: \"opacity-0\",\n                            enterTo: \"opacity-100\",\n                            leave: \"ease-in duration-200\",\n                            leaveFrom: \"opacity-100\",\n                            leaveTo: \"opacity-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 bg-black bg-opacity-25\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 overflow-y-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex min-h-full items-center justify-center p-4 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {\n                                    as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,\n                                    enter: \"ease-out duration-300\",\n                                    enterFrom: \"opacity-0 scale-95\",\n                                    enterTo: \"opacity-100 scale-100\",\n                                    leave: \"ease-in duration-200\",\n                                    leaveFrom: \"opacity-100 scale-100\",\n                                    leaveTo: \"opacity-0 scale-95\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Panel, {\n                                        className: \"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Title, {\n                                                as: \"h3\",\n                                                className: \"text-lg font-medium leading-6 text-gray-900\",\n                                                children: \"How to play\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm text-gray-500\",\n                                                    children: \"Instructions on how to play go here...\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    className: \"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2\",\n                                                    onClick: closeModal,\n                                                    children: \"Got it, thanks!\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/components/modal.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZGFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUNaO0FBRTNCLFNBQVNJLE9BQU8sR0FBRztJQUNoQyxJQUFJLEtBQUNDLE1BQU0sTUFBRUMsU0FBUyxNQUFJSCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUV6QyxTQUFTSSxVQUFVLEdBQUc7UUFDcEJELFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVNFLFNBQVMsR0FBRztRQUNuQkYsU0FBUyxDQUFDLElBQUksQ0FBQztJQUNqQixDQUFDO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDRyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMENBQTBDOzBCQUN2RCw0RUFBQ0MsUUFBTTtvQkFDTEMsSUFBSSxFQUFDLFFBQVE7b0JBQ2JDLE9BQU8sRUFBRUwsU0FBUztvQkFDbEJFLFNBQVMsRUFBQyxpTkFBaU47OEJBRTFJLE1BRW5GOzs7Ozt3QkFBUzs7Ozs7b0JBQ0w7MEJBRU4sOERBQUNULHlEQUFVO2dCQUFDYSxNQUFNO2dCQUFDQyxJQUFJLEVBQUVWLE1BQU07Z0JBQUVXLEVBQUUsRUFBRWQsMkNBQVE7MEJBQzNDLDRFQUFDRixxREFBTTtvQkFBQ2dCLEVBQUUsRUFBQyxLQUFLO29CQUFDTixTQUFTLEVBQUMsZUFBZTtvQkFBQ08sT0FBTyxFQUFFVixVQUFVOztzQ0FDNUQsOERBQUNOLCtEQUFnQjs0QkFDZmUsRUFBRSxFQUFFZCwyQ0FBUTs0QkFDWmlCLEtBQUssRUFBQyx1QkFBdUI7NEJBQzdCQyxTQUFTLEVBQUMsV0FBVzs0QkFDckJDLE9BQU8sRUFBQyxhQUFhOzRCQUNyQkMsS0FBSyxFQUFDLHNCQUFzQjs0QkFDNUJDLFNBQVMsRUFBQyxhQUFhOzRCQUN2QkMsT0FBTyxFQUFDLFdBQVc7c0NBRW5CLDRFQUFDZixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsc0NBQXNDOzs7OztvQ0FBRzs7Ozs7Z0NBQ3ZDO3NDQUVuQiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLCtCQUErQjtzQ0FDNUMsNEVBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyw2REFBNkQ7MENBQzFFLDRFQUFDVCwrREFBZ0I7b0NBQ2ZlLEVBQUUsRUFBRWQsMkNBQVE7b0NBQ1ppQixLQUFLLEVBQUMsdUJBQXVCO29DQUM3QkMsU0FBUyxFQUFDLG9CQUFvQjtvQ0FDOUJDLE9BQU8sRUFBQyx1QkFBdUI7b0NBQy9CQyxLQUFLLEVBQUMsc0JBQXNCO29DQUM1QkMsU0FBUyxFQUFDLHVCQUF1QjtvQ0FDakNDLE9BQU8sRUFBQyxvQkFBb0I7OENBRTVCLDRFQUFDeEIsMkRBQVk7d0NBQUNVLFNBQVMsRUFBQyxvSEFBb0g7OzBEQUMxSSw4REFBQ1YsMkRBQVk7Z0RBQ1hnQixFQUFFLEVBQUMsSUFBSTtnREFDUE4sU0FBUyxFQUFDLDZDQUE2QzswREFDeEQsYUFFRDs7Ozs7b0RBQWU7MERBQ2YsOERBQUNELEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyxNQUFNOzBEQUNuQiw0RUFBQ2lCLEdBQUM7b0RBQUNqQixTQUFTLEVBQUMsdUJBQXVCOzhEQUFDLHdDQUVyQzs7Ozs7d0RBQUk7Ozs7O29EQUNBOzBEQUVOLDhEQUFDRCxLQUFHO2dEQUFDQyxTQUFTLEVBQUMsTUFBTTswREFDbkIsNEVBQUNDLFFBQU07b0RBQ0xDLElBQUksRUFBQyxRQUFRO29EQUNiRixTQUFTLEVBQUMsMk9BQTJPO29EQUNyUEcsT0FBTyxFQUFFTixVQUFVOzhEQUNwQixpQkFFRDs7Ozs7d0RBQVM7Ozs7O29EQUNMOzs7Ozs7NENBQ087Ozs7O3dDQUNFOzs7OztvQ0FDZjs7Ozs7Z0NBQ0Y7Ozs7Ozt3QkFDQzs7Ozs7b0JBQ0U7O29CQUNaLENBQ0o7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9jb21wb25lbnRzL21vZGFsLnRzeD85M2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15TW9kYWwoKSB7XG4gIGxldCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBzZXRJc09wZW4oZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlciBib3JkZXItd2hpdGUgYmctYmxhY2sgYmctb3BhY2l0eS0yMCBwLTIgbS0zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3ZlcjpiZy1vcGFjaXR5LTMwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctd2hpdGUgZm9jdXMtdmlzaWJsZTpyaW5nLW9wYWNpdHktNzVcIlxuICAgICAgICA+XG4gICAgICAgICAgey8qKiBUT0RPOiBDb25kaXRpb25hbGx5IHJlbmRlciBhbiBpY29uIG9yIHRleHQgaGVyZSBkZXBlbmRpbmcgb24gd2luZG93IHNpemUgKi99XG4gICAgICAgICAgTW9yZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VHJhbnNpdGlvbiBhcHBlYXIgc2hvdz17aXNPcGVufSBhcz17RnJhZ21lbnR9PlxuICAgICAgICA8RGlhbG9nIGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiIG9uQ2xvc2U9e2Nsb3NlTW9kYWx9PlxuICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxuICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktMjVcIiAvPlxuICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEaWFsb2cuUGFuZWwgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIHRyYW5zZm9ybSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYmctd2hpdGUgcC02IHRleHQtbGVmdCBhbGlnbi1taWRkbGUgc2hhZG93LXhsIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGFzPVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSG93IHRvIHBsYXlcbiAgICAgICAgICAgICAgICAgIDwvRGlhbG9nLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEluc3RydWN0aW9ucyBvbiBob3cgdG8gcGxheSBnbyBoZXJlLi4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy1ibHVlLTEwMCBweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWJsdWUtOTAwIGhvdmVyOmJnLWJsdWUtMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctYmx1ZS01MDAgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgR290IGl0LCB0aGFua3MhXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9EaWFsb2cuUGFuZWw+XG4gICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkRpYWxvZyIsIlRyYW5zaXRpb24iLCJGcmFnbWVudCIsInVzZVN0YXRlIiwiTXlNb2RhbCIsImlzT3BlbiIsInNldElzT3BlbiIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImFwcGVhciIsInNob3ciLCJhcyIsIm9uQ2xvc2UiLCJDaGlsZCIsImVudGVyIiwiZW50ZXJGcm9tIiwiZW50ZXJUbyIsImxlYXZlIiwibGVhdmVGcm9tIiwibGVhdmVUbyIsIlBhbmVsIiwiVGl0bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/modal.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modal */ \"./components/modal.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_modal__WEBPACK_IMPORTED_MODULE_2__]);\n_components_modal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Minesweeper\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"A minesweeper game\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl font-bold text-center\",\n                                children: \"Welcome to Minesweeper\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-bold\",\n                                children: \"Start a new game\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 flex justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full bg-green-500 hover:bg-green-700 p-2 m-2 rounded\",\n                                        children: \"Easy\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full bg-yellow-500 hover:bg-yellow-700 p-2 m-2 rounded\",\n                                        children: \"Medium\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"w-full bg-red-500 hover:bg-red-700 p-2 m-2 rounded\",\n                                        children: \"Hard\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                children: \"A footer will go here!\"\n            }, void 0, false, {\n                fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dtn/Desktop/Programming/Personal/minesweeper/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0QjtBQUVrQjtBQUNMO0FBRXpDLE1BQU1HLElBQUksR0FBYSxJQUFNO0lBQzNCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUosMEVBQWdCOzswQkFDOUIsOERBQUNELGtEQUFJOztrQ0FDSCw4REFBQ08sT0FBSztrQ0FBQyxhQUFXOzs7OztpQ0FBUTtrQ0FDMUIsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsb0JBQW9COzs7OztpQ0FBRztrQ0FDeEQsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7aUNBQUc7Ozs7Ozt5QkFDbEM7MEJBRVAsOERBQUNDLE1BQUk7Z0JBQUNULFNBQVMsRUFBRUoscUVBQVc7O2tDQUMxQiw4REFBQ0csS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDRDQUE0Qzs7MENBQ3pELDhEQUFDVSxJQUFFO2dDQUFDVixTQUFTLEVBQUMsZ0NBQWdDOzBDQUFDLHdCQUUvQzs7Ozs7eUNBQUs7MENBQ0wsOERBQUNILHlEQUFPOzs7O3lDQUFHOzs7Ozs7aUNBQ1A7a0NBQ04sOERBQUNFLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxNQUFNOzswQ0FDbkIsOERBQUNXLElBQUU7Z0NBQUNYLFNBQVMsRUFBQyxvQkFBb0I7MENBQUMsa0JBQWdCOzs7Ozt5Q0FBSzswQ0FDeEQsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyx1Q0FBdUM7O2tEQUNwRCw4REFBQ1ksUUFBTTt3Q0FBQ1osU0FBUyxFQUFDLHdEQUF3RDtrREFBQyxNQUFJOzs7OztpREFBUztrREFDeEYsOERBQUNZLFFBQU07d0NBQUNaLFNBQVMsRUFBQywwREFBMEQ7a0RBQUMsUUFBTTs7Ozs7aURBQVM7a0RBQzVGLDhEQUFDWSxRQUFNO3dDQUFDWixTQUFTLEVBQUMsb0RBQW9EO2tEQUFDLE1BQUk7Ozs7O2lEQUFTOzs7Ozs7eUNBQ2hGOzs7Ozs7aUNBQ0Y7Ozs7Ozt5QkFDRDswQkFFUCw4REFBQ2EsUUFBTTtnQkFBQ2IsU0FBUyxFQUFFSix1RUFBYTswQkFBRSx3QkFFbEM7Ozs7O3lCQUFTOzs7Ozs7aUJBQ0wsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZUUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmVzd2VlcGVyLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBNeU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWluZXN3ZWVwZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQSBtaW5lc3dlZXBlciBnYW1lXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBXZWxjb21lIHRvIE1pbmVzd2VlcGVyXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8TXlNb2RhbCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPlN0YXJ0IGEgbmV3IGdhbWU8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCBwLTIgbS0yIHJvdW5kZWRcIj5FYXN5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy15ZWxsb3ctNTAwIGhvdmVyOmJnLXllbGxvdy03MDAgcC0yIG0tMiByb3VuZGVkXCI+TWVkaXVtPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgcC0yIG0tMiByb3VuZGVkXCI+SGFyZDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICBBIGZvb3RlciB3aWxsIGdvIGhlcmUhXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIk15TW9kYWwiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsImgyIiwiYnV0dG9uIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@headlessui/react":
/*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();