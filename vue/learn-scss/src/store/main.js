import { defineStore } from "pinia";

export const useMain = defineStore('main',{
  state: () => ({
    n1: 1,
    n2: 2,
  }),
  getters: {},
  actions: {
    changeData() {
      this.n1++;
      this.n2++;
    },
  },
});
