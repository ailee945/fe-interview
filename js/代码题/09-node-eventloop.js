setTimeout(function () {
  console.log(1);
}, 0);
new Promise(function (resolve) {
  console.log(2);
  resolve();
}).then(function () {
  console.log(3);
});
process.nextTick(function () {
  console.log(4);
});
console.log(5);

// 执行环境为 node
// 2 5 4 3 1