// 前提：有序数组

Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const element = this[mid];
    if (item > element) {
      low = mid + 1;
    } else if (item < element) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6];
const res = arr.binarySearch(11);

// 时间复杂度O(logn)
