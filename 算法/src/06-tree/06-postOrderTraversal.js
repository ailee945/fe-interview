import { bt } from "./03-bt.js";

// 递归
const postOrderTraversal = (root) => {
  if (!root) return;
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.val);
};
postOrderTraversal(bt);

// 函数调用堆栈
const postOrderTraversal1 = (root) => {
  if (!root) return;
  const outputStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
};

postOrderTraversal1(bt)
