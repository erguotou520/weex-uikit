// { "framework": "Vue" }

webpackJsonp([0],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(50)
)

/* template */
var __vue_template__ = __webpack_require__(53)
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
__vue_options__.__file = "E:\\workspace\\erguotou\\weex-uikit\\demo\\src\\views\\Text.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-28622d1c"
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

/***/ 50:
/***/ (function(module, exports) {

module.exports = {
  "v-texts": {
    "padding": 20
  },
  "text-item": {
    "marginTop": 20,
    "marginBottom": 20
  }
}

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-texts"]
  }, [_c('u-h1', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h1 强调信息,标题 ")]), _c('u-h2', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h2 文章标题栏")]), _c('u-h3', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h3 标题,数字,按钮")]), _c('u-h4', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h4 文章正文")]), _c('u-h5', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h5 标题")]), _c('u-h6', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h6 副标题,提示,次要信息")]), _c('u-h7', {
    staticClass: ["text-item"]
  }, [_vm._v("u-h7 注释,tab,次要信息")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

});