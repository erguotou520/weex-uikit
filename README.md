# weex-uikit
一个weex的UI组件库

## Demo
https://erguotou520.github.io/weex-uikit/

## UI-KIT
UI规范参考 http://www.ui.cn/detail/194373.html

## How to use
由于`weex`限制较多，建议拷贝`packages`目录到自己的项目中来使用。另外demo中存在一些不在`packages`目录里的组件，
它们位于`demo/src/components`目录下，主要是一些业务组件，这些组件在使用时也请复制到自己的项目中。
除此之外你还需要安装`stylus`和`stylus-loader`来实现css的加载，命令为`npm i stylus stylus-loader -D`，
如果你需要修改样式，请直接修改`.vue`文件里的源码。具体使用方法请参考下面的文档和demo。

## Document
[Document](docs/API.md)

## Dev steps
1. clone
```shell
git clone git@github.com:erguotou520/weex-uikit.git
```
2. install dependencies
```shell
cd weex-uikit
npm i
```
3. run demo
```shell
npm run demo:dev
```
3. debug
```shell
npm run demo:debug
```
