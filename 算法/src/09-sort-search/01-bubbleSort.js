Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }
};

const arr = [1, 3, 4, 6, 8, 9, 2];
arr.bubbleSort()
console.log(arr);

// 时间复杂度O(n^2)
