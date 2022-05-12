/**
 * 冒泡排序
 * 不考虑边界条件判断
 * 时间复杂度O(n*n)
 */

Array.prototype.bubbleSort = function () {
  let len = this.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [this[i], this[j]] = [this[j], this[i]];
      }
    }
  }
};

const arr = [2, 4, 6, 3];
arr.bubbleSort();
console.log(arr);
