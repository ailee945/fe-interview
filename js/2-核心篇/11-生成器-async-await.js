/**
 * function*
 * yield 只能在生成器内部使用
 */

// 生成器函数的返回值是一个生成器，生成器是一个特殊的迭代器

// 生成器替代迭代器对数组进行遍历

// yield* 依次迭代这个可迭代对象，每次迭代其中的一个值

// async和await是生成器的语法糖

// 基本使用
async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function asyncConsole(value, ms) {
  await timeout(ms);
  console.log(value);
}
asyncConsole("hello async and await", 1000);

var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1