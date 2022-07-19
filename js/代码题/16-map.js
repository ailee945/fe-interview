const map = new Map();
map.set("name", "zhang");
map.set("age", 18);
console.log(map);
console.log(map.values());

const obj = { name: "zhang", age: 17 };

// 遍历
for (const item of map.keys()) {
  console.log(map.get(item));
}
for (const item of map.values()) {
  console.log(item);
}
console.log(map.entries());