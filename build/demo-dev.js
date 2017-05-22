var webpack = require('webpack')
var DevServer = require('webpack-dev-server')
var base = require('./demo-base')
var webConfig = base('vue', true)
var weexConfig = base('weex', true)

var port = process.env.DEMO_PORT | 3456
webConfig.entry = {
  app: [
    './demo/src/render.js',
    './demo/src/app.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client/?http://0.0.0.0:' + port
  ]
}
webConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

// weex 版跑在 playground，里不需要热替换
weexConfig.entry = {
  app: ['./demo/src/app.js']
}
console.log(weexConfig)
new DevServer(webpack([webConfig, weexConfig]), {
  port: port,
  host: '0.0.0.0',
  // disable host check to avoid `Invalid Host header` issue
  disableHostCheck: true,
  hot: true,
  stats: { colors: true }
}).listen('' + port, '0.0.0.0')
console.log('Project is running at http://0.0.0.0:' + port + '/')
