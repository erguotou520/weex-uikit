// { "framework": "Vue" }

webpackJsonp([2],{

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(51)
)

/* template */
var __vue_template__ = __webpack_require__(54)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\workspace\\erguotou\\weex-uikit\\demo\\src\\views\\Button.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7e7deae1"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = {
  "button-item": {
    "marginTop": 20,
    "marginBottom": 20
  }
}

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-buttons"]
  }, [_c('u-button', {
    staticClass: ["button-item"]
  }, [_vm._v("primary")]), _c('u-button', {
    staticClass: ["button-item"],
    attrs: {
      "type": "highlight"
    }
  }, [_vm._v("highlight")]), _c('u-button', {
    staticClass: ["button-item"],
    attrs: {
      "type": "minor"
    }
  }, [_vm._v("minor")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

});