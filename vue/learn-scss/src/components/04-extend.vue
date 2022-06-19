<template>
  <div class="alert-success">成功</div>
  <div class="alert-warning">警告</div>
  <div class="alert-danger">危险</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.alert {
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #999;
  border-color: #999;
  text-align: center;
}
.important {
  font: {
    size: 20px;
    weight: 700;
  }
}
.alert-success {
  // 支持多继承
  // 继承可以嵌套
  @extend .alert;
  @extend .important;
  background-color: #31708f;
}
.alert-warning {
  @extend .alert;
  background-color: orange;
}
.alert-danger {
  @extend .alert;
  background-color: red;
}
</style>
