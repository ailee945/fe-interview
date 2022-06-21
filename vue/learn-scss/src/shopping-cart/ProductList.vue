<template>
  <ul>
    <li v-for="item in productStore.all">
      <span>{{ item.title }}-{{ item.price }}</span>
      <br />
      <button :disabled="!item.inventory" @click="handleClick(item)">
        添加到购物车
      </button>
    </li>
  </ul>
</template>

<script setup>
import { useProductStore } from "../store/products";
import { useCartStore } from "../store/cart";

const productStore = useProductStore();
const cartStore = useCartStore();

// 加载所有数据
productStore.loadAllProducts();

// 加入购物车
const handleClick = (product) => {
  cartStore.addProductToCart(product);
};
</script>

<style lang="scss" scoped></style>
