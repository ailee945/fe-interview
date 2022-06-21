import { defineStore } from "pinia";

export const useMain = defineStore("main", {
  state: () => ({
    n1: 1,
    n2: 2,
  }),
  getters: {
    getDoubleN1() {
      return this.n1 * 2;
      // return state.n2 * 3
    },
    getTrippleN2(state) {
      return state.n2 *3
    },
  },
  actions: {
    changeData() {
      this.n1++;
      this.n2++;
    },
  },
});
