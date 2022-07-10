# HTML

[toc]

## 什么是 HTML？

HTML，全称是 HyperText Markup Language，即超文本标记语言，它不是编程语言，而是一种用来告知浏览器如何组织页面的标记语言，用来描述网页的表现，展示效果或功能及行为

- “超文本”（hybertext) 是指连接单个网站或多个网站网页的链接
- HTML 使用“标记”（markup) 来注明文本、图片和其它内容
- HTML 通过“标签”（tag）标记元素，标签由在`<`和`>`中包裹的元素名组成
- HTML 标签里的元素名不区分大小写。可以用大写、小写或混合形式书写

## 常用的浏览器引擎

浏览器是一种从 Web 获取和显示页面的程序，让用户通超链接访问更多页面

排版引擎（Layout Engine），也称为`浏览器引擎`（Browser Engine）、`页面渲染引擎`（Rendering Engine）或`样板引擎`，它是软件组件，负责获取标记式内容（如 HTML、XML 及图像文件等）和整理信息（如 CSS 及 XSL 等），并将排版后内容输出至显示器或打印机

常见的浏览器排版引擎分别是：

- Mozilla Firefox 使用 `Gecko` 引擎
- Apple Safari 和 早期 Google Chrome 使用 `KDE` 引擎，后发展成为 `WebKit` 引擎
- Internet Explorer 使用 `Trident` 引擎
- Microsoft Edge 早期使用 `EdgeHTML` 引擎
- Opera 早期使用 `Presto` 引擎
- 目前，Google Chrome 及基于 Chromium 浏览器，如 Microsoft Edge，Opera 使用基于 WebKit 分支自行构建的 `Blink` 引擎

## 请列举常用的 HTML 实体字符 ？

字符`<` `>` `"` `'` 和 `&` 等本身是 HTML 语法自身的特殊字符

表示其本身需要使用字符引用，即表示字符的特殊编码，每个字符引用以 & 开始，分号 ; 结束

## HTML注释

HTML 注释使用特殊标记`<!--`和`-->`包裹
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

- 利用无语义标签，如`<div>`和`<span>`可以满足几乎所有开发需求
- 可读性，可访问性和 SEO，使用语义化标签不是必须的
- 部分语义化标签存在兼容性问题，如 `<button>`的默认 type不总为 submit 等
- 滥用列表标签，会增加不必要的嵌套，增加额外的 CSS Reset 的样式

  HTML 语义化以外，良好的命名，简明扁平的结构，良好的无障碍设计，清晰的导航和分区，一定程度上，也能弥补语义的欠缺，提升代码的机器阅读体验，降低抓取难度，提高索引权重

## 连续空格如何渲染，意义是什么

- 为了代码的可读性，开发者通常会在 HTML 元素嵌套中使用空白
- 空白可以使用空格或 TAB 缩进实现
- HTML 解释器会将连续出现的空白字符减少为一个单独的空格符
- 如果一定要使用连续空格，可以使用全角空格或者实体字符 `&nbsp;`

## HTML文档声明

`<!DOCTYPE html>` 是最简单有效的文档类型声明，目的是防止浏览器在渲染文档时，切换到“怪异模式（兼容模式）”。确保浏览器按照最佳相关规范进行渲染，而不是使用一个不符合规范的渲染模式。

## 哪些字符集编码支持简体中文，如何解决 HTML 乱码问题 ？

支持简体中文的字符集编码

- GB 2312
  - 共收录 6763 个汉字，其中一级汉字 3755 个，二级汉字 3008 个，同时收录拉丁字母、希腊字母、日文平假名和片假名字母、俄语西里尔字母在内 682 个字符
  - 使用区位码“分区”，每区含有 94 个汉字 / 符号
    - 01 - 09 区为特殊符号
    - 16 - 55 区为一级汉字，按拼音排序
    - 56 - 87 区为二级汉字，按部署 / 笔画排序
  - 无法处理人名、古汉语中的罕用字和繁体字
- GBK
  - 汉字内码扩展规范
  - 拓展 GB 2312 - 80，拥有 23940 个码位，包括 21003 个汉字，883 个图形符号
  - 兼容 BG 2312 - 80，支持 希腊字母、俄语字母，不支持韩国字
- GB 18030
  - 国家标准 GB 18030 - 2005
  - 多字节编码，编码空间可定义 161 万个字元，包括 70244 个汉字
  - 完全兼容 GB 2312，基本兼容 GBK，支持少数民族文字、繁体汉字和日韩汉字
- BIG5
  - 大五码、五大码
  - 支持 13060 个中文文字
- Unicode
  - 万国码，国际码，统一码或单一码
  - 采用 ISO 10646 通用字符集，应用 UCS-2 使用 16 位编码空间，支持 65536 个字符
  - Unicode 转换格式即 UTF，UTF-8、UTF-16、UTF-32 是将数字转换到程序数据的编码方案
- UTF-8
  - 多字节编码，针对 Unicode 的可变长度字符编码
   使用 1 到 6 字节为每字符编码，实际最多 4 字节
    - 1 字节编码：ASCII 字符
    - 2 字节编码：带附加符号的拉丁文、希腊文、西里尔字母、亚美尼亚语、希伯来文、阿拉伯文、叙利亚文等字母
    - 3 字节编码：其他基本多文种平面（BMP）中字符（包含大部分常用字，汉字）
    - 4 字节编码：其他极少使用 Unicode 辅助平面的字符，如 Emoji 字符
- UTF-16
  - 介于 UT F-8 和 UTF-32 间，使用 2 字节或 4 字节存储，长度既固定又可变
- UTF-32
  - 固定长度的编码方案，不管字符编号大小，始终使用 4 字节存储

如何解决 HTML 汉字乱码问题

HTML 汉字乱码的原因：

- 客户端不支持 HTML 编码的字符集
- 实际存储的字符集与使用 meta 标签声明的字符集不一致
  - 部分现代浏览器会自动纠正，根据实际使用的字符集编码渲染 HTML
  
解决方法：

- 建议使用 utf-8 存储并在页面添加`<meta charset="utf-8">`声明编码类型

## 如何验证HTML是否正确

