const set = new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]);
console.log(set);

// 遍历
set.forEach((item) => {
  console.log(item);
});
for (const item of set) {
  console.log(item);
}

console.log(set.values());
console.log(set.keys());
console.log(set.entries());
