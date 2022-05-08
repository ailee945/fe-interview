# loader-plugin

[toc]

## loader

编写原则：

- 单一原则
- 链式调用：Webpack 会按顺序链式调用每个 Loader
- 统一原则：遵循 Webpack制定的设计规则和结构，输入与输出均为字符串，各个 Loader 完全独立，即插即用

常见loader：

- file-loader
- url-loader
- babel-loader
- ts-loader
- style-loader
- css-loader
- postcss-loader
- less-loader/style-loader

## plugin

在编译的整个生命周期中，Webpack 会触发许多事件钩子，Plugin 可以监听这些事件，根据需求在相应的时间点对打包内容进行定向的修改。

```js
class Plugin{
   // 注册插件时，会调用 apply 方法
   // apply 方法接收 compiler 对象
   // 通过 compiler 上提供的 Api，可以对事件进行监听，执行相应的操作
   apply(compiler){
    // compilation 是监听每次编译循环
    // 每次文件变化，都会生成新的 compilation 对象并触发该事件
    compiler.plugin('compilation',function(compilation) {})
   }
}
```

```js
// webpack.config.js
module.exports = {
  plugins:[
    new Plugin(options)
  ]
}
```

常用的plugin：

- UglifyJsPlugin
- CommonsChunkPlugin
- ProvidePlugin
- HtmlWebpackPlugin
- MiniCssExtractPlugin
- OptimizeCssAssetsWebpackPlugin
- WebpackBundleAnalyzer
- CompressionWebpackPlugin
- HappyPack
- Environment
- CleanWebpackExtractPlugin

## loader/plugin区别

- loader就是模块转换，或者叫加载器，不同的文件需要不同loader进行处理
- plugin是插件，可以参与到整个webpack打包流程中，不同的插件在不同的时机做不同的事情
