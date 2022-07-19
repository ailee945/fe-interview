Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    let j = i;
    const temp = this[i];
    while (j > 0) {
      if (this[j-1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j--;
    }
    this[j] = temp;
  }
};

const arr = [3, 1, 4, 6, 2, 9, 8];
arr.insertionSort();
console.log(arr);

// 时间复杂度O(n^2)
