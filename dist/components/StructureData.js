(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/StructureData"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/StructureData/StructureData.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CStructureData%5CStructureData.vue&lang=yaml":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/StructureData/StructureData.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CStructureData%5CStructureData.vue&lang=yaml ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".StructureData .sentence-embedding-textarea[data-v-13b0956a] {\n  height: calc(100vh - 10.6rem) !important;\n  max-height: calc(100vh - 10.6rem) !important;\n  white-space: pre !important;\n  overflow-wrap: normal !important;\n  overflow-x: auto !important;\n}\n", "",{"version":3,"sources":["E:/pudding/Code-Porjects/html/HTML5-Sentence-Encoder/src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true&","StructureData.less"],"names":[],"mappings":"AAAA;EAEE,wCAAA;EACA,4CAAA;EAEA,2BAAA;EACA,gCAAA;EACA,2BAAA;ACDF","file":"StructureData.less","sourcesContent":[".StructureData .sentence-embedding-textarea {\n  @height: calc(100vh - 10.6rem);\n  height: @height !important;\n  max-height: @height !important;\n  \n  white-space: pre !important;\n  overflow-wrap: normal !important;\n  overflow-x: auto !important;\n}",".StructureData .sentence-embedding-textarea {\n  height: calc(100vh - 10.6rem) !important;\n  max-height: calc(100vh - 10.6rem) !important;\n  white-space: pre !important;\n  overflow-wrap: normal !important;\n  overflow-x: auto !important;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/StructureData/StructureData.html?vue&type=template&id=13b0956a&scoped=true&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/StructureData/StructureData.html?vue&type=template&id=13b0956a&scoped=true& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "StructureData" }, [
    _c("div", { staticClass: "field" }, [
      _c(
        "label",
        { attrs: { for: "SentenceEmbedding" } },
        [
          _vm._v("\n      " + _vm._s(_vm.$t("Stucture Data")) + "\n      "),
          _vm.config.nlpMode === "embedding"
            ? [
                _vm._v(
                  "\n        :\n        " +
                    _vm._s(_vm.$t("Embedding")) +
                    "\n      "
                ),
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.config.nlpMode === "tokenization"
            ? [
                _vm._v(
                  "\n        :\n        " +
                    _vm._s(_vm.$t("Word Vector")) +
                    "\n      "
                ),
              ]
            : _vm._e(),
        ],
        2
      ),
      _vm._v(" "),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.config.StructureText,
            expression: "config.StructureText",
          },
        ],
        staticClass: "sentence-embedding-textarea",
        attrs: { id: "SentenceEmbedding" },
        domProps: { value: _vm.config.StructureText },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.config, "StructureText", $event.target.value)
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "fields" }, [
      _c("div", { staticClass: "field" }, [
        _c("a", { staticClass: "ui fluid button", on: { click: _vm.copy } }, [
          _vm._v("\n        " + _vm._s(_vm.$t("COPY")) + "\n        "),
          _c("i", { staticClass: "copy icon" }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("a", { staticClass: "ui fluid button", on: { click: _vm.save } }, [
          _vm._v("\n        " + _vm._s(_vm.$t("SAVE")) + "\n        "),
          _c("i", { staticClass: "save outline icon" }),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("20c69648", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/StructureData/StructureData.html?vue&type=template&id=13b0956a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/components/StructureData/StructureData.html?vue&type=template&id=13b0956a&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_StructureData_html_vue_type_template_id_13b0956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./StructureData.html?vue&type=template&id=13b0956a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/StructureData/StructureData.html?vue&type=template&id=13b0956a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_StructureData_html_vue_type_template_id_13b0956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_StructureData_html_vue_type_template_id_13b0956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/StructureData/StructureData.js?vue&type=script&lang=js&?0e88":
/*!********************************************************************************!*\
  !*** ./src/components/StructureData/StructureData.js?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global use */

let StructureData = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      model: null
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
    getModel: async function () {
      if (this.model) {
        return this.model
      }
      
      return new Promise((resolve) => {
        use.load().then(model => {
          this.model = model
          resolve(model)
        });
      })
    },
    parseSentenceEmbedding: async function (sentences) {
      let model = await this.getModel()
      
      return new Promise((resolve) => {
        model.embed(sentences).then(async (embeddings) => {
          // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
          // So in this example `embeddings` has the shape [2, 512].
          //embeddings.print(true /* verbose */);
          
          let array = await embeddings.arraySync()
          resolve(array)
        });
      })
    },
    buildStructureData: async function (data, headers) {
      
      let key = headers[0]
      let input = data.map(item => item[key])
      
      let embedding = await this.parseSentenceEmbedding(input)
      console.log(embedding)
      window.E = embedding
      console.log('buildStructureData')
    },
    copy () {
      
    },
    save () {
      
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (StructureData);

/***/ }),

/***/ "./src/components/StructureData/StructureData.js?vue&type=script&lang=js&?6a53":
/*!********************************************************************************!*\
  !*** ./src/components/StructureData/StructureData.js?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StructureData_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./StructureData.js?vue&type=script&lang=js& */ "./src/components/StructureData/StructureData.js?vue&type=script&lang=js&?0e88");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_StructureData_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_StructureData_less_vue_type_style_index_0_id_13b0956a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_StructureData_less_vue_type_style_index_0_id_13b0956a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_StructureData_less_vue_type_style_index_0_id_13b0956a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_StructureData_less_vue_type_style_index_0_id_13b0956a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_StructureData_less_vue_type_style_index_0_id_13b0956a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/StructureData/StructureData.vue":
/*!********************************************************!*\
  !*** ./src/components/StructureData/StructureData.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StructureData_html_vue_type_template_id_13b0956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StructureData.html?vue&type=template&id=13b0956a&scoped=true& */ "./src/components/StructureData/StructureData.html?vue&type=template&id=13b0956a&scoped=true&");
/* harmony import */ var _StructureData_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StructureData.js?vue&type=script&lang=js& */ "./src/components/StructureData/StructureData.js?vue&type=script&lang=js&?6a53");
/* empty/unused harmony star reexport *//* harmony import */ var _StructureData_less_vue_type_style_index_0_id_13b0956a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true& */ "./src/components/StructureData/StructureData.less?vue&type=style&index=0&id=13b0956a&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _StructureData_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CStructureData_5CStructureData_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StructureData.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CStructureData%5CStructureData.vue&lang=yaml */ "./src/components/StructureData/StructureData.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CStructureData%5CStructureData.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StructureData_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StructureData_html_vue_type_template_id_13b0956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StructureData_html_vue_type_template_id_13b0956a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "13b0956a",
  null
  
)

/* custom blocks */

if (typeof _StructureData_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CStructureData_5CStructureData_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_StructureData_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CStructureData_5CStructureData_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/StructureData/StructureData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/StructureData/StructureData.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CStructureData%5CStructureData.vue&lang=yaml":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/StructureData/StructureData.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CStructureData%5CStructureData.vue&lang=yaml ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_StructureData_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CStructureData_5CStructureData_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./StructureData.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CStructureData%5CStructureData.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/StructureData/StructureData.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CStructureData%5CStructureData.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_StructureData_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CStructureData_5CStructureData_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_StructureData_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CStructureData_5CStructureData_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_StructureData_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CStructureData_5CStructureData_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_StructureData_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CStructureData_5CStructureData_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_StructureData_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CStructureData_5CStructureData_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=StructureData.js.map