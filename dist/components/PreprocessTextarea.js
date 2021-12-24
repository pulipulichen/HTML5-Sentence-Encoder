(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/PreprocessTextarea"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/PreprocessTextarea/PreprocessTextarea.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CPreprocessTextarea%5CPreprocessTextarea.vue&lang=yaml":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/PreprocessTextarea/PreprocessTextarea.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CPreprocessTextarea%5CPreprocessTextarea.vue&lang=yaml ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".PreprocessTextarea .input-trans-text-textarea[data-v-8788ad62] {\n  height: calc(100vh - 10.6rem) !important;\n  max-height: calc(100vh - 10.6rem) !important;\n  white-space: pre !important;\n  overflow-wrap: normal !important;\n  overflow-x: auto !important;\n}\n", "",{"version":3,"sources":["E:/pudding/Code-Porjects/html/HTML5-Sentence-Encoder/src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true&","PreprocessTextarea.less"],"names":[],"mappings":"AAAA;EAEE,wCAAA;EACA,4CAAA;EAEA,2BAAA;EACA,gCAAA;EACA,2BAAA;ACDF","file":"PreprocessTextarea.less","sourcesContent":[".PreprocessTextarea .input-trans-text-textarea {\n  @height: calc(100vh - 10.6rem);\n  height: @height !important;\n  max-height: @height !important;\n  \n  white-space: pre !important;\n  overflow-wrap: normal !important;\n  overflow-x: auto !important;\n}",".PreprocessTextarea .input-trans-text-textarea {\n  height: calc(100vh - 10.6rem) !important;\n  max-height: calc(100vh - 10.6rem) !important;\n  white-space: pre !important;\n  overflow-wrap: normal !important;\n  overflow-x: auto !important;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/PreprocessTextarea/PreprocessTextarea.html?vue&type=template&id=8788ad62&scoped=true&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/PreprocessTextarea/PreprocessTextarea.html?vue&type=template&id=8788ad62&scoped=true& ***!
  \******************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "PreprocessTextarea" }, [
    _c("div", { staticClass: "field" }, [
      _c(
        "label",
        { attrs: { for: "InputTransText" } },
        [
          _vm._v(
            "\n          " + _vm._s(_vm.$t("Preprocess")) + "\n          "
          ),
          _vm.config.nlpMode === "embedding"
            ? [
                _vm._v(
                  "\n            :\n            " +
                    _vm._s(_vm.$t("Translated")) +
                    "\n          "
                ),
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.config.nlpMode === "tokenization"
            ? [
                _vm._v(
                  "\n            :\n            " +
                    _vm._s(_vm.$t("Tokenized")) +
                    "\n          "
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
            value: _vm.config.PreprocessText,
            expression: "config.PreprocessText",
          },
        ],
        staticClass: "input-trans-text-textarea",
        attrs: { id: "InputTransText" },
        domProps: { value: _vm.config.PreprocessText },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.config, "PreprocessText", $event.target.value)
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field" }, [
      _c("a", { staticClass: "ui fluid button", on: { click: _vm.next } }, [
        _vm._v("\n          " + _vm._s(_vm.$t("NEXT")) + "\n          "),
        _c("i", { staticClass: "arrow alternate circle right outline icon" }),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("01462274", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/PreprocessTextarea/PreprocessTextarea.html?vue&type=template&id=8788ad62&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/components/PreprocessTextarea/PreprocessTextarea.html?vue&type=template&id=8788ad62&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_PreprocessTextarea_html_vue_type_template_id_8788ad62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./PreprocessTextarea.html?vue&type=template&id=8788ad62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/PreprocessTextarea/PreprocessTextarea.html?vue&type=template&id=8788ad62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_PreprocessTextarea_html_vue_type_template_id_8788ad62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_PreprocessTextarea_html_vue_type_template_id_8788ad62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/PreprocessTextarea/PreprocessTextarea.js?vue&type=script&lang=js&?9e35":
/*!******************************************************************************************!*\
  !*** ./src/components/PreprocessTextarea/PreprocessTextarea.js?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Papa = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js")

let PreprocessTextarea = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'config.PreprocessText' (newText, oldText) {
      if (oldText === '') {
        return false
      }
      
      this.config.PreprocessData = null
      this.config.PreprocessHeaders = null
    },
    'config.PreprocessData' () {
      if (this.config.PreprocessData === null) {
        return false
      }
      
      this.config.PreprocessText = Papa.unparse(this.config.PreprocessData)
      console.log(this.config.PreprocessText)
    }
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
    trans: async function (data, headers) {
      
      let key = headers[0]
      
      let textList = data.map(item => {
        return item[key]
      })
      
      //console.log(textList)
      //console.log(data)
      //console.log(await this.utils.TransUtils.trans('哈囉你好嗎？'))
      let transList = await this.utils.TransUtils.trans(textList)
      
      // 組合
      data.forEach((item, i) => {
        item[key] = transList[i]
      })
      
      this.config.PreprocessData = data
      
      await this.utils.AsyncUtils.sleep()
      this.next()
      //console.log(data)
      
      //console.log(transList)
    },
    getPreprocessData () {
      if (this.config.PreprocessData) {
        return this.config.PreprocessData
      }
      
      let dataResult = Papa.parse(this.config.PreprocessText, {
        header: true,
        skipEmptyLines: true
      })
      this.config.PreprocessData = dataResult.data
      return this.config.PreprocessData
    },
    getPreprocessHeaders () {
      if (this.config.PreprocessHeaders && this.config.PreprocessHeaders.length > 0) {
        return this.config.PreprocessHeaders
      }
      
      let headersResult = Papa.parse(this.config.PreprocessText, {
        header: false,
        preview: 1
      })
      
      this.config.PreprocessHeaders = headersResult.data[0]
      
      return this.config.PreprocessHeaders
    },
    next () {
      let data = this.getPreprocessData()
      let headers = this.getPreprocessHeaders()
      console.log(headers)
      this.$parent.$refs.StructureData.buildStructureData(data, headers)
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (PreprocessTextarea);

/***/ }),

/***/ "./src/components/PreprocessTextarea/PreprocessTextarea.js?vue&type=script&lang=js&?b54a":
/*!******************************************************************************************!*\
  !*** ./src/components/PreprocessTextarea/PreprocessTextarea.js?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreprocessTextarea_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./PreprocessTextarea.js?vue&type=script&lang=js& */ "./src/components/PreprocessTextarea/PreprocessTextarea.js?vue&type=script&lang=js&?9e35");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_PreprocessTextarea_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_PreprocessTextarea_less_vue_type_style_index_0_id_8788ad62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_PreprocessTextarea_less_vue_type_style_index_0_id_8788ad62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_PreprocessTextarea_less_vue_type_style_index_0_id_8788ad62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_PreprocessTextarea_less_vue_type_style_index_0_id_8788ad62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_PreprocessTextarea_less_vue_type_style_index_0_id_8788ad62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/PreprocessTextarea/PreprocessTextarea.vue":
/*!******************************************************************!*\
  !*** ./src/components/PreprocessTextarea/PreprocessTextarea.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreprocessTextarea_html_vue_type_template_id_8788ad62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreprocessTextarea.html?vue&type=template&id=8788ad62&scoped=true& */ "./src/components/PreprocessTextarea/PreprocessTextarea.html?vue&type=template&id=8788ad62&scoped=true&");
/* harmony import */ var _PreprocessTextarea_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreprocessTextarea.js?vue&type=script&lang=js& */ "./src/components/PreprocessTextarea/PreprocessTextarea.js?vue&type=script&lang=js&?b54a");
/* empty/unused harmony star reexport *//* harmony import */ var _PreprocessTextarea_less_vue_type_style_index_0_id_8788ad62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true& */ "./src/components/PreprocessTextarea/PreprocessTextarea.less?vue&type=style&index=0&id=8788ad62&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _PreprocessTextarea_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CPreprocessTextarea_5CPreprocessTextarea_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreprocessTextarea.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CPreprocessTextarea%5CPreprocessTextarea.vue&lang=yaml */ "./src/components/PreprocessTextarea/PreprocessTextarea.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CPreprocessTextarea%5CPreprocessTextarea.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PreprocessTextarea_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreprocessTextarea_html_vue_type_template_id_8788ad62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PreprocessTextarea_html_vue_type_template_id_8788ad62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8788ad62",
  null
  
)

/* custom blocks */

if (typeof _PreprocessTextarea_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CPreprocessTextarea_5CPreprocessTextarea_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_PreprocessTextarea_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CPreprocessTextarea_5CPreprocessTextarea_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/PreprocessTextarea/PreprocessTextarea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/PreprocessTextarea/PreprocessTextarea.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CPreprocessTextarea%5CPreprocessTextarea.vue&lang=yaml":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/PreprocessTextarea/PreprocessTextarea.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CPreprocessTextarea%5CPreprocessTextarea.vue&lang=yaml ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_PreprocessTextarea_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CPreprocessTextarea_5CPreprocessTextarea_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./PreprocessTextarea.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CPreprocessTextarea%5CPreprocessTextarea.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/PreprocessTextarea/PreprocessTextarea.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects%5Chtml%5CHTML5-Sentence-Encoder%5Csrc%5Ccomponents%5CPreprocessTextarea%5CPreprocessTextarea.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_PreprocessTextarea_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CPreprocessTextarea_5CPreprocessTextarea_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_PreprocessTextarea_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CPreprocessTextarea_5CPreprocessTextarea_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_PreprocessTextarea_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CPreprocessTextarea_5CPreprocessTextarea_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_PreprocessTextarea_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CPreprocessTextarea_5CPreprocessTextarea_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_PreprocessTextarea_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_5Chtml_5CHTML5_Sentence_Encoder_5Csrc_5Ccomponents_5CPreprocessTextarea_5CPreprocessTextarea_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=PreprocessTextarea.js.map