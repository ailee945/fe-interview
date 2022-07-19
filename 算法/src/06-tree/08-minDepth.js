/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 求最小深度优先使用广度优先遍历
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  const q = [[root, 1]];
  while (q.length) {
    const [n, l] = q.shift();
    if (!n.left && !n.right) return l;
    n.left && q.push([n.left, l + 1]);
    n.right && q.push([n.right, l + 1]);
  }
};

// 空间复杂度O(n)
// 时间复杂度O(n)
