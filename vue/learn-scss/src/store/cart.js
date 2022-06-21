import { defineStore } from "pinia";
import { useProductStore } from "./products";
import { getProducts, buyProducts } from "../shopping-cart/api-shop";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cartProducts: [], // 所有商品列表
      checkoutStatus: null,
    };
  },
  getters: {
    totalPrice() {
      return this.cartProducts
        .reduce((total, item) => total + item.price * item.amount, 0)
        .toFixed(2);
    },
  },
  actions: {
    // 添加到购物车
    addProductToCart(product) {
      // 商品有没有库存
      if (product.inventory < 1) return;
      // 购物车中有该商品
      const cartItem = this.cartProducts.find((item) => {
        return item.id === product.id;
      });
      if (cartItem) {
        cartItem.amount++;
      } else {
        // 购物车中没有该商品
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          amount: 1,
        });
      }
      // 更新商品的库存
      const productStore = useProductStore();
      productStore.decrementInventory(product);
    },

    // 结算
    async checkout() {
      const res = await buyProducts();
      this.checkoutStatus = res ? "成功" : "失败";
    },
  },
});
