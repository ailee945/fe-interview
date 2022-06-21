<template>
  <h2>n1:{{ mainStore.n1 }}</h2>
  <h2>doubleN1:{{ mainStore.getDoubleN1 }}</h2>
  <h2>n2:{{ mainStore.n2 }}</h2>
  <h2>trippleN2:{{ mainStore.getTrippleN2 }}</h2>
  <button @click="clickChange">change</button>
</template>

<script setup>
import { useMain } from "../store/main";

const mainStore = useMain();
function clickChange() {
  //   // 写法一
  //   // mainStore.$patch((state) => {
  //   //   state.n1++;
  //   //   state.n2++;
  //   // });

  //   // 写法二
  //   mainStore.n1++;
  //   mainStore.n2++;

  //   // 写法三
  mainStore.changeData();
}
</script>

<style lang="scss" scoped></style>
