Array.prototype.selectionSort = function () {
  for (let j = 0; j < this.length - 1; j++) {
    let minIndex = j;
    for (let i = j; i < this.length; i++) {
      if (this[i] < this[minIndex]) {
        minIndex = i;
      }
    }
    // 解构语法
    if(minIndex!==j) [this[minIndex], this[j]] = [this[j], this[minIndex]];
  }
};

const arr = [3, 1, 4, 6, 8, 9, 2];
arr.selectionSort();
console.log(arr);

// 时间复杂度O(n^2)