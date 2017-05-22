// { "framework": "Vue" }

webpackJsonp([0],{

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(75)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(72),
  /* scopeId */
  "data-v-da4fcd0c",
  /* cssModules */
  null
)
Component.options.__file = "E:\\workspace\\erguotou\\weex-uikit\\demo\\src\\views\\Text.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Text.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da4fcd0c", Component.options)
  } else {
    hotAPI.reload("data-v-da4fcd0c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.v-texts[data-v-da4fcd0c] {\n  padding: 20px;\n}\n.text-item[data-v-da4fcd0c] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-texts"
  }, [_c('u-h1', {
    staticClass: "text-item"
  }, [_vm._v("u-h1 强调信息,标题 ")]), _vm._v(" "), _c('u-h2', {
    staticClass: "text-item"
  }, [_vm._v("u-h2 文章标题栏")]), _vm._v(" "), _c('u-h3', {
    staticClass: "text-item"
  }, [_vm._v("u-h3 标题,数字,按钮")]), _vm._v(" "), _c('u-h4', {
    staticClass: "text-item"
  }, [_vm._v("u-h4 文章正文")]), _vm._v(" "), _c('u-h5', {
    staticClass: "text-item"
  }, [_vm._v("u-h5 标题")]), _vm._v(" "), _c('u-h6', {
    staticClass: "text-item"
  }, [_vm._v("u-h6 副标题,提示,次要信息")]), _vm._v(" "), _c('u-h7', {
    staticClass: "text-item"
  }, [_vm._v("u-h7 注释,tab,次要信息")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-da4fcd0c", module.exports)
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("38681599", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/._css-loader@0.26.4@css-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-da4fcd0c&scoped=true!../../../node_modules/._stylus-loader@3.0.1@stylus-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Text.vue", function() {
     var newContent = require("!!../../../node_modules/._css-loader@0.26.4@css-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-da4fcd0c&scoped=true!../../../node_modules/._stylus-loader@3.0.1@stylus-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Text.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});