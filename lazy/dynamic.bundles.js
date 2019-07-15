(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy/dynamic"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Demo/Dynamic.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Demo/Dynamic.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['prop1'],\n  data: function data() {\n    return {\n      isChild1: false,\n      isChild2: false,\n      isCurrentComponent: ''\n    };\n  },\n  methods: {\n    toggleChild1: function toggleChild1() {\n      this.isChild1 = !this.isChild1;\n      this.isCurrentComponent = 'Child1';\n    },\n    toggleChild2: function toggleChild2() {\n      this.isChild2 = !this.isChild2;\n      this.isCurrentComponent = 'Child2';\n    }\n  },\n  components: {\n    Child1: function Child1() {\n      return __webpack_require__.e(/*! import() | lazy/Child1 */ \"lazy/Child1\").then(__webpack_require__.bind(null, /*! ./Childs/Child1.vue */ \"./src/components/Demo/Childs/Child1.vue\"));\n    },\n    Child2: function Child2() {\n      return __webpack_require__.e(/*! import() | lazy/Child2 */ \"lazy/Child2\").then(__webpack_require__.bind(null, /*! ./Childs/Child2.vue */ \"./src/components/Demo/Childs/Child2.vue\"));\n    }\n  },\n  delay: 3000,\n  mounted: function mounted() {//let query  = this.$route.query;\n    //let params  = this.$route.params;\n    //let meta  = this.$route.meta;\n    //console.log(query);\n    //console.log(params);\n    //console.log(meta);\n    //console.log(this.prop1);\n    //console.log(this);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Demo/Dynamic.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Demo/Dynamic.vue?vue&type=template&id=3c1602a3&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Demo/Dynamic.vue?vue&type=template&id=3c1602a3& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"h1\", [_vm._v(\"Hello Dynamic\")]),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        {\n          on: {\n            click: function($event) {\n              return _vm.toggleChild1()\n            }\n          }\n        },\n        [_vm._v(\"Toggle Child1\")]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        {\n          on: {\n            click: function($event) {\n              return _vm.toggleChild2()\n            }\n          }\n        },\n        [_vm._v(\"Toggle Child2\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"keep-alive\", [_c(_vm.isCurrentComponent, { tag: \"component\" })], 1)\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Demo/Dynamic.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/Demo/Dynamic.vue":
/*!*****************************************!*\
  !*** ./src/components/Demo/Dynamic.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dynamic_vue_vue_type_template_id_3c1602a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dynamic.vue?vue&type=template&id=3c1602a3& */ \"./src/components/Demo/Dynamic.vue?vue&type=template&id=3c1602a3&\");\n/* harmony import */ var _Dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dynamic.vue?vue&type=script&lang=js& */ \"./src/components/Demo/Dynamic.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Dynamic_vue_vue_type_template_id_3c1602a3___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Dynamic_vue_vue_type_template_id_3c1602a3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Demo/Dynamic.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Demo/Dynamic.vue?");

/***/ }),

/***/ "./src/components/Demo/Dynamic.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/Demo/Dynamic.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Dynamic.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Demo/Dynamic.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dynamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Demo/Dynamic.vue?");

/***/ }),

/***/ "./src/components/Demo/Dynamic.vue?vue&type=template&id=3c1602a3&":
/*!************************************************************************!*\
  !*** ./src/components/Demo/Dynamic.vue?vue&type=template&id=3c1602a3& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dynamic_vue_vue_type_template_id_3c1602a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dynamic.vue?vue&type=template&id=3c1602a3& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Demo/Dynamic.vue?vue&type=template&id=3c1602a3&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dynamic_vue_vue_type_template_id_3c1602a3___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dynamic_vue_vue_type_template_id_3c1602a3___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Demo/Dynamic.vue?");

/***/ })

}]);