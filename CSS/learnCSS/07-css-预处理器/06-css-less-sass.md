# 预处理器

[toc]

## 说明

- 嵌套: 反映层级和约束
- 变量和计算：减少重复代码
- Extend和Mixin代码片段
  - extend解决了mixin代码重复的问题
- 循环：使用于复杂有规律的样式
- import CSS文件模块化 相对于css本身性能好

## less

- `&` `&: hover`
- `@variant`
- MIxin 类写法
- Extend 公共样式写在一起`:extend(func)`
- 循环 利用mixin when(条件)
- 模块化 `@import`

## sass

- `&` `&: hover`
- `$variant`
- Mixin `@mixin` `@include func`
- Extend `@extend func`
- 循环 if(条件)
- 模块化`@import`

## stylus

## 面试题

- 分类
- 作用
  - 更好的组织css代码
  - 提高代码的复用性
  - 提升可维护性
- 能力
  - 嵌套
  - 变量 计算
  - mixin extend
  - 循环
  - import 文件模块化方案
- 缺点
  - 需编译
  - 学习成本