验证 HTML 的最好方法使用[W3C](https://validator.w3.org/)提交一个线上 URL，HTML 文件或者代码，网页会返回相应的错误报告

## 什么是HTML5，新特性有哪些？

- 什么是HTML5：HTML5 是定义 HTML 标准的最新版本，具有两个不同的概念：
  - HTML5 是一个新版本的 HTML 语言，具有新的元素，属性和行为
  - HTML5 有更大的技术集，允许构建多样化和更强大的网站和应用程序
- 新特性
  - 语义化：能够更恰当的描述内容是什么
    - 新的区块元素和段落元素：`<section>` `<artical>` `<header>` `nav` `<footer>` `<aside>` `<hgroup>`；嵌入和允许操作的新多媒体内容`<audio>` `<video>`
    - 表单的改进
      - 强制性校验API `required` `pattern` `minlength` `maxlength` `constraint validation API`
      - `<input>`标签的type属性值：color date detetime-local month range search tel time url
    - 其他新的语义元素
      - <> mark figure data time progress meter main output
    - `<iframe>`的改进：精准控制iframe元素的安全级别和期望的渲染：`sandbox` `srcdoc`
    - `<MathML>`用于描述数学公式
  - 连通性：通过创新的技术方法进行通信
    - Web Sockets：允许页面和服务器之间建立持久链接，并交换非HTML数据[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSockets_API)
    - Server-sent events：允许服务器向客户端推送事件[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events)
    - WebRTC: 支持浏览器客户端之间语音视频交流和数据分享的技术；浏览器原生支持点对点的分享应用数据和进行电话会议[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API)
  - 离线 & 存储：能够让网页在客户端本地存储数据并且更高效地离线运行
    - 离线资源：应用程序缓存`.manifest`上的资源，离线或资源没有更新时，浏览器会加载缓存的离线资源
    - 在线和离线事件
      - `navigator.onLine`返回在线 true 或离线 false
      - `online` 和 `offline` 事件
        - `window document` `document.body` 使用 `addEventListener`
        - `document` `document.body` 的 `.ononline` 或 `.onoffline` 属性设为一个 JavaScript `Function` 对象
        - `<body>` 标签上指定 `ononline="..."` 或 `onoffline="..."` 属性
    - WHATWG 客户端会话和持久化存储（又名 DOM 存储）
      - `Storage`
        - DOM 存储被设计为用户提供一个更大存储量，更安全，更便捷的存储方法
        - 代替掉将一些不需要让服务器知道的信息存储到 cookies 里的这种传统方法
        - 构造函数 Storage 及其实例
          - seesionStorage 全局对象，维护着页面会话期间有效的存储空间，重新载入或从崩溃中恢复不会丢失
          - localStorage 全局对象，本次持久化存储，隐身模式下关闭浏览器会丢弃
      - `IndexedDB`
        - 用于在客户端存储大量的结构化数据，包括文件 / 二进制大型对象（blobs）
        - 使用索引实现对数据的高性能搜索
      - 在 Web 应用程序中使用文件
        - File API：可以访问 `FileList`，包含表示用户所选择的 `File` 对象
          - `name` 文件名称，只读字符串，只包含文件名，不包含任何路径信息
          - `size` 以字节数为单位的文件大小，只读的 64 位整数
          - `type` 文件的 MIME 类型，只读字符串，当类型不能确定为 ""
        - 通过 `change` 事件访问被选择的文件
          - `this.files`
        - 通过 drogenter dragover drag 的 dataTransfer 的 files 中获取文件列表
        - 对象 URL window.URL.createObjectURL() 和 window.URL.revokeObjectURL()
  - 多媒体：加快普及video和audio应用，丰富Web表现力
    - HTML5 音视频
      - `<video>` 和 `<audio>` 标签以及 JavaScript 和 APIs 用于对其进行控制
    - WebRTC
      - 支持在浏览器客户端之间语音 / 视频交流和数据分享的技术
      - 浏览器原生支持点对点的分享应用数据和进行电话会议
    - Camera API
      - 使用手机的摄像头拍照，然后把拍到的照片发送给当前网页
    - Track 和 WebVTT

      - `<track>` 元素怒被当作媒体元素 `<audio>` 和 `<video>` 的子元素
      - WebVTT（Web 视频文本跟踪格式）使用 `<track>` 元素现实定时文本轨道（如字幕或标题）的格式化，支持 VTTCue 和 VTTRegion 接口
  - 2D/3D绘图效果：提供定制图形、动画界面的新选择
    - Canvas
      - `<canvas>` 元素被用来通过 JavaScript （Canvas API 或 WebGL API）绘制图形及图形动画
      - HTML5 文本 API 由 `<canvas>` 支持
        - `fillText(text, x, y, [, maxWidth])` 在指定的 (x, y) 位置填充指定的文本
        - `strokeText(text, x, y, [, maxWidth])` 在指定的 (x, y) 位置绘制文本边框
      - WebGL
        - WebGL （Web 图形库） 是一个 JavaScript API，可在任何兼容的 Web 浏览器中渲染高性能的交互式 3D 和 2D 图形，无需使用插件
          - WebGL 引入 OpenGL ES 2.0，通过 canvas.getContext('webgl') 使用
          - WebGL 2 引入 OpenGL ES 3.0，通过 canvas.getContext('webgl2') 使用
      - SVG
        - SVG （可缩放矢量图形）是一种描述二维的矢量图形，基于 XML 的标记语言
        - 优雅而简洁地渲染不同大小的图形，并和 CSS，DOM，JavaScript 和 SMIL 等其他网络标准无缝衔接
        - 可以搜索、索引、编写脚本和压缩，也可以使用任何文本编辑器和绘图软件来创建和编辑 SVG
  - 性能&集成：提供作用显著的性能优化方案，更有效的使用和设备硬件
    - Web Workers
      - 为 Web 内容在后台线程中运行脚本提供一种简单方法
      - 线程可以执行任务而不干扰用户界面
      - 专用 worker
        - new Worker() 构建
        - 通过 `postMessage()` 和 `onmessage` 事件函数发送和接收消息
      - 共享 worker
        - new SharedWorker() 构建
        - 通过 `postMessage()` 和 `onmessage` 事件函数发送和接收消息
          - worker 中需先使用 `onconnect` 获取 `port`
    - XMLHttpRequest Level 2
      - 可以设置 HTTP 请求的时限
      - 可以使用 FormData 对象管理表单数据
      - 可以上传文件
      - 可以请求不同域名下的数据（跨域请求）
      - 可以获取服务器端的二进制数据
      - 可以获得数据传输的进度信息
    - 即时编译的 JavaScript 引擎
      - 新一代的 JavaScript 引擎更强大，性能更杰出
    - History API
      - History 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录
        - 属性
          - History.length 返回一个整数，该整数表示会话历史中元素的数目，包括当前加载的页
          - History.scrollRestoration 允许 Web 应用程序在历史导航上显式地设置默认滚动恢复行为。此属性可以是自动的（auto）或者手动的（manual）
          - History.state 返回一个表示历史堆栈顶部的状态的值。这是一种可以不必等待 popstate 事件而查看状态的方式
        - 方法
          - History.back() 在浏览器历史记录里前往上一页，用户可以点击浏览器左上角的返回按钮模拟此方法，等价于 history.go(-1)
          - History.forward() 在浏览器历史记录中前往下一页，用户可以点击浏览器左上角的前进按钮模拟此方法，等价于 history.go(1)
          - History.go() 通过当前页面的相对位置从浏览器历史记录（会话记录）加载页面
          - History.pushState() 按指定的名称和 URL（如果提供该参数）将数据 push 进会话历史栈，数据被 DOM 进行不透明处理，你可以指定任何可以被序的 JavaScript 对象
          - History.replaceState() 按指定的数据，名称和 URL（如果提供该参数）更新历史栈上最新的入口。这个数据被 DOM 进行了不透明处理。您可以指定任何可以被序列化的 JavaScript 对象
    - Content Editable
      - HTML 中任何元素都可以被编辑，设置 contenteditable 属性为 true 即可
      - HTML5 将此属性标准化
    - HTML 拖放 API
      - HTML 拖放（Drag and Drop）接口使应用程序能够在浏览器中私用拖放功能
      - 引入拖放功能的基本步骤
        - 确定可拖拽元素
          - 给元素添加 draggable 属性，添加全局事件处理函数 ondragstart
            - 定义拖拽数据
            - 通过 `drag event` 的 `dataTransfer` 属性访问事件数据
            - 通过 `dataTransfer` 的 `setData()` 方法为拖拽数据添加一个项
            - 通过 `dataTransfer` 的 `setDrageImage` 方法定义拖拽图像
            - 通过 `dataTransfer` 的 `dropEffect` 属性定义拖拽效果
              - copy 表明拖拽的数据将从它原本的位置拷贝到目标的位置
              - move 表明被拖拽的数据将被移动
              - link 表明拖拽源位置和目标之间将会创建一些关系表格或是连接
        - 确定放置区域
          - 给元素添加 ondragover 和 ondrop 事件处理程序属性
        - 定义放置效果
          - 通过 dataTransfer 的 dropEffect 属性定义拖拽效果
        - 拖拽结束
          - 拖拽操作结束时，在源元素（开始拖拽时的目标元素）上触发 dragend 事件
          - 不管拖拽是完成还是取消，这个事件都会被触发
    - HTML 焦点管理
      - DOM 属性 `activeElement` 与方法 hasFocus() 为程序按提供了更好的控制页面交互的能力，特别是丢与用户行为引发的交互
        - `activeElement` 只读属性，用来返回当前在 DOM 或者 shadow DOM 树中处于聚焦状态的 Element
        - `Document.hasFocus()` 方法返回一个 `Boolean`，表明当前文档或者文档内的节点是否获得了焦点。该方法可以用来判断当前文档中的活动元素是否获得了焦点
      - 两者关系
        - 获得焦点的元素一定是当前文档的活动元素
        - 一个文档中的活动元素不一定获得了焦点
    - 基于 Web 的协议处理程序
      - 使用 `navigator.registerProtoolHandler(scheme,url, title)`方法把 web 应用程序注册成一个协议处理程序
    - requestAnimationFrame
      - 传入一个回调函数，该回调函数会在浏览器下一次重绘之前执行
    - 全屏 API
      - 全屏 API 为使用用户的整个屏幕展现网络内容提供了一种简单的方式，不需要时退出全屏模式
      - 方法
        - Document.exitFullscreen() 用于请求从全屏模式切换到窗口模式，会返回一个 Promise，会在全屏模式完全关闭的时候，被重置为 resolved 状态
        - Element.requestFullscreen() 请求浏览器将特定元素置为全屏模式，隐去屏幕上的浏览器所有 UI 元素，以及其它应用
      - 属性
        - DocumentOrShadowRoot.fullscreenElement fullscreenElement 属性提供了当前在 DOM（或者 shadow DOM）里被展示为全屏模式的 Element，如果这个值为 null，文档不处于全屏模式
        - Document.fullscreenEnabled fullscreenEnabled 属性提供了启用全屏模式的可能性。当它的值是 false 的时候，表示全屏模式不可用
      - 事件处理程序
        - Document 事件处理程序 onfullscreenchange 和 onfullscreenerror
        - Element 事件处理程序 onfullscreenchange 和 onfullscreenerror
    - 指针锁定 API
      - 光标移到浏览器或者屏幕区域之外，指针锁定也能够让你访问鼠标事件
      - 指针锁定是持久性的。指针锁定不释放鼠标，直到作出一个显式的 API 调用或者用户使用一个专门的释放手势
      - 指针锁定不局限于浏览器或者屏幕边界
      - 指针锁定持续发送事件，而不管鼠标按钮状态如何
      - 指针锁定隐藏光标
      - 指针锁定目前需要先进入全屏模式 requestFullscreen() 然后执行 requestPointerLock() 方法
    - 在线和离线事件
      - navigator.onLine 返回在线 true 或离线 false
      - online 和 offline 事件
        - window document document.body 使用 addEventListener
        - document document.body 的 .ononline 或 .onoffline 属性设为一个 JavaScript Function 对象
        - `<body>` 标签上指定 ononline="..." 或 onoffline="..." 属性
  - 设备访问 ：能够处理各种输入和输出设备
    - Camera API
      - 使用手机的摄像头拍照，然后把拍到的照片发送给当前网页
    - 触摸事件
      - 触摸事件提供了在触摸屏或触控板商解释手指（或触控笔）活动的能力
      - 触摸事件接口可为程序提供多点触控交互的支持，分为开始、移动、结束三个阶段
      - 接口
        - TouchEvent 接口将当前所有活动的触摸点封装起来
        - Touch 接口表示单独一个触摸点，其中包括浏览器视角的相对坐标
        - TouchList 表示一组 Touch，用于多点触控的情况
    - 使用地理位置定位
      - 地理位置 API 允许用户向 Web 应用程序提供他们的位置
      - 出于隐私考虑，报告地理位置和前会先请求用户许可
      - 方法，通过 navigator.geolocation 提供
        - getCurrentPosition(success[, error[, options]]) 用来获取设备当前位置
        - watchPosition(success[, error, options]]) 用于注册监听器，在设备的地理位置发生改变的时候自动被调用，返回一个 id
        - clearWatch(id) 清除注册的位置及错误监听器
    - 检测设备方向
      - DeviceOrientationEvent 它会在加速度传感器检测到设备在方向上产生变化时触发
      - DeviceMotionEvent 它会在加速度发生改变时触发
    - 指针锁定 API
      - 光标移到浏览器或者屏幕区域之外，指针锁定也能够让你访问鼠标事件
      - 指针锁定是持久性的。指针锁定不释放鼠标，直到作出一个显式的 API 调用或者用户使用一个专门的释放手势
      - 指针锁定不局限于浏览器或者屏幕边界
      - 指针锁定持续发送事件，而不管鼠标按钮状态如何
      - 指针锁定隐藏光标
      - 指针锁定目前需要先进入全屏模式 requestFullscreen() 然后执行 requestPointerLock() 方法
  - 样式设计：支持创作更复杂的主题

