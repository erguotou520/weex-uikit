// { "framework": "Vue" }

webpackJsonp([1],{

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(74)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-7eb5fee6",
  /* cssModules */
  null
)
Component.options.__file = "E:\\workspace\\erguotou\\weex-uikit\\demo\\src\\views\\Color.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Color.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7eb5fee6", Component.options)
  } else {
    hotAPI.reload("data-v-7eb5fee6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.v-colors[data-v-7eb5fee6] {\n  padding: 20px;\n}\n.text-block[data-v-7eb5fee6] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  line-height: 90px;\n  border-radius: 10px;\n  color: #fff;\n  text-align: center;\n}\n.t-primary[data-v-7eb5fee6] {\n  background-color: #489cff;\n}\n.t-highlight[data-v-7eb5fee6] {\n  background-color: #ff8038;\n}\n.t-home-icon[data-v-7eb5fee6] {\n  background-color: #21d3ac;\n}\n.t-star-icon[data-v-7eb5fee6] {\n  background-color: #ffd56c;\n}\n.t-text-highlight[data-v-7eb5fee6] {\n  background-color: #233040;\n}\n.t-text-primary[data-v-7eb5fee6] {\n  background-color: #667180;\n}\n.t-text-minor[data-v-7eb5fee6] {\n  background-color: #98a4b3;\n}\n.t-text-disable[data-v-7eb5fee6] {\n  background-color: #e6ecf2;\n  color: #667180;\n}\n.t-background[data-v-7eb5fee6] {\n  background-color: #f9fafc;\n  color: #667180;\n}\n", ""]);

// exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-colors"
  }, [_c('text', {
    staticClass: "text-block t-primary"
  }, [_vm._v("#489cff")]), _vm._v(" "), _c('text', {
    staticClass: "text-block t-highlight"
  }, [_vm._v("#ff8038")]), _vm._v(" "), _c('text', {
    staticClass: "text-block t-home-icon"
  }, [_vm._v("#21d3ac")]), _vm._v(" "), _c('text', {
    staticClass: "text-block t-star-icon"
  }, [_vm._v("#ffd56c")]), _vm._v(" "), _c('text', {
    staticClass: "text-block t-text-highlight"
  }, [_vm._v("#233040")]), _vm._v(" "), _c('text', {
    staticClass: "text-block t-text-primary"
  }, [_vm._v("#667180")]), _vm._v(" "), _c('text', {
    staticClass: "text-block t-text-minor"
  }, [_vm._v("#98a4b3")]), _vm._v(" "), _c('text', {
    staticClass: "text-block t-text-disable"
  }, [_vm._v("#e6ecf2")]), _vm._v(" "), _c('text', {
    staticClass: "text-block t-background"
  }, [_vm._v("#f9fafc")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7eb5fee6", module.exports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("73c9db5d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/._css-loader@0.26.4@css-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7eb5fee6&scoped=true!../../../node_modules/._stylus-loader@3.0.1@stylus-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Color.vue", function() {
     var newContent = require("!!../../../node_modules/._css-loader@0.26.4@css-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7eb5fee6&scoped=true!../../../node_modules/._stylus-loader@3.0.1@stylus-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Color.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});