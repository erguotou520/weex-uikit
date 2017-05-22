// { "framework": "Vue" }

webpackJsonp([2],{

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(73)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(70),
  /* scopeId */
  "data-v-232a37bf",
  /* cssModules */
  null
)
Component.options.__file = "E:\\workspace\\erguotou\\weex-uikit\\demo\\src\\views\\Button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-232a37bf", Component.options)
  } else {
    hotAPI.reload("data-v-232a37bf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.button-item[data-v-232a37bf] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-buttons"
  }, [_c('u-button', {
    staticClass: "button-item"
  }, [_vm._v("primary")]), _vm._v(" "), _c('u-button', {
    staticClass: "button-item",
    attrs: {
      "type": "highlight"
    }
  }, [_vm._v("highlight")]), _vm._v(" "), _c('u-button', {
    staticClass: "button-item",
    attrs: {
      "type": "minor"
    }
  }, [_vm._v("minor")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-232a37bf", module.exports)
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("57e05149", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/._css-loader@0.26.4@css-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-232a37bf&scoped=true!../../../node_modules/._stylus-loader@3.0.1@stylus-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Button.vue", function() {
     var newContent = require("!!../../../node_modules/._css-loader@0.26.4@css-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-232a37bf&scoped=true!../../../node_modules/._stylus-loader@3.0.1@stylus-loader/index.js!../../../node_modules/._vue-loader@10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Button.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});