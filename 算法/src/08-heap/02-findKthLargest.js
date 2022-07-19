class MinHeap {
  constructor() {
    this.heap = [];
  }
  // 交换位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  // 父节点索引值
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  // 左右侧子节点的索引值
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  // 向上移动
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      // 迭代继续上移
      this.shiftUp(parentIndex);
    }
  }
  // 向下移动
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  // 插入
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  // 获取堆顶
  peak() {
    return this.heap[0];
  }
  // 获取堆的大小
  size() {
    return this.heap.length;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MinHeap();
  nums.forEach((n) => {
    heap.insert(n);
    if (heap.size() > k) {
      heap.pop();
    }
  });
  return heap.peak();
};

// 时间复杂度O(n*logk)
// 空间复杂度O(k)


const nums = [3, 2, 1, 5, 6, 4];
const k = findKthLargest(nums,2)
console.log(k);