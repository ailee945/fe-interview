<template>
  <div class="div">
    你好
    <p class="p">占位符选择器</p>
  </div>
</template>

<script setup></script>

<!-- <style scoped>
/* 原生css变量方法 */
.p {
  --text-color: green;
}
.p {
  color: var(--text-color);
}
</style> -->
<style lang="scss" scoped>

// 变量类型:
// 1. 数字 700 30px
// 2. 字符串
// 3. 布尔值
// 4. null
// 5. 数组
// 6. map

// 全局变量
$color: red;

.div {
  color: $color;
  // 局部变量
  $font-size: 30px;
  .p {
    font-size: $font-size;
  }
}
</style>
