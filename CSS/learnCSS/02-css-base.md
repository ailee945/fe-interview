# css基础

[toc]

## 1. 分类和权重

### 分类

元素选择器 伪元素选择器 类选择器 属性选择器 伪类选择器 id选择器 组合选择器() 否定选择器 通用选择器

### 权重

id+100; 类、属性、伪类+10; 元素、伪元素+1; 其他选择器+0

!impoortant优先级最高; 内联样式优先级高; 相同权重后写的生效

## 2. 性能

## 3. 非布局样式

### 1. 字体、字重、颜色、大小、行高

#### 字体

- 字体族: 添加字体族不需要引号

  衬线字、非衬线字体、等宽字体、手写体、花体

- 多字体 fallback

- 网络字体、自定义字体

- iconfont 图标字体

#### 字重

#### [行高](https://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/?shrink=1)

- 实现垂直居中

- 图片下面有空隙？
  - 内联元素默认按照基线对齐，和底线有偏差；
  - `vertical-align: bottom`
  - `display: block`

### 2. 背景、边框

- 背景
  - 背景颜色
    - rgb hsl()
  - 渐变色背景
  - 多背景叠加
  - 背景图片和属性(雪碧图)
- 边框
  - 属性：线型 大小 颜色
  - 边框背景图
  - 边框衔接(三角形)

### 3. 滚动、换行

- 滚动行为和滚动条
  - visible
  - hidden
  - scroll
  - auto
- 折行
  - overflow-wrap 通用换行控制
  - word-break 针对多字节文字
  - white-space 空白处是否换行

### 4. 粗体、斜体、下划线

- font-weight normal-400 bold-700 bolder\lighter实际而定
- font-style: italic
- text-decoration: none
- cursor: pointer

### 5. CSS hack

### 6. 面试

- 利用css美化checkbox
  - label display
- 选择器优先级
- 雪碧图 background-position
  - 性能
  - 大小
- 自定义字体
  - 字体图标
- base64使用
  - 减少HTTP请求
  - 使用小图片（体积增大）
- 伪元素和伪类的区别
  - 状态和元素；单冒号和双冒号
