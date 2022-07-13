console.log("start");
var img = document.createElement("img");
// 或者 img = new Image()
img.onload = function () {
  console.log("需要执行的操作");
  // 取消绑定事件
  img.onload = null;
};
img.src = "/xxx.png";
console.log("end");