## 什么是MIME，常见的MIME有哪些

媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，是指示文件类型的字符串。他与传统windows上文件扩展名有相同的目的，主要有两种类型`text/plain`表示文本文件的默认值，它是人类可读的，不包含二进制； `application/octet-stream`表示所有其他情况的默认值

## 什么是ARIA

ARIA(Accessible Rich Internet Application)是能够让残障人士更加便利的访问Web内容和使用Web用用的一套机制；

- ARIA 是对超文本标记语言（HTML）的补充，以便在没有其他机制的情况下，使得应用程序中常用的交互和小部件可以传递给辅助交互技术
- ARIA 是一组特殊的易用性属性，可以添加到任意标签上，尤其适用于 HTML。role 属性定义了对象的通用类型（例如文章、警告、或幻灯片）。额外的 ARIA 属性提供了其他有用的特性，例如表单的描述或进度条的当前值
- ARIA 在大多数流行的浏览器和屏幕阅读器中得到了实现
- 开发人员应该更倾向使用对应的语义化 HTML 元素，而不是使用 ARIA

## 什么是HTML标签

- HTML 超文本标记语言标记标签通常被称为 HTML 标签
- HTML 标签是 HTML 语言中最基本单位和重要组成部分
- HTML 标签不区分大小写，从一致性、可读性等方面来说，最好仅使用小写字母
- HTML 标签以尖括号（ <> ）开始和结束
  - 通常成对出现，分别是开始标签和结束标签，也可以称为开放标签和闭合标签
  - 自闭合标签只有其本身，在开始标签中自动闭合

## 什么是HTML元素

HTML 元素是指从开始标签到结束标签的所有代码

- 开始标签：包含元素的名称，被左、右角括号所包围。表示元素从这里开始或者开始起作用
- 结束标签：与开始标签相似，只是其在元素名之前包含了一个斜杠，表示着元素的结尾
- 内容：元素的内容
- 元素：开始标签、结束标签与元素相结合，便是一个完整的元素

## HTML元素有哪些分类和方法

- 按闭合特征分：双标签和单标签
- 按显示方式分：
  - 行内元素
    - 只占据对应标签边框所包含的空间
  - 块级元素
    - 占据父元素的整个空间
    - 通常浏览器会在元素前后另起一行
    - 可包含块级元素和其他内联元素
- 按HTML5规范文档分类
  - 主内容类
    - 元数据内容
    - 流式元素
    - 章节元素
    - 标题元素
    - 短语元素
    - 嵌入元素
    - 交互元素
  - 表单相关类
    - 可列举元素button
    - 可标签元素, 可以和label配合使用的元素
    - 可提交元素button input object select textare
    - 可重置元素 input output select textarea
  - 特殊内容类
    - 支持脚本元素script template
    - 透明内容模型元素del ins

## 什么HTML头部元素

HTML 头部元素，即 `<head>` 元素

- HTML 头部元素的内容不会在浏览器中显示
- HTML 头部元素的作用是保存页面的标题、元数据

## 什么是元数据

简单来说，元数据就是描述数据的数据，在HTML文件的头部元素中，共有4种类型

- 设置了name属性
  - meta 元素提供的是文档级别（document-level）的元数据，应用于整个页面
  - meta 指定了元素的类型，说明该元素包含了什么类型的信息
  - 与 content 一起使用，后者指定实际的元数据内容，用来添加 author description 用于提交作者、摘要和 SEO
- 设置了http-equiv属性
  - meta 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同
  - content-security-policy
    - 允许页面作者定义当前页的内容策略
    - 指定允许的服务器源和脚本，有助于防止跨站点脚本攻击（XSS）
  - content-type
  用于声明文档类型，如 text/html; charset=utf-8
  - default-style
    - 设置默认 CSS 样式表组的名称
    - content 属性的值必须匹配同一文档中一个 link 元素上的 title 属性的值
  - x-ua-compatible
    - content 属性必须为 IE=edge
  - refresh
    - content 只包含一个正整数，则为重新载入页面的时间间隔（秒）
    - content 包含一个正整数，并且后面跟着字符串 ;ulr= 和一个合- 法的 URL，则是重定向到指定链接的时间间隔（秒）
- 设置了charset属性
  - meta 元素是一个字符集声明，告诉文档使用哪种字符编码
  - 值与 ASCII 大小写（ASCII case-insensitive）无关，如 utf-8
- 设置了itemprop属性，meta 元素提供用户定义的元数据
  - content 属性对应用户定义的值，可用于数据标记和结构化数据提交
  - property 属性通常与 itemprop作用一致，如 Facebook 编写的元数据协议（Open Graph protocol）使用 property 声明属性名

## 什么是open graph protocol

元数据协议（Open Graph Data）由 Facebook 编写制定的 Metatags 规格，用来标注页面

- 帮助社交媒体、搜索引擎高效、准确地获取网页的标题、主图及元数据
- 使得网页在社交分享及搜索结果中有更好的展现
- 除网页外，还可以用于声明将音乐、视频、文章、书籍、用户信息等转换为图形对象
- 应用元数据协议，需要在页面添加 `<meta>`标签放在网页的 `<head>` 中，其中包括：
  - 基本元数据
  - 可选元数据
  - 某些属性可以附加额外的元数据

## 给页面添加标题都有哪些最佳实践

页面标题通过 `<title>` 定义文档的标题

- 显示在浏览器的标题栏或者标签页
- 只包含文本，若是包含有标签，则它包含的任何标签都将被忽略
- 页面标题的内容对搜索引擎优化（SEO）具有重要意义
- 通常，较长的描述性标题要比简短或一般性标题更好
  - 标题的内容是搜索引擎算法用来确定在搜索结果中列出页面顺序的因子之一
  - 同样，标题是初始的“挂钩”，您可以通过它吸引浏览搜索结果页面的读者的注意力

## 常见的内容结构标签都有哪些，为什么我们需要结构化

