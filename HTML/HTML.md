[toc]

# HTML

## 什么是 HTML？

HTML，全称是 HyperText Markup Language，即超文本标记语言，它不是编程语言，而是一种用来告知浏览器如何组织页面的标记语言，用来描述网页的表现，展示效果或功能及行为

- “超文本”（hybertext) 是指连接单个网站或多个网站网页的链接
- HTML 使用“标记”（markup) 来注明文本、图片和其它内容
- HTML 通过“标签”（tag）标记元素，标签由在<和>中包裹的元素名组成
- HTML 标签里的元素名不区分大小写。可以用大写、小写或混合形式书写

## 常用的浏览器引擎

浏览器是一种从 Web 获取和显示页面的程序，让用户通超链接访问更多页面

排版引擎（Layout Engine），也称为浏览器引擎（Browser Engine）、页面渲染引擎（Rendering Engine）或样板引擎，它是软件组件，负责获取标记式内容（如 HTML、XML 及图像文件等）和整理信息（如 CSS 及 XSL 等），并将排版后内容输出至显示器或打印机

常见的浏览器排版引擎分别是：

- Mozilla Firefox 使用 Gecko 引擎

- Apple Safari 和 早期 Google Chrome 使用 KDE 引擎，后发展成为 WebKit 引擎
- Internet Explorer 使用 Trident 引擎
- Microsoft Edge 早期使用 EdgeHTML 引擎
- Opera 早期使用 Presto 引擎
- 目前，Google Chrome 及基于 Chromium 浏览器，如 Microsoft Edge，Opera 使用基于 WebKit 分支自行构建的 Blink 引擎

## 请列举常用的 HTML 实体字符 ？

字符< > " ' 和 & 等本身是 HTML 语法自身的特殊字符

表示其本身需要使用字符引用，即表示字符的特殊编码，每个字符引用以 & 开始，分号 ; 结束

## HTML注释

HTML 注释使用特殊标记<!--和-->包裹
HTML 注释不会被渲染

- 会被传输

- 解析时，早期 IE 浏览器使用 HTML 注释区分版本

- 通常使用 UglifyJS 和 Terser 或正则匹配的方式，在生产环境删除注释

## HTML语义化的好处

语义是语言的含义，语义化是前端开发的专用术语，语义类标签是对内容的补充，表达标题摘要，文章结构、强调重点、丰富含义，避免歧义

HTML 语义化的好处包括

- 增强可读性，便于开发和维护

- 增强可访问性，便于屏幕阅读器定位和朗读

- 增强结构清晰度，利于 SEO

  HTML 语义化不是一定要执行的标准

- 利用无语义标签，如<div>和<span>可以满足几乎所有开发需求

- 可读性，可访问性和 SEO，使用语义化标签不是必须的

- 部分语义化标签存在兼容性问题，如 <button> 的默认 type不总为 submit 等

- 滥用列表标签，会增加不必要的嵌套，增加额外的 CSS Reset 的样式
  HTML 语义化以外，良好的命名，简明扁平的结构，良好的无障碍设计，清晰的导航和分区，一定程度上，也能弥补语义的欠缺，提升代码的机器阅读体验，降低抓取难度，提高索引权重