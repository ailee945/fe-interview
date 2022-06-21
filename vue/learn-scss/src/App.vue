<!-- <template>
  <IndexItem />
</template>

<script setup>
import IndexItem from "./components/IndexItem.vue";
</script>

<style lang="scss" scoped></style> -->
<template>
  <div id="app">
    <h1>购物车</h1>
    <hr />
    <h2>商品列表</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script setup>
import ProductList from "./shopping-cart/ProductList.vue";
import ShoppingCart from "./shopping-cart/ShoppingCart.vue";
</script>
