<template>
  <div class="div">
    <div class="p">占位符选择器</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
// 混入指令
//指定默认值
// @mixin padding($top, $right, $bottom, $left) {
@mixin padding($top: 30px, $right, $bottom, $left) {
  padding-top: $top;
  padding-right: $right;
  padding-bottom: $bottom;
  padding-left: $left;
}
// 以使用参数变量 … 声明; 告诉 Sass 将这些参数视为值列表处理
@mixin linear-gradients($direction,$gradients...){
  background-image: linear-gradient($direction,$gradients)
}
.div {
  @include padding(5px, 6px, 7px, 8px);
  border: 1px solid red;
  background-color: aqua;
  .p {
    @include padding($left: 5px, $bottom: 6px, $right: 7px);
    border: 1px solid red;
    @include linear-gradients(0.25turn, #3f87a6, #ebf8e1, #f69d3c)
  }
}
</style>
