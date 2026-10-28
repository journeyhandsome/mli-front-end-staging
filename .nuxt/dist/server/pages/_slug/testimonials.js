exports.ids = [56];
exports.modules = {

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(363);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0e71d260", content, true, context)
};

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_7b03d9f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(245);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_7b03d9f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_7b03d9f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_7b03d9f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonials_vue_vue_type_style_index_0_id_7b03d9f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "select[data-v-7b03d9f0]{color:#fff;background-color:#0069d9;border-color:#0062cc;padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem;margin-right:10px}select option[data-v-7b03d9f0]{color:#0062cc;background-color:#fff}.box-shadow-group[data-v-7b03d9f0]{text-align:center;overflow:hidden}.box-shadow-group img[data-v-7b03d9f0]{min-height:220px;max-height:220px;width:auto}@media screen and (min-width:900px){.box-shadow-group img[data-v-7b03d9f0]{min-height:260px;max-height:260px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_slug/testimonials.vue?vue&type=template&id=7b03d9f0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\" data-v-7b03d9f0>","</div>",[_vm._ssrNode("<div class=\"col-lg-12\" data-v-7b03d9f0>","</div>",[_vm._ssrNode("<h1 data-v-7b03d9f0>"+_vm._ssrEscape(_vm._s(_vm.details.title))+"</h1> <span class=\"sort-text\" data-v-7b03d9f0>"+_vm._ssrEscape(_vm._s(_vm.details.selectBy.title))+"</span> "),_vm._l((_vm.details.selectBy.selections),function(selection,s_index){return _vm._ssrNode("<div class=\"dropdown d-inline\" data-v-7b03d9f0>","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.formData[selection.key]),expression:"formData[selection.key]"}],staticClass:"form-select form-select-lg mb-3",attrs:{"aria-label":".form-select-lg example"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.formData, selection.key, $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.onSelect($event)}]}},[_vm._l((selection.lists),function(list,l_index){return [_c('option',{key:("select-by-" + s_index + "-" + l_index),style:(("background-image: url(" + (list.image) + ");")),domProps:{"value":list.value == '' ? list.value : list.title}},[_vm._v("\n                "+_vm._s(list.title)+"\n              ")])]})],2)])}),_vm._ssrNode(" <h3 data-v-7b03d9f0>"+_vm._ssrEscape(_vm._s(_vm.details.comments.title))+"</h3> <div class=\"row mt-3\" data-v-7b03d9f0>"+(_vm._ssrList((_vm.testimonialList.slice((6 * (_vm.activePage-1)), (6 * _vm.activePage))),function(testimonial){return ("<div class=\"col-sm-12 col-md-6 col-lg-6 mb-5\" data-v-7b03d9f0><div class=\"box-shadow-group\" data-v-7b03d9f0><img"+(_vm._ssrAttr("src",("/assets/images/testimonial/" + (testimonial.image))))+(_vm._ssrAttr("alt",testimonial.title))+" data-v-7b03d9f0> <div class=\"group-text\" data-v-7b03d9f0><h5 data-v-7b03d9f0>"+_vm._ssrEscape(_vm._s(testimonial.title))+"</h5> <p data-v-7b03d9f0>"+_vm._ssrEscape(_vm._s(testimonial.text.substring(0,130)+".."))+"</p> <a"+(_vm._ssrAttr("href",("/" + _vm.lang + "/testimonial?id=" + (testimonial.image.split('.')[0]))))+" class=\"btn btn-primary\" data-v-7b03d9f0> Read More</a></div></div></div>")}))+"</div> <div class=\"row\" data-v-7b03d9f0><nav aria-label=\"...\" data-v-7b03d9f0><ul class=\"pagination\" data-v-7b03d9f0><li"+(_vm._ssrClass("page-item",{disabled: (1 == _vm.activePage)}))+" data-v-7b03d9f0><a href=\"#\" tabindex=\"-1\" class=\"page-link\" data-v-7b03d9f0>Previous</a></li> "+(_vm._ssrList((_vm.totalPages),function(item){return ("<li"+(_vm._ssrClass("page-item",{active: (item == _vm.activePage)}))+" data-v-7b03d9f0><a href=\"#\" class=\"page-link\" data-v-7b03d9f0>"+_vm._ssrEscape(_vm._s(item))+"</a></li>")}))+" <li"+(_vm._ssrClass("page-item",{disabled: (_vm.activePage == _vm.totalPages)}))+" data-v-7b03d9f0><a href=\"#\" class=\"page-link\" data-v-7b03d9f0>Next</a></li></ul></nav></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_slug/testimonials.vue?vue&type=template&id=7b03d9f0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_slug/testimonials.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var testimonialsvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    $axios,
    params
  }) {
    const details = await $content(`testimonials/${params.slug}`).fetch();
    const lang = params.slug;
    const response = await $axios.$get(`/get_home_info/${params.slug}`);
    const allTestimonials = response.testimonial_list;
    return {
      details,
      lang,
      allTestimonials
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
  },

  data: function () {
    let formdata = [];
    formdata['campus'] = '';
    formdata['nationality'] = '';
    return {
      testimonialList: [],
      totalPages: 1,
      activePage: 1,
      formData: formdata
    };
  },
  methods: {
    onSelect(e) {
      e.preventDefault();
      let testimonials = this.allTestimonials;

      if (this.formData['nationality']) {
        testimonials = testimonials.filter(testimonial => testimonial.nationality_name == this.formData['nationality']);
      }

      if (this.formData['campus']) {
        testimonials = testimonials.filter(testimonial => testimonial.campus_name.includes(this.formData['campus']));
      }

      this.testimonialList = testimonials;
      this.resetPagination();
    },

    updateActivePage(num) {
      this.activePage = num;
    },

    resetPagination() {
      this.totalPages = Math.round(this.testimonialList.length / 6);
      this.activePage = 1;
    }

  },

  mounted() {
    this.testimonialList = this.allTestimonials;
    this.resetPagination();
  }

});
// CONCATENATED MODULE: ./pages/_slug/testimonials.vue?vue&type=script&lang=js&
 /* harmony default export */ var _slug_testimonialsvue_type_script_lang_js_ = (testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/_slug/testimonials.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(362)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _slug_testimonialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7b03d9f0",
  "15766e1e"
  
)

/* harmony default export */ var testimonials = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=testimonials.js.map