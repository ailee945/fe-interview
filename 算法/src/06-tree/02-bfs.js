// 广度优先遍历
const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const bfs = (root) => {
  const q = [root];
  while (q.length) {
    const n = q.shift();
    console.log(n.val);
    // 每次都是队头的children入队
    n.children.forEach((child) => {
      q.push(child);
    });
  }
};

bfs(tree);
