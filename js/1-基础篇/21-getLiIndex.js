const liEls = document.querySelectorAll("li");
const ulEl = document.querySelector("ul");

// let方法
// for (let i = 0; i < liEls.length; i++) {
//   liEls[i].onclick = () => {
//     alert(`click${i + 1}li`);
//   };
// }

// 单独的参数保存i
// for (var i = 0; i < liEls.length; i++) {
//   liEls[i].index = i;
//   liEls[i].onclick = function () {
//     alert(this.index + 1);
//   };
// }

// var + 闭包
// for (var i = 0; i < liEls.length; i++) {
//   liEls[i].onclick = (function (a) {
//     return function () {
//       alert(a + 1);
//     };
//   })(i);
// }

// DOM监听是异步的
// for (var i = 0; i < liEls.length; i++) {
//   liEls[i].onclick = function () {
//     alert(i + 1);
//   };
// }

// 事件委托
ulEl.addEventListener("click", (e) => {
  console.log(e);
});
