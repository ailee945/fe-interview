# 布局

[toc]

## 盒模型

- box-sizing: content 标准盒模型

  宽度`width` 高度`height`指的是content

- box-sizing: border-box 替代盒模型

  宽度包含`content padding border`

- display: inline inline-block block
- [position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
  - static
  - relative 相对于元素本身进行偏移 left top
  - absolute **脱离文档流** 最近的非 static 定位祖先元素的偏移
  - fixed **脱离文档流** 相对于可视区域
  - sticky

## table布局

- table
- display: table

## float+margin

- 脱离*文档流*，但不脱流*文本流*
- 对自身的影响
  - 形成BFC
  - 位置尽量靠左上
- 对兄弟元素的影响
  - 上面放非float元素，旁边放float元素
  - 不影响其他块级元素位置
  - 影响文本流
- 对父级元素的影响
  - 高度塌陷
    - 伪元素清除浮动

      ```css
      .clear::before{
        display: block;
        content: "";
        clear: both;
        height: 0;
        visibility: hidden
      }
      ```

    - 父级元素 overflow: hidden(auto)
    - 父级元素定义高度
- 圣杯布局和双飞翼布局

## inline-block布局

inline-box之间的间隙是因为文字之间有间隙

- 容器的字体设置为0
- 子元素改成正常字体

## [flex布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

- display: flex

## 响应式布局

适配移动端布局

- 媒体查询，设置不同属性
- viewport设置固定宽度
- rem(html: 16px)

## 面试题

- 实现三栏布局和两栏布局
- absolute和fixed区别
- inline-box间距的产生原因和消除方式
- 如何清除浮动
  