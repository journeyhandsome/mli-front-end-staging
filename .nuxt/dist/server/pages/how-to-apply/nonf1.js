exports.ids = [80,5];
exports.modules = {

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1d61a1f2", content, true, context)
};

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListText_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul.circle{list-style-type:circle}ul.square{list-style-type:square}ol.upper-roman{list-style-type:upper-roman}ol.upper-alpha{list-style-type:upper-alpha}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ListText.vue?vue&type=template&id=259f9545&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((!_vm.isOrderedList)?("<ul"+(_vm._ssrClass(null,_vm.className))+">"+(_vm._ssrList((_vm.listObj),function(info_li,index_li){return ("<li><span>"+(_vm._s(info_li))+"</span></li>")}))+"</ul>"):("<ol"+(_vm._ssrClass(null,_vm.className))+">"+(_vm._ssrList((_vm.listObj),function(info_li,index_li){return ("<li><span>"+(_vm._s(info_li))+"</span></li>")}))+"</ol>")))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ListText.vue?vue&type=template&id=259f9545&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ListText.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ListTextvue_type_script_lang_js_ = ({
  props: {
    listObj: Array,
    className: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isOrderedList: false,
      uniqueKey: Math.random().toString(36).substring(7)
    };
  },

  created: function () {
    switch (this.$props.className) {
      case 'decimal':
      case 'decimal-leading-zero':
      case 'upper-roman':
      case 'upper-alpha':
        this.isOrderedList = true;
    }
  }
});
// CONCATENATED MODULE: ./components/ListText.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ListTextvue_type_script_lang_js_ = (ListTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ListText.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(176)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ListTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "51d5face"
  
)

/* harmony default export */ var ListText = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/how-to-apply/nonf1.vue?vue&type=template&id=15fe7318&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.details.title))+"</h1> <img"+(_vm._ssrAttr("alt",_vm.details.title))+(_vm._ssrAttr("src",("/assets" + (_vm.details.image))))+" class=\"w-100 mb-3\"> <h2>"+_vm._ssrEscape(_vm._s(_vm.details.category.title))+"</h2> "),_vm._l((_vm.details.category.description),function(info_list,index){return _vm._ssrNode("<div class=\"category\">","</div>",[_vm._ssrNode("<h3>"+_vm._ssrEscape(_vm._s(info_list.subtitle))+"</h3> "),_c('list-text',{attrs:{"listObj":info_list.lists}})],2)})],2)]),_vm._ssrNode(" <div class=\"row\"><div class=\"col-lg-12\"></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/how-to-apply/nonf1.vue?vue&type=template&id=15fe7318&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/how-to-apply/nonf1.vue?vue&type=script&lang=js&
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
/* harmony default export */ var nonf1vue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const details = await $content(`nonf1/en`).fetch();
    return {
      details
    };
  },

  head() {
    if (this.details) {
      return {
        title: this.details.pageTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.details.pageDescription
        }]
      };
    }
  }

});
// CONCATENATED MODULE: ./pages/how-to-apply/nonf1.vue?vue&type=script&lang=js&
 /* harmony default export */ var how_to_apply_nonf1vue_type_script_lang_js_ = (nonf1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/how-to-apply/nonf1.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  how_to_apply_nonf1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3c8c5fa0"
  
)

/* harmony default export */ var nonf1 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ListText: __webpack_require__(178).default})


/***/ })

};;
//# sourceMappingURL=nonf1.js.map