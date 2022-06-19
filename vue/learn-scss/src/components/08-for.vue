<template>
  <div class="p1"></div>
  <div class="p2"></div>
  <div class="p3"></div>
  <div class="p4"></div>
  <div class="p5"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
@for $i from 1 to 6 {
  .p#{$i} {
    width: 50px * $i;
    height: 50px;
    background-color: lighten(green, $i * 10%);
  }
}
</style>
