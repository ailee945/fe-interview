<template>
  <div class="p1"></div>
  <div class="p2"></div>
  <div class="p3"></div>
  <div class="p4"></div>
  <div class="p5"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
div {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 5px;
}
$colors: red green yellow skyblue black;
@each $color in $colors {
  $index: index($colors, $color);
  .p#{$index} {
    background-color: $color;
  }
}
</style>
