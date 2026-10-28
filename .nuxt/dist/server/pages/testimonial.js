exports.ids = [106,1];
exports.modules = {

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2df19850", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brochure_vue_vue_type_style_index_0_id_5fde82f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brochure_vue_vue_type_style_index_0_id_5fde82f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brochure_vue_vue_type_style_index_0_id_5fde82f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brochure_vue_vue_type_style_index_0_id_5fde82f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brochure_vue_vue_type_style_index_0_id_5fde82f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".brochure[data-v-5fde82f2]{text-align:center}.brochure .row[data-v-5fde82f2]{margin-top:50px}.brochure img[data-v-5fde82f2]{width:auto;max-width:100%;max-height:127px}@media screen and (max-width:991px){img[data-v-5fde82f2]{margin-bottom:30px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Brochure.vue?vue&type=template&id=5fde82f2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container brochure"},[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-5fde82f2>"+(_vm._ssrList((_vm.images),function(info,index){return ("<div class=\"col-lg-6\" data-v-5fde82f2><a"+(_vm._ssrAttr("href",(_vm.urlLang + "/" + (info.link))))+" data-v-5fde82f2><img"+(_vm._ssrAttr("src",("/assets" + (info.image))))+(_vm._ssrAttr("alt",info.title))+" data-v-5fde82f2></a></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Brochure.vue?vue&type=template&id=5fde82f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Brochure.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Brochurevue_type_script_lang_js_ = ({
  name: 'Brochure',

  async asyncData({
    params
  }) {
    const lang = params.slug;
    return {
      lang
    };
  },

  data() {
    return {
      images: [],
      urlLang: '/en',
      lang: 'en'
    };
  },

  methods: {
    getImageLanguage() {
      const path = "/images/brochure/";
      let currentLanguage = '';

      switch (this.lang) {
        //has assigned image
        case 'tw':
          //taiwanese
          currentLanguage = 'tw';
          break;

        case 'tr':
          //turkey
          currentLanguage = 'tr';
          break;

        case 'it':
          //italian
          currentLanguage = 'it';
          break;

        case 'ch':
          //chinese
          currentLanguage = 'ch';
          break;

        case 'por':
          //portugues
          currentLanguage = 'por';
          break;

        case 'fr':
          //france
          currentLanguage = 'fr';
          break;

        case 'th':
          //thailand
          currentLanguage = 'th';
          break;

        case 'sp':
          //spanish
          currentLanguage = 'sp';
          break;

        case 'jp':
          //japan
          currentLanguage = 'jp';
          break;

        case 'de':
          //deutsch
          currentLanguage = 'de';
          break;

        case 'ru':
          //russian
          currentLanguage = 'ru';
          break;

        default:
          //english
          currentLanguage = 'en';
          break;
      }

      this.images = [{
        title: 'Download Brochure',
        image: path + currentLanguage + "/download-brochure.jpg",
        link: 'material'
      }, {
        title: 'Contact Us',
        image: path + currentLanguage + "/contact-us.jpg",
        link: 'contact'
      }];
    },

    setLanguage(newLang) {
      this.lang = 'en';
      this.urlLang = '';
      if (newLang) this.lang = newLang;
      if (this.lang != 'en') this.urlLang = `/${this.lang}`;
    }

  },
  watch: {
    '$route.params': {
      handler(newValue) {
        this.setLanguage(newValue.slug);
        this.getImageLanguage();
      },

      immediate: true
    }
  },
  created: function () {
    this.setLanguage(this.$route.params.slug);
    this.getImageLanguage();
  }
});
// CONCATENATED MODULE: ./components/Brochure.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Brochurevue_type_script_lang_js_ = (Brochurevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Brochure.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Brochurevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5fde82f2",
  "0fad28f2"
  
)

/* harmony default export */ var Brochure = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("43b7b904", content, true, context)
};

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonial_vue_vue_type_style_index_0_id_542edb82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(211);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonial_vue_vue_type_style_index_0_id_542edb82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonial_vue_vue_type_style_index_0_id_542edb82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonial_vue_vue_type_style_index_0_id_542edb82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_testimonial_vue_vue_type_style_index_0_id_542edb82_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-container[data-v-542edb82]{text-align:center}.image-container img[data-v-542edb82]{max-height:400px}p[data-v-542edb82]{text-align:justify;word-wrap:break-word;white-space:pre-wrap}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/testimonial.vue?vue&type=template&id=542edb82&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode(((_vm.testimonial.title)?("<div class=\"row\" data-v-542edb82><div class=\"col-lg-12\" data-v-542edb82><div class=\"image-container mb-5\" data-v-542edb82><img"+(_vm._ssrAttr("src",("/assets/images/testimonial/" + (_vm.testimonial.image))))+(_vm._ssrAttr("alt",((_vm.testimonial.title) + " photo")))+" class=\"w-auto\" data-v-542edb82></div> <h1 data-v-542edb82>"+_vm._ssrEscape(_vm._s(_vm.testimonial.title))+"</h1> <p data-v-542edb82>"+(_vm._s(_vm.testimonial.text))+"</p> <a href=\"/testimonials\" class=\"mt-3\" data-v-542edb82>Click here for more student testimonials!</a></div></div>"):"<!---->")+" "),_c('brochure')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/testimonial.vue?vue&type=template&id=542edb82&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/testimonial.vue?vue&type=script&lang=js&
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
/* harmony default export */ var testimonialvue_type_script_lang_js_ = ({
  async asyncData({
    redirect,
    $axios
  }) {
    return {
      $axios,
      redirect
    };
  },

  data() {
    return {
      testimonial: [],
      lang: 'en'
    };
  },

  created() {
    const self = this;
    const queryId = this.$route.query.id;

    if (!queryId) {
      this.redirect('/404');
      return;
    }

    this.$axios.$get(`/testimonial/en/${queryId}`).then(response => {
      this.testimonial = response;
    }).catch(error => {
      self.redirect('/404');
    });
  }

});
// CONCATENATED MODULE: ./pages/testimonial.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testimonialvue_type_script_lang_js_ = (testimonialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/testimonial.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(294)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testimonialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "542edb82",
  "8d3faef8"
  
)

/* harmony default export */ var testimonial = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Brochure: __webpack_require__(174).default})


/***/ })

};;
//# sourceMappingURL=testimonial.js.map