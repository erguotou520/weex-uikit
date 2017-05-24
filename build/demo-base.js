var resolve = require('path').resolve
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function getBaseConfig (loader, isDev) {
  return {
    devtool: isDev ? '#cheap-module-eval-source-map' : '',
    output: {
      path: resolve(__dirname, '../demo/dist'),
      filename: '[name].' + (loader === 'vue' ? 'web' : loader) + '.js'
    },
    externals: loader === 'weex' ? {
      'vue': 'Vue',
      'weex-vue-render': 'weexVueRenderer'
    } : {},
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.runtime.js',
        packages: resolve(__dirname, '../packages')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [resolve(__dirname, '../demo/src')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.vue$/,
          loader: loader + '-loader',
          options: {
            stylus: 'vue-style-loader!css-loader!stylus-loader',
            styl: 'vue-style-loader!css-loader!stylus-loader'
          }
        }
      ]
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: '// { "framework": "Vue" }\n',
        raw: true
      })
    ].concat(isDev ? [
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          IP: JSON.stringify(require('ip').address())
        }
      })
    ] : [])
    .concat(loader === 'vue' ? [
      new HtmlWebpackPlugin({
        template: 'demo/index.tpl'
      }),
      new webpack.ProvidePlugin({
        Vue: 'vue/dist/vue.runtime.js'
      })
    ] : [])
  }
}
