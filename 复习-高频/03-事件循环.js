// 浏览器中的事件循环

// 微任务microtask（jobs）
// Promise.then()

// 宏任务macrotask（task）
// setTimeout

// Node中的事件循环
// next tick microtask queue: process.nextTick
// other microtask queue: Promise.then(); queueMicroTask()
// timer queue: setTimeout(); setTimeInterval
// poll queue: IO事件
// pcheck queue: setImmediate()
// pclose queue: close事件

// setTimeout(() => {
//   console.log("timer1");

//   Promise.resolve().then(function () {
//     console.log("promise1");
//   });
// }, 0);

// setTimeout(() => {
//   console.log("timer2");

//   Promise.resolve().then(function () {
//     console.log("promise2");
//   });
// }, 0);

// 以上代码在浏览器和 node 中打印情况是不同的
// 浏览器中一定打印 timer1, promise1, timer2, promise2
// node 中可能打印 timer1, timer2, promise1, promise2
// 也可能打印 timer1, promise1, timer2, promise2

setTimeout(() => {
  console.log("setTimeout");
}, 0);
setImmediate(() => {
  console.log("setImmediate");
});
// 这里可能会输出 setTimeout，setImmediate
// 可能也会相反的输出，这取决于性能
// 因为可能进入 event loop 用了不到 1 毫秒，这时候会执行 setImmediate
// 否则会执行 setTimeout
