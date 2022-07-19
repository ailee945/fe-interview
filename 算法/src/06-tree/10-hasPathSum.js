/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 深度优先遍历
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let res = false;
  const dfs = (n, sum) => {
    if (!n.left && !n.right && sum === targetSum) {
      res = true;
    }
    n.left && dfs(n.left, sum + n.left.val);
    n.right && dfs(n.right, sum + n.right.val);
  };
  dfs(root, root.val);
  return res;
};

// 时间复杂度O(n)
// 空间复杂度O(n)
