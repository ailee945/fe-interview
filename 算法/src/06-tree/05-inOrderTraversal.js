import { bt } from "./03-bt.js";

// 递归
const inOrderTraversal = (root) => {
  if (!root) return;
  root.left && inOrderTraversal(root.left);
  console.log(root.val);
  root.right && inOrderTraversal(root.right);
};

inOrderTraversal(bt);

// 函数调用堆栈
const inOrderTraversal1 = (root) => {
  if (!root) return;
  const stack = [];
  let p = root;

  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

inOrderTraversal1(bt)
