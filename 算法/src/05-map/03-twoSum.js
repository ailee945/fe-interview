/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length;
  if (len < 2) return;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    const n = target - num;
    if (map.has(n)) {
      return [map.get(n), i];
    } else {
      map.set(num, i);
    }
  }
};

// 时间复杂度O(n)
// 空间复杂度O(n)