- 1.常见内容结构标签
  - 1.1 章节
  
  |元素|描述|
  |:---:|:---:|
  |mian|定义文档中主要或是重要的内容|
  |header|定义页面或章节的头部。包含logo、页面标题和导航性的内容|
  |footer|定义页面或章节的尾部。包含版权信息、法律信息和反馈建议用的地址|
  |body|代表HTML文档的内容。在文档中只能有一个body|
  |section|定义文档中的一个章节|
  |nav|定义只包含导航链接的章节|
  |artical|可以定义独立于内容其余部分的完整独立内容块|
  |aside|定义和页面内容关联度较低的内容，如果被删除剩下的内容依然合理|
  |address|定义包含联系信息的一个章节|
  |h1-h6|文档标题，简要描述章节的主题|

  - 1.2 组织

  |元素|描述|
  |:---:|:---:|
  |`<p>` |定义一个段落|
  |`<hr>` |代表章节、文章或其他长内容中的段落之间的分隔符|
  |`<pre>` |代表其内容已经预先排版过，格式应当保留|
  | `<blockquote>` |代表引用自其他来源的内容|
  | `<ol>` |定义一个有序列表|
  | `<ul>`| 定义一个无序列表|
  | `<li>` |定义列表中的一个列表项|
  | `<dl>` |定义一个定义列表（一系列术语和其定义）|
  | `<dt>` |定义一个由下一个` <dd> `定义的术语|
  | `<dd>` |代表出现在它之前的术语的定义|
  | `<figure>`| 代表一个和文档有关的图例|
  | `<figcaption>` |代表一个图例的说明|
  | `<div>` |代表一个通用的容器，没有特殊含义|

- 2.为什么我们需要结构化
  - 2.1 便于用户在短时间内通过标题和开头找到相关内容，避免用户感到沮丧并离开
  - 2.2 搜索引擎将标题视为影响排名的关键因素，没有标题，影响 SEO
  - 2.3 严重视力障碍者使用听力，通过屏幕阅读器浏览网页。阅读器提供了快速访问给定文本内容的方法。通过听标题，用户能快速找到所需信息，而不需要听整个文档的大声朗读
  - 2.4 便于使用 CSS 或 JavaScript 时，定位相关内容的元素

## 列表标签都有哪些

- `<ol>` 定义一个有序列表，通常渲染为一个带编号的列表
- `<ul>`定义一个无序列表，表示一个内可含多个元素的无序列表或项目符号列表
- `<dl>` 定义一个定义列表或描述列表元素，是一个包含术语定义以及描述的列表，通常用于展示词汇表或者元数据（键值对列表）
  - `<dt>` 用于在一个定义列表中声明一个术语。该元素仅能作为 `<dl>` 子元素出现
  - `<dd>`用来指明一个描述列表`<dl>`元素中一个术语的描述

## 常见的标记引用标签

- 块引用
  - `<blockquote>`: 渲染时文字会有一定缩进；cite属性可以设置url
- 行内引用
  - `<q>`
- 引文
  - `<cite>`：可以包裹a标签进行显示

## 如何标记缩略语

使用`<abbr>`包裹缩略语或者缩写，在title属性中提供缩写的解释

`<acronym>`基本上与`<abbr>`相同，专门用于首字母缩写

## 如何标记作者的联系方式

`<address>`

## 标记化学方程式

利用sub下标和sup上标

```js
(X+1)<sub>2</sub>=4 // 数学公式
CO<sup>2</sup> // 化学方程式二氧化碳
```

## 标记计算机代码

- `<code>`
- `<pre>`
- `<var>`
- `<kbd>`
- `<samp>`

## 标记时间和日期

- `<time>`用来表示 24 小时制时间或者公历日期，表示日期时可以包含时间和时区, `<time>`意在以机器可读的格式表示日期和时间
  - `datetime`属性表示此元素的时间和日期，属性值必须是有效的日期格式，并可包含时间

## 如何设置副标题

简单的使用p标签包裹副标题，也可以使用hgroup标签(尽管已经从W3C规范中删除)

## 表象元素都有哪些

u b i, 不建议使用，使用css管理样式更加灵活、便与性能优化、维护、拓展

## HTML布局元素都有哪些

- `<main>` 呈现了文档的 `<body>` 或应用的主体部分，主体部分是文档的主题或主要功能
- `<article>` 元素表示文档、页面、应用或网站中的独立结构，可独立分配或复用
- `<section>` 表示在文档中的独立片段，通常包含一个标题
- `<aside>` 表示与页面主体无关，可以独立出来的部分
- `<header>` 用于展示简介，用于辅助导航或显示文章摘要，通常包含标题、Logo、搜索框、作者名称、发布时间
- `<nav>` 用于展示导航，包含到其他主要目录的链接
- `<footer>` 表示最近一个章节内容或者根节点元素的页脚。页脚通常包含该章节作者、版权数据或者与文档相关的链接
- `<address>` 表示联系信息，关联上下文，可以是地址、网址、邮箱、电话、社交账号等
- `<h1>` - `<h6>` 表示 6 个从小到大不同级别的标题， `<h1>` 级别最高， `<h6>` 级别最低

## 无语义元素有哪些，什么时候使用

`div` 和 `span` 以及 表象元素i, b, u

## 什么是可替换元素，为什么称之为可替换元素

可替换元素即展现效果不由 CSS 控制，而是引用外部对象，其外观独立于 CSS，大多数情况下，CSS 仅能影响可替换元素的**位置**和**定位方式**

- 典型的可替换元素 iframe video embed img 类型为image的input元素
- 有些元素特定情况下可作为可替换元素 option audio canvas object
- 匿名的可替换元素 用css content属性插入的对象

## 哪些标签会阻塞浏览器的渲染[掘金](https://juejin.cn/post/7028099795969392648)

- `script`标签会阻塞浏览器渲染
  - 内联script中的代码执行完毕后触发渲染
  - 外链script位于body中触发渲染之前的元素，位于其他位置不触发渲染
- `link`标签不阻塞dom解析，但是会阻塞渲染和其后js执行
- img video audio 等可替换标签不阻塞dom渲染，等渲染树生成且资源下载后再渲染

## 如何强制手机浏览器采用真实可视窗口宽度来加载网页

添加meta标签并设置viewport属性`<meta name=”viewport” content=”width=device-width">`

- `width=device-width` 宽度是设备屏幕的宽度

  常用于移动端自适应布局，并与以下设置项搭配使用：

  - `initial-scale=1.0` 表示初始缩放比例 1.0
  - `minimum-scale=1.0` 表示最小缩放比例 1.0
  - `maximum-scale=1.0` 表示最大缩放比例 1.0
  - `user-scalable=yes` 表示用户是否可以调整缩放比例

## 什么是HTML属性

HTML元素包含属性

- 不会出现在实际内容中
- 包含元素的额外信息，被用来配置元素和调整元素行为

## HTML元素必须包含哪些内容

- 一个空格 在属性和元素名称之间
- 属性名称，后面跟着一个等号
- 属性值，用一对双引号引起来

## 什么是布尔属性

值可以省略的属性

- 声明属性名，表示设置一个属性值与属性名相同的属性
- 不声明属性名，表示不具备该属性

## 属性值的引号可以省略吗

是可以的，但是当属性值包含空格、引号时可能引起浏览器误解，建议添加引号

## 如何链接到文档的特定内容

- 需要给链接的文档片段增加`id`属性
- 链接到特定id设置href属性
  - 不同url在文档结尾使用#指向id
  - 同一文档中，直接使用#指向id

## 浏览器如何对待引号没有闭合的属性，如何理解HTML的宽松解析

浏览器只解析非编译HTML

- 浏览器不会编译HTML为其他形式，而是直接解析并形成结果
- 解析HTML的过程比编程语言编译运行的过程要宽松的多

什么是宽松模式

- 通常代码的两种错误：语法错误逻辑错误
- HTML本身不易出现语法错误，出现语法错误时浏览器仍会解析HTML，但是会使用浏览器内建规则解析语法错误，不一定会符合开发者预期，还存在XSS、版式混乱、内容错误等隐患

为什么浏览器要采用宽松解析

- Web创建的初心就是人人可发布内容，不去纠结语法错误

## 什么是微数据[及应用场景](https://kayosite.com/html5-microdata.html)

HTML5 微数据允许通过特定的机器可读的标签来标记内容，只需向已有内容添加一组键值对

微数据由键值对组成，每一组称为项，每个键值对可以用属性表示

- itemscope
  - 用来声明一组微数据
