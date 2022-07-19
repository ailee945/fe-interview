/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const tree = {
  val:3,
  left:9,
  right:{
    val:20,
    legt:15,
    right:7
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder1 = function (root) {
  const ret = [];
  if (!root) {
    return ret;
  }
  const q = [];
  q.push(root);
  while (q.length) {
    const currentLevelSize = q.length;
    ret.push([]);
    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = q.shift();
      ret[ret.length - 1].push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return ret;
};

var levelOrder2 = function (root) {
  if (!root) return [];
  const q = [[root, 0]];
  const res = [];
  while (q.length) {
    const [n, level] = q.shift();
    if (!res[level]) {
      res.push([n.val]);
    } else {
      res[level].push(n.val);
    }
    if (n.left) q.push([n.left, level + 1]);
    if (n.rigth) q.push([n.right, level + 1]);
  }
  return res;
};

console.log(levelOrder2(tree));

// 时间复杂度O(n)
// 空间复杂度O(n)
