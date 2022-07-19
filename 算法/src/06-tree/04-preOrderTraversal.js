import { bt } from "./03-bt.js";

// 递归
const preOrderTraversal = (root) => {
  if (!root) return;
  console.log(root.val);
  root.left && preOrderTraversal(root.left);
  root.right && preOrderTraversal(root.right);
};

preOrderTraversal(bt);

// 函数调用堆栈
const preOrderTraversal1 = (root) => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

preOrderTraversal1(bt);
