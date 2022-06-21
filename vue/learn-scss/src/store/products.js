import { defineStore } from "pinia";
import { getProducts, buyProducts } from "../shopping-cart/api-shop";

export const useProductStore = defineStore("products", {
  state: () => {
    return {
      all: [], // 所有商品列表
    };
  },
  getters: {},
  actions: {
    // 获取所有商品
    async loadAllProducts(state) {
      const res = await getProducts();
      this.all = res;
    },
    // 减库存
    decrementInventory(product) {
      const res = this.all.find((item) => item.id === product.id);
      if (res) product.inventory--;
    },
  },
});
