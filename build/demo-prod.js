var base = require('./demo-base')
var webConfig = base('vue')
var weexConfig = base('weex')

webConfig.entry = {
  app: ['./demo/src/render.js', './demo/src/app.js']
}
weexConfig.entry = {
  app: ['./demo/src/app.js']
}

// web 版将 vue 和 weex render 打包进去
webConfig.externals = {}

module.exports = [webConfig, weexConfig]
