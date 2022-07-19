/**
 * 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Map();
  nums1.forEach((n) => {
    map.set(n, true);
  });
  const res = [];
  nums2.forEach((n) => {
    if (map.has(n)) {
      res.push(n);
      map.delete(n);
    }
  });
  return res;
};

// 时间复杂度O(m+n)
// 空间复杂度O(m)
