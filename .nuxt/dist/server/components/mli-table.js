exports.ids = [6];
exports.modules = {

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("44ba52fe", content, true, context)
};

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MliTable_vue_vue_type_style_index_0_id_3f84f08f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MliTable_vue_vue_type_style_index_0_id_3f84f08f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MliTable_vue_vue_type_style_index_0_id_3f84f08f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MliTable_vue_vue_type_style_index_0_id_3f84f08f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MliTable_vue_vue_type_style_index_0_id_3f84f08f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table thead .main-header[data-v-3f84f08f]{background:#fffbda}table tbody[data-v-3f84f08f]{text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MliTable.vue?vue&type=template&id=3f84f08f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-responsive"},[_vm._ssrNode("<table"+(_vm._ssrClass(null,("table " + _vm.tableClass)))+" data-v-3f84f08f><thead data-v-3f84f08f>"+((_vm.tableInfo.title)?("<tr class=\"main-header\" data-v-3f84f08f><th"+(_vm._ssrAttr("colspan",_vm.tableMaxCol))+" data-v-3f84f08f><span data-v-3f84f08f>"+(_vm._s(_vm.tableInfo.title))+"</span></th></tr>"):"<!---->")+" <tr data-v-3f84f08f>"+(_vm._ssrList((_vm.tableInfo.thead),function(th_det,th_i){return ("<th data-v-3f84f08f>"+_vm._ssrEscape("\n          "+_vm._s(th_det)+"\n        ")+"</th>")}))+"</tr></thead> <tbody data-v-3f84f08f>"+(_vm._ssrList((_vm.tableInfo.tbody),function(tr_det,tr_i){return ("<tr data-v-3f84f08f>"+(_vm._ssrList((tr_det),function(td_det,td_i){return ("<td data-v-3f84f08f><span data-v-3f84f08f>"+(_vm._s(td_det))+"</span></td>")}))+"</tr>")}))+"</tbody></table>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MliTable.vue?vue&type=template&id=3f84f08f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MliTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MliTablevue_type_script_lang_js_ = ({
  props: {
    tableClass: {
      type: String,
      default: 'table-striped'
    },
    tableMaxCol: {
      type: Number,
      default: 4
    },
    tableInfo: Object
  },
  data: function () {
    return {
      randomText: Math.random().toString(36).substring(7)
    };
  }
});
// CONCATENATED MODULE: ./components/MliTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MliTablevue_type_script_lang_js_ = (MliTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MliTable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MliTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3f84f08f",
  "d18f0ab2"
  
)

/* harmony default export */ var MliTable = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mli-table.js.map