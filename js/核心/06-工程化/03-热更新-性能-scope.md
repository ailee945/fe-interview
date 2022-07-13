# webpack

[toc]

## HMR

热更新流程

![ ](../../img/%E7%83%AD%E6%9B%B4%E6%96%B0%E5%9F%BA%E6%9C%AC%E6%B5%81%E7%A8%8B.png)

![ ](../../img/%E7%83%AD%E6%9B%B4%E6%96%B0%E6%B5%81%E7%A8%8B.png)

- 当修改了一个或多个文件；
- 文件系统接收更改并通知 webpack；
- webpack 重新编译构建一个或多个模块，并通知 HMR 服务器进行更新；
- HMR Server 使用 webSocket 通知 HMR runtime 需要更新，HMR运行时通过 HTTP 请求更新 jsonp
- HMR 运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新

## webpack性能优化

- 代码优化（无用代码消除DCE（dead code elimination））
  - UglifyJs
  - Tree-shaking
    - 通过代码静态分析，确定相应的依赖关系，以此消除引用了但是没用被使用的代码
    - 问题：1. 副作用函数无法被tree-shaking
- code-splite 代码分割技术
  - 懒加载或者异步加载避免打包称为一份代码过大，Webpack中使用splitChunkPlugin进行拆分
  - 按页面拆分
  - 按功能拆分
  - 按照文件修改频率拆分
- scope hoisting 作用域提升
  - 将分散的模块划分到同一个作用域中，避免了代码的重复引入，有效减少打包后的代码体积和运行时的内存损耗
- 编译性能优化
  - 更新webpack，提升编译性能
  - 实用dev-server/HMR提升开发效率
  - 缩小编译范围
    - modules: 指定模块路径，减少递归搜索；
    - mainFields: 指定入口文件描述字段，减少搜索；
    - noParse: 避免对非模块化文件的加载；
    - includes/exclude: 指定搜索范围/排除不必要的搜索范围；
    - alias: 缓存目录，避免重复寻址；
  - babel-loader
    - 忽略第三方库中已经被编译的代码
    - 实用cacheDirectory，可以缓存编译结果，避免多次重复编译
  - 多进程并发
    - webpack-parallel-uglify-plugin
    - HappyPack
  - 第三方库模块缓存：DLLPlugin和DllReferencePlugin
  - 使用分析
  - source-map
    - 开发: cheap-module-eval-source-map
    - 生产: hidden-source-map；
- 优化打包速度
  - 减少文件搜索范围
    - loader的test，include，exclude
  - webpack的压缩并行
  - HappyHack并发调用
  - babel缓存编译
  - Resolve在构建时指定查找模块文件的规则
  - 使用DLLPlugin
- 优化打包体积
  - 提取第三方库或通过引用外部文件的方式引入第三方库
  - 代码压缩插件UglifyJsPlugin
  - 服务器启用gzip压缩
  - 按需加载资源文件 require.ensure
  - 优化devtool中的source-map
  - 剥离css文件，单独打包
  - 去除不必要插件，通常就是开发环境与生产环境用同一套配置文件导致
  - Tree Shaking 在构建打包过程中，移除那些引入但未被使用的无效代码
  - 开启 scope hosting
  - 体积更小
  - 创建函数作用域更小
  - 代码可读性更好

## tree-shaking

作用：在打包的时候去除无用代码

原理：

- ES6模块引入是静态分析的的，所以在编译时能正确判断加载了哪些模块
- 分析程序流，判断那些变量未被使用、引用

特点：

- 有副作用的函数无法被tree-shaking
- 可以通过sideEffects指定哪些文件是有副作用的
- rollup和webpack对tree-shaking的层度不同
