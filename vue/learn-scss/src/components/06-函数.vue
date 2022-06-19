<template>
  <div class="alert-success">成功</div>
  <div class="alert-warning">警告</div>
  <div class="alert-danger">危险</div>
  <a href="https://sass.bootcss.com/documentation/modules/string">函数-文档</a>
</template>

<script setup></script>

<style lang="scss" scoped>
// 差值语句
// #() 用于属性名 属性值 选择器 注释

// 颜色函数 $amount 取之0-100%之间
.alert-success {
  background-color: lighten(green, 15%);
  background-color: darken(green, 15%);
  background-color: scale(green, 15%);
}

// 字符串函数

// 数字函数

// list函数
// list.nth

// map函数

</style>
