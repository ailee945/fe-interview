<template>
  <p>子组件中本来的信息: {{ childInfo }}</p>
  <p>来自父组件中的信息: {{ msg }}</p>
  <button @click="handleClick">submit</button>
</template>

<script setup>
import { ref } from "vue";

const childInfo = ref("child");
defineProps({
  msg: String,
});
const emit = defineEmits(["logMsg"]);
function handleClick() {
  emit("logMsg", "子组件中的logMsgPara");
}
</script>

<style lang="scss" scoped></style>
