<template>
  <input type="text" v-model="query" />
  <h2>子组件:{{query}}</h2>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue'])
const props = defineProps({modelValue:{
  type:String
}})

const query = computed({
  get(){
    return props.modelValue
  },
  set(newValue){
    emit('update:modelValue',newValue)
  }
})
</script>

<style lang="scss" scoped></style>
