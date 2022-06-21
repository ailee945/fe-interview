<template>
  <VModel v-model="query" />
  <h2>query:{{query}}</h2>
</template>

<script setup>
import { ref } from "vue";
import VModel from "./VModel.vue";

const query = ref('')
</script>

<style lang="scss" scoped></style>
