Array.prototype.findN = function (n) {
  let low = 0;
  let high = this.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const tem = this[mid];
    if (tem > n) {
      high = mid - 1;
    } else if (tem < n) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.findN(6));
console.log(arr.findN(26));
