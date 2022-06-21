<template>
  <div class="cart">
    <h2>你的购物车</h2>
    <p>
      <i>添加商品到购物车</i>
    </p>
    <ul>
      <li v-for="item in cartStore.cartProducts">
        {{ item.title }}:{{ item.price }}*{{ item.amount }}
      </li>
    </ul>
    <p>商品总价:{{ cartStore.totalPrice }}</p>
    <p><button @click="checkout">结算</button></p>
    <p v-show="cartStore.checkoutStatus">
      结算状态:{{ cartStore.checkoutStatus }}
    </p>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();

// 结算
const checkout = () => {
  cartStore.checkout();
};
</script>

<style lang="scss" scoped></style>
