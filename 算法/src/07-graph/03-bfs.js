const graph = require("./01-graph");

const visited = new Set();
visited.add(2);
const q = [2];
while (q.length) {
  const head = q.shift();
  console.log(head);
  graph[head].forEach((c) => {
    if (!visited.has(c)) {
      q.push(c);
      visited.add(c);
    }
  });
}