- itemprop
  - 用来声明键名
    - 属性不同，值相同：一个标签，声明多个键名，空格分隔
    - 属性相同，值不同：多个标签，声明相同键名
  - 键值
    - 通常是字符串，即元素内容
    - URL
      - `<a>` 标签的 href 属性
      - `<img>` 标签的 src 属性
    - value
      - 对于不适合给人类展示的内容，使用 value 声明内容
      - `<meter>` 标签的 value 属性
      - `<time>` 标签的 datetime 属性
    - itemscope
      - 键值可以嵌套另一组微数据
- itemref
  - 用来关联不在 imtescope 所在标签的后代的属性
- itemtype
  - 指定结构化数据词汇的 URL，其中定义的标准且唯一的词汇用于 itemprop
  - 与 itemscope 一起使用用于设置词汇的生效范围
  - 使用词汇表，可以增加词汇的复用度，保持属性名唯一，避免冲突
  - Google 和其它主流搜索引擎支持 schema.org 结构化数据词汇，便于在搜索结果中丰富展示内容和形式
- itemid
  - 与 itemtype 一起使用，用于声明全局唯一标识符

## 如何创建一个下载链接

设置 a 标签的 download 属性

- 指示浏览器下载 URL 而不是导航到 URL，提示用户将其保存为本地文件
- 属性值可以在保存提示中用作预先填写的文件名
  - 斜杠 / 和反斜杠 \ 会被转换为下划线
  - 大多数文件系统限制一些标点符号，浏览器会相应地调整建议名称
- download 属性仅适用于同源 URLs
- 使用 blob: URLs 和 data: URLs方便用户下载 JavaScript 方式生成内容
  - 例如 Canvas，Base64 编码图片等
- 如果 HTTP 头存在 Content-Disposition 属性
  - 属性值不同于 download 设置值，HTTP 头优先使用此属性
  - 属性值设置为 inline
    - 火狐优先 Content-Disposition 的属性值
    - Chrome 优先 download 的属性值（如果与 Content-Disposition 不同）

## 图片为什么要设置alt属性

- 增加可访问性，通过屏幕阅读器浏览图片描述
- 图片无法加载时的替换文本
  - 图片路径、文件名错误等
  - 用户使用不支持的图片格式
  - 用户主动关闭图片以减少数据数据传输
- 便于SEO：用于网页搜索、图片搜索等索引图片和排名

## alt属性应填写什么内容

`alt`属性填写内容根据图片类型决定

- 装饰类型：用于css属性中的background-image，不填写alt属性
- 文本类型：填写文本本身，避免将文本放在图像里面
- 链接类型：提供无障碍链接文本，如链接到XX
- 内容类型：图片本身内容的描述

## 为什么要制定图片的高度和宽度

- 图片地址错误或者下载被禁用时，浏览器会显式的为图片留下一定空间
- 无需等待图片元数据下载完毕，先行渲染图片占位符，加载更加流畅，避免版式跳动
- `width` `height` 应始终设置真实尺寸，改变图片尺寸应使用CSS而不是HTML

## title属性填写什么内容

类似于超链接，title 属性用来提供进一步的支持信息

- 省略该属性：这个元素与最近祖先的标题仍然是相关的，可以用作元素的提示信息
- 值为空字符串：这个元素与最近祖先的标题是不相关的，不应用于这个元素的提示信息
- 与 alt 同时存在，alt 用于图片描述，title 用于进一步支持信息，比如点击放大

## 如何设置图片的说明文字

- 在图片的上下文中描述图片
- 使用图片的 alt 标签描述图片
- 使用图片的 title标签配合祖先标题描述图片
- 使用 `<div>`和`<p>`组合

  ```html
  <div>
    <img>
    <p>图片说明文字</p>
  </div>
  ```

- 使用 `<figure>` 和 `<figcaption>` 组合

  ```html
  <figure>
    <img>
    <figcaption>图片说明文字</figcaption>
  </figure>
  ```

## HTML图像和CSS图像什么区别

- HTML图像：指用`img`标签插入的图像，可以设置alt属性，提供备选文本，可以被屏幕阅读器识别
- CSS图像：指用`background`等属性放置的图像，用来提升视觉效果，没有语义，不能提供备选文本、难以被屏幕阅读器识别
- 如果对图像有意义，利于SEO优化，提高访问性，应使用HTML图像
- 没有意义，用作装饰，或者提高图片被猜忌、保存的难度，应使用CSS图像

## 什么是矢量图，他和位图的区别是什么

- 矢量图形：使用算法定义，包含图像和路径的定义，电脑可以根据这些定义计算出他们在屏幕渲染是呈现的样子，`.svg` 格式
- 位图：使用像素定义，包含每个像素位置和色彩信息。流行的位图格式`.bmp` `.png` `.jpg` `.gif`
- 区别：
  - 矢量图通常体积较小，放大后让清晰，透明无毛边
  - 位图通常体积较大，放大后图片变得像素化，透明有毛边

## 什么是SVG（Scalable Vector Graphics）

可缩放矢量图形，是用于描述二维的矢量图形，基于XML的标记语言，是基于文本由W3C自1999年开始开发的开放网络标准

- SVG 能够优雅而简洁地渲染不同大小的图形
- SVG 与 CSS、DOM、JavaScript 和 SMIL 等其它网络标准无缝衔接
- SVG 可以被搜索、索引、编写脚本和压缩，利于 SEO
- SVG 可以使用任何文本编辑器和绘图软件创建和编辑
- SVG 能被无限放大而不失真或降低质量
- SVG 相较于同样的位图体积更小
- SVG 可以适应样式/脚本，图像每个组件都是可以通过CSS或JavaScript编写样式的元素

## SVG对比光栅图形（位图）的优缺点是什么

优点：

- SVG 能够优雅而简洁地渲染不同大小的图形
- SVG 与 CSS、DOM、JavaScript 和 SMIL 等其他网络标准无缝衔接
- SVG 可以被搜索、索引、编写脚本和压缩，利于 SEO
- SVG 可以使用任何文本编辑器创建和编辑
- SVG 能被无限放大而不失真或降低质量
- SVG 相较于同样的位图体积更小
- SVG 可以适应样式 / 脚本，图像每个组件都是可以通过 CSS 或 JavaScript 编写样式的元素

缺点：

- SVG 容易变得复杂，文件大小会增加，复杂 SVG 会在浏览器中，会占用很长的处理时间
- SVG 可能比栅格图像更难创建，具体取决于您尝试创建哪种图像
- SVG 不被旧版浏览器（IE8 及以下浏览器）支持

由于上述原因，光栅图形更适合照片那样复杂精密的图像

## 如何在HTML中引入SVG

- `img`标签或者`background-：url()`属性
  - 优点：
    - 快速
    - 可以通过a元素嵌套img标签成为超链接
  - 缺点
    - 无法使用JS操作图像
    - 使用CSS控制SVG内容，必须在SVG代码中包含内联CSS样式，从SVG文件调用的外部样式不起作用
    - 不能使用css伪类来重制图像样式
- `svg`标签
  - 优点
    - SVG 内联减少 HTTP 请求，可以减少加载时间
    - SVG 可以分配 class 和 id，并使用 CSS 修改样式。无论是在 SVG 中，还是 HTML 文档中的 CSS 样式规则。可以使用任何 SVG 外观属性作为 CSS 属性
    - SVG 内联是唯一让你在 SVG 图像上使用 CSS 交互（ 如：:focus ）和 CSS 动画的方法
    - SVG 可以包在 `<a>` 元素中，使其成为超链接
  - 缺点：
    -SVG 只适用于在一个地方使用，多次使用会导致资源密集型维护
    -SVG 会增加 HTML 文件的大小
    -SVG 内联后，不能像普通图片一样被缓存
    -SVG 的 `<foreignObject>` 元素中包含回退，但支持 SVG 浏览器仍然会下载任何后备图像。需要考虑支持过时的浏览器，增加额外开销是否真的值得
- `iframe`标签（不推荐）
  - `<iframe>` 支持回退机制
    - 切换 `<iframe>` 的 src 后，点浏览器后退按钮，`<iframe>` 回退，主页面不会回退
  - 同源策略
    - 除非 SVG 和您当前的网页具有相同的 origin
    - 否则不能在主页面上使用 JavaScript 来操纵 SVG

## 为什么要使用响应式图片

- 美术设计问题：宽窄屏幕
- 分辨率切换问题：宽窄屏幕
- 使用相同显示效果的图片，但包含不同分辨率，切换不同分辨率照片
- 实用不同显示效果的图片，剪裁照片的不同部分

## 如何创建相应式图片

- 装饰性图片 `image-set`支持声明一组图像的地址，分辨率，和type
  
  ```cs
  background-image: image-set("1x.png" 1x, "2x.png" 2x, "3x.png" 3x)
  @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 264dpi) {
  /* 高分辨率下,如 iPad 2 的背景图 */
  background-image: url("3x.png")
  }
  ```

