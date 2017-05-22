// { "framework": "Vue" }

webpackJsonp([1],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(52)
)

/* template */
var __vue_template__ = __webpack_require__(55)
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
__vue_options__.__file = "E:\\workspace\\erguotou\\weex-uikit\\demo\\src\\views\\Color.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cb2340f8"
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

/***/ 52:
/***/ (function(module, exports) {

module.exports = {
  "v-colors": {
    "padding": 20
  },
  "text-block": {
    "marginTop": 20,
    "marginBottom": 20,
    "lineHeight": 90,
    "borderRadius": 10,
    "color": "#ffffff",
    "textAlign": "center"
  },
  "t-primary": {
    "backgroundColor": "#489cff"
  },
  "t-highlight": {
    "backgroundColor": "#ff8038"
  },
  "t-home-icon": {
    "backgroundColor": "#21d3ac"
  },
  "t-star-icon": {
    "backgroundColor": "#ffd56c"
  },
  "t-text-highlight": {
    "backgroundColor": "#233040"
  },
  "t-text-primary": {
    "backgroundColor": "#667180"
  },
  "t-text-minor": {
    "backgroundColor": "#98a4b3"
  },
  "t-text-disable": {
    "backgroundColor": "#e6ecf2",
    "color": "#667180"
  },
  "t-background": {
    "backgroundColor": "#f9fafc",
    "color": "#667180"
  }
}

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["v-colors"]
  }, [_c('text', {
    staticClass: ["text-block", "t-primary"]
  }, [_vm._v("#489cff")]), _c('text', {
    staticClass: ["text-block", "t-highlight"]
  }, [_vm._v("#ff8038")]), _c('text', {
    staticClass: ["text-block", "t-home-icon"]
  }, [_vm._v("#21d3ac")]), _c('text', {
    staticClass: ["text-block", "t-star-icon"]
  }, [_vm._v("#ffd56c")]), _c('text', {
    staticClass: ["text-block", "t-text-highlight"]
  }, [_vm._v("#233040")]), _c('text', {
    staticClass: ["text-block", "t-text-primary"]
  }, [_vm._v("#667180")]), _c('text', {
    staticClass: ["text-block", "t-text-minor"]
  }, [_vm._v("#98a4b3")]), _c('text', {
    staticClass: ["text-block", "t-text-disable"]
  }, [_vm._v("#e6ecf2")]), _c('text', {
    staticClass: ["text-block", "t-background"]
  }, [_vm._v("#f9fafc")])])
}]}
module.exports.render._withStripped = true

/***/ })

});