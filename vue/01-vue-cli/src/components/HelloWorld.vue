<template>
  <h2>父组件</h2>
  <p>父组件中本来的信息info: {{ info }}</p>
  <p>来自子组件中的信息:{{}}</p>
  <h2>子组件</h2>
  <Child msg="info" @logMsg="handleLogMsg"></Child>
</template>

<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const info = ref("parentInfo");

function handleLogMsg(par) {
  console.log(par);
}
</script>

<style scoped></style>