- 非装饰性图片
  - 添加meta标签，强制浏览器，特别是手机浏览器以设备宽度来加载网页
  
  ```html
  <meta name="viewport" content="width=device-width">
  ```

## 为什么不使用js来实现相应式图片

图片会在主解析器加载和解析js之前预加载，用于加快页面加载速度

- 当使用js检测可视窗口的宽度，想要改变图片时，原来的img标签中的src已经加载完成，从而产生重复加载违背相应式原理
- 使用js难以判断当前浏览器支持的图片类型，实现相应式加载图片类型
- 使用HTML的相应式图片属性
  - 可以让浏览器自动选择最合适的图片预加载，无需等待css和js加载和解析
  - 开启缓存的场景下，优先使用已被缓存的图片，进而节约流量，提高加载速度

## 如何调试相应式

使用浏览器的开发者工具（chrome->devtools->toogle device toolbar来模拟不同分辨率）

## 如何插入音频

HTML5使用`audio`元素用于在文档中插入音频内容

- 实用内嵌`<source>`提供不同的播放源，设置type属性，避免消耗大量时间和资源让浏览器尝试加载，浏览器会使用第一个支持的格式
- audio元素的src属性

## 如何插入视频

HTML5使用`video`元素用于在文档中插入视频

- 可以使用内嵌`<source>`提供不同播放源
  - 设置 type属性，避免消耗大量时间和资源让浏览器尝试加载
  - 浏览器会使用第一个支持的格式
- `<video>`标签支持 width / height 属性
- `<video>`标签支持 poster 属性设置缩略图

## 有哪些标签可以插入外部内容

- link 外部css、favicon.ico
- script 外部js
- img 外部图像
- audio 外部音频
- video 外部视频
- iframe 嵌入外部网页
- embed 嵌入插件（大部分浏览器已经取消）
- object 嵌入插件

## 兼容性较好的视频音频格式

视频

- MPEG-4即MP4格式
- WebM

音频

- MPEG Audio Layer 3 即 MP3 格式

## 如何使媒体文件支持不同的平台，不同设备的浏览器

使用`<source>`标签

- 设置type属性声明资源的MIME类型，增加资源的备选类型
  - 图像，优先使用现代图片格式，如webm avif， jpg png托底
  - 视频，优先使用webm，mp4托底
  - 饮品，优先使用mp3
- 使用替换内容，如图片的img标签嵌入flash支持老版本浏览器
  
## 如何为视频嵌入字幕

使用 `<track>` 标签

- 设置 src 属性，声明视频字幕的地址
  - 引用 WebVTT 格式 或者 TTML 时序文本标记语言格式的字幕地址
- 设置 kind 属性为 subtitles。subtitles 是默认值，这步可省略
- 设置 srclang 属性，从合法 BCP 47 语言标签中选择一种声明字幕语言
- 设置 label 属性，用户可读可选择语种

## 如何为视频设置缩略图

设置`<video>`的`poster`属性

## 为什么设置autoplay的视频无法自动播放

- 移动端普遍按流量付费，所以移动端浏览器在用户首次打开视频时
  - 忽略 autoplay的自动播放属性
  - 弹出确认框，询问用户是否使用流量播放视频
- 自动播放策略限制
  - 始终允许静音视频自动播放
  - 以下情况允许自动播放声音
    - 用户与域进行了交互（单击、点击等）
    - 桌面上，用户的媒体参与指数阈值已被超过，即用户之前曾播放过有声视频
    - 用户已将站点添加到其移动设备主屏幕或在桌面设备上安装了 PWA
  - 上层框架可以将自动播放权限委托给它们的 iframe，允许自动播放声音
- 策略影响版本
  - 音视频元素从 Chrome 66 起受自动播放策略限制
  - 网络音频从 Chrome 71 起受自动播放策略限制
    - 如果 AudioContext 在文档接收到用户手势之前创建，AudioContext.state 为 suspended，需在用户手势之后调用 resume() 开始播放
    - 用户主动点击节点，调用 start() 开始播放

## 什么是表格

- HTML表格是由行和列组成的数据集，用于表示结构化数据
- 三种实现方式
  - table：目前已经不用于布局，专注于数据格式化场景
  - div+css：大量数据的场景下，配合虚拟渲染，提高渲染性能，但不利于SEO
  - canvas：效率高于dom，主要用于在线文档等基于表格的应用

## 为什么使用css而不是table表格布局

- 渲染性能
  - 默认布局算法`table-layout：auto`：表格列宽度由内容决定，内容的改动很容易造成表格的重排
  - 虽然新布局算法加速了表格渲染，但对比流式布局、弹性布局、分栏布局和网格布局的性能仍然较低，特别是数据量较大或变动频繁时，table 可在优化后用于结构化数据，但仍然不适合用来布局
- 复杂结构
  - table布局，标签的层级至少有三级
  - 可读性和可访问性降低
- 自适应
  - 表格的列宽度由内容或首行内容决定
  - 设置宽度为 100% 的表格，需要额外设置维护布局
- 相应式
  - 表格的列数为无法只依靠 HTML + CSS 自动调整
    - 变通的方法是根据媒体查询，显示或隐藏列
  - 浮动、弹性和网格布局，可以更轻松根据屏幕，调整显示列数

## 常用的表格标签有什么

- table 表示表格数据
- caption 表格标题
- colgroup 表格列的分组
- col 加多少列分为一组
- thead 包含表格列头的行
- tr 行
- th 表头单元格
- tbody 包含表格内容的行
- td 单元格
- tfoot 包含表格各列汇总行

## 如何让表格实现跨行或者跨列

- 设置`colspan`属性，表示单元格跨列的数量
- 设置`rowspan`属性，表示单元格跨行的数量

## 如何为表格中的列设置相同的属性

- 使用伪类选择器，`nth-of-type` or `nth-child`

  ```css
  /* 首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从1开始排序，选择的结果为CSS伪类:nth-child括号中表达式（an+b）匹配到的元素集合（n=0，1，2，3...） */
  td:nth-child(2n+1) /* 奇数行 */
  td:thh-child(odd) /* 奇数行 */
  td:thh-child(2n) /* 偶数行 */
  td:thh-child(even) /* 偶数行 */
  td:thh-child(even) /* 偶数行 */
  ```

  ```css
  /* 针对具有一组兄弟节点的标签, 用 n 来筛选出在一组兄弟节点的位置 */
  td:nth-of-type(2n+1)
  ```

  - 使用列表分组标签`colgroup`和~`col`

## 如何为表格增加标题

使用`<caption>`标签

## 表格结构标签有哪些，为什么要使用结构标签

表格的结构标签有`<thead>` `<tbody>` `<tfoot>` 分别对应表头，正文，页脚（最后一行）

作用

- 定义表格更加结构化，便于维护、数据标记和识别
- 便于布局，表头（首行）和页脚（最后一行）可以独立于正文布局，利于大数据展示和打印
- 便于应用样式，可以使用 CSS 标签选择器，单独对表头、页脚和正文设置不同的样式

## 如何定义表格的列标题和行标题

设置表头单元格 `<th>` 的 `scope` 属性

- `scope="col"` 列标题
- `scope="colgroup"` 跨列标题
- `scope="row"` 行标题
- `scope="rowgroup"` 跨行标题

## 如何精确设置表格标题和单元格之间的联系

- 设置表头单元格 `<th>` 的 id 属性，添加唯一 id
- 设置单元格 `<td>` 的 headers 属性，包含从属于标题的表头单元格的 id 空格分隔

  ```html
  <table>
    <caption>表格标题</caption>
    <thead>
      <tr><th id="colgroup_1">列标题 1</th><th colspan="2" id="colgroup_2">跨列标题 2 - 3</th></tr>
      <tr><th id="col_1">列标题 1</th><th id="col_2">列标题 2</th><th id="col_3">列标题 3</th></tr>
    </thead>
    <tbody>
      <tr><th id="row_1">行标题</th><td headers="colgroup_2 col_2 row_1">2</td><td headers="colgroup_2 col_3 row_1">3</td></tr>
      <tr><th rowspan="2" id="row_2">跨行标题</th><td headers="colgroup_2 col_2 row_2">2</td><td headers="colgroup_2 col_3 row_2">3</td></tr>
      <tr><td headers="colgroup_2 col_2 row_2">2</td><td headers="colgroup_2 col_3 row_2">3</td></tr>
      <tr><td headers="colgroup_1 col_1">1</td><td headers="colgroup_2 col_2">2</td><td headers="colgroup_2 col_3">3</td></tr>
      <tr><td headers="colgroup_1 col_1">1</td><td headers="colgroup_2 col_2">2</td><td headers="colgroup_2 col_3">3</td></tr>
    </tbody>
  </table>
  ```

