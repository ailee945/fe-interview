<template>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</template>

<script setup></script>

<style lang="scss" scoped>
%tri {
  width: 0;
  height: 0;
  display: inline-block;
}
// 实现三角形
@mixin triangle($direction: top, $size: 30px, $border-color: black) {
  border-width: $size;
  border-#{$direction}-width: 0;
  @if ($direction == top) {
    border-color: transparent transparent $border-color transparent;
    border-style: dashed dashed solid dashed;
  } @else if ($direction == right) {
    border-color: transparent transparent transparent $border-color;
    border-style: dashed dashed dashed solid;
  } @else if ($direction == bottom) {
    border-color: $border-color transparent transparent transparent;
    border-style: solid dashed dashed dashed;
  } @else if ($direction == left) {
    border-color: transparent $border-color transparent transparent;
    border-style: dashed solid dashed dashed;
  }
}

div:nth-of-type(1) {
  @extend %tri;
  @include triangle();
}
div:nth-of-type(2) {
  @extend %tri;
  @include triangle(right, 30px);
}
div:nth-of-type(3) {
  @extend %tri;
  @include triangle(bottom, 30px);
}
div:nth-of-type(4) {
  @extend %tri;
  @include triangle(left, 30px);
}
</style>
