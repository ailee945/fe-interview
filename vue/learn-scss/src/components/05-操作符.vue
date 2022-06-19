<template>
  <div class="alert-success">成功</div>
  <div class="alert-warning" style="background-color: burlywood">警告</div>
  <div class="alert-danger">危险</div>
</template>

<script setup></script>

<style lang="scss" scoped>
/**
  注意：
  1. % 与 单位 不能进行运算
  2. 单位之间会进行转换
*/

// 等号运算符
// ==等于 !=不等于

// 关系运算符
// 大于 小于 大于等于 小于等于

// 逻辑运算符
// and逻辑与 or逻辑或 not逻辑非

// 数字(纯数字、百分号、部分css单位)操作符号
// + -
div {
  margin: auto;
  text-align: center;
  background-color: aqua;
  width: 100 + 100px;
  height: 100px;
}
// / 以下情况，/ 会被当作除号
// 1. 如果值或值的一部分，是变量或者函数的返回值 ( $width / 2 )
// 2. 值被圆括号包裹 (5 / 2)
// 3. 值是算术表达式的一部分 3 + 5 / 2
</style>