## 什么是HTML表单

HTML表单负责数据采集，收集的数据被发送到Web服务器，由三个基本部分组成

- 表单标签
  - 处理表单数据所需URL
  - 提交到服务器的方法和编码
- 表单域
  - 有多个表单部件组成
  - 用户填写信息的区域
- 表单按钮
  - 提交按钮、重置按钮、一般按钮
  - 用于发送数据或重置用户输入的内容

## 如何设置input和textarea的初始值

- `input`标签使用`value`属性设置初始值
- `textarea`标签使用替换文本设置初始值(placeholder或者标签内文本)

## button有哪几种类型

三种`type`

- submit，以表单标签声明的方法和编码，提交表单数据到form标签action属性定义的URL
- reset，将表单域中的表单不见重新设置默认值
- button，适用于js构建定制按钮

## 使用input和button生成的按钮有什么不同

- input生成的按钮：
  - value同时设置显示值和提交值，只支持纯文本
  - type支持button submit reset三种基本按钮类型
    - 还支持单选radio 复选checkbox 颜色选择color 带图像的提交按钮image 稳健选择按钮file
  - 兼容性好
- button生成的按钮
  - value设置提交值，只支持纯文本
  - 开始标签和结束标签之间的替换内容支持HTML也支持伪元素
  - type支持button submit reset三种基本形态的按钮
    - 也支持menu

## 那些表单属性与向Web服务器发送数据有关

- `<form>`的以下属性
  - action属性，设置表单提交URL，能被提交按钮的formaction属性覆盖
  - method属性，设置HTTP方式提交表单的方法
    - post 表单数据包含在请求体内发送给服务器
    - get 表单数据以查询字符串的方式拼接在URL中，用？作为分隔符
    - dialog 表单在`<dialog>`中，提交时关闭对话框
  - enctype属性设置提交表单服务器MIME类型，能够北提交按钮的formenctype属性覆盖
    - application/x-www-form-urlencoded 未指定属性时的默认值
    - multipart/form-data 表单域中包含文件上传部件时使用
    - text/plain 用于 HTML5 调试
- 表单部件的以下属性
  - name，表单控件的名称，提交键值对的键名
  - value，表单控件的值，提交的兼职对的键值

## 表单元素一定要用form包裹吗，不包裹会怎么样

不一定要用form包裹

- HTML5 支持表单元素的 form 属性
  - 显式地将不在表单中的元素与表单绑定
  - IE 浏览器及老版本的现代浏览器不支持该属性
- 不包裹，也没有设置 form 属性
  - 表单元素除默认行为外，不会有与表单定义的验证或与 Web 服务器的交互行为
  - 需要使用 JavaScript 定义它们的行为

## 可以在表单里面嵌套另一个表单吗

不可以，根据W3C规范：form 元素的 Content model 允许包含 流式内容，但不允许出现 form

如果在表单元素里面嵌套另一个表单元素，不同浏览器的表现行为不一致

## 如何分组表单元素

`<fieldset>`用于表单小组件分组

- 标题由其中第一个`<legend>`元素决定
- 可设置form属性，用于将其中的一组元素于指定表单关联
- 可设置disable属性，用于禁用其中不在`<legend>`的表单元素

  ```html
  <form>
    <fieldset>
      <legend>health information</legend>
      height: <input type="text" />
      weight: <input type="text" />
    </fieldset>
  </form>
  <form>
    <fieldset>
      <legend>user information</legend>
      name: <input type="text" />
      age: <input type="text" />
    </fieldset>
  </form>
  ```

## 如何将标签链接到表单元素，链接后有什么好处

方法

- 将表单元素嵌套在`<label>`中（部分屏幕阅读器不支持）
- 设置for属性，指向同一文档中可关联标签的id属性

好处

- 标签被点击时，关联的表单元素自动获取焦点
- 屏幕阅读器会将标签中的文字与表单元素联系在一起朗读
  - 可以读出需要填写的内容
  - 读出该表单元素是否必填

## 如何创建一个姓名为必填项的表单，满足语义和可访问性的要求

- 表单元素的说明放在同一个标签中
  - 便于屏幕阅读器关联后一起阅读
- 避免使用嵌套，而是使用for属性
  - 语义结构清晰
  - 避免部分屏幕阅读器不支持

  ```html
    <label for="name">
      姓名:
      <abbr title="required">*</abbr>
    </label>
    <input id="name" type="text" name="name" />
  ```

## 如何禁用表单元素

给表单元素增加disabled属性

禁用一组表单，将一组表单元素放在`<fieldset>`，给它添加disabled属性

## 如何让让表单元素自动对焦

给表单元素增加autofocus属性

文档中只有一个表单元素可以设置autofocus属性，多个表单设置autofocus属性只有第一个表单元素会自动对角

## 如何将表单元素与表单关联

- 将表单元素放在`<form>`中
- 设置表单元素的form属性，指向`<form>`的id
- 通过js设置表单元素关联，调用form的submit方法

## 如何允许用户一次性输入多个电子邮件地址，逗号分隔

- 使用email类型的input

  ```html
    <form action="">
      <input type="email" multiple />
      <button>submit</button>
    </form>
    <form>
  ```

- 使用text类型的input，增加正则校验
  
  ```html
  <input
    type="text"
    pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9\-\.]+)+([,]\s*([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9\-\.]+))*$"
  />
  <input type="submit" />
  ```

## 那些类型的输入框默认会对用户输入的内容进行前端校验

- 日期时间类：date month week time
- 颜色选择类：color
- 数字输入类：number
- 电话号码类：tel
- 文件选择类：file
- 邮箱输入类：email
- 网址输入类：url

## 多行文本框和单行文本框的区别是什么

- [可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)：
  - textarea是可替换元素，规范中未列举，有固定的宽度和高度
  - input是可替换元素，拥有固定的宽度和高度
    - 通常认为，type为image时为可替换元素，其他类型时不是
- 自闭合标签：textarea不是自闭合标签，input是自闭合标签
- 值：textarea的值在标签中间，input的值通过value设置
- 属性：
  - textarea支持私有属性
    - rows和cols用于设置高度和宽度
    - wrap指定文本的换行方式：hard（自动插入换行符） soft（不自动插入换行符）
  - input支持私有属性type切换不同表单控件
- 换行符`n\`和回车符`\r`
  - `<textarea>`的值和`placeholder`支持`&#10;`换行符`&#13;`回车符
  - `<input>`的`value`和`placeholder`不支持`&#10;`换行符`&#13;`回车符

## HTML下拉框有哪两种实现方式

- 使用select搭配option实现

  ```html
  <select>
    <option value="选项 1">选项 1</option>
    <option value="选项 2">选项 2</option>
    <option value="选项 3">选项 3</option>
  </select>
  ```

- 使用input+datalist+option实现设置list属性关联datalist的id

  ```html
    <input type="text" list="datalist" name="datalist" />
    <datalist id="datalist">
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
    </datalist>
  ```

## 如何构建一个兼容老版本浏览器的自动补全输入框

可以在datalist标签中嵌入select和option标签，当datalist不被支持时展示下拉选项，提供用户手动输入内容的第二选择

```html
<label for="colorInput">What is your favorite color ?</label>
<input type="text" id="colorInput" list="colorList">
<dataList id="colorList">
  <label for="colorSuggestion">or pcik a color</label>
  <select>
    <option>Blue</option>
    <option>Red</option>
    <option>Orange</option>
    <option>Green</option>
    <option>Yellow</option>
    <option>Pink</option>
    <option>Purple</option>
    <option>White</option>
  </select>
</dataList>
```

## 如何构建单选框，如何构建复选框

单选框

- 设置`type="radio"`属性
- 相同的name同时只有一个能被选中
- 选中项具有checked属性，不会发送name的值

复选框

- 设置`type = "checked"`属性
- 表单被提交后可以获得提交键名和键值对字符串
- 选中项具有checked属性

## 如何在表单中发送图片中被点击时的坐标

- 设置 type=image
  - 支持与 `<img>` 元素的相同属性
  - 支持其它表单按钮的支持属性
- 使用图像按钮提交表单
  - 不会提交自身值
  - 会提交单击处相对于图像左上角的 X 和 Y 坐标
    - 以查询字符串的格式跟在 URL 后, 例如`https://www.leetcode-cn.com/?pos.x=100&pos.y=200` pos为图片的name

## 支持max和min的表单组件有哪些

- 数字选择器type = number range
- 时间选择器type = datetime-local month time week
- 进度条选择器`<progress>`
- 仪表选择器`<meter>`

## 哪种表单适合显示密码强度

- low 和 high 将范围划分为三个部分
  - 较低部分min-low
  - 中间部分low-high
  - 较高部分high-max
