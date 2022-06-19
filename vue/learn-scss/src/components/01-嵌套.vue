<template>
  <div class="div">
    你好
    <p class="p">占位符选择器</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$color: green;
%base {
  color: black;
}

.div {
  // 嵌套规则
  // 选择器嵌套
  // 父选择器 &
  // 属性嵌套
  color: $color;
  font: {
    size: 30px;
  }
  // 占位符选择器
  .p {
    @extend %base;
  }
}
</style>
