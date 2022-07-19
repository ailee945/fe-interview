/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 优先考虑深度优先遍历，记录节点层级，找出最大层级
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0;
  const dfs = (n, l) => {
    if (!n) return;
    if (!n.left && !n.right) {
      res = Math.max(res, l);
    }
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };
  dfs(root, 1);
  return res;
};

/**
 * 时间复杂度O(n)
 * 空间复杂度O(dfs) 递归形成函数调用堆栈dfs嵌套层级 O(logn)-O(n)
 */