- `optimum`定义`<meter>`元素的最优解
  - 这个属性用来指示最优/最佳取值。它必须在正确的值域内（由最小值属性和最大值属性定义）。当使用了 low 和 high 属性时，它指明哪一个取值范围是更好的。例如，假设它介于最小值和 low 之间，那么 lower 区间就被认为是更佳的取值范围。
  - optimum 值在较低范围内，较低范围最优，中等范围一般，较高范围最坏
  - optimum 值在中等范围内，较低范围一般，中等范围最优，较高范围最坏
  - optimum 值在较高范围内，较低范围最坏，中等范围一般，较高范围最优
- `<meter>`颜色
  - 最优显示为绿色
  - 平均显示为黄色
  - 最坏显示为红色

## 实用GET和POST发送表单数据有何不同

根据 rfc-2616 规范，HTTP 协议中的 GET 和 POST 主要是语义上的区别

在浏览器的实现及应用中，存在 GET 和 POST 的最佳实践

[GET](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET) 发送表单数据

- 设置 `<form>`的 method 属性为 get
- 数据以查询字符串的形式被追加到 URL，参数上限受早期浏览器和 Web 服务器的限制
- 问号 ? 后跟查询字符串
- 符号 & 分隔开的键名键值对
- 默认缓存，受缓存策略控制
- 可回退
- 可收藏
- 参数随 URL 保存在浏览器历史中
- 适用于无副作用，幂等的请求

[POST](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 发送表单数据

- 设置 `<form>` 的 method 属性为 post
- 数据以查询字符串的形式附加到请求体中，参数上限可能受后端脚本限制，如 PHP 通过 max_input_vars 限制最大输入参数上限
- 包含请求行
  - Content-Type: application/x-ww-form-urlencoded
  - Content-Length: {请求体的数据长度}
- 默认不缓存，受缓存策略控制，可声明缓存
- 通常回退会触发重新提交警告，避免回放攻击
- 通常不可收藏
- 参数不随 URL 保存
- 适用于有副作用，非幂等的请求

## form的enctype属性都有哪些值，各自适合什么场景

- application/x-www-form-urlencoded 默认值，数据转换为键值对，用于不含文件的表单提交
- multipart/form-data 使用`<input>`标签上传文件时，必须设置此类型
- text/plain 表示纯文本形式，HTML5 新增，通常用于调试

## 什么是表单校验，为什么要进行表单校验

什么是表单校验：向Web应用输入或提交数据时，验证数据的过程就是表达校验

- 正确则允许数据继续提交后端或者后台服务
- 失败则提示错误类型、原因、位置或者更改意见等

为什么要进行表单校验

- 确保数据格式正确
  - 引导用户：引导用户输入符合预期的数据
  - 保护系统：避免不正确的格式影响程序的运行
- 信息安全
  - 保护用户：确保用户的密码足够安全，不易被暴力破解和泄漏
  - 减少攻击：经常与后段校验一起应用，减少恶意或伪造的数据提交

## 表单验证都有哪些类型

- 客户端校验
  - 校验时机：发生在应用端或者浏览器端，表单数据被提交到服务器端之前
  - 实时性：即时反馈
  - 作用：保证格式正确，保证信息安全
  - 方式：
    - js：第三方库
    - HTML5内置校验：require min max minlength maxlength pattern
    - HTML5+js
- 服务端校验
  - 校验时机：数据被提交到后端后
  - 滞后性：需等待服务器响应
  - 作用：供验重等需要查询数据库的校验，校验、过滤和清洗数据
  - 方式：通常采用ajax方式

## 如何使用HTML5内置的表单校验

- 校验属性
  - type 类型
  - 非空必填校验 required
  - 长度校验 minlength maxlength
  - 范围校验 min max step
- [Constraint Validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api) 约束验证 API
  - 属性
    - validationMessage 本地化消息
      - 描述元素不满足校验条件时的文本信息
      - 无需校验或满足校验条件时，为空
    - validity ValidityState 对象，每一个子项都返回布尔值
      - customError 是否设置了自定义错误
      - patternMismatch 是否匹配正则表达式
      - rangeOverflow 元素的值是否高于所设置最大值
      - rangeUnderflow 元素的值是否低于所设置最小值
      - stepMismatch 元素的值是否符合 step 属性规则
      - tooLong 元素的值是否超过最大长度
      - typeMismatch 元素的值是否出现语法错误
      - valid 元素的值是否有效
      - valueMissing 元素的值是否 required 且为空
      - willValidate 元素的值是否是在表单提交时被校验
  - 方法
    - checkValidity() 校验元素的值是否有效
    - reportValidity() 元素报告其校验状态，重新展示校验失败提示给用户
    - setCustomValidity(message) 为元素添加自定义的错误消息
- 伪类
  - :valid 有效
  - :invalid 无效
  - :in-range 在范围内
  - :out-of-range 超出范围

## 使用js发送表单数据有哪些方法

参见[mdn](https://developer.mozilla.org/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)

- 1. 构造请求参数
  - 构建查询字符串
    - 使用 ES
  
      ```js
      const buildParam = data => {
        const dataPairs = []
        for (const key in data)
          dataPairs.push(encodeURIComponent(key) + encodeURIComponent(data[key]))
        return dataPairs.join('&').replace(/%20/g, '+')
      }
      ```

    - 使用 FormData 对象
      - 将对象转为 FormData 对象

        ```js
        const buildParam = data => {
          const formData = new FormData()
          for (const key in data)
            formData.append(key, data[key])
          return formData
        }
        ```

      - 将表单元素构建 `FormData` 对象

        ```js
        const buildParam = form => {
          const formData = new FormData(form)
          return formData
        }
        ```

- 2. 然后，发送数据

  - 使用 XMLHttpRequest 对象

    ```js
    const send = (url, param, cb) => {
      const request = new XMLHttpRequest()
      request.addEventListener('load', e => cb(null, e => cb(e.target.responseText)))
      request.addEventListener('error', e => cb(e.message))
      request.open('POST', url)
      request.send(param)
    }
    ```

  - 使用 fetch 方法

    ```js
    const send = (url, param, cb) => {
      fetch(url, {
        method: 'POST',
        body: param
      }).then(response => cb(null, response)).catch(error => cb(error))
    }
    ```

## 如何自定义表单元素的样式

首先，由于表单元素先于 CSS 被添加到 HTML，早期的渲染依靠底层系统实现，至今，表单元素在不同浏览器，同一浏览器的不同系统版本中，存在不同的默认外观。

自定义表单样式的方法：

- 使用 JavaScript + HTML + CSS 重建表单元素，模拟其交互行为。最终通过 UI 组件库的方式供设计团队参考和业务开发调用。
  - 保持跨浏览器，跨操作系统的一致性
  - 可以自定义所有样式
  - 交互、校验、提交等都需要自己完成，代码多，复杂度高
  - JavaScript 出错或禁用，CSS 加载失败，都可能导致表单失效。在稳定性要求高的场景，需要能降级到原生表单元素
- 自定义原生表单元素的样式
  - 原生表单元素按应用 CSS 的难度 ，分为三类
  - 容易应用，跨平台不易出问题：`<form>` `<fieldset>` `<label>` `<output>`
  - 难应用，不同平台写不同属性：`<legend>` `checkbox` `radio` `placeholder`
  - 不推荐应用：`<select>` `<option>` `<optgroup>` `<datelist>` `<progress>` `<meter>`
  - 保持跨平台一致性
    - 字体和文本大小：继承父级元素的 CSS，而不使用系统默认样式

      ```css
      button, input, select, textarea {
      font-family: inherit;
      font-size: 100%;
      }
      ```

      - 盒子模型：保持相同的宽度和高度

        ```css
        button, input, select, textarea {
        -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
                box-sizing: border-box;
        }
        ```

      - 定位
        - `<legend>` 元素定位是 `<fieledset>` 父元素的上边框的最顶端
        - `<textarea>` 元素的垂直对齐由基线改为顶端对齐 vertical-align: top
      - 清除默认样式
        - `-moz-appearance` 清除 Firefox 表单元素的默认样式
        - `-webkit-appearance` 清除 Safari 和 Chrome 表单元素的默认样式
      - 使用 CSS 伪类定义表单组件的细节
      - CSS 2.1 支持 3 伪类：`:active` `:focus` `:hover`
      - CSS Selector Level 3 新增 4 伪类：`:enabled` `:disabled` `:checked` `:indeterminate`
      - CSS Basic UI Level 3 新增 9 伪类：`:default` `:valid` `:invalid` `:in-range` `:out-of-range` `:required` `:optional` `:read-only` `:read-write`
      - CSS Selector Level 4 新增： `:user-error`
