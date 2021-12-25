(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/InputRawText"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/InputRawText/InputRawText.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fmedia%2Fpudding%2FDATA%2Fpudding%2FCode-Porjects%2Fhtml%2FHTML5-Sentence-Encoder%2Fsrc%2Fcomponents%2FInputRawText%2FInputRawText.vue&lang=yaml":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/InputRawText/InputRawText.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fmedia%2Fpudding%2FDATA%2Fpudding%2FCode-Porjects%2Fhtml%2FHTML5-Sentence-Encoder%2Fsrc%2Fcomponents%2FInputRawText%2FInputRawText.vue&lang=yaml ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".input-raw-text-textarea[data-v-3399dfa2] {\n  height: calc(100vh - 15rem) !important;\n  max-height: calc(100vh - 15rem) !important;\n  white-space: pre;\n  overflow-wrap: normal;\n  overflow-x: auto;\n}\ninput[type=\"file\"][data-v-3399dfa2] {\n  display: none;\n}\n", "",{"version":3,"sources":["/media/pudding/DATA/pudding/Code-Porjects/html/HTML5-Sentence-Encoder/src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true&","InputRawText.less"],"names":[],"mappings":"AAAA;EAEE,sCAAA;EACA,0CAAA;EAEA,gBAAA;EACA,qBAAA;EACA,gBAAA;ACDF;ADIA;EACE,aAAA;ACFF","file":"InputRawText.less","sourcesContent":[".input-raw-text-textarea {\n  @height: calc(100vh - 15rem) !important;\n  height: @height;\n  max-height: @height;\n  \n  white-space: pre;\n  overflow-wrap: normal;\n  overflow-x: auto;\n}\n\ninput[type=\"file\"] {\n  display: none;\n}",".input-raw-text-textarea {\n  height: calc(100vh - 15rem) !important;\n  max-height: calc(100vh - 15rem) !important;\n  white-space: pre;\n  overflow-wrap: normal;\n  overflow-x: auto;\n}\ninput[type=\"file\"] {\n  display: none;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/InputRawText/InputRawText.html?vue&type=template&id=3399dfa2&scoped=true&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/InputRawText/InputRawText.html?vue&type=template&id=3399dfa2&scoped=true& ***!
  \******************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "InputRawText" }, [
    _c("div", { staticClass: "field" }, [
      _c("label", { attrs: { for: "InputRawText" } }, [
        _vm._v("\n      " + _vm._s(_vm.$t("Input Raw Text")) + "\n    "),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "three fields" }, [
      _c("div", { staticClass: "field" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.loadDemo,
                expression: "loadDemo",
              },
            ],
            on: {
              change: function ($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function (o) {
                    return o.selected
                  })
                  .map(function (o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.loadDemo = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              },
            },
          },
          [
            _c("option", { attrs: { value: "none" } }, [
              _vm._v(_vm._s(_vm.$t("Select a demo"))),
            ]),
            _vm._v(" "),
            _vm._l(_vm.demoOptions, function (item) {
              return _c("option", { domProps: { value: item.path } }, [
                _vm._v(_vm._s(_vm.$t(item.name))),
              ])
            }),
          ],
          2
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("a", { staticClass: "ui fluid button", on: { click: _vm.save } }, [
          _c("i", { staticClass: "save outline icon" }),
          _vm._v("\n        " + _vm._s(_vm.$t("SAVE")) + "\n      "),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c(
          "button",
          {
            staticClass: "ui fluid button",
            on: {
              click: function ($event) {
                return _vm.$refs.InputFileOpenTrigger.click()
              },
            },
          },
          [
            _c("i", { staticClass: "folder open outline icon" }),
            _vm._v("\n        " + _vm._s(_vm.$t("OEPN")) + "\n      "),
          ]
        ),
        _vm._v(" "),
        _c("input", {
          ref: "InputFileOpenTrigger",
          staticClass: "input-field",
          attrs: { type: "file", id: "input_config_file", accept: ".ods" },
          on: { change: _vm.openSourceFile },
        }),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field" }, [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.config.InputRawText,
            expression: "config.InputRawText",
          },
        ],
        staticClass: "input-raw-text-textarea",
        attrs: { id: "InputRawText" },
        domProps: { value: _vm.config.InputRawText },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.config, "InputRawText", $event.target.value)
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "two fields" }, [
      _c("div", { staticClass: "field" }, [
        _c(
          "a",
          { staticClass: "ui fluid button", on: { click: _vm.tokenize } },
          [
            _vm._v(
              "\n        " + _vm._s(_vm.$t("TOKENIZATION")) + "\n        "
            ),
            _c("i", {
              staticClass: "arrow alternate circle right outline icon",
            }),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("a", { staticClass: "ui fluid button", on: { click: _vm.trans } }, [
          _vm._v("\n        " + _vm._s(_vm.$t("EMBEDDING")) + "\n        "),
          _c("i", { staticClass: "arrow alternate circle right outline icon" }),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9a4c2c8c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/InputRawText/InputRawText.html?vue&type=template&id=3399dfa2&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/components/InputRawText/InputRawText.html?vue&type=template&id=3399dfa2&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputRawText_html_vue_type_template_id_3399dfa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./InputRawText.html?vue&type=template&id=3399dfa2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/InputRawText/InputRawText.html?vue&type=template&id=3399dfa2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputRawText_html_vue_type_template_id_3399dfa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InputRawText_html_vue_type_template_id_3399dfa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/InputRawText/InputRawText.js?vue&type=script&lang=js&?3eb8":
/*!******************************************************************************!*\
  !*** ./src/components/InputRawText/InputRawText.js?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputRawText_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./InputRawText.js?vue&type=script&lang=js& */ "./src/components/InputRawText/InputRawText.js?vue&type=script&lang=js&?b014");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_InputRawText_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/InputRawText/InputRawText.js?vue&type=script&lang=js&?b014":
/*!******************************************************************************!*\
  !*** ./src/components/InputRawText/InputRawText.js?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global XLSX */

const Papa = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js")

let InputRawText = {
  props: ['config', 'localConfig', 'utils'],
  data() {
    this.$i18n.locale = this.localConfig.locale
    return {
      loadDemo: 'none',
      demoOptions: [
        {
          path: './demo/qa-pet-fruit.csv',
          name: 'Q&A Pet or Fruit'
        },
        {
          path: './demo/qa-pet-fruit-unsupervised.csv',
          name: 'Unsupervised'
        },
        {
          path: './demo/qa-pet-fruit-unknown.csv',
          name: 'Answer Unknown'
        },
      ],
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    loadDemo: async function () {
      if (this.loadDemo === 'none') {
        return false
      }
      
      this.config.InputRawText = await this.startToLoadDemo(this.loadDemo)
      
      this.loadDemo = 'none'
    },
    'config.InputRawText' () {
      this.config.InputRawHeaders = []
      this.config.InputRawData = null
      this.config.InputRawArray = null
    }
  },
  computed: {

  },
  mounted() {
    this.loadDefaultDemo()
  },
  methods: {
    loadDefaultDemo: async function () {
      await this.utils.AsyncUtils.sleep()
      this.loadDemo = this.demoOptions[0].path
      await this.utils.AsyncUtils.sleep()
      //this.trans()
      this.tokenize()
    },
    startToLoadDemo: async function (path) {
      if (!path) {
        return ''
      }

      return await this.utils.AxiosUtils.get(path)
    },
    getInputRawData: function () {
      if (this.config.InputRawData) {
        return this.config.InputRawData
      }
      
      let dataResult = Papa.parse(this.config.InputRawText, {
        header: true,
        skipEmptyLines: true
      })
      this.config.InputRawData = dataResult.data
      return this.config.InputRawData
    },
    getInputRawArray: function () {
      if (this.config.InputRawArray) {
        return this.config.InputRawArray
      }
      
      let dataResult = Papa.parse(this.config.InputRawText, {
        skipEmptyLines: true
      })
      this.config.InputRawArray = dataResult.data
      return this.config.InputRawArray
    },
    getInputRawHeaders: function () {
      if (this.config.InputRawHeaders && this.config.InputRawHeaders.length > 0) {
        return this.config.InputRawHeaders
      }
      
      let headersResult = Papa.parse(this.config.InputRawText, {
        header: false,
        preview: 1
      })
      this.config.InputRawHeaders = headersResult.data[0]
      
      return this.config.InputRawHeaders
    },
    trans: async function () {
      this.config.loading = true
      this.config.nlpMode = 'embedding'
      
      let data = [].concat(this.getInputRawData())
      let headers = [].concat(this.getInputRawHeaders())
      
      await this.$parent.$refs.PreprocessTextarea.trans(data, headers)
      
      this.config.loading = false
    },
    save () {
      let filename = 'sentence-encode'
        + '-' 
        + (new Date()).mmddhhmm()
      //this.utils.FileUtils.download(filename, this.config.InputRawText)
      
      this.utils.FileUtils.downloadODS(filename, this.getInputRawArray())
    },
    openSourceFile (evt) {
      //console.log(1);
      if (!window.FileReader) {
        return; // Browser is not compatible
      }

      var reader = new FileReader();
      let filename = evt.target.files[0].name
      let type = evt.target.files[0].type
      //console.log(type)
      if (filename.indexOf('.') > -1) {
        filename = filename.slice(0, filename.lastIndexOf('.'))
      }

      reader.onload = async (evt) => {
        if (evt.target.readyState !== 2) {
          this.processOutputWait = false
          return;
        }
        if (evt.target.error) {
          alert('Error while reading file');
          this.processOutputWait = false
          return;
        }

        let result = evt.target.result
        if (type === 'application/vnd.oasis.opendocument.spreadsheet'
                || type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          this.config.InputRawText = await this.processUploadTypeSheet(result)
        } else {
          this.config.InputRawText = result
        }
        this.$refs.InputFileOpenTrigger.value = ''
      }

      if (type === 'application/vnd.oasis.opendocument.spreadsheet'
              || type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        let size = evt.target.files[0].size
        //console.log('size', size)
        if (size > 25000000) {
          window.alert('ODS/XLSX檔案大小請低於2.5MB。')
          return false
        }

        reader.readAsBinaryString(evt.target.files[0])
      } else {
        reader.readAsText(evt.target.files[0])
      }
    },
    processUploadTypeSheet: async function (input) {
      var workbook = await XLSX.readAsync(input, {type: 'binary'});

      var result = [];
      for (let i in workbook.SheetNames) {
        let sheetName = workbook.SheetNames[i]

        var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName], {
          FS: ',',
          blankrows: false
        });

        //console.log(csv)
        result.push(csv.trim())
      }

      result = result.join('\n')
      result = result.split('\n').map(line => line.trim()).filter(line => (line !== '')).join('\n')

      return result
    },
    tokenize: async function () {
      //console.log(await this.utils.TokenizeUtils.tokenize('哈囉你好嗎？'))
      
      this.config.loading = true
      this.config.nlpMode = 'tokenization'
      
      let data = [].concat(this.getInputRawData())
      //console.log(data)
      let headers = [].concat(this.getInputRawHeaders())
      //console.log(headers)
      
      await this.$parent.$refs.PreprocessTextarea.tokenize(data, headers)
      
      this.config.loading = false
    }
  } 
}

/* harmony default export */ __webpack_exports__["default"] = (InputRawText);

/***/ }),

/***/ "./src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_InputRawText_less_vue_type_style_index_0_id_3399dfa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_InputRawText_less_vue_type_style_index_0_id_3399dfa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_InputRawText_less_vue_type_style_index_0_id_3399dfa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_InputRawText_less_vue_type_style_index_0_id_3399dfa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_InputRawText_less_vue_type_style_index_0_id_3399dfa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/InputRawText/InputRawText.vue":
/*!******************************************************!*\
  !*** ./src/components/InputRawText/InputRawText.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputRawText_html_vue_type_template_id_3399dfa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputRawText.html?vue&type=template&id=3399dfa2&scoped=true& */ "./src/components/InputRawText/InputRawText.html?vue&type=template&id=3399dfa2&scoped=true&");
/* harmony import */ var _InputRawText_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputRawText.js?vue&type=script&lang=js& */ "./src/components/InputRawText/InputRawText.js?vue&type=script&lang=js&?3eb8");
/* empty/unused harmony star reexport *//* harmony import */ var _InputRawText_less_vue_type_style_index_0_id_3399dfa2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true& */ "./src/components/InputRawText/InputRawText.less?vue&type=style&index=0&id=3399dfa2&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _InputRawText_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fmedia_2Fpudding_2FDATA_2Fpudding_2FCode_Porjects_2Fhtml_2FHTML5_Sentence_Encoder_2Fsrc_2Fcomponents_2FInputRawText_2FInputRawText_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputRawText.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fmedia%2Fpudding%2FDATA%2Fpudding%2FCode-Porjects%2Fhtml%2FHTML5-Sentence-Encoder%2Fsrc%2Fcomponents%2FInputRawText%2FInputRawText.vue&lang=yaml */ "./src/components/InputRawText/InputRawText.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fmedia%2Fpudding%2FDATA%2Fpudding%2FCode-Porjects%2Fhtml%2FHTML5-Sentence-Encoder%2Fsrc%2Fcomponents%2FInputRawText%2FInputRawText.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InputRawText_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputRawText_html_vue_type_template_id_3399dfa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputRawText_html_vue_type_template_id_3399dfa2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3399dfa2",
  null
  
)

/* custom blocks */

if (typeof _InputRawText_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fmedia_2Fpudding_2FDATA_2Fpudding_2FCode_Porjects_2Fhtml_2FHTML5_Sentence_Encoder_2Fsrc_2Fcomponents_2FInputRawText_2FInputRawText_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_InputRawText_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fmedia_2Fpudding_2FDATA_2Fpudding_2FCode_Porjects_2Fhtml_2FHTML5_Sentence_Encoder_2Fsrc_2Fcomponents_2FInputRawText_2FInputRawText_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/InputRawText/InputRawText.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/InputRawText/InputRawText.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fmedia%2Fpudding%2FDATA%2Fpudding%2FCode-Porjects%2Fhtml%2FHTML5-Sentence-Encoder%2Fsrc%2Fcomponents%2FInputRawText%2FInputRawText.vue&lang=yaml":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/InputRawText/InputRawText.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fmedia%2Fpudding%2FDATA%2Fpudding%2FCode-Porjects%2Fhtml%2FHTML5-Sentence-Encoder%2Fsrc%2Fcomponents%2FInputRawText%2FInputRawText.vue&lang=yaml ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_InputRawText_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fmedia_2Fpudding_2FDATA_2Fpudding_2FCode_Porjects_2Fhtml_2FHTML5_Sentence_Encoder_2Fsrc_2Fcomponents_2FInputRawText_2FInputRawText_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./InputRawText.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fmedia%2Fpudding%2FDATA%2Fpudding%2FCode-Porjects%2Fhtml%2FHTML5-Sentence-Encoder%2Fsrc%2Fcomponents%2FInputRawText%2FInputRawText.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/InputRawText/InputRawText.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fmedia%2Fpudding%2FDATA%2Fpudding%2FCode-Porjects%2Fhtml%2FHTML5-Sentence-Encoder%2Fsrc%2Fcomponents%2FInputRawText%2FInputRawText.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_InputRawText_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fmedia_2Fpudding_2FDATA_2Fpudding_2FCode_Porjects_2Fhtml_2FHTML5_Sentence_Encoder_2Fsrc_2Fcomponents_2FInputRawText_2FInputRawText_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_InputRawText_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fmedia_2Fpudding_2FDATA_2Fpudding_2FCode_Porjects_2Fhtml_2FHTML5_Sentence_Encoder_2Fsrc_2Fcomponents_2FInputRawText_2FInputRawText_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_InputRawText_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fmedia_2Fpudding_2FDATA_2Fpudding_2FCode_Porjects_2Fhtml_2FHTML5_Sentence_Encoder_2Fsrc_2Fcomponents_2FInputRawText_2FInputRawText_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_InputRawText_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fmedia_2Fpudding_2FDATA_2Fpudding_2FCode_Porjects_2Fhtml_2FHTML5_Sentence_Encoder_2Fsrc_2Fcomponents_2FInputRawText_2FInputRawText_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_InputRawText_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fmedia_2Fpudding_2FDATA_2Fpudding_2FCode_Porjects_2Fhtml_2FHTML5_Sentence_Encoder_2Fsrc_2Fcomponents_2FInputRawText_2FInputRawText_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=InputRawText.js.map