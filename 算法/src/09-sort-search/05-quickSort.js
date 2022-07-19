Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec[left], mid, ...rec[right]];
  };
};

const arr = [3, 1, 4, 6, 2, 9, 8];
arr.quickSort();
console.log(arr);

// 时间复杂度O(n*logn)
// 分区复杂度O(n)
// 递归复杂度O(logn)
