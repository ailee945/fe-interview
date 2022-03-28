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
- -Apple Safari 和 早期 Google Chrome 使用 KDE 引擎，后发展成为 WebKit 引擎
- Internet Explorer 使用 Trident 引擎
- Microsoft Edge 早期使用 EdgeHTML 引擎
- Opera 早期使用 Presto 引擎
- 目前，Google Chrome 及基于 Chromium 浏览器，如 Microsoft Edge，Opera 使用基于 WebKit 分支自行构建的 Blink 引擎

## 请列举常用的 HTML 实体字符 ？

字符< > " ' 和 & 等本身是 HTML 语法自身的特殊字符

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

1. 支持简体中文的字符集编码
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

2. 如何解决 HTML 汉字乱码问题

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
  |||
  |||
  |||
  |||
  |||
  - 1.2 组织

- 2.为什么我们需要结构化
  - 2.1 便于用户在短时间内通过标题和开头找到相关内容，避免用户感到沮丧并离开
  - 2.2 搜索引擎将标题视为影响排名的关键因素，没有标题，影响 SEO
  - 2.3 严重视力障碍者使用听力，通过屏幕阅读器浏览网页。阅读器提供了快速访问给定文本内容的方法。通过听标题，用户能快速找到所需信息，而不需要听整个文档的大声朗读
  - 2.4 便于使用 CSS 或 JavaScript 时，定位相关内容的元素